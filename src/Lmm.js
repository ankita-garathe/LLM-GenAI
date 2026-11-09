import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "your api key",
});

async function main() {
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: "What is an array? Explain short.",
    });

    console.log(interaction.output_text);
  } catch (error) {
    console.log(error);
  }
}

main();