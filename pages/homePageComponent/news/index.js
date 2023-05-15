import Image from "next/image";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  nextArrow: <SampleNextsArrow />,
  prevArrow: <SamplePrevsArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: true,
        arrows: false,
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

const News = (props) => {
  return (
    <div className="News_sec">
      <div className="mob_container">
        <div className="for_mob">
          <div className="news_head">News & Media</div>
          <Slider {...settings}>
            {props?.newsData &&
              props?.newsData.map((itm, id) => {
                return (
                  <div className="news_card">
                    <div className="new_cardi">
                      <Image src={itm?.acf?.image?.url} fill={true} />
                    </div>
                    <div className="date_news">
                      {itm.post_date.split(" ")[0]}
                    </div>
                    <div className="news_title">{itm.post_title}</div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div className="container for_desk">
        <div className="news_head">News & Media</div>
        <div className="row">
          <div className="col-md-6">
            <div className="news_card">
              <div className="new_cardi">
                <Image
                  src={
                    props?.newsData ? props?.newsData[0]?.acf?.image?.url : ""
                  }
                  fill={true}
                />
              </div>
              <div className="date_news">
                {props?.newsData
                  ? props?.newsData[0]?.post_date?.split(" ")[0]
                  : ""}
              </div>
              <div className="news_title">
                {props?.newsData ? props?.newsData[0]?.post_title : ""}
              </div>
            </div>
          </div>

          {props?.newsData &&
            props?.newsData?.slice(1).map((item, id) => {
              return (
                <div className="col-md-3" key={id}>
                  <div className="news_card1">
                    <div className="new_cardf">
                      <Image src={item?.acf?.image?.url} fill={true} />
                    </div>
                    <div className="date_news">
                      {item.post_date?.split(" ")[0]}
                    </div>
                    <div className="news_title">{item.post_title}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default News;
