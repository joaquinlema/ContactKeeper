import './App.css';
import "antd/dist/antd.css";
import LandingPage from './components/pages/LandingPage';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/SetAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
      <ContactState>
        <LandingPage />
      </ContactState>
      </AlertState>
    </AuthState>
  );
}

export default App;
