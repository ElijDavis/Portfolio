// lib/api.ts
import { Max2ndMax, CGragh, Graph, DFSGraph} from "./def";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

//2
export async function found(input: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/assignment2/problem1?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function count_(input: string): Promise<number> {
  const res = await fetch(`${API_BASE}/assignment2/problem2?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function sqrt(input: string): Promise<number> {
  const res = await fetch(`${API_BASE}/assignment2/problem3?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}


//3
export async function biggie(input: string): Promise<number> {
  const res = await fetch(`${API_BASE}/assignment3/problem1?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function Count_(input: string): Promise<number> {
  const res = await fetch(`${API_BASE}/assignment3/problem2?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}


//4
export async function Max2Max(input: string): Promise<Max2ndMax> {
  const res = await fetch(`${API_BASE}/api/assignment4/problem1?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}


//5
export async function union(input: string): Promise<number[]> {
  const res = await fetch(`${API_BASE}/assignment5/problem1/union?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function intersection(input: string): Promise<number[]> {
  const res = await fetch(`${API_BASE}/assignment5/problem1/intersection?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function threeWayP(input: string): Promise<number[]> {
  const res = await fetch(`${API_BASE}/assignment5/problem2?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}


//6
export async function ccreateGraph(input: CGragh): Promise<CGragh> {
  const res = await fetch(`${API_BASE}/api/assignment6/problem1/createGraph`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function cdfs(input: DFSGraph): Promise<String> {
  const res = await fetch(`${API_BASE}/api/assignment6/problem1/DFS`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

export async function AdjList(input: Graph): Promise<String> {
  const res = await fetch(`${API_BASE}/api/assignment6/problem1/getAdjacencyList`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("API call failed");
  return await res.json();
}

//all API calls should begin with the API_BASE variable and /api

//When using the count_ function to find the number of occurrences of a double in a list
//the input should be a string of comma-separated numbers, e.g. "1,2,3,4,5", and the number to count will be added at the end of the string.

//For the union function make sure to provide two lists of comma-separated numbers, e.g. "1,2,3" and "4,5,6". They will then be combined and 
//separated by a colon for the get request