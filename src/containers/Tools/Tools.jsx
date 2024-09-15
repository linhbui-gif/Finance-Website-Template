import Flex from "@/containers/Flex/Flex.jsx";
import { ICON_TOOLS } from "@/constants/constants.js";
const Tools = () => {
  return (
    <section className={'container mt-[8rem]'}>
      <Flex className={'justify-between items-end'}>
        <h2 className={'mb-[-17rem] text-[12.8rem] leading-[100%] text-white uppercase font-[700]'}>Techstack <br/> & <br/> TOOLS</h2>
      </Flex>
      <Flex className={'flex-wrap item-tool-container'}>
        {
          ICON_TOOLS.map((item, index) => {
            return item?.url !== "" ? (
              <div
                className="item-tool max-w-[20%] basis-[20%] text-center border-item-tools bg-item-tools"
                key={index}
              >
                <img src={item?.url} className={"mx-auto aspect-[120/120]"} alt="" />
              </div>
            ) : (
              <div className="item-tool max-w-[20%] basis-[20%]" key={index}>
                
              </div>
            );
          })
        }

      </Flex>
    </section>
  )
}
export default Tools