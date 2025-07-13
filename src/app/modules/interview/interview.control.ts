import { status } from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { InterviewServices } from "./interview.services";

const createInterview = catchAsync(async (req, res) => {
  const interviewData = req.body;
  const result = await InterviewServices.createInterviewInDB(interviewData);
  sendResponse(res, {
    message: "Interview created successfully",
    statusCode: status.CREATED,
    data: result,
    success: true,
  });
});

export const InterviewControlers = {
  createInterview,
};
