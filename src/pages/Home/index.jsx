import React, { useEffect, useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Project from "@/containers/Project";
import Experience from "@/containers/Experience";
import Tools from "@/containers/Tools/index.js";
import Communities from "@/containers/Communities/index.js";
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className={'Home'} ref={scrollContainerRef}>
      <Project/>
      <Experience/>
      <Tools />
      <Communities />
    </div>
  );
};

export default Home;
