import React, { useEffect, useLayoutEffect, useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Project from "@/containers/Project";
import Experience from "@/containers/Experience";
import Tools from "@/containers/Tools/index.js";
import Communities from "@/containers/Communities/index.js";
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smoothMobile: true,
      lerp: 0.1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main className={'Home'} ref={scrollContainerRef} >
      <Project/>
      <Experience/>
      <Tools />
      <Communities />
    </main>
  );
};

export default Home;
