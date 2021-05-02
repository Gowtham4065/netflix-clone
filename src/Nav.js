import React, { Component } from 'react'
import './Nav.css'

export class Nav extends Component {

 constructor(props) {
        super(props);
        this.state = {
            show : false,
        };
        
      }

   scrollCheck = ()=>
   {
       window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({
                     show : true
          })
      } else {
        this.setState({
                     show : false
          })
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
   }

   componentDidMount()
{
    this.scrollCheck();
}

shouldComponentUpdate(nextProps, nextState)
{
    if(this.state.show!=nextState.show)
    return true

    return false;
}

    render() {
     
        console.log(this.state.show)
        return (
            <div className={`nav ${this.state.show ? "nav_show" :''}`}>
               <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
            </div>
        )
    }
}

export default Nav
