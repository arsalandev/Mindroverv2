import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PostLogin from "./components/PostLogin";
import GetStarted from "./components/Getstarted";
import PostLoginHeader from "./components/PostLoginHeader";
import DashboardOne from "./components/DashboardOne";
import PictureDashboard from "./components/PictureDashboard";
import RecentImages from "./components/RecentImages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  let dataSend = null;  

  const savePictureData2 = (incomingData2) => {
    console.log("from app.js", incomingData2);
    dataSend = incomingData2;
  };

  

  const preLogin = () => {
    return (
      <div>
        <Header />
        <Route exact path="/home" component={GetStarted} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  };

  const postLogin = () => {
    return (
      <div>
        <PostLoginHeader />
        <Route exact path="/postlogin" component={PostLogin} />
        <Route exact path="/dashboardone">
          <DashboardOne sendingPictureData={dataSend}/>
        </Route>
        <Route exact path="/picturedashboard">
          <PictureDashboard onSavePictureData2={savePictureData2} />
        </Route>
        <Route exact path="/recentimages" component={RecentImages} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={preLogin} />
          <Route exact path="/home" component={preLogin} />
          <Route exact path="/login" component={preLogin} />
          <Route exact path="/signup" component={preLogin} />
          <Route exact path="/postlogin" component={postLogin} />
          <Route exact path="/dashboardone" component={postLogin} />
          <Route exact path="/picturedashboard" component={postLogin} />
          <Route exact path="/recentimages" component={postLogin} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
