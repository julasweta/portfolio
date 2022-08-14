import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  IndexRoute,
} from "react-router-dom";
import Header from "../header/Header";
import Start from "../start/Start";
import Development from "../development/Development";
import Portfolio from "../portfolio/Portfolio";
import Support from "../support/Support";
import Contact from "../contacts/Contact";
import Landing from "../development/landing/Landing";
import Corporate from "../development/corporate/Corporate";
import Cardsite from "../development/cardsite/Cardsite";
import { Helmet } from "react-helmet";
import Modalmy from "../modal/Modalmy";
import info from "../redux/Info";
import SingleSite from "../portfolio/singleSite/SingleSite";



/* scroll animation for Landing/Corporate/CardSite  */
window.addEventListener("scroll", function (e) {
  let itemsSteps = document.querySelectorAll(".steps-item");
  itemsSteps.forEach((item) => {
    if (document.documentElement.scrollTop > 700) {
      item.style.animation = "steps_jup 3s";
    } else {
      item.style.animation = "none";
    }
  });

    let studioTexts = document.querySelectorAll(".studio-text");
    studioTexts.forEach((item) => {
      if (
        document.documentElement.scrollTop > 500 &&
        document.documentElement.scrollTop < 1000
      ) {
        item.style.animation = "steps_jup 3s";
      } else {
        item.style.animation = "none";
      }
    });
});

const App = (props) => {
  return (
    <Router>
      <>
        <Helmet>
          <title>My Title</title>
        </Helmet>
      </>
      <>
        <div className="App">
          <Header />
        </div>
      </>
      <Routes>
        <Route path="/*" element={<Start />}></Route>
        <Route path="/modal" element={<Modalmy />}></Route>
        <Route path="/development/*" element={<Development />}>
          <Route index element={<Landing />}></Route>
          <Route path="landing" element={<Landing />}></Route>
          <Route path="corporate" element={<Corporate />}></Route>
          <Route path="cardsite" element={<Cardsite />}></Route>
        </Route>
        <Route path="/portfolio/*" element={<Portfolio info={info} />}>
          <Route
            path="single"
            element={<SingleSite></SingleSite>}
          ></Route>
        </Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
