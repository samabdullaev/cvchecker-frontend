import Accelerate from "@/components/Accelerate";
import Link from "next/link";

const page = () => {
  return (
    <div className="nk-pages">
      <section className="section section-lg section-bottom-0 has-mask">
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
        <div className="container">
          <div className="section-head">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9 col-xl-9 px-xxl-5">
                <h2 className="title h1">About Us</h2>
                <p className="lead">
                  Welcome to Smart Resume Matcher – empowering job seekers with
                  AI-powered insights to enhance resumes and optimize job
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row g-gs justify-content-center">
              <div className="col-xxl-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="row align-items-center gx-4 gx-lg-5 gx-xl-6">
                      <div className="col-md-4 col-sm-6 col-8">
                        <div className="bg-gradient-primary rounded-3 p-2 bg-opacity-30">
                          <img
                            className="rounded-3"
                            src="https://media.licdn.com/dms/image/v2/D4E03AQEfyo2GBelwdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705604176454?e=1749081600&v=beta&t=-3bi9HfZFNabtPXohSiOAZT3UpyS1UpnrKkyWHyg-WQ"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="py-md-3 pt-3">
                          <blockquote className="blockquote">
                            I’m Sam Abdullaev, a final-year Computer Science
                            student, passionate about helping others navigate
                            their career paths in tech. Inspired by the success
                            of engineers who made it to top companies like
                            Google, I created this platform to help job seekers
                            improve their resumes and increase their chances of
                            landing their dream roles. Our platform offers
                            personalized AI-driven feedback to make your job
                            applications stand out.
                          </blockquote>
                          <div className="block-info pt-lg-4">
                            <h4 className="title">Sam Abdullaev</h4>
                            <div className="caption-text">
                              Software Engineer
                            </div>
                          </div>
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
                <h2 className="title h1">Our Story</h2>
                <p className="lead">
                  Learn how Smart Resume Matcher was created to help job seekers
                  refine their resumes and improve their chances of landing
                  their dream jobs.
                </p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row gy-3 justify-content-center">
              <div className="col-xxl-12">
                <div className="bg-primary bg-opacity-10 p-5 p-lg-6 rounded-4">
                  <div className="row g-gs flex-lg-row-reverse justify-content-between align-items-center">
                    <div className="col-lg-6 col-xl-5">
                      <div className="rounded-4 bg-gradient-primary bg-opacity-50 p-5 pb-0">
                        <div className="block-gfx">
                          <img
                            className="w-100 rounded-top-3 shadow-sm"
                            src="assets/images/problem.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xxl-5">
                      <div className="block-text pe-xl-5">
                        <img
                          className="h-3rem mb-3"
                          src="images/icon/text.svg"
                          alt=""
                        />
                        <h3 className="title">The Struggle</h3>
                        <p>
                          Job seekers, especially from underrepresented regions,
                          often face challenges when applying for tech roles.
                          Crafting a resume that stands out requires more than
                          technical skills—it demands an understanding of
                          industry trends and recruitment processes.
                          Unfortunately, personalized guidance and resources can
                          be limited, making it harder for job seekers to
                          succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="bg-warning bg-opacity-10 p-5 p-lg-6 rounded-4">
                  <div className="row g-gs flex-lg-row-reverse justify-content-between align-items-center">
                    <div className="col-lg-6 col-xl-5">
                      <div className="rounded-4 bg-gradient-warning bg-opacity-50 p-5 pb-0">
                        <div className="block-gfx">
                          <img
                            className="w-100 rounded-top-3 shadow-sm"
                            src="assets/images/step1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xxl-5">
                      <div className="block-text pe-xl-5">
                        <img
                          className="h-3rem mb-3"
                          src="images/icon/edit.svg"
                          alt=""
                        />
                        <h3 className="title">The Solution</h3>
                        <p>
                          Smart Resume Matcher was built to bridge this gap by
                          using AI to offer tailored resume matching and
                          feedback. The platform compares your resume with job
                          descriptions and provides suggestions on how to
                          improve it. This makes it easier for anyone, anywhere,
                          to refine their applications and increase their
                          chances of getting hired.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="bg-info bg-opacity-10 p-5 p-lg-6 rounded-4">
                  <div className="row g-gs flex-lg-row-reverse justify-content-between align-items-center">
                    <div className="col-lg-6 col-xl-5">
                      <div className="rounded-4 bg-gradient-info bg-opacity-50 p-5 pb-0">
                        <div className="block-gfx">
                          <img
                            className="w-100 rounded-top-3 shadow-sm"
                            src="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/08/Group-2309.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xxl-5">
                      <div className="block-text pe-xl-5">
                        <img
                          className="h-3rem mb-3"
                          src="images/icon/paper.svg"
                          alt=""
                        />
                        <h3 className="title">The Vision</h3>
                        <p>
                          Our vision is to empower job seekers across the globe
                          to optimize their resumes and fast-track their career
                          paths. We strive to make AI-powered tools accessible
                          to everyone, enabling applicants to stand out in the
                          competitive job market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accelerate />
    </div>
  );
};

export default page;
