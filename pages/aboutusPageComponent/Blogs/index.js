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
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>{" "}
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>{" "}
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
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
          <div className="col-md-3">
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="blog_blk">
              <div className="blg_img">
                <Image src="/blog.png" fill={true} />
              </div>
              <div className="blog_title">
                Medications & Drugs that accelerate hair loss
              </div>
              <div className="blog_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
        </div>
        <div className="view_blg_btn">
          <button>VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
