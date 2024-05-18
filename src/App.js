import './App.css'
import {Paths, PublicRoute, LayoutPaths, Pages} from "@/pages/routers";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Guest from "@/layouts/Guest";

function App() {
  return (
    <div className={'App'}>
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
        </Guest>
      </Router>
    </div>
  )
}

export default App
