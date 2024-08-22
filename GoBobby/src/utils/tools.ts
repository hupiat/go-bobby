import { WorkflowStep } from "../engine/WorkflowStep";

export const isPlaying = (WorkflowStep: WorkflowStep) => WorkflowStep === "playing" || WorkflowStep === "playing_generative_model"; 