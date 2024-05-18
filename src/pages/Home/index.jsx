import Container from "@/containers/Container";
import Icon from "@/components/Icon";
import {EIconName} from "@/components/Icon/Icon.enum.js";

const Home = () => {
  return (
    <div className={'Home'}>
      <Container >
        Hello
        <Icon name={EIconName.ArrowDown} />
      </Container>
    </div>
  )
}
export default Home;