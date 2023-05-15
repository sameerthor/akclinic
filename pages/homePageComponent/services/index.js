import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Image src="/arrow_right.svg" width={56} height={56} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Image src="/arrow_left.svg" width={56} height={56} />
    </div>
  );
}
const Services = (props) => {
  const router = useRouter();
  return (
    <div className="services">
      <div className="container">
        <div className="service_head">{props?.serviceData?.title}</div>
        <div className="slider_service">
          <Slider {...settings}>
            {props?.serviceData?.slide &&
              props?.serviceData?.slide.map((itm, id) => {
                return (
                  <div className="slide_cont" key={id}>
                    <div className="slide_left">
                      <div className="service_s_1">
                        <span className="active_s_1">{id + 1}</span>
                        <span className="disabled_s_1">
                          /{props?.serviceData?.slide.length}
                        </span>
                      </div>
                      <div className="cont_head_s">{itm.slide.title}</div>
                      <div
                        className="slidw_p_0"
                        dangerouslySetInnerHTML={{
                          __html: `${itm.slide.description}`,
                        }}
                      />
                      <button
                        className="slide_s0_b"
                        onClick={() => router.push(`${itm.slide.cta_link}`)}
                      >
                        {itm.slide.cta}
                      </button>
                    </div>
                    <div className="slide_right">
                      <Image src={itm.slide.image.url} fill={true} />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Services;
