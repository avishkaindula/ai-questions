import OpenAI from "openai";
const openAi = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
  organization: process.env.NEXT_PUBLIC_OPEN_AI_ORG_ID,
});

const generateResponse = async (dto: any) => {
  console.log("Generating response with prompt:", dto.prompt);
  try {
    const completion = await openAi.chat.completions.create({
      messages: [
        {
          role: "system",
          content: dto.prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
};

export const GenerateService = {
  generateResponse,
};
