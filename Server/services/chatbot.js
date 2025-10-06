import { GoogleGenAI } from "@google/genai";
import { performWebsearch } from "./search.service.js";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const tools = [
    {
        name: "webSearch",
        description: "Search the web for up-to-date or location-specific information.",
        inputSchema: {
            type: "object",
            properties: {
                query: { type: "string" },
            },
            required: ["query"],
        },
    },
];
export const generateContent = async (query, context = "General writing assistance.", stream = false) => {
    try {
        const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const SEARCH_KEYWORDS = [
            "sikkim",
            "tourism",
            "culture",
            "monastery",
            "heritage",
            "statistics",
            "manuscript",
            "hotels",
            "food",
            "vr",
            "news",
            "current",
            "latest",
            "population",
            "demographics",
            "weather",
            "events",
            "festivals",
            "travel",
            "facts",
            "locations",
            "top",
            "famous",
            "ranking",
            "places",
            "landmarks",
            "historical",
            "information",
            "update",
            "research",
        ];

        const shouldSearch = (query) => {
            const lowerQuery = query.toLowerCase();
            return SEARCH_KEYWORDS.some((keyword) => lowerQuery.includes(keyword));
        };
        let searchResults = "";
        const isSearchNeeded = shouldSearch(query);

        if (isSearchNeeded) {
            console.log("\n[Info] Triggering web search...");
            const results = await performWebsearch(query);
            searchResults = `\n**Web Search Results:** ${JSON.stringify(results, null, 2)}\n`;
        }

        const prompt = `

        You are an expert AI Writing Assistant. Your primary purpose is to be a collaborative writing partner.

        **Your Core Capabilities:**
        - Content Creation, Improvement, Style Adaptation, Brainstorming, and Writing Coaching.
        - **Web Search**: You have the ability to search the web for up-to-date information using the 'webSearch' tool.
        - **Current Date**: Today's date is ${currentDate}. Please use this for any time-sensitive queries.

        **Special Rule for Monastery360:**
        - If the user asks about "Monastery360" or says "tell me about this website," always respond with the following description:

        "Monastery360 is a digital heritage platform dedicated to showcasing and preserving the spiritual and cultural richness of Sikkim’s monasteries. With over 200 monasteries dating back to the 17th and 18th centuries, Sikkim holds centuries of Buddhist history, art, and architecture that remain largely unexplored due to difficult terrain and limited accessibility. Monastery360 bridges this gap by offering immersive 360° virtual tours, AI-assisted exploration, and digital archives of manuscripts, murals, and rituals — all within a unified interactive platform.

        Powered by a modern tech stack, the platform’s frontend is built using React, Tailwind CSS, Three.js, Blender, and Unity to deliver high-quality 3D visualizations and smooth user experiences. The backend, developed with Node.js, Express, and Redis, ensures fast data handling and real-time performance, while MongoDB serves as the primary database for managing monastery information, cultural content, and user interactions.

        Monastery360 not only enhances tourism by providing virtual accessibility to remote monasteries but also contributes to heritage preservation, education, and community engagement by digitizing and sharing the living traditions of Sikkim’s monastic culture with the world."

        **Crucial Instructions:**
        1.  **ALWAYS use the 'webSearch' tool when the user asks for current information, news, or facts.** Your internal knowledge is outdated.
        2.  When you use the 'webSearch' tool, you will receive a JSON object with search results. **You MUST base your response on the information provided in that search result.** Do not rely on your pre-existing knowledge for topics that require current information.
        3.  If the query is about current events, statistics, locations, or cultural info, you MUST consider using the webSearch tool.
        4.  Synthesize the information from the web search to provide a comprehensive and accurate answer. Cite sources if the results include URLs.

        **Response Format:**
        - Be direct and production-ready.
        - Use clear formatting.
        - Never begin responses with phrases like "Here's the edit:", "Here are the changes:", or similar introductory statements.
        - Provide responses directly and professionally without unnecessary preambles.

        **Writing Context**: ${context || "General writing assistance."}

        Your goal is to provide accurate, current, and helpful written content. Failure to use web search for recent topics will result in an incorrect answer.
        
        User's Query: ${query} ${searchResults}
        `



        if (stream) {
            return ai.models.generateContentStream({
                model: "gemini-2.5-flash",
                contents: prompt,
                tools
            }); // async iterable
        } else {
            let fullResponse = "";
            const response = await ai.models.generateContentStream({
                model: "gemini-2.5-flash",
                contents: prompt,
                tools
            });

            for await (const chunk of response) {
                if (chunk.text) {
                    process.stdout.write(chunk.text);
                    fullResponse += chunk.text;
                };
            }
            return fullResponse;
        }
    } catch (error) {
        console.error("Error generating content:", error);
    }
}
