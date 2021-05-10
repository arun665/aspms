
import {Link} from "react-router-dom";
 import './sass/dashboard.scss';
 import bg from './sass/bg.png';
 import bg1 from './sass/bg1.jpg';
 import instagram from './sass/instagram.jpg';
 import flipkart from './sass/flipkart.png';
 import twitter from './sass/twitter.jpg';
 import tiktok from './sass/tiktok.png';
 import snapchat from './sass/snapchat.jpg';
 import facebook from './sass/facebook.jpg';
 import gmail from './sass/gmail.png';
 import linkedin from './sass/linkedin.webp';
 import amazon from './sass/amazon.webp';


 import ScrollAnimation from 'react-animate-on-scroll';

function DashBoard(){


    return (
        <div id="dashboard">

        <div id="div">

        <div id="div3"  data-aos="fade-right">

        <h1> A.S PASSWORD <br></br>MANAGER</h1>
</div>
        </div>

<div className="container-fluid" id="container2">
        <div className="row" >
        
        <div className="col-md-6 col-sm-12 col-xs-12">
        <div id="div1"  data-aos="fade" >
      <h1 data-aos="fade" id="h1"> Protect your passwords using our Password Management System</h1>
      <br></br>
      <h5 data-aos="fade" id="h5"> No more need to remember lots of passwords. Our A.S Password Manager is the ultimate application that stores your data very safely and makes it very  easy to access.</h5>
    <br></br>
      <ul id="ul" >
        <li > easy to use </li>
        <li> 100% safe</li>
        <li> 1 month free trial</li>
        <li> Lifetime access</li>
        <li> Special discount for students </li>
        
        
        
      </ul>
      </div>
      </div>




        <div className="col-md-6 col-sm-12 col-xs-12">

<div id="bg"     data-aos="zoom-in">

  <img src={bg} id="bgimg"/>
</div>

</div>
    </div>
    </div>



    <div className="container-fluid" id="container2">

    <h1 id="h12"> SAVE YOUR SOCIAL MEDIA PASSWORDS :</h1>
    <br></br>
      <div className="row">
        <div className="col-md-3 col-xs-6 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={instagram} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-6 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={flipkart} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-6 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={linkedin} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-6 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={facebook} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-6 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={tiktok} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-12 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={amazon} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-12 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={snapchat} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-3 col-xs-12 col-sm12">
          <div id="social"  data-aos="fade-down">
            <img src={gmail} id="socialimg"/>
          </div>
        </div>


      </div>
    </div>
    </div>
    )
}



export default DashBoard;