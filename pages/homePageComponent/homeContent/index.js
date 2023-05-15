import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HomeContent = (props) => {
  const router = useRouter();
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
      <div className="home_cont_img">
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
          <div className="content_left"></div>
          <div className="content_right">
            <div className="content_head wow fadeInUp">
              {props?.content?.title}
            </div>
            <div className="p_o wow fadeInUp">
              <div className="p_0_h">{props?.content?.sub_title}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${props?.content?.description}`,
                }}
              />
              <button
                onClick={() => router.push(`${props?.content?.cta_link}`)}
              >
                {props?.content?.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
