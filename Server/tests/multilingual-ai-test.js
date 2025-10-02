// Test file for multilingual and AI features
import fetch from 'node-fetch';

const API_URL = 'http://localhost:5000/api';

// Test language detection
async function testLanguageDetection() {
  console.log('\n--- Testing Language Detection ---');
  
  const texts = [
    { text: 'Hello, how are you?', expected: 'en' },
    { text: 'Hola, ¿cómo estás?', expected: 'es' },
    { text: 'नमस्ते, आप कैसे हैं?', expected: 'hi' }
  ];
  
  for (const item of texts) {
    try {
      const response = await fetch(`${API_URL}/language/detect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: item.text })
      });
      
      const data = await response.json();
      console.log(`Text: "${item.text}"`);
      console.log(`Detected: ${data.language}, Expected: ${item.expected}`);
      console.log(`Success: ${data.language === item.expected ? 'Yes ✅' : 'No ❌'}`);
    } catch (error) {
      console.error(`Error testing language detection: ${error.message}`);
    }
  }
}

// Test translation
async function testTranslation() {
  console.log('\n--- Testing Translation ---');
  
  const translations = [
    { text: 'Welcome to our monastery', targetLanguage: 'es' },
    { text: 'The tour starts at 10 AM', targetLanguage: 'fr' },
    { text: 'Please book your tickets online', targetLanguage: 'de' }
  ];
  
  for (const item of translations) {
    try {
      const response = await fetch(`${API_URL}/language/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: item.text, 
          targetLanguage: item.targetLanguage,
          sourceLanguage: 'en'
        })
      });
      
      const data = await response.json();
      console.log(`Original (en): "${item.text}"`);
      console.log(`Translated (${item.targetLanguage}): "${data.translatedText}"`);
      console.log(`Success: ${data.success ? 'Yes ✅' : 'No ❌'}`);
    } catch (error) {
      console.error(`Error testing translation: ${error.message}`);
    }
  }
}

// Test chatbot
async function testChatbot() {
  console.log('\n--- Testing AI Chatbot ---');
  
  const queries = [
    { query: 'Tell me about Rumtek Monastery', language: 'en' },
    { query: '¿Cuáles son los horarios de visita?', language: 'es' },
    { query: 'Wie komme ich zum Kloster?', language: 'de' }
  ];
  
  for (const item of queries) {
    try {
      const response = await fetch(`${API_URL}/chatbot/query`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept-Language': item.language
        },
        body: JSON.stringify({ query: item.query })
      });
      
      const data = await response.json();
      console.log(`Query (${item.language}): "${item.query}"`);
      console.log(`Response: "${data.response}"`);
      console.log(`Success: ${data.success ? 'Yes ✅' : 'No ❌'}`);
    } catch (error) {
      console.error(`Error testing chatbot: ${error.message}`);
    }
  }
}

// Run all tests
async function runTests() {
  console.log('=== MULTILINGUAL AND AI FEATURES TEST ===');
  
  await testLanguageDetection();
  await testTranslation();
  await testChatbot();
  
  console.log('\n=== TEST COMPLETE ===');
}

// Execute tests
runTests().catch(error => {
  console.error('Test execution failed:', error);
});