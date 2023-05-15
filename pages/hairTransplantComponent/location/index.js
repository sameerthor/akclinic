import { useState } from "react";

const Location = () => {
  const [showAd, setShowAd] = useState(1);
  return (
    <div className="location_sec_1">
      <div className="container">
        <div className="l_h_1">AK Clinics Hair Transplant Centres in India</div>
        <div className="tab_sec">
          <div className="tab_cont">
            <span
              className={showAd == 1 ? "active" : ""}
              onClick={() => setShowAd(1)}
            >
              DELHI
            </span>
            <span
              className={showAd == 2 ? "active" : ""}
              onClick={() => setShowAd(2)}
            >
              LUDHIANA
            </span>
            <span
              className={showAd == 3 ? "active" : ""}
              onClick={() => setShowAd(3)}
            >
              BENGALURU
            </span>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <img
              src="/location1.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <div className="location_ad">
              <div className="l_h_2">VISIT US</div>
              <div className="add_p">
                M 20, Near M Block Market, Hans Raj Gupta Marg, M Block, Greater
                Kailash-1, New Delhi, Delhi 110048
                <br />
                07838599227
              </div>
              <p className="check_lnk">CHECK NOW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
