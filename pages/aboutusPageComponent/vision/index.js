import Image from "next/image";
const Vision = (props) => {
  return (
    <div
      className="about_us"
      style={{ background: "#FFF8EE", zIndex: "-1", height: "480px" }}
    >
      <div className="about_cont">
        <div className="absolute_img" style={{ height: "395px" }}>
          <Image src="/about_img.png" fill={true} priority />
        </div>
      </div>
      <div className="cont_a_1" style={{ zIndex: "-1", top: "0px" }}>
        <div className="cont_r_0">
          <div className="empty_40"></div>
          <div className="cont_60">
            <div className="cont_h_6">Our Vision & Mission</div>
            <div>
              <p>
                The doctors at AK Clinics understand the agony of the patients
                with hair loss and treat with extreme sensitivity. Not only that
                we did many successful hair transplants but also have hope of
                looks to 100s of patients suffering different kind of alopecia.
                In fact we feel we’ve tried our level best not only to provide
                the best of the treatments but also right advice to everyone.
                That is the reason we provide completely free online counseling
                to the patients. Out doctors are accredited by many national &
                international medical associations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
