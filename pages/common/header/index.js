import Image from "next/image";
import React, { useState } from "react";
const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="header">
      <div className="header_top">
        <div className="container">
          <div className="header_row">
            <div className="header_top_left">
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`tel:${props?.commonData?.header?.phone}`)
                }
              >
                <Image src="/phone_icon.jpg" width={15} height={15} priority />
                <span className="text">{props?.commonData?.header?.phone}</span>
              </div>
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`mailto:${props?.commonData?.header?.email}`)
                }
              >
                <Image src="/mail.jpg" width={15} height={15} priority />
                <span className="text">{props?.commonData?.header?.email}</span>
              </div>
            </div>
            <div className="header_top_right">
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`${props?.commonData?.social_links?.facebook}`)
                }
              >
                <Image
                  src="/facebook_icon.jpg"
                  width={17}
                  height={17}
                  priority
                />
              </div>
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`${props?.commonData?.social_links?.linkedin}`)
                }
              >
                <Image
                  src="/linkedin_icon.jpg"
                  width={15}
                  height={15}
                  priority
                />
              </div>
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`${props?.commonData?.social_links?.instagram}`)
                }
              >
                <Image src="/insta_icon.jpg" width={17} height={17} priority />
              </div>
              <div
                className="icon_text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(`${props?.commonData?.social_links?.youtube}`)
                }
              >
                <Image src="/yt_icon.jpg" width={17} height={13} priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container">
          <div className="header_row">
            <div
              className="header_bottom_left"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("/")}
            >
              <Image
                src={props?.commonData?.header?.logo?.url}
                width={230}
                height={63}
                priority
              />
            </div>
            <div className="for_mob">
              <div
                className={dropdownOpen ? "nav-icon1 open" : "nav-icon1"}
                onClick={toggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {dropdownOpen && (
                <div className="menu">
                  <span>ABOUT</span>
                  <span>HAIR</span>
                  <span>SKIN</span>
                  <span>COSMETIC SURGERIES</span>
                  <span>RESULTS</span>
                  <span>RESOURCES</span>
                  <span>PRODUCTS</span>
                  <span>CONTACT US</span>
                </div>
              )}
            </div>
            <div className="header_bottom_right">
              <div className="link">ABOUT</div>
              <div className="link">HAIR</div>
              <div className="link">SKIN</div>
              <div className="link">COSMETIC SURGERIES</div>
              <div className="link">RESULTS</div>
              <div className="link">RESOURCES</div>
              <div className="link">PRODUCTS</div>
              <a className="link btn">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
