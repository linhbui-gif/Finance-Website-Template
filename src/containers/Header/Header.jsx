import { Link } from 'react-router-dom'

import ImageLogo from '@/assets/images/image-logo.svg'
import ButtonComponent from '@/components/Button/index.js'
import Container from '@/containers/Container/index.js'
const Header = () => {
  return (
    <header className={'my-[3rem]'}>
      <Container>
        <nav className={'flex items-center justify-between h-[8rem] bg-primary rounded-sm px-[4rem]'}>
          <Link to='/'>
            <img src={ImageLogo} />
          </Link>
          <ul className={'flex items-center gap-[2rem]'}>
            <li>
              <Link to='/' className={'text-text-base text-white font-[400]'}>
                Service
              </Link>
            </li>
            <li>
              <Link to='/' className={'text-text-base text-white font-[400]'}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to='/' className={'text-text-base text-white font-[400]'}>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className={'text-text-base text-white font-[400]'}>
                Blog
              </Link>
            </li>
          </ul>
          <ButtonComponent title={'Contact'} className={'min-w-[12rem] text-primary'} />
        </nav>
      </Container>
    </header>
  )
}
export default Header
