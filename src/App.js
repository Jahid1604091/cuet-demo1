
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./pages/About";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import CovidAlert from "./components/CovidAlert";
import Processing from "./pages/Processing";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <CovidAlert />
      <Navbar />
      <Switch>
        {/* <Route path='/' exact>
          <Home />
        </Route> */}
        <Route path='/about' exact component={About} />
        <Route path='/covid-19' exact component={Processing} />
        <Route path='/apply-now' exact component={Processing} />
        <Route path='/giving' exact component={Processing} />
        <Route path='/news' exact component={Processing} />
        <Route path='/faculty-staffs' exact component={Processing} />
        <Route path='/parents' exact component={Processing} />
        <Route path='/alumni' exact component={Processing} />
        <Route path='/login' exact component={Processing} />
        {/* <Route path='*'>
          <Error />
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
