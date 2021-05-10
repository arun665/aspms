
import{Navbar , Nav, NavDropdown} from 'react-bootstrap';
import {connect, useStore} from "react-redux";
import {logout} from "../redux/action/userAction.js";
import {Link} from 'react-router-dom';
import './sass/home.scss';
import Typed from 'react-typed';

function Home(props){
return (
<div id="home">
<div class="container" id="container">
  <h1> Hi {props.username}</h1>
<br></br>
<h2> Welcome to A.S Password Manager</h2>


<h2 id="typed">

<Typed
                    strings={['to add a password , go to the add-password page fill the require details','to check your passwords and categories , go to the get-password page','also check out our new weather app']}
                    typeSpeed={60}
                    backSpeed={20}

                loop/>
               

</h2>
</div>




</div>
)
}


const mapStatetoProps=(state)=>{

    return{
        username:state.user.username,
    
    }
  }
  
  
  const mapDispatchtoProps=(dispatch)=>{
  return{
    logoutUser:function(){
      dispatch(logout());
  },
  
  }
  }
  
  export default connect(mapStatetoProps,mapDispatchtoProps)(Home);
