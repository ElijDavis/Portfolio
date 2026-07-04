/*'use client'

import { Max2Max } from "@/lib/api";
import { useEffect, useState } from "react";

const AlgorithmsPage = () => {
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    Max2Max("10,60,3,46,26,1098,5,9,27,193,7").then((result) => {
      // Adjust this depending on the structure of Max2ndMax
      setAnswer(JSON.stringify(result));
    });
  }, []);

  return (
    <div>
      <div className="w-1 h-40 bg-blue">{answer}</div>
      <div className="w-40 h-40 bg-green"></div>
      <div className="w-40 h-10 bg-red"></div>
    </div>
  );
}

export default AlgorithmsPage;*/
'use client'

import { Max2Max } from "@/lib/api";
import { useEffect, useState } from "react";

// Match the shape returned from the Java API
type Max2ndMax = {
  max: number;
  max2nd: number;
};

const AlgorithmsPage = () => {
  const [answer, setAnswer] = useState<Max2ndMax | null>(null);

  useEffect(() => {
    Max2Max("10,60,3,46,26,1098,5,9,27,193,7")
      .then((result) => {
        setAnswer(result); // set actual object, not JSON string
      })
      .catch((error) => {
        console.error("Failed to fetch data from Java API:", error);
      });
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Max and Second Max Result</h1>

      {answer ? (
        <div className="p-4 bg-blue-100 text-black rounded shadow">
          <p><strong>Max:</strong> {answer.max}</p>
          <p><strong>Second Max:</strong> {answer.max2nd}</p>
        </div>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}

      {/* Decorative divs from your original layout */}
      <div className="w-40 h-40 bg-green" />
      <div className="w-40 h-10 bg-red" />
    </div>
  );
};

export default AlgorithmsPage;
