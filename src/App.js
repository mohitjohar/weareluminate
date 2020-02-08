import React from 'react';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './scss/style.scss';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <>
      <Router1>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
      </Router1>
    </>
  );
};
export default App;
