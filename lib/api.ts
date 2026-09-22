import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

// ================================
// CHAT
// ================================

export const chatAPI = {
  sendMessage: async (message: string) => {
    const response = await api.post("/chat", {
      message,
    });

    return response.data;
  },
};

// ================================
// CODE GENERATION
// ================================

export const codeAPI = {
  generateCode: async (
    prompt: string,
    language: string = "javascript"
  ) => {
    const response = await api.post("/generate", {
      prompt,
      language,
    });

    return response.data;
  },
};

// ================================
// DEBUG
// ================================

export const debugAPI = {
  debugCode: async (
    code: string,
    language: string = "javascript",
    error: string = ""
  ) => {
    const response = await api.post("/debug", {
      code,
      language,
      error,
    });

    return response.data;
  },
};

// ================================
// EXPLAIN
// ================================

export const explainAPI = {
  explainCode: async (
    code: string,
    language: string = "javascript"
  ) => {
    const response = await api.post("/explain", {
      code,
      language,
    });

    return response.data;
  },
};

// ================================
// HISTORY
// ================================

export const historyAPI = {
  getHistory: async () => {
    const response = await api.get("/history");

    return response.data;
  },

  deleteHistory: async (id: string) => {
    const response = await api.delete(`/history/${id}`);

    return response.data;
  },
};

// ================================
// PROJECTS
// ================================

export const projectAPI = {
  getProjects: async () => {
    const response = await api.get("/projects");

    return response.data;
  },

  getProject: async (id: string) => {
    const response = await api.get(`/projects/${id}`);

    return response.data;
  },

  createProject: async (
    name: string,
    description: string = ""
  ) => {
    const response = await api.post("/projects", {
      name,
      description,
    });

    return response.data;
  },

  deleteProject: async (id: string) => {
    const response = await api.delete(`/projects/${id}`);

    return response.data;
  },
};

// ================================
// HEALTH CHECK
// ================================

export const healthAPI = {
  check: async () => {
    const response = await api.get("/health");

    return response.data;
  },
};

// ================================
// DEFAULT API
// ================================

export default api;