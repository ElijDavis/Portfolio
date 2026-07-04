// lib/def.ts

export type DFSGraph = {
    startvertex:number;
    graph: Graph;
}

export type CGragh = {
  n: number;
  edges: number[][];
  labels: number[];
};

export type Max2ndMax = {
  max: number;
  max2nd: number;
};

export type Graph = {
  edges: number[][];
  labels: number[];
  adjlist: number[][];
};