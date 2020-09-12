// import react 
import React, { Component } from 'react';

//import router for routing
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import various components to be rendered  
import Home from './Components/MainPagesComp/home'
import Navbar from './Components/partials/navbar';
import createQuiz from './Components/HomePageComp/createQuiz';
import insertques from './Components/HomePageComp/insertques';
import viewQuiz from './Components/quizzesInfo/viewQuiz';
import getQuiz from './Components/quizzesInfo/getQuiz';



class App extends Component {
  render() {







    return (
      <BrowserRouter>
        <div className="App">



          {/* NavBar that is alwasy going to show at the top of the website */}
          <Navbar />





          {/* Routing for the different pages */}
          <switch>

            <Route exact path='/' component={Home} />
            <Route path='/createquiz' component={createQuiz} />
            <Route path='/getQuiz/:quiz_id' component={getQuiz} />
            <Route path='/insertques/:quiz_id' component={insertques} />
            <Route path='/viewquiz' component={viewQuiz} />

          </switch>




        </div>
      </BrowserRouter>
    );
  }
}

export default App;
