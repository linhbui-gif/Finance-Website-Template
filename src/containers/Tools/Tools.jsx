import ImageToolFigma from "@/assets/images/image-tools-figma.png"
import ImageTool2 from "@/assets/images/image-tools-2.png"
import Flex from "@/containers/Flex/Flex.jsx";
import { ICON_TOOLS } from "@/constants/constants.js";
const Tools = () => {
  return (
    <section className={'pt-[8rem] '}>
      <Flex className={'justify-between items-end'}>
        <h2 className={'mb-[8rem] pl-[17rem] text-[12.8rem] text-white uppercase font-[700]'}>Techstack <br/> & <br/> TOOLS</h2>
        <Flex>
          <div className="item p-[8.4rem] border-item-tools bg-item-tools">
            <img src={ImageToolFigma} className={'aspect-[120/120]'} alt="" />
          </div>
          <div className="item p-[8.4rem] border-item-tools bg-item-tools">
            <img src={ImageTool2} alt="" />
          </div>
        </Flex>
      </Flex>
      <Flex className={'flex-wrap'}>
        {
          ICON_TOOLS.map((item, index) => {
            return (
              <div className="item max-w-[20%] basis-[20%] p-[8.4rem] text-center border-item-tools bg-item-tools" key={index}>
                <img src={item?.url} className={'mx-auto aspect-[120/120]'} alt="" />
              </div>
            )
          })
        }
      </Flex>
    </section>
  )
}
export default Tools