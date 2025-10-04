export const performWebsearch = async (query) => {
    const tavilyKey = process.env.TAVILY_API_KEY;

    if (tavilyKey) {
        try {
            const response = await fetch("https://api.tavily.com/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tavilyKey}`,
                },
                body: JSON.stringify({
                    query,
                    search_depth: "advanced",
                    max_results: 5,
                    include_answer: true,
                }),
            });

            if(response.ok){
                return await response.json();
            }
        } catch (error) {
            console.error( "Tavily error : ",error || "Tavily not configured correctly");
        }
    }

    try {
        const duckDuckGo = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);

        if(duckDuckGo.ok) return await duckDuckGo.json();
    } catch (error) {
        console.error( "DuckDuckGO error : ",error || "DuckDuckGo not configured correctly");
    }

    return {
        error : "No search results available"
    };
}