import Image from "next/image";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  arrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};
const Location = (props) => {
  return (
    <div className="location_sec">
      <Slider {...settings}>
        {props?.locationData &&
          props?.locationData.slide.map((itm, id) => {
            return (
              <div className="location" key={id}>
                <img src={itm.slide.background_image.url} />
                <div className="locat_cont">
                  <div className="container">
                    <div className="loc_h">{props?.locationData.title}</div>
                    <div className="location_pin">
                      <div className="state">{itm.slide.city}</div>
                      <p className="pin_location">
                        {itm.slide.address}
                        <br />
                        <br />
                        {itm.slide.phone}
                      </p>
                      <p
                        className="map_link"
                        onClick={() => window.open(`${itm.slide.cta_link}`)}
                      >
                        {itm.slide.cta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
export default Location;
