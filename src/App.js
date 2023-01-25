// import logo from './logo.svg';
import './App.css';
import Header from './app/Header';
import Navigation from './app/Navigation';
import About from './app/About';
import Portfolio from './app/Portfolio';
import Posts from './app/Posts';
import Team from './app/Team';
import {Contact} from './app/Contact';
import Footer from './app/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Header  />} />
            <Route exact path='/about' element={<About  />} />
            <Route exact path='/portfolio' element={<Portfolio  />} />
            <Route exact path='/blog' element={<Posts  />} />
            <Route exact path='/team' element={<Team  />} />
            <Route exact path='/contact' element={<Contact  />} />
          </Routes>
          {/* 
          Depricated Since version 0.1.0
          <About/>
          <Portfolio/>
          <Posts/>
          <Team/>
          <Contact/> */}
          
        </div>
      </Router>
      <Footer/>
    </>
  );
}
// Depricated since version 0.0.1
// $(document).ready(function(){
//   $('.header').height($(window).height());
 
//   $(".navbar a").click(function(){
//       $("body,html").animate({
//           scrollTop:$("#" + $(this).data('value')).offset().top
//       },1000)
   
//   })
 
//  })

export default App;
