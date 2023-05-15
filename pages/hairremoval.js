import Head from "next/head";
import Header from "./common/header";
import Footer from "./common/footer";
import axios from "axios";
import Bannner from "./hairRemovalComponent/bannner";
import HairContent from "./hairRemovalComponent/hairContent";

const hairremoval = (props) => {
  return (
    <>
      <Head>
        <title>Hair Removal </title>
      </Head>
      {props?.data?.commonData && (
        <Header commonData={props?.data?.commonData} />
      )}
      <Bannner />
      <HairContent />
      {props?.data?.commonData && (
        <Footer commonData={props?.data?.commonData} />
      )}
    </>
  );
};
export default hairremoval;
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
