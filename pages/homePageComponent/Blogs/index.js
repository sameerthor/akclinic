import Image from "next/image";
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
        infinite: true,
        autoplay: true,
        dots: false,
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

const Blogs = (props) => {
  return (
    <div className="blog_sec">
      <div className="blog_head">Read Our Blog</div>
      <div className="mob_container">
        <div className="for_mob">
          <Slider {...settings}>
            {props?.blogData &&
              props?.blogData.map((itm, id) => {
                return (
                  <div className="blog_blk" key={id}>
                    <div className="blg_img">
                      <Image src={itm?.acf?.image?.url} fill={true} />
                    </div>
                    <div className="blog_title">{itm.post_title}</div>
                    <div className="blog_p">{itm.post_excerpt}</div>
                  </div>
                );
              })}
          </Slider>
        </div>
        <div className="for_mob">
          <div className="view_blg_btn">
            <button>VIEW ALL</button>
          </div>
        </div>
      </div>
      <div className="container for_desk">
        <div className="row">
          {props?.blogData &&
            props?.blogData.map((item, id) => {
              return (
                <div className="col-md-3" key={id}>
                  <div className="blog_blk">
                    <div className="blg_img">
                      <Image src={item?.acf?.image?.url} fill={true} />
                    </div>
                    <div className="blog_title">{item.post_title}</div>
                    <div className="blog_p">{item.post_excerpt}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="view_blg_btn">
          <button>VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
