import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme  from "./ui/Theme";
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from "./LandingPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Services } from "./Services";
import CustomSoftware from "./CustomSoftware";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme ={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/services'
            render={props => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          
          />
          <Route
            exact
            path='/customSoftware'
            render={props => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path='/mobileApps' component={() => <div>Mobile Apps</div>} />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route exact path='/revolution' component={() => <div>The Revolution</div>} />
          <Route exact path='/about' component={() => <div>About</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
