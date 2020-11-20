import React ,{useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../context/userContext';
import '../../stylesheets/logindashboard.css'
import JoinQuizdash from '../partials/JoinQuizdash';

function LoginDashBoard() {
    const { userData} = useContext(UserContext);
    console.log();
  
    return (
        <div className="dash">
            <h1>User: {userData.user.displayName}</h1>
            <JoinQuizdash/>
            <div className="dash-link">
                <Link to ='/createquiz'><button>CreateQuiz</button></Link>
                <Link to ='/viewquiz'><button>ViewQuiz</button></Link>
                <Link to ='/hostquiz'><button>Hostquiz</button></Link>
            </div>
            
        </div>
    )
}

export default LoginDashBoard
