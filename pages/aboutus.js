import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./common/footer";
import Header from "./common/header";
import Banner from "./aboutusPageComponent/bannner";
import AboutContent from "./aboutusPageComponent/aboutContent";
import Vision from "./aboutusPageComponent/vision";
import Achievement from "./aboutusPageComponent/achievement";
import Expert from "./aboutusPageComponent/expert";
import Counter from "./aboutusPageComponent/counter";
import Location from "./aboutusPageComponent/location";
import Blogs from "./aboutusPageComponent/Blogs";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js/dist/wow.js") : null;

const AboutUs = (props) => {
  useEffect(() => {
    new WOW().init();
    document.addEventListener(
      "scroll",
      function () {
        if (window.scrollY >= 48) {
          document.querySelector(".header_bottom").style.background =
            "rgba(255, 255, 255, .9)";
          document.querySelector(".header_bottom").style.position = "fixed";
          document.querySelector(".header_bottom").style.top = "0";
          document.querySelector(".header_bottom").style.width = "100%";
          var x = document.querySelectorAll(".link");
          for (var i = 0; i < x.length; i++) {
            x[i].style.color = "#231F20";
          }
          document.querySelector(".header_bottom").style.backdropFilter =
            "blur(7px)";
        } else {
          document.querySelector(".header_bottom").style.background =
            "transparent";
          document.querySelector(".header_bottom").style.position = "relative";
          document.querySelector(".header_bottom").style.top = "auto";
          document.querySelector(".header_bottom").style.width = "100%";
          document.querySelector(".header_bottom").style.backdropFilter =
            "none";
          var x = document.querySelectorAll(".link");
          for (var i = 0; i < x.length; i++) {
            x[i].style.color = "#fff";
          }
        }
      },
      {
        passive: true,
      }
    );
  }, []);
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      {props?.data?.commonData && (
        <Header commonData={props?.data?.commonData} />
      )}
      <Banner />
      <AboutContent />
      <Vision />
      <Achievement />
      <Expert />
      <Counter />
      <Location />
      <Blogs />
      {props?.data?.commonData && (
        <Footer commonData={props?.data?.commonData} />
      )}
    </>
  );
};
export default AboutUs;
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
