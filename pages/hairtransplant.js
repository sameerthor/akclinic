import Head from "next/head";
import axios from "axios";
import Header from "./common/header";
import Footer from "./common/footer";
import Banner from "./hairTransplantComponent/bannner";
import HairContent from "./hairTransplantComponent/hairContent";
import HairTransplantType from "./hairTransplantComponent/hairTransplantType";
import SurgeryType from "./hairTransplantComponent/surgeryType";
import TransplantCost from "./hairTransplantComponent/tansplantCost";
import Benifits from "./hairTransplantComponent/benifits";
import Progess from "./hairTransplantComponent/progress";
import PostOperativeIns from "./hairTransplantComponent/postOperativeIns";
import Faq from "./hairTransplantComponent/faq";
import Location from "./hairTransplantComponent/location";
import Reviews from "./hairTransplantComponent/Reviews";
import Blogs from "./aboutusPageComponent/Blogs";
import NewsLetter from "./homePageComponent/newsLetter";

const HairTransplant = (props) => {
  return (
    <>
      <Head>
        <title>Hair-transplant</title>
      </Head>
      {props?.data?.commonData && (
        <Header commonData={props?.data?.commonData} />
      )}
      <Banner />
      <HairContent />
      <HairTransplantType />
      <SurgeryType />
      <TransplantCost />
      <Benifits />
      <Progess />
      <PostOperativeIns />
      <Faq />
      <Location />
      <Reviews />
      <NewsLetter />
      <Blogs />
      {props?.data?.commonData && (
        <Footer commonData={props?.data?.commonData} />
      )}
    </>
  );
};
export default HairTransplant;
export async function getServerSideProps() {
  let data = {
    commonData: [],
    menuData: [],
    error: false,
  };
  await axios(`https://akclinic.wpstaging.app/wp-json/acf/v2/options/`)
    .then(async (res) => {
      data.commonData = res?.data?.acf;
      await axios
        .get(
          `https://akclinic.wpstaging.app/wp-json/menus/v1/menus/${res?.data?.acf?.header?.menu?.slug}`
        )
        .then((resp) => {
          data.menuData = resp?.data?.items;
        })
        .catch((err) => {
          data.error = true;
          console.log(err);
        });
    })
    .then((err) => {
      data.error = true;
      console.log(err);
    });
  return {
    props: {
      data: data,
    },
  };
}
