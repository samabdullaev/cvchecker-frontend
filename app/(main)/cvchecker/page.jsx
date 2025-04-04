"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import Result from "@/components/Result";
const Home = () => {
  useEffect(() => {
    document.title = "JobFit Analyzer";
  }, []);

  const acceptedFileFormats = [".docx", ".pdf"];
  const maxFileSizeInMB = 10;
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  // Helper function to convert file size to MB
  const convertToMB = (sizeInBytes) => {
    return (sizeInBytes / (1024 * 1024)).toFixed(3);
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!resumeFile) {
      setError("Please select a resume file.");
      return;
    }

    const fileName = resumeFile.name.toLowerCase();
    let typeOfFile = acceptedFileFormats.find((format) =>
      fileName.endsWith(format)
    );

    if (!typeOfFile) {
      setError("Invalid file format. Accepted formats: PDF, DOCX");
      return;
    }

    const fileSize = convertToMB(resumeFile.size);

    if (fileSize > maxFileSizeInMB) {
      setError(`File size must be less than ${maxFileSizeInMB}MB`);
      return;
    }

    setError("");
    setIsLoading(true);

    let formData = new FormData();
    formData.append("resumeFile", resumeFile);
    formData.append("jobDescription", jobDescription);
    formData.append("fileSize", fileSize);
    formData.append("fileType", typeOfFile);

    try {
      const response = await axios.post(
        "https://cvcheckerapi.vercel.app/api/v1/resumes/scan",
        formData
      );
      const data = response.data;
      setData(data);
      setShowResult(true);
    } catch (error) {
      setError("Error processing the request. Please try again later.");
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // File input change handler
  const handleResumeFileChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  // Job description input change handler
  const handleJobDescriptionChange = (event) => {
    const value = event.target.value;
    setJobDescription(value);
  };

  // Go back to the input form
  const handleGoBack = () => {
    setShowResult(false);
    setData({});
  };

  return (
    <>
      {showResult ? (
        <Result onGoBack={handleGoBack} {...data} />
      ) : (
        <div className="flex items-center justify-center mt-5 mx-0">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
            <form
              className="bg-white shadow-2xl p-5 rounded-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="font-bold mb-4 text-xl block text-center">
                  Upload Your Resume
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="block mb-2 p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                  name="uploadFile"
                  onChange={handleResumeFileChange}
                  required
                />
                <p className="text-gray-500 text-sm">
                  Accepted formats: PDF, DOCX
                </p>
                <p className="text-gray-500 text-sm">
                  Maximum file size: {maxFileSizeInMB}MB
                </p>
                <hr className="my-4" />
                <label className="font-bold mb-4 text-xl block text-center">
                  Job Description
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded border p-2"
                  placeholder="Provide a detailed job description..."
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                  required
                />
              </div>
              {error && (
                <h6 className="text-center mt-3 text-red-500">{error}</h6>
              )}
              <button
                className="w-full mt-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Start Comparison"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
