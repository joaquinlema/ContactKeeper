import './App.css';
import "antd/dist/antd.css";
import LandingPage from './components/pages/LandingPage';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/SetAuthToken';
import {
  BrowserRouter as Router,
} from "react-router-dom";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
      <ContactState>
        <Router>
        <LandingPage />
        </Router>
      </ContactState>
      </AlertState>
    </AuthState>
  );
}

export default App;
