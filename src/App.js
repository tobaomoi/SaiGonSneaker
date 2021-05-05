import './App.css';
import loadable from "@loadable/component";
import HomeAndProductDetailRoutes from "./Routes/index";
import SaiGonSneakers from "./Higher-Order-Components/index.jsx";
import { Switch, Route } from "react-router-dom";

const LoadedComponent = loadable((props) => import(`./Templates/UserTemplate/${props.pageName}/index.jsx`));
const PageNotFound = loadable(() => import("./Components/PageNotFound/index.jsx"));

const renderHomeAndProductDetailPage = (routes) => {
  if (routes && routes.length > 0) {  
    return routes.map((route, index) => {
      return (
        <SaiGonSneakers key={index} path={route.path} exact={route.exact} Component={route.component} />
      )
    })
  }
}

function App() {
  return (
    <Switch>
      <Route path="/login" exact={true} render={(routeProps) => <LoadedComponent {...routeProps} pageName="LoginPage" />} />
      <Route path="/signup" exact={true} render={(routeProps) => <LoadedComponent {...routeProps} pageName="SignUpPage" />} />
      {renderHomeAndProductDetailPage(HomeAndProductDetailRoutes)}
      <Route path="*" render={(routeProps) => <PageNotFound {...routeProps} />} />
    </Switch>
  );  
}

export default App;
