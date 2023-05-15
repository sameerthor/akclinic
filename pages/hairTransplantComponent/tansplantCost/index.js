import Image from "next/image";
import { useEffect } from "react";
const TransplantCost = () => {
  useEffect(() => {
    document.addEventListener("scroll", inView(), {
      passive: true,
    });
  }, []);
  const inView = () => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true)
          document.querySelector("#aboutsvg").classList.add("active");
      },
      { threshold: [0] }
    );

    observer.observe(document.querySelector(".about_us"));
  };
  return (
    <div className="about_us">
      <div className="about_head_0">Hair Transplant Cost</div>
      <div className="ak_log_9">
        <svg
          width="290"
          height="290"
          viewBox="0 0 618 730"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="aboutsvg"
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
      <div className="about_cont">
        <div className="absolute_img">
          <Image src="/about_img.png" fill={true} priority />
        </div>
      </div>
      <div className="cont_a_1">
        <div className="cont_r_0">
          <div className="empty_40"></div>
          <div className="cont_60">
            <div>
              <p>
                The cost of the hair transplant surgery is calculated as cost
                per graft or cost per follicle. The number of follicles or
                grafts is decided by your surgeon based on your grade of
                baldness and expectations. The total cost per grafts can become
                less if more number of grafts are needed.
              </p>
              <ul
                style={{
                  fontSize: "18px",
                  fontFamily: "Archivo",
                  fontWeight: "400",
                  color: "rgba(255, 248, 238, 1)",
                }}
              >
                <li>The cost of hair transplant surgery will depend on :</li>
                <li>Location of the clinic</li>
                <li>Reputation of the clinic</li>
                <li>Surgeon's qualification, expertise and competence</li>
                <li>
                  A national/ International board certified surgeon may charge
                  more
                </li>
                <li>Total number of grafts/ follicles</li>
                <li> Method of surgery - DHT, FUE, FUT</li>
                <li>
                  Grafts extracted from the beard or other body site may be
                  charged more than the ones extracted from the scalp
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransplantCost;
