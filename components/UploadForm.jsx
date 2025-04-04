"use client";

import { useState } from "react";
import axios from "axios";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const extractText = async (file) => {
    const fileExt = file.name.split(".").pop().toLowerCase();

    if (fileExt === "txt") {
      return await file.text();
    }

    if (fileExt === "pdf") {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let text = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item) => item.str).join(" ") + " ";
      }
      return text;
    }

    if (fileExt === "docx") {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      return result.value;
    }

    throw new Error("Unsupported file type");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const resumeText = await extractText(file);

      const res = await axios.post("/api/scan", {
        resumeText,
        jobDescription,
      });

      alert(`Match Rate: ${res.data.matchRate}%`);
    } catch (error) {
      console.error(error);
      alert("Failed to extract or upload file.");
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste job description"
        rows={4}
        required
      />
      <button type="submit">Scan Resume</button>
    </form>
  );
}
