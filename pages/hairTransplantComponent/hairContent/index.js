import { useEffect } from "react";

const HairContent = (props) => {
  useEffect(() => {
    document.addEventListener("scroll", inView(), {
      passive: true,
    });
  });
  const inView = () => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true)
          console.log("Element has just become visible in screen");
        document.querySelector("#homesvg").classList.add("active");
      },
      { threshold: [1] }
    );

    observer.observe(document.querySelector(".home_cont_img"));
  };
  return (
    <div className="home_content">
      <div className="home_cont_img" style={{ bottom: "-60px" }}>
        <svg
          width="400"
          height="100%"
          viewBox="0 0 618 730"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="homesvg"
        >
          <path
            d="M-113 447.954L202.227 132.727V730"
            stroke="#F47920"
            strokeOpacity="0.5"
            strokeWidth="1.43466"
            className="svg-elem-1"
          ></path>
          <path
            d="M301.773 0V580.682L459.386 423.068M617 265.455L459.386 423.068M459.386 423.068L583.818 547.5"
            stroke="#F47920"
            strokeOpacity="0.5"
            strokeWidth="1.43466"
            className="svg-elem-2"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="content_row">
          <div className="content_left"></div>
          <div className="content_right">
            <div className="content_head wow fadeInUp">
              India's Leading Cosmetic Surgery Clinics
            </div>
            <div className="p_o wow fadeInUp" style={{ paddingLeft: "0px" }}>
              <div className="p_0_h">A FRIENDLY TEAM AT YOUR SERVICE</div>
              <div>
                <p>
                  Hair Transplant Surgery is a gold standard for treatment of
                  Male Pattern Baldness and Female Androgentic Alopecia. In
                  addition to scalp hair restoration, hair transplants is widely
                  used for restoring the eyebrows, facial hair – beard and
                  moustache, and hair lost due to trauma or other forms of
                  alopecia.
                  <br /> Hair transplantation is a surgical procedure. In this
                  procedure, the surgeon takes hair from the back of the scalp
                  and transplants them in the bald area. Starting from old punch
                  graft technique, hair transplant has evolved to advanced
                  techniques like Bio-FUE™ and Robotic Surgery. This is the
                  reason that more and more number of people are today opting
                  for this surgery worldwide.
                  <br /> transplant service to our patient under the supervision
                  of our chief hair transplant surgeon Dr, Kapil Dua. If you
                  have suffering from baldness or hair fall come and consult
                  with our best hair transplant surgeon in India for better
                  advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HairContent;
