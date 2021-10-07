import './App.css';
import "antd/dist/antd.css";
import LandingPage from './components/pages/LandingPage';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <LandingPage />
    </ContactState>
  );
}

export default App;
