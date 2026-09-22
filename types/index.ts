// ================================
// DevPilot AI - Shared Types
// ================================

// User
export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

// Chat
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: Date;
}

// Project
export interface Project {
  id: string;
  name: string;
  description?: string;
  language?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Code Generation
export interface CodeGenerationRequest {
  prompt: string;
  language?: string;
  framework?: string;
}

// Code Generation Response
export interface CodeGenerationResponse {
  code: string;
  language?: string;
  explanation?: string;
}

// Debug
export interface DebugRequest {
  code: string;
  language?: string;
  error?: string;
}

// Debug Response
export interface DebugResponse {
  fixedCode?: string;
  explanation: string;
  suggestions?: string[];
}

// Explanation
export interface ExplainRequest {
  code: string;
  language?: string;
}

// Explanation Response
export interface ExplainResponse {
  explanation: string;
  keyPoints?: string[];
}

// API Response
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}