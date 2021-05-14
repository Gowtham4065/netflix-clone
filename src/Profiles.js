
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import App from './App.js';


function Profiles() {
  return (
    <div>
    <Router>
    <div className="home">
      <img
        className="nav_logo1"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <p className="watching">Who's Watching?</p>
      <div className="flexAlign center">
      <div>
      <Link to="/browse" onClick={() =>window.location.href="/browse"} ><img className="profiles" src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"  /></Link><p><br></br>Who_Am_I </p>   </div>
      <div><Link to="/browse" onClick={() =>window.location.href="/browse"}><img className="profiles" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" style={{marginLeft:"17px"}}/></Link><p><br></br>Smiley</p>   </div>
      <div><Link to="/browse" onClick={() =>window.location.href="/browse"}><img className="profiles" src="https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png" style={{marginLeft:"17px"}}/></Link><p><br></br>Bat Man</p>   </div>
      <div><Link to="/browse" onClick={() =>window.location.href="/browse"}><img className="profiles" src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg" style={{marginLeft:"17px"}}/></Link><p><br></br>It’s My_Turn </p>   </div>
      <div><Link to="/browse" onClick={() =>window.location.href="/browse"}> <img className="profiles" src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg" style={{marginLeft:"17px"}}/></Link><p><br></br>Let Me_See It</p>   </div>
      
    </div>
    </div>
    </Router>
    </div>
  );
}

export default Profiles;
