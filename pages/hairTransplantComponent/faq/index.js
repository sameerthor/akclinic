import { useState } from "react";
const Faq = () => {
  const [faqId, setFaqId] = useState(0);
  return (
    <div className="faqs">
      <div className="container">
        <div className="team_h1">Questions asked by the patients</div>
        <div className="row">
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">
                  Is The Procedure Painless And Safe For All Skin Types?
                </span>
                <span
                  className={
                    faqId == "1" ? "plus_icon minus_icon" : "plus_icon"
                  }
                ></span>
              </div>
              {faqId == 1 ? (
                <div className="faq_a">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
