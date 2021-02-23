import './App.css';
import Navbar from './components/Navbar' ;
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import OIyoni from './components/routes/OIyoni';
import BazaWiedzy from './components/routes/BazaWiedzy';
import article from './components/blog/Article/article';


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        {/* <HeroSection/>
        <MomSection/>
        <BenefitsSection/>
        <BaseSection/>
        <FunctionsSection/>
        <ValuesSection/>
        <ExpertsSection/>
        <AppStoreSection/>  */}
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/o-iyoni' component={OIyoni} />
        <Route path='/baza-wiedzy' component={BazaWiedzy}  />
        <Route path='/article/:slug' component={article} />
        <Route path='/category/:slug' component={BazaWiedzy}  />


        </Switch>
        <Footer/>
    {/* </Router> */}
    </div>
  );
}

export default App;
