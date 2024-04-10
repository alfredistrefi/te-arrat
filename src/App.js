import React, { useEffect, useState } from 'react';
import './App.css';
import './footer.css';
import logo from './images/logo.png';
import homelogo from './images/homelogo.jpg';
import place from './images/place.png';
import ver from './images/ver.jpg';
import foodh from './images/foodh.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const [isVisible, setIsVisible] = useState({
    container2: false,
    container3: false,
    foodimage: false,
  });

  useEffect(() => {
    function handleScroll() {
      const container2 = document.querySelector(".container2");
      const container3 = document.querySelector(".container3");
      const foodimage = document.querySelector(".foodimage");

      if (container2 && isElementVisible(container2)) {
        setIsVisible((prevState) => ({ ...prevState, container2: true }));
      }

      if (container3 && isElementVisible(container3)) {
        setIsVisible((prevState) => ({ ...prevState, container3: true }));
      }

      if (foodimage && isElementVisible(foodimage)) {
        setIsVisible((prevState) => ({ ...prevState, foodimage: true }));
      }
    }

    function isElementVisible(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="background">
    <img className="logo" src={logo} alt="Logo" />
    <hr />
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <hr />
      <div className="homepage">
        <div className="title">
          <h1 className='title-text'>Agroturizëm</h1>
          <h1 className='title-text'>“Te Arrat”</h1>
          <button className='button-menu'>
            View Menu
          </button>
        </div>
        <div className='homelogodiv'>
          <div className="homelogo-container">
            <img className="homelogo" src={homelogo} alt="homelogo" />
            <div className="rounded-overlay"></div>
          </div>
        </div>
      </div>

      <div className="centered-information">
        <div className="information">
          <div className='icon'>
            <i className="fas fa-clock"></i>
            <div className="info-div">
              <span>Location</span>
              <p>Cerrik, Albania</p>
            </div>
          </div>
          <div className='icon'>
            <i className="fas fa-location"></i>
            <div className="info-div">
              <span>Open Hours</span>
              <p>Mon To Sun 9:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className='icon'>
            <i className="fas fa-calendar"></i>
            <div className="info-div">
              <span>Reservation</span>
              <p>te-arrat@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container2 ${isVisible.container2 ? 'fade-in' : ''}`}>
        <div className="image-container2">
          <img src={place} alt="Car"  className='placesrc'/>
        </div>
        <div className="vl"></div>
        <div className="text-content">
          <p className="main-text">
            <p className='main-place-title'>The Story- Te Arrat</p>
            Automate repetitive car-sharing fleet tasks to improve your efficiency. Auto-sync platform calendars to limit double bookings, auto-send customizable templated messages to travelers to improve response times, and much more!
          </p>
        </div>
      </div>

      <div className={`container3 ${isVisible.container3 ? 'fade-in' : ''}`}>
        <div className="text-content">
          <p className="main-text2">
            <p className='main-place-title2'>The Story- Te Arrat</p>
            Automate repetitive car-sharing fleet tasks to improve your efficiency. Auto-sync platform calendars to limit double bookings, auto-send customizable templated messages to travelers to improve response times, and much more!
          </p>
        </div>
        <div className="vl"></div>
        <div className="image-container3">
          <img alt="aboutimage" className='aboutimage' src={ver} />
        </div>
      </div>

      <div className={`foodimage ${isVisible.foodimage ? 'fade-in' : ''}`}>
        <img src={foodh} alt="food" className='food' />
      </div>



<div className="bordgrid">

      <div class="grid-wrapper">
	<div>
		<img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
	</div>
	<div class="wide">
		<img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
	</div>
	<div>
		<img src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60" alt="" />
	</div>
	<div class="tall">
		<img src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80" alt="" />
	</div>
	<div class="big">
		<img src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80" alt="" />
	</div>
	


</div>
</div>

<footer class="footer">
		<div class="container row">
			<div class="footer-col">
				<h4>company</h4>
				<ul>
					<li><a href="#">about us</a></li>
					<li><a href="#">our services</a></li>
					<li><a href="#">privacy policy</a></li>
					<li><a href="#">visit website</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>get help</h4>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">shipping</a></li>
					<li><a href="#">returns</a></li>
					<li><a href="#">order status</a></li>
					<li><a href="#">payment options</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>online shop</h4>
				<ul>
					<li><a href="#">download</a></li>
					<li><a href="#">changelog</a></li>
					<li><a href="#">github</a></li>
					<li><a href="#">all version</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>follow us</h4>
				<div class="social-links">
					<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
					<a href="#"><i class="fa-brands fa-x-twitter"></i></a>
					<a href="#"><i class="fa-brands fa-instagram"></i></a>
					<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
				</div>
			</div>
		</div>
	</footer>
    </div>
  );
}

export default App;
