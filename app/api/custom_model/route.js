import { scanHelper } from "@/lib/scanHelper";

export async function POST(request) {
  const body = await request.json();
  const { resume, jobDescription } = body;

  if (!resume || !jobDescription) {
    return new Response(
      JSON.stringify({ error: "Missing resume or job description" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const similarityScore = scanHelper(resume, jobDescription);

  console.log("similarityScore: ", similarityScore);
  return new Response(JSON.stringify({ score: similarityScore }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
