import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageTest from "@/assets/images/image-logo.svg";
import Container from "@/containers/Container";
import { NavLink } from "react-router-dom";
import Flex from "@/containers/Flex";

const Header = () => {
  return (
    <div className={'py-[2rem]'}>
      <Container>
        <Flex className={'justify-between'}>
          <LazyLoadImage src={ImageTest} width={106} height={32} />
          <Flex className={'items-center gap-[4.3rem]'}>
            <li><NavLink to={'/'} className={'text-[1.8rem] font-[500] text-white'}>Home</NavLink></li>
            <li><NavLink to={'/'} className={'text-[1.8rem] font-[500] text-white'}>About</NavLink></li>
            <li><NavLink to={'/'} className={'text-[1.8rem] font-[500] text-white'}>Services</NavLink></li>
            <li><NavLink to={'/'} className={'text-[1.8rem] font-[500] text-white'}>Blog</NavLink></li>
          </Flex>
          <Flex className={'items-center gap-[3.6rem]'}>
            <button className={'text-white text-[1.6rem] font-[500] rounded-[.6rem] p-[.8rem_1.9rem] shadow-button'}>Contact to Email</button>
            <NavLink to={'/'} className={'text-[1.8rem] font-[500] text-white'}>Zalo</NavLink>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
export default Header;