import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initialize } from "./redux/app_reducer";
// import { getAuthUserData } from "./redux/auth_reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />

            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />

            <Route path='/users' render={() => <UsersContainer />} />

            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
