import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Container from "@/containers/Container/index.js";
import Flex from "@/containers/Flex";
import Collapse from "@/components/Collapse";
import Textfit from 'react-textfit';

const Project = () => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current.querySelectorAll('h2, p, .collapse-title, .collapse-content'),
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100, { start: 300 }),
      duration: 1500,
      easing: 'easeOutExpo',
    });
  }, []);

  const items = [
    {
      id: '01',
      title: 'Analyzing Users Before Designing',
      content: 'I prioritize in-depth user research, conducting interviews and using analytics to understand user needs, which informs my UI/UX design and development process for creating user-centric, intuitive interfaces.',
      customStyles: { backgroundColor: '#f9f9f9' },
    },
    {
      id: '02',
      title: 'Product Design',
      content: 'I prioritize in-depth user research, conducting interviews and using analytics to understand user needs, which informs my UI/UX design and development process for creating user-centric, intuitive interfaces.',
    },
    {
      id: '03',
      title: 'Product Implementation',
      content: 'I prioritize in-depth user research, conducting interviews and using analytics to understand user needs, which informs my UI/UX design and development process for creating user-centric, intuitive interfaces.',
    },
  ];

  return (
    <section ref={textRef}>
      <Container className={'project-head'}>
        <Flex className={'justify-between'}>
          <div>
            <Textfit mode="single" max={128} min={40} >
              <div className="flex justify-between">
                <h2 className={'text-white uppercase font-[700]'}>projects</h2>
                <span className={'bg-gradient-pink-purple uppercase font-[700]'}>20+</span>
              </div>
            </Textfit>
            <p className={'text-Primary/75 text-[3.2rem] leading-[140.8%] tracking-[1.92px]'}>
              I have more than 6 years of experience in software as FrontEnd and more than 3 years of experience in UI UX design including finance, blockchain, tourism, construction, e-commerce,...
            </p>
          </div>
          
        </Flex>
        <div className={'py-[13.3rem]'}>
          {items.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              id={item.id}
              className="collapse-title"
              contentClassName="collapse-content"
            >
              {item.content}
            </Collapse>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;
