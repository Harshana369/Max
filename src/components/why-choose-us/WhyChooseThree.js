import React from "react";

export default class WhyChooseThree extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section
          className="why-choose-one-sec"
          style={{ background: "#f2f3f5" }}
        >
          <div className="container">
            <div className="row">
              {/* Start Why Choose One Content */}
              <div className="col-xl-6">
                <div className="why-choose-one__content">
                  <div className="sec-title">
                    <div className="sec-title__tagline">
                      <h6> Why Choose Us </h6> <span className="right"></span>
                    </div>
                    <h2 className="sec-title__title">To Our Community</h2>
                    <p className="sec-title__text">
                      We value the strength and unique capabilities that each
                      partner brings to the table. We firmly believe that
                      effective collaboration is the key to achieving mutual
                      goals and creating sustainable success. Our dedication to
                      fostering a shared vision is rooted in the belief that
                      combining our strengths will lead to innovation solutions
                      and increased value for both parties.
                    </p>
                  </div>

                  <div className="why-choose-one__content-top">
                    <div className="img-box">
                      <img
                        src={
                          publicUrl +
                          "assets/images/resources/why-choose-v1-img1.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-box">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using making it look like
                        readable English.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose-one__content-bottom">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="why-choose-one__content-bottom-single">
                          <h2>Our Vision</h2>
                          <p>
                            To be forefront of engineering innovation, driving
                            positive change, and solving complex challenges for
                            a better, greener, sustainable future.
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="why-choose-one__content-bottom-single">
                          <h2>Our Mission</h2>
                          <p>
                            Driven by innovation and expertise, our company is
                            committed to delivering cutting edge-solutions that
                            seamless blend technology and precision, ensuring
                            optimal performance and client satisfaction in every
                            project we undertake.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Why Choose One Content */}

              {/* Start Why Choose One Img */}
              <div className="col-xl-6">
                <div className="why-choose-one__img">
                  <div className="row">
                    {/* Start Why Choose One Img Single */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-one__img-single">
                        <div className="img-box">
                          <img
                            src={
                              publicUrl +
                              "assets/images/resources/why-choose-v1-img2.jpg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Why Choose One Img Single */}

                    {/* Start Why Choose One Img Single */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-one__img-single">
                        <div className="img-box">
                          <img
                            src={
                              publicUrl +
                              "assets/images/resources/why-choose-v1-img3.jpg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Why Choose One Img Single */}

                    {/* Start Why Choose One Img Single */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-one__img-single">
                        <div className="img-box style2">
                          <img
                            src={
                              publicUrl +
                              "assets/images/resources/why-choose-v1-img4.jpg"
                            }
                            alt=""
                          />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                              className="video-popup"
                            >
                              <div className="why-choose-one__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Why Choose One Img Single */}

                    {/* Start Why Choose One Img Single */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-one__img-single">
                        <div className="img-box">
                          <img
                            src={
                              publicUrl +
                              "assets/images/resources/why-choose-v1-img5.jpg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Why Choose One Img Single */}
                  </div>
                </div>
              </div>
              {/* End Why Choose One Img */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
