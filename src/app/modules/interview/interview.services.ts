import { generateQuestions } from "../../../helpers/generateQuestions";

const createInterviewInDB = async (interviewData: any) => {
  // console.log("Creating interview in DB with data:", interviewData);
  const { jobPosition, jobDescription, interviewDuration, interviewType } =
    interviewData;
  const prompt = `
You are an experienced interviewer preparing questions for a candidate.

Job Title: ${jobPosition}
Job Description: ${jobDescription}
Interview Duration: ${interviewDuration} minutes
Interview Type: ${interviewType}

🎯 Your task:
Generate a well-structured set of interview questions suitable for this role and type of interview. Ensure the questions:
- Align with the job description and responsibilities
- Fit within a ${interviewDuration}-minute ${interviewType} interview
- Vary in difficulty if appropriate (easy, medium, hard)
- Encourage critical thinking and reflect the candidate’s practical abilities

📦 Output Format:
Return the questions as a JSON array of objects in the following format:

\`\`\`json
[
  {
    "question": "What is React, and how does it work?",
    "difficulty": "easy",
    "category": "technical"
  },
  {
    "question": "How do you approach optimizing the performance of a web application?",
    "difficulty": "medium",
    "category": "technical"
  }
]
\`\`\`

Only output the JSON array. Do not include any extra text or explanation.
  `;
  const generatedQuestions = await generateQuestions(prompt);
  return generatedQuestions;
};
export const InterviewServices = {
  createInterviewInDB,
};
