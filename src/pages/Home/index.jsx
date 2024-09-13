import Project from "@/containers/Project";
import Experience from "@/containers/Experience";
import Tools from "@/containers/Tools/index.js";
import Communities from "@/containers/Communities/index.js";
const Home = () => {
  return (
    <div className={'Home'}>
      <Project/>
      <Experience/>
      <Tools />
      <Communities />
    </div>
  )
}
export default Home;