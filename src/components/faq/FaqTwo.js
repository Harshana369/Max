import React from "react";

export default class FaqTwo extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".accordion-box").length) {
      $(".accordion-box").on("click", ".acc-btn", function () {
        var outerBox = $(this).parents(".accordion-box");
        var target = $(this).parents(".accordion");

        if ($(this).hasClass("active") !== true) {
          $(outerBox).find(".accordion .acc-btn").removeClass("active");
        }

        if ($(this).next(".acc-content").is(":visible")) {
          return false;
        } else {
          $(this).addClass("active");
          $(outerBox).children(".accordion").removeClass("active-block");
          $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
          target.addClass("active-block");
          $(this).next(".acc-content").slideDown(300);
        }
      });
    }
  }
  render() {
    return (
      <>
        <section className="faq-one faq-one--faq">
          <div className="container">
            <div className="row">
              {/* Start Faq One Accordion */}
              <div className="col-xl-12">
                <div className="faq-one__accordion">
                  <ul className="accordion-box">
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="icon-plus-sign"></i>
                        </div>
                        <h3>
                          1. Join Our Team at Maxsons Engineering (Pvt) Ltd
                        </h3>
                      </div>
                      <div className="acc-content">
                        <div className="inner">
                          <p>
                            At Maxsons Engineering (Pvt) Ltd, we believe that
                            our greatest asset is our people. We are always on
                            the lookout for talented, passionate, and driven
                            individuals to join our team. If you are looking for
                            a rewarding career in the electrical and
                            construction services industry, we invite you to
                            explore the opportunities we have to offer.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <div className="icon-outer">
                          <i className="icon-plus-sign"></i>
                        </div>
                        <h3>2. Why Work With Us </h3>
                      </div>
                      <div className="acc-content current">
                        <div className="inner">
                          <p>
                            • Innovative Projects: Be part of groundbreaking
                            projects that challenge your skills and creativity.
                            <br />
                            <br />
                            • Professional Growth: We offer continuous learning
                            and development opportunities to help you advance in
                            your career.
                            <br />
                            <br />
                            • Collaborative Environment: Work alongside industry
                            experts in a supportive and inclusive work culture.
                            <br />
                            <br />• Competitive Benefits: Enjoy a comprehensive
                            benefits package including health insurance,
                            retirement plans, and performance bonuses.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block mb0">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="icon-plus-sign"></i>
                        </div>
                        <h3>3. There are currently no vacancies available</h3>
                      </div>
                      <div className="acc-content">
                        <div className="inner">
                          <p>
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block mb0">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="icon-plus-sign"></i>
                        </div>
                        <h3>4. How to Apply </h3>
                      </div>
                      <div className="acc-content">
                        <div className="inner">
                          <p>
                            If you are interested in joining our dynamic team,
                            please submit your resume and cover letter to
                            careers@maxsonsengineeringme.com. Include the job
                            title you are applying for in the subject line.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Faq One Accordion */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
