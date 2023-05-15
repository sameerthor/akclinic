import { useEffect } from "react";
const HairContent = () => {
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
    <div className="home_content" style={{ background: "#FFF8EE" }}>
      <div
        className="home_cont_img"
        style={{ left: "auto", right: "0px", bottom: "0px" }}
      >
        <svg
          width="618"
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
          <div className="content_right" style={{ width: "50%" }}>
            <div
              className="content_head wow fadeInUp"
              style={{ color: "#231F20" }}
            >
              India's Leading Cosmetic Surgery Clinics
            </div>
            <div className="p_o wow fadeInUp" style={{ paddingLeft: "0px" }}>
              <div className="p_0_h" style={{ color: "#231F20" }}>
                A FRIENDLY TEAM AT YOUR SERVICE
              </div>
              <div>
                <p style={{ color: "#231F20" }}>
                  AK Clinics, founded in 2008,with the aim of transforming the
                  looks of the people by Dr. Kapil Dua and Dr. Aman Dua. Both
                  the doctors were working in Dayanand Medical College as
                  faculty at that time. They started off with Hair Transplant in
                  2007 in Dayanand Medical College & Hospital, Ludhiana. But
                  very soon found out that the hard work, dedication,
                  commitment, patient comfort, team training and management of
                  surgeries were not easy in a medical college. Therefore, they
                  decided to set up their own Hair Transplant & Aesthetic
                  Dermatology Centre by the name of AK Clinics on 14th August,
                  2008. Then the second clinic was set up in Delhi in 2011 and
                  the operations were started in 2016 and tie-ups in Bangalore.
                  In these years, AK Clinics has made a name for itself and is
                  regarded as a Premier Hair Transplant & Aesthetic Dermatology
                  Centre both by patients for treatment and doctors for learning
                  these procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="content_left"></div>
        </div>
      </div>
    </div>
  );
};
export default HairContent;
