import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//styles
import "./styles/App.scss";

//pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

//containers
import Header from './containers/header';
import Footer from './containers/footer';

//instagram id
const instagram_id = "4414f168-5d73-40ca-96b4-565bb9e165e6";

function App() {
  return (
    <div className="App">
      <Router>
        <main id="main">
          <Header />
          <Switch>
          
            <Route  path="/about">
              <About />
            </Route>

            <Route  path="/contact">
              <Contact />
            </Route>

            <Route  path="/gallery">
              <Gallery id={instagram_id} />
            </Route>

            <Route exact path="/">
              <Home id={instagram_id} />
            </Route>

          </Switch>
        </main>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
