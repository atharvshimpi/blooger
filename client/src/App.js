import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home/Home";
import SignUp from "./components/Auth/AuthSignUp";
import SignIn from "./components/Auth/AuthSignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateBlog from "./components/BlogOperations/CreateBlog";
import YourBlogs from "./components/BlogOperations/YourBlogs";

function App() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={ Home } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/signin" component={ SignIn } />
          <Route path="/dashboard" exact render={ (props) => (
              <Dashboard { ...props }/>
          ) } />
          <Route exact path="/createblog" component={ CreateBlog } />
          <Route exact path="/yourblogs" component={ YourBlogs } />
        </Router>
      </Provider>
    );
}

export default App;
