import { useState } from "react";
import Icon from "@/components/Icon";
import { EIconName } from "@/components/Icon/Icon.enum.js";
import Flex from "@/containers/Flex/index.js";

const Collapse = ({ title, children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='cursor-pointer' onClick={handleToggle}>
        <Flex
          className={'items-center justify-between pt-[6.4rem] pb-[3.2rem]'}
          style={{ borderBottom: '1px solid #BFBFBF' }}
        >
          <Flex className={'items-center gap-[4rem]'}>
            <span className={'text-[2.4rem] font-[400] text-Primary/75'}>{id}</span>
            <h3 className={'text-[4.8rem] font-[500] text-white'}>{title}</h3>
          </Flex>
          {isOpen ? <Icon name={EIconName.ArrowCircle} /> : <Icon name={EIconName.ArrowRight} />}
        </Flex>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 pl-[6.5rem] ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className={'max-w-[87.7rem] text-[2.4rem] text-Primary/75 font-[400] pt-[2.4rem]'}>{children}</p>
      </div>
    </div>
  )
}
export default Collapse