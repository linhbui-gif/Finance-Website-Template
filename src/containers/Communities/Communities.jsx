import ImagePrintDesign from "@/assets/images/image-print-design.png"
import ImageGrid from "@/assets/images/image-grid-communities.png"
import ImageColorMe from "@/assets/images/image-color-me.png"
import Flex from "@/containers/Flex/index.js";
const Communities = () => {
  return (
    <div className={'relative pt-[6rem]'}>
      <h2 className={'text-[12.8rem] pl-[17rem] text-white uppercase font-[700]'}>UI /UX <br/> communities</h2>
      <div className={'relative'}>
        <div className={''}>
          <img src={ImageGrid} className={'w-full translate-y-[-24%]'} alt="" />
        </div>
        <Flex className={'absolute top-[26rem] w-full mb-2 justify-center gap-x-[7rem] py-[5rem] communities-style'}>
          <div>
            <img src={ImagePrintDesign} alt="" />
          </div>
          <div>
            <img src={ImageColorMe} alt="" />
          </div>
        </Flex>
        <div className={'absolute right-[2rem] bottom-[47rem] max-w-[112rem] text-[3.6rem] text-[#E0E0E0] font-[400]'}>
          Operated within  the UI/UX community through active facilitation of industry-relevant events and skill-building workshops. <br/>
          Actively participate in training activities as well as contribute and learn to develop the profession.
        </div>
      </div>
    </div>
  )
}
export default Communities