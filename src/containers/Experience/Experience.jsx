import React, { useEffect, useRef } from "react";
import Container from "@/containers/Container/index.js";
import LocomotiveScroll from 'locomotive-scroll';

const Experience = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      direction: 'horizontal',
    });
  
    return () => {
      scroll.destroy();
    };
  }, []);
  
  return (
    <section className={'pt-[6rem] bg-white relative'}>
      <Container>
      <h2 className={'mb-[8rem] text-[12.8rem] leading-[100%] text-black uppercase font-[700]'}>Resume & <br/> Experience</h2>
      <div className={'experience-horizontal'} data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" ref={scrollContainerRef}>
        <div className="item flex gap-x-[7rem] mr-[4rem] min-w-[79.3rem]" style={{ borderRight: "1px solid #BFBFBF" }}>
          <div>
            <p className={'text-black font-[500] text-[6.4rem]'}>GSI</p>
            <p className={'text-black font-[400] text-[2rem]'}>03/2023 - 01/2024</p>
          </div>
          <div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
          </div>
        </div>
        <div className="item flex gap-x-[7rem] mr-[4rem] min-w-[79.3rem]" style={{ borderRight: "1px solid #BFBFBF" }}>
          <div>
            <p className={'text-black font-[500] text-[6.4rem]'}>Onebit <br/> Ventures</p>
            <p className={'text-black font-[400] text-[2rem]'}>03/2023 - 01/2024</p>
          </div>
          <div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
          </div>
        </div>
        <div className="item flex gap-x-[7rem] mr-[4rem] min-w-[79.3rem]" style={{ borderRight: "1px solid #BFBFBF" }}>
          <div>
            <p className={'text-black font-[500] text-[6.4rem]'}>GSI</p>
            <p className={'text-black font-[400] text-[2rem]'}>03/2023 - 01/2024</p>
          </div>
          <div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
            <div className={'mb-[2rem]'}>
              <p className={'mb-[.6rem] text-black font-[700] text-[4rem]'}>GSI-software</p>
              <p className={'text-black font-[500] text-[3.2rem]'}>Branding Design</p>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}
export default Experience