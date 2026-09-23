const configuredBase = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
const apiBase = configuredBase || (import.meta.env.DEV ? "http://localhost:3001" : "");

export function apiUrl(path) {
  if (!apiBase) {
    throw new Error("Online services are not configured. Please email us directly.");
  }
  return `${apiBase}/api/${path.replace(/^\/+/, "")}`;
}
