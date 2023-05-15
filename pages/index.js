import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const Footer = dynamic(() => import("./common/footer"));
const Header = dynamic(() => import("./common/header"));
const AboutUs = dynamic(() => import("./homePageComponent/aboutus"));
const Bannner = dynamic(() => import("./homePageComponent/bannner"));
const Blogs = dynamic(() => import("./homePageComponent/Blogs"));
const Counter = dynamic(() => import("./homePageComponent/counter"));
const HomeContent = dynamic(() => import("./homePageComponent/homeContent"));
const Location = dynamic(() => import("./homePageComponent/location"));
const News = dynamic(() => import("./homePageComponent/news"));
const NewsLetter = dynamic(() => import("./homePageComponent/newsLetter"));
const Results = dynamic(() => import("./homePageComponent/results"));
const Services = dynamic(() => import("./homePageComponent/services"));
const Story = dynamic(() => import("./homePageComponent/story"));
const Team = dynamic(() => import("./homePageComponent/team"));
const WhyUs = dynamic(() => import("./homePageComponent/whyUs"));
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js/dist/wow.js") : null;

const Home = (props) => {
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
  console.log(props.data);
  return (
    <div>
      <Head>
        <title></title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      {props?.data?.commonData && (
        <Header commonData={props?.data?.commonData} />
      )}
      {props?.data?.pageData?.hero_section && (
        <Bannner bannerData={props?.data.pageData?.hero_section} />
      )}
      {props?.data?.pageData?.section_2 && (
        <HomeContent content={props?.data?.pageData?.section_2} />
      )}
      {props?.data?.pageData?.section_3 && (
        <Services serviceData={props?.data?.pageData?.section_3} />
      )}
      {props?.data?.pageData?.section_4 && (
        <AboutUs aboutData={props?.data?.pageData?.section_4} />
      )}
      {props?.data?.pageData?.section_5 && (
        <WhyUs whyData={props?.data?.pageData?.section_5} />
      )}
      {props?.data?.pageData?.section_6 && (
        <Location locationData={props?.data?.pageData?.section_6} />
      )}
      {props?.data?.pageData?.section_7 && (
        <Counter counterData={props?.data?.pageData?.section_7} />
      )}
      {props?.data?.pageData?.section_8 && (
        <Results resultData={props?.data?.pageData?.section_8} />
      )}
      {props?.data?.pageData?.section_9 && (
        <Team teamData={props?.data?.pageData?.section_9} />
      )}
      {props?.data?.pageData?.blogs && (
        <Blogs blogData={props?.data?.pageData?.blogs} />
      )}
      {props?.data?.pageData?.section_10 && (
        <Story
          storyData={props?.data?.pageData?.section_10}
          story={props?.data?.pageData?.stories}
        />
      )}
      {props?.data?.pageData?.news && (
        <News newsData={props?.data?.pageData?.news} />
      )}
      <NewsLetter />
      {props?.data?.commonData && (
        <Footer commonData={props?.data?.commonData} />
      )}
    </div>
  );
};
export default Home;
export async function getServerSideProps() {
  let data = {
    commonData: [],
    pageData: [],
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
  await axios(
    `https://akclinic.wpstaging.app/wp-json/wp/v2/pages/14?acf_format=standard`
  )
    .then((res) => {
      data.pageData = res?.data?.acf;
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
