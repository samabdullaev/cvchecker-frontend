import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

// Disable default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = new IncomingForm({
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), "/uploads"),
  });

  // Make sure uploads folder exists
  fs.mkdirSync(form.uploadDir, { recursive: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Upload error", err);
        reject(new Response("File upload failed", { status: 500 }));
      }

      const file = files.file[0]; // assumes field name is 'file'
      console.log("Uploaded file:", file.originalFilename);

      resolve(
        new Response(JSON.stringify({ filename: file.originalFilename }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
    });
  });
}
