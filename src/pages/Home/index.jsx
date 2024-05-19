import { Link } from 'react-router-dom'

import Icon from '@/components/Icon'
import { EIconName } from '@/components/Icon/Icon.enum.js'
import Container from '@/containers/Container'

const Home = () => {
  return (
    <div className={'Home'}>
      <Container>
        <Link to={'/test'}>Go to test page</Link>
        <Icon name={EIconName.ArrowDown} />
      </Container>
    </div>
  )
}
export default Home
