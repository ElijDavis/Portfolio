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

//When using the count_ function to find the number of occurrences of a double in a list
//the input should be a string of comma-separated numbers, e.g. "1,2,3,4,5", and the number to count will be added at the end of the string.

//For the union function make sure to provide two lists of comma-separated numbers, e.g. "1,2,3" and "4,5,6". They will then be combined and 
//separated by a colon for the get request