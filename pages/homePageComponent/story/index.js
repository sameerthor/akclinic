import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  nextArrow: <SampleNextsArrow />,
  prevArrow: <SamplePrevsArrow />,
  slidesToShow: 1.99999,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function SampleNextsArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Image src="/arrow_r.svg" width={56} height={56} />
    </div>
  );
}

function SamplePrevsArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Image src="/arrow_l.svg" width={56} height={56} />
    </div>
  );
}
const Story = (props) => {
  const router = useRouter();
  return (
    <div className="story_sec">
      <div className="container">
        <div className="story_text_sec">
          <div className="story_head">{props?.storyData?.title}</div>
          <div className="story_subhead">{props?.storyData?.subtitle}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${props?.storyData?.description}`,
            }}
          />
          <button onClick={() => router.push(`${props?.storyData?.cta_link}`)}>
            {props?.storyData?.cta}
          </button>
        </div>
      </div>
      <div className="slider_s">
        <div className="story_slider">
          <Slider {...settings}>
            {props?.story &&
              props?.story.map((itm, id) => {
                return (
                  <div className="story_card" key={id}>
                    <img src={itm?.acf?.image?.url} />
                    <div className="bottom_s_txt">
                      <p>{itm.post_title}</p>
                      <span className="story_link">LEARN MORE</span>
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
export default Story;
