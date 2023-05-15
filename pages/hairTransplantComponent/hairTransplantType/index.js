import { useState } from "react";

const HairTransplantType = () => {
  const [faqId, setFaqId] = useState(0);
  return (
    <div className="hair_type">
      <div className="container">
        <div className="col-md-7">
          <div className="hair_text_sec">
            <div className="text_h">types of Hair transplant</div>
            <div className="text_para_h">
              With the advancements, hair transplant techniques have evolved.
              Now, not only the hair can be transplanted on scalp only, they can
              be transplanted on different parts of the body. The different
              types of hair transplant are
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="faq">
              <div className="faq_q">
                <span className="ques_main">FUE HAIR TRANSPLANT</span>
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
                <span className="ques_main">FACIAL HAIR TRANSPLANT</span>
                <span
                  className={faqId == 2 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 2 ? (
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
                <span className="ques_main">FUT HAIR TRANSPLANT</span>
                <span
                  className={faqId == 3 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 3 ? (
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
                <span className="ques_main">BODY HAIR TRANSPLANT</span>
                <span
                  className={faqId == 4 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 4 ? (
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
                <span className="ques_main">BIO-FUETM</span>
                <span
                  className={faqId == 5 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 5 ? (
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
                <span className="ques_main">BEARD HAIR TRANSPLANT</span>
                <span
                  className={faqId == 6 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 6 ? (
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
                <span className="ques_main">BIO-DHTTM HAIR TRANSPLANT</span>
                <span
                  className={faqId == 7 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 7 ? (
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
                <span className="ques_main">GIGA SESSIONS AT AK CLINICS</span>
                <span
                  className={faqId == 8 ? "plus_icon minus_icon" : "plus_icon"}
                ></span>
              </div>
              {faqId == 8 ? (
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
export default HairTransplantType;
