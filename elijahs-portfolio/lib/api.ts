// lib/api.ts
export type Max2ndMax = {
  max: number;
  max2nd: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function Max2Max(input: string): Promise<Max2ndMax> {
  const res = await fetch(`${API_BASE}/api/problem1/run-json?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}