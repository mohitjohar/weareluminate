import React from 'react';
import { MDBAnimation } from 'mdbreact';
import Header from '../components/header/Header';
import ImageWithText from '../components/imagewithtext/ImageWithText';
import PostHoverRead from '../components/posthoverread/PostHoverRead';
import LogoSlider from '../components/logoslider/LogoSlider';
import StatusBox from '../components/statusbox/StatusBox';
import ProductHoverText from '../components/producthovertext/ProductHoverText';
import ServiceCard from '../components/servicecard/ServiceCard';
import MkBlog from '../components/mkblog/MkBlog';
import Contact from './Contact';
import FAQ from './FAQ';

const Home = () => {
  return (
    <>
      <Header />
      {/* <MDBAnimation reveal type="fadeInLeft">
        <span className="animated fadeInRight">hello</span>
      </MDBAnimation> */}
      <ImageWithText />
      <PostHoverRead />
      <LogoSlider />
      <StatusBox />
      <Contact />
      <MkBlog />
      <ProductHoverText />
      <FAQ />
      <ServiceCard />
    </>
  );
};
export default Home;
