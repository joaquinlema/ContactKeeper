import './App.css';
import "antd/dist/antd.css";
import LandingPage from './components/pages/LandingPage';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <LandingPage />
      </ContactState>
    </AuthState>
  );
}

export default App;
