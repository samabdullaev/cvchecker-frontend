const page = () => {
  return (
    <div className="nk-app-root">
      <main className="nk-pages">
        <div className="min-vh-100 d-flex flex-column has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around" />
          <div className="text-center mt-6 mb-4">
            <a href="index-2.html" className="logo-link">
              <div className="logo-wrap">
                <img
                  className="logo-img logo-light"
                  src="images/logo.png"
                  srcSet="https://copygen.themenio.com/images/logo2x.png 2x"
                  alt=""
                />
                <img
                  className="logo-img logo-dark"
                  src="images/logo-dark.png"
                  srcSet="
                    https://copygen.themenio.com/images/logo-dark2x.png 2x
                  "
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="my-auto">
            <div className="container">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h4 className="mb-3">Welcome Back!</h4>
                      <form
                        action="https://copygen.themenio.com/index.html"
                        noValidate
                      >
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="emailorusername"
                              >
                                Email or Username
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="emailorusername"
                                  id="emailorusername"
                                  className="form-control form-control-lg"
                                  placeholder="Enter Email or Username"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="toggle-password"
                              >
                                Password
                              </label>
                              <div className="form-control-wrap">
                                <a
                                  href="toggle-password.html"
                                  className="form-control-icon end password-toggle"
                                  title="Toggle show/hide password"
                                >
                                  <em className="on icon ni ni-eye text-base" />
                                  <em className="off icon ni ni-eye-off text-base" />
                                </a>
                                <input
                                  type="password"
                                  name="password"
                                  id="toggle-password"
                                  className="form-control form-control-lg"
                                  placeholder="Enter Password"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-between has-gap g-3">
                              <div className="form-group">
                                <div className="form-check form-check-sm">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="rememberMe"
                                  >
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                              <a href="reset-s2.html" className="small">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button
                                className="btn btn-primary btn-block"
                                type="submit"
                                id="submit-btn"
                              >
                                Login
                              </button>
                            </div>
                          </div>
                          <div className="col-12 text-center">
                            <div className="small mb-3">or login with</div>
                            <ul className="btn-list btn-list-inline gx-2">
                              <li>
                                <a className="btn btn-light btn-icon" href="#">
                                  <em className="icon fs-5 ni ni-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a className="btn btn-light btn-icon" href="#">
                                  <em className="icon fs-5 ni ni-google" />
                                </a>
                              </li>
                              <li>
                                <a className="btn btn-light btn-icon" href="#">
                                  <em className="icon fs-5 ni ni-apple" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt-4">
                              Don't have an account?
                              <a href="register-s2.html">Register</a>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-heading mt-4 mb-6">
            © 2023 CopyGenAI. Template Made By
            <a target="_blank" href="https://softnio.com/">
              Softnio
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default page;
