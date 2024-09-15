import ImagePrintDesign from "@/assets/images/image-print-design.png"
import ImageGrid from "@/assets/images/image-grid-communities.png"
import ImageColorMe from "@/assets/images/image-color-me.png"
import ImagePattern from "@/assets/images/pattern-community.png"
import Flex from "@/containers/Flex/index.js";
import Container from "@/containers/Container/index.js";

const Communities = () => {
  return (
    <section className={'relative pt-[17rem]'}>
      <Container>
      <h2 className={'text-[12.8rem] text-white leading-[100%] uppercase font-[700]'}>UI /UX <br/> communities</h2>
      <div className={''}>
        <div className={'absolute z-0 top-1/4 left-[0] right-[0] -bottom-2/4'}>
          <img src={ImageGrid} className={'w-full translate-y-[-24%] opacity-30 object-none'} alt="" />
        </div>
        <Flex className={'mt-[16rem] mb-[16rem] w-full mb-2 justify-center gap-x-[7rem] py-[5rem] communities-style bg-opacity'}>
          <div>
            <img src={ImagePrintDesign} alt="" />
          </div>
          <div>
            <img src={ImageColorMe} alt="" />
          </div>
        </Flex>
        <div className={'ml-[auto] mr-[17rem] mt-[40%] right-[2rem] max-w-[112rem] text-[3.6rem] text-[#E0E0E0] font-[400]'}>
          Operated within  the UI/UX community through active facilitation of industry-relevant events and skill-building workshops. <br/>
          Actively participate in training activities as well as contribute and learn to develop the profession.
        </div>
        <div className={'absolute -top-[0%] left-[0] right-[0] bottom-0 w-[500px] z-10'}>
          <img src={ImagePattern} className={'w-full'} alt="" />
        </div>
      </div>
      </Container>
    </section>
  )
}
export default Communities