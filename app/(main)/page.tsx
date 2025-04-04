import Link from "next/link";
import FaqItem from "@/components/FaqItem";
import Accelerate from "@/components/Accelerate";
const page = () => {
  return (
    <>
      <main className="nk-pages">
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-9 px-xxl-5">
                  <h2 className="title h1">Enhance Your Job Search with AI</h2>
                  <p className="lead">
                    Get actionable insights, improve your resume, and increase
                    your chances of landing the right job.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
                <div className="row g-gs">
                  <div className="col-md-6 col-xl-4">
                    <div className="card rounded-4 border-0 h-100 bg-gradient-light">
                      <div className="card-body">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-success bg-success bg-opacity-20 rounded-3">
                              <em className="icon ni ni-users" />
                            </div>
                          </div>
                          <div className="feature-text">
                            <h4 className="title">
                              AI-Powered Resume Analysis
                            </h4>
                            <p>
                              Description → Upload your resume and get an
                              instant job match score based on your skills and
                              experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card rounded-4 border-0 h-100 bg-gradient-light">
                      <div className="card-body">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-info bg-info bg-opacity-20 rounded-3">
                              <em className="icon ni ni-book" />
                            </div>
                          </div>
                          <div className="feature-text">
                            <h4 className="title">
                              Personalized Improvement Suggestions
                            </h4>
                            <p>
                              Receive AI-driven feedback to improve your resume
                              and increase your job application success rate.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card rounded-4 border-0 h-100 bg-gradient-light">
                      <div className="card-body">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-danger bg-danger bg-opacity-20 rounded-3">
                              <em className="icon ni ni-clock" />
                            </div>
                          </div>
                          <div className="feature-text">
                            <h4 className="title">
                              Save Time with Smart Insights
                            </h4>
                            <p>
                              Quickly identify strengths and areas for
                              improvement without having to guess.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-9 px-xxl-5">
                  <h2 className="title h1">
                    Optimize Your Resume in 3 Simple Steps
                  </h2>
                  <p className="lead">
                    Follow these easy steps to get AI-powered feedback and
                    improve your job application success.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center flex-md-row-reverse align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="rounded-4 bg-info bg-opacity-50 p-5 pe-0">
                    <div className="block-gfx me-n4">
                      <img
                        className="w-100 rounded-3 shadow-sm"
                        src="assets/images/step1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="block-text">
                    <div className="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      01
                    </div>
                    <h3 className="title">Upload Your Resume</h3>
                    <p>
                      Upload your resume, and our AI will analyze its content to
                      assess its strength.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sction-sap text-center py-3 d-none d-md-block">
              <svg
                className="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M442.989 1C443.49 18.4197 426.571 53.2592 354.892 53.2591C265.293 53.2591 126.139 53.2591 80.0875 53.2591C34.0366 53.2591 7.00663 85.784 0.999979 111"
                  stroke="currentColor"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className="h-3rem d-md-none" />
            <div className="section-content">
              <div className="row g-gs justify-content-center align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="rounded-4 bg-primary bg-opacity-40 p-5 ps-0">
                    <div className="block-gfx ms-n4">
                      <img
                        className="w-100 rounded-3 shadow-sm"
                        src="assets/images/step2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="block-text px-xxl-5">
                    <div className="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      02
                    </div>
                    <h3 className="title">Get Your Match Score</h3>
                    <p>
                      Our system compares your resume against job descriptions
                      and provides a score based on relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sction-sap text-center py-3 d-none d-md-block">
              <svg
                className="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.01068 1C0.510125 18.7364 17.4289 54.2093 89.1082 54.2093C178.707 54.2093 317.861 54.2093 363.912 54.2093C409.963 54.2093 436.993 87.3256 443 113"
                  stroke="currentColor"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className="h-3rem d-md-none" />
            <div className="section-content">
              <div className="row g-gs justify-content-center flex-md-row-reverse align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="rounded-4 bg-pink bg-opacity-30 p-5 pe-0">
                    <div className="block-gfx me-n4">
                      <img
                        className="w-100 rounded-3 shadow-sm"
                        src="assets/images/step3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="block-text">
                    <div className="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      03
                    </div>
                    <h3 className="title">Improve with AI Suggestions</h3>
                    <p>
                      Receive actionable feedback to enhance your resume, making
                      it more appealing to recruiters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Accelerate />
        <section className="section section-lg has-shape">
          <div className="nk-shape bg-shape-border-e ms-n25p mt-2 start-50 translate-middle-x" />
          <div className="container">
            {/* <div className="nk-shape bg-shape-wormhole-a ms-2 start-50  translate-middle-x" /> */}

            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-7 col-xxl-8">
                  <h2 className="title h1">Questions &amp; Answers</h2>
                  <p className="lead px-lg-10 px-xxl-9">
                    Find answers to common questions and learn how to make the
                    most out of our AI-powered resume matching tool.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xl-9 col-xxl-8">
                  <div className="accordion accordion-separated" id="faq-1">
                    <FaqItem
                      defaultOpen={true}
                      question={"What is this platform about?"}
                      answer={
                        "This platform helps you improve your job applications by comparing your resume with job descriptions, offering a match score, and providing personalized suggestions to enhance your resume."
                      }
                    />
                    <FaqItem
                      question={"How can I benefit from this platform?"}
                      answer={
                        "Upload your resume and get an AI-generated match score and feedback that will guide you in optimizing your resume for the best chances of landing your dream job."
                      }
                    />
                    <FaqItem
                      question={
                        "Do I need to sign up or pay to use this platform?"
                      }
                      answer={
                        "No sign-up or payment is required. You can use the platform for free and get instant feedback without any hassle."
                      }
                    />
                    <FaqItem
                      question={"Will there be more features in the future?"}
                      answer={
                        "Yes! We're always working on new features, including improved matching algorithms and even more personalized recommendations, to help you with your job applications."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
