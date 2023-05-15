import Image from "next/image";
import { useRouter } from "next/router";

const Bannner = (props) => {
  const router = useRouter();
  return (
    <div className="banner">
      <Image
        src={props?.bannerData?.hero_image?.url}
        fill={true}
        style={{ zIndex: "-1" }}
        priority
      />
      <div className="banner_cont">
        <div className="container">
          <div className="bannner_content wow fadeInUp animated">
            <div className="bannner_heading">{props?.bannerData?.title}</div>
            <p>{props?.bannerData?.sub_title}</p>
            <button
              onClick={() => router.push(`${props?.bannerData?.cta_link}`)}
            >
              {props?.bannerData?.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bannner;
