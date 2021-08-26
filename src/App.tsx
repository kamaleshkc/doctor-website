import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { AuthProvider } from "./context/SignInContext";
import SignUp from "./components/SignIn";

import "./App.less";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout className="App">
          {/* <Header>
          <Link to="/">Home</Link>
          <Link to="/sign-in">Sign In</Link>
        </Header> */}
          <Switch>
            <Route path="/sign-in">
              <SignUp />
            </Route>
    
          </Switch>
          {/* <Footer>APP FOOTER WILL BE HERE</Footer> */}
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
