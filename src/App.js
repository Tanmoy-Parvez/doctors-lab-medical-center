import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/Authentication/LogIn/LogIn';
import Register from './components/Authentication/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactForm from './components/Contact/ContactForm';
import Doctors from './components/Doctors/Doctors';

function App() {
  return (
    <div className="App overflow-hidden">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
