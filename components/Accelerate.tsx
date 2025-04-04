import Link from "next/link";

const Accelerate = () => {
  return (
    <section className="section section-bottom-0">
      <div className="container">
        <div className="section-wrap bg-gradient-primary bg-opacity-10 rounded-4">
          <div className="section-content bg-pattern-dot-white-sm p-4 p-sm-6">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8 col-xxl-9">
                <div className="block-text">
                  <h6 className="overline-title text-primary">
                    Enhance Your Job Applications Today
                  </h6>
                  <h2 className="title">
                    Get Instant Resume Feedback and Improve Your Chances
                  </h2>
                  <p className="lead mt-3">
                    Upload your resume, get a match score, and discover
                    personalized suggestions to make your resume stand out.
                  </p>
                  <ul className="btn-list btn-list-inline">
                    <li>
                      <Link
                        href="/cvchecker"
                        className="btn btn-lg btn-primary"
                      >
                        <span>Check Your Resume Now</span>
                        <em className="icon ni ni-arrow-long-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="list list-row gy-0 gx-3">
                    <li>
                      <em className="icon ni ni-check-circle-fill text-success" />
                      <span>No sign-up required</span>
                    </li>
                    <li>
                      <em className="icon ni ni-check-circle-fill text-success" />
                      <span>Completely free</span>
                    </li>
                    <li>
                      <em className="icon ni ni-check-circle-fill text-success" />
                      <span>Instant results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accelerate;
