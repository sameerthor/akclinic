import Image from "next/image";
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
      <Image src="/arrow_r.svg" width={56} height={56} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Image src="/arrow_l.svg" width={56} height={56} />
    </div>
  );
}
const SurgeryType = (props) => {
  return (
    <div className="services" style={{ background: "#fff" }}>
      <div className="container">
        <div
          className="service_head"
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          Steps of the surgery
        </div>
        <div className="slider_service">
          <Slider {...settings}>
            <div className="slide_cont">
              <div className="slide_left">
                <div className="cont_head_s" style={{ marginTop: "0px" }}>
                  <strong style={{ color: "rgba(244, 121, 32, 1)" }}>01</strong>{" "}
                  <b>Planning & Hairline Design</b>
                </div>
                <div className="slidw_p_0">
                  <p>
                    Surgical Hair Restoration is both art and science. The
                    intention is to use minimum grafts to give natural look
                    keeping in mind that the patient should age gracefully.
                    Before surgery, our surgeon discusses and does the necessary
                    planning to create the hairline design with AK Clinics’
                    methodology. The plan is always realistic and closest to
                    patient’s need or expectation.
                  </p>
                </div>
              </div>
              <div className="slide_right" style={{ height: "370px" }}>
                <Image src="/surgery.png" fill={true} />
              </div>
            </div>{" "}
            <div className="slide_cont">
              <div className="slide_left">
                <div className="cont_head_s" style={{ marginTop: "0px" }}>
                  <strong style={{ color: "rgba(244, 121, 32, 1)" }}>01</strong>{" "}
                  <b>Planning & Hairline Design</b>
                </div>
                <div className="slidw_p_0">
                  <p>
                    Surgical Hair Restoration is both art and science. The
                    intention is to use minimum grafts to give natural look
                    keeping in mind that the patient should age gracefully.
                    Before surgery, our surgeon discusses and does the necessary
                    planning to create the hairline design with AK Clinics’
                    methodology. The plan is always realistic and closest to
                    patient’s need or expectation.
                  </p>
                </div>
              </div>
              <div className="slide_right" style={{ height: "370px" }}>
                <Image src="/surgery.png" fill={true} />
              </div>
            </div>{" "}
            <div className="slide_cont">
              <div className="slide_left">
                <div className="cont_head_s" style={{ marginTop: "0px" }}>
                  <strong style={{ color: "rgba(244, 121, 32, 1)" }}>01</strong>{" "}
                  <b>Planning & Hairline Design</b>
                </div>
                <div className="slidw_p_0">
                  <p>
                    Surgical Hair Restoration is both art and science. The
                    intention is to use minimum grafts to give natural look
                    keeping in mind that the patient should age gracefully.
                    Before surgery, our surgeon discusses and does the necessary
                    planning to create the hairline design with AK Clinics’
                    methodology. The plan is always realistic and closest to
                    patient’s need or expectation.
                  </p>
                </div>
              </div>
              <div className="slide_right" style={{ height: "370px" }}>
                <Image src="/surgery.png" fill={true} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default SurgeryType;
