import OpenAI from "openai";
import config from "../config";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: config.open_ai_key as string,
});
type TGeneratedQuestion = {
  question: string;
  difficulty: string;
  category: string;
};
export const generateQuestions = async (
  prompt: string
): Promise<{ question: string; difficulty: string; category: string }[]> => {
  // console.log("Generating questions with prompt:", prompt);
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [{ role: "user", content: prompt }],
  });
  const result = extractJsonFromContent(
    completion.choices[0].message.content as string
  ) as TGeneratedQuestion[];
  if (!result || !Array.isArray(result)) {
    generateQuestions(prompt);
  }
  return result;
};
function extractJsonFromContent(content: string): TGeneratedQuestion[] | null {
  try {
    // Remove ```json or ``` wrappers if present
    const cleaned = content
      .replace(/^```json/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) return parsed;
    return null;
  } catch (err) {
    console.error("JSON parse error:", err);
    return null;
  }
}
