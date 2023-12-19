import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import CompletePayment from './components/CompletePayment';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact Component={UserForm} />
        <Route path="/receipt-details" Component={CompletePayment} />
        {/* <Route path="/contact" component={Contact} />
        <Route path="/redirect" component={RedirectToHome} /> */}
      </Routes>
      {/* <div>
        <h1>Yoga Class Admission Form</h1>
        <UserForm />
      </div> */}
      {/* <UserForm/> */}
    </Router>
    </>
  );
}

export default App;
