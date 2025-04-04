import { scanHelper } from "@/lib/scanHelper";

export async function POST(req) {
  const body = await req.json();
  const { resumeText, jobDescription } = body;

  if (!resumeText || !jobDescription) {
    return new Response(JSON.stringify({ message: "Missing input" }), {
      status: 400,
    });
  }

  const matchRate = scanHelper(resumeText, jobDescription);
  return new Response(JSON.stringify({ matchRate }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
