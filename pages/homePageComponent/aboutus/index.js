import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AboutUs = (props) => {
  const router = useRouter();
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
      <div className="about_head_0">{props?.aboutData?.title}</div>
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
          <Image src={props?.aboutData?.picture?.url} fill={true} priority />
        </div>
      </div>
      <div className="cont_a_1">
        <div className="cont_r_0">
          <div className="empty_40"></div>
          <div className="cont_60">
            <div className="cont_h_6">{props?.aboutData?.subtitle}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${props?.aboutData?.description}`,
              }}
            />
            <button
              onClick={() => router.push(`${props?.aboutData?.cta_link}`)}
            >
              {props?.aboutData?.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
