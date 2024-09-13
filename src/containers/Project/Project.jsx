import Container from "@/containers/Container/index.js";
import Flex from "@/containers/Flex";
import Collapse from "@/components/Collapse";

const Project = () => {
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
    <div>
      <Container>
        <div className={'project-head'}>
          <Flex className={'justify-between'}>
            <div>
              <h2 className={'text-[12.8rem] text-white uppercase font-[700]'}>projects</h2>
              <p className={'max-w-[92.4rem] text-Primary/75 text-[3.2rem] leading-[140.8%] tracking-[1.92px]'}>
                I have more than 6 years of experience in software as FrontEnd and more than 3 years of experience in UI UX design including finance, blockchain, tourism, construction, e-commerce,...
              </p>
            </div>
            <span className={'text-[12.8rem] bg-gradient-pink-purple uppercase font-[700]'}>20+</span>
          </Flex>
          <div className={'py-[13.3rem]'}>
            {items.map((item, index) => (
              <Collapse
                key={index}
                title={item.title}
                id={item.id}
              >
                {item.content}
              </Collapse>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Project