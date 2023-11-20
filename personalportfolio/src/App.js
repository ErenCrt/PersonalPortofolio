import picture from "./mypic.jpg";
import picture2 from "./mypic2.png";
import insta from "./ig.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import download from "./download.png";
import placeholder from "./placeholder.jpg";
import firstever from "./firstever.png";
import homefriend from "./homefrnd.png";
import plateplanner from "./plateplan.png";
import schedulemate from "./schmate.png";
import unilifeease from "./unilife.png";
import background from "./back2.png";
import mynameis from "./hellomynameis.png";
import logo from "./logo192.png";
import photoshop from "./photoshop.png";
import ReactApp from "./ReactApp.png";
import schedulemateapp from "./schedulemateapp.png";
import unilifefigma from "./unilifefigma.png"; 
import homefigma from "./homefigma.png";
import mycv from "./Eren's CV.pdf";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header-gradient">
      <div className="App-header">
      <div className="picandtitle">
      <img src={picture2} className="mypicture" draggable="false"/>
      <div className="texttop">
        <div className="title">Eren Curtseit</div>
        <div className="downloadable">
        <a href={mycv} download="Eren's CV"  draggable="false">
        <img src={download} className="download" draggable="false"/>
        <div className="downtext">Download my CV</div>
        </a>
        </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="socials">
      <a href="https://www.instagram.com/eren_1_3/" target="_blank" draggable="false">
      <img src={insta} className="insta" alt="Instagram" draggable="false" />
      </a>
      <a href="https://www.linkedin.com/in/eren-curtseit-5b9497236" target="_blank" draggable="false">
      <img src={linkedin} className="linkedin" draggable="false"/>
      </a>
      </div>
      </div>
      

      <div className="aboutpic">
      <img src={mynameis} className="mynameis" draggable="false"/>
      <div className="aboutmetext">About me</div>
      </div>
      <div className="about">Hi! I'm Eren, a 3rd year Computer Science student at University of Hull,</div>
      <div className="about">with a passion for computers and a desire to develop in the industry!</div>
      </div>

      <div className="work">
      <span>This</span>&nbsp;
  <span>is</span>&nbsp;
  <span>my</span>&nbsp;
  <span>work</span>&nbsp;
  <span>so</span>&nbsp;
  <span>far</span>&nbsp;
  <span>...</span>
</div>

      <div className="items-grid">
      <div className="box" id="box1">  
      <img src={plateplanner} className="plateplanner" draggable="false"/>
      <img src={ReactApp} className="ReactApp" draggable="false"/>
      <div className="text">
      <p className="textbox">
        PlatePlanner is one of my 2nd year projects made in React,
        where I took the place of the main programmer in a group of 5
        designed to simplify meal planning for university students
        by suggesting recipes based on available ingredients
        and providing a convenient takeaway finder
        with the scope of saving time, money and food waste.
      </p>
        
        </div>
        
          
        
      <div className="item">
      <div className="additional-info">
      
      </div>
      </div>
      </div>
        
      <div className="box" id="box2">
        <img src={schedulemate} className="schedulemate" draggable="false"/>
        <img src={schedulemateapp} className="schedulemateapp" draggable="false"/>
        <div className="text">
      <p className="textbox">
        Schedulemate is a group project
        where we prototyped an app to help students and not only
        to mannage their schedule and make plans with their friends.
        My part in this project was to desing logos, sketches and more,
        at first I found it a bit challenging, as it was first time
        working in a team with other 4 complete strangers,
        but at the end all came along well.
      </p>
      </div>
        <div className="item"></div>
        <div className="additional-info">

        </div>
        </div>

        <div className="box" id="box3">
        <img src={unilifeease} className="unilifeease" draggable="false"/>
        <img src={unilifefigma} className="unilifefigma" draggable="false"/>
        <div className="text">
        <p className="textbox1">
        Unilifeease is a 1st year project that got developed further to have an front end interface and actullay,
        having a small usbaility. Main usecase of this project is the efficiency of how the students can get in touch with their 
        Personal Supervisior(PS), this was a challenging project as the ideas could be taken infinitely far. 
        This was web based with an option to be used on mobile, first time importing from Figma into a react.js file.
      </p>
      </div>
        <div className="item"></div>
        <div className="additional-info">

        </div>
        </div>

        <div className="box" id="box4">
        <img src={homefriend} className="homefriend" draggable="false"/>
        <img src={homefigma} className="homefigma" draggable="false"/>
        <div className="text">
        <p className="textbox2">
        HomeFriend is my first interaction with an UI/UX desing project,
        only to find out how much I actually enjoy it.
        Having an experience in Photoshop and the editing part of the digital IT, getting used to  
        platforms such as Figma, was not a horrible as expected.
        This prototype is inspired from the Goove app, and its aim is to make a house more inteligent and efficient.
      </p>
      </div>
      <div className="item"></div>
        <div className="additional-info">

        </div>
        
        </div>      
      </div>
      <div className="last">This website is subject to frequent updates, which may result in changes to its appearance and content. Thank you :) </div>
    </div>
  );
}

export default App;
