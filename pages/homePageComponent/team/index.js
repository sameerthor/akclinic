import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        arrows: false,
      },
    },
  ],
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
const Team = (props) => {
  const router = useRouter();
  return (
    <div className="team_sec">
      <div className="container">
        <div className="team_row">
          <div className="team_left">
            <div className="team_h1">{props?.teamData?.title}</div>
            <div className="team_subhead">{props?.teamData?.subtitle}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${props?.teamData?.subtitle_copy}`,
              }}
            />
          </div>
          <div className="team_right">
            <Slider {...settings}>
              {props?.teamData?.doctors &&
                props?.teamData?.doctors.map((itm, id) => {
                  return (
                    <div className="exp_card" key={id}>
                      <img src={itm.doctor_image.url} />
                      <div className="exp_dtl">
                        <div className="exp_name">{itm.name}</div>
                        <div className="exp_post">{itm.profile}</div>
                        <div
                          className="exp_link"
                          style={{ cursor: "pointer" }}
                          onClick={() => router.push(`${itm.cta_link}`)}
                        >
                          {itm.cta}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
