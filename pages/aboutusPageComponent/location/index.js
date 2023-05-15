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
        <div className="location">
          <img src="/location.svg" />
          <div className="locat_cont">
            <div className="container">
              <div className="loc_h">Our Infrastructure</div>
              <div className="location_pin">
                <div className="state">Our Infrastructure</div>
                <p className="pin_location">
                  M 20, Near M Block Market, Hans Raj Gupta Marg, M Block,
                  Greater Kailash-1, New Delhi, Delhi 110048
                  <br />
                  <br />
                  07838599227
                </p>
                <p className="map_link">VIEW MAPS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <img src="/location.svg" />
          <div className="locat_cont">
            <div className="container">
              <div className="loc_h">Our Infrastructure</div>
              <div className="location_pin">
                <div className="state">Our Infrastructure</div>
                <p className="pin_location">
                  M 20, Near M Block Market, Hans Raj Gupta Marg, M Block,
                  Greater Kailash-1, New Delhi, Delhi 110048
                  <br />
                  <br />
                  07838599227
                </p>
                <p className="map_link">VIEW MAPS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <img src="/location.svg" />
          <div className="locat_cont">
            <div className="container">
              <div className="loc_h">Our Infrastructure</div>
              <div className="location_pin">
                <div className="state">Our Infrastructure</div>
                <p className="pin_location">
                  M 20, Near M Block Market, Hans Raj Gupta Marg, M Block,
                  Greater Kailash-1, New Delhi, Delhi 110048
                  <br />
                  <br />
                  07838599227
                </p>
                <p className="map_link">VIEW MAPS</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Location;
