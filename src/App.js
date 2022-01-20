import React from "react";
import { Blog, Features, Footer, Header, Sandpark } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Sandpark />
      <Features />
      <Blog />
      <Footer />
    </div>
  )
}
// import styled, { ThemeProvider } from "styled-components";
// import Splash from "./Components/SplashScreen";
// import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

// import { Switch } from "react-router";

// const StyledApp = styled.div`
//   color: ${props => props.theme.fontColor};
// `;

// function App() {

//   const [theme, setTheme] = useState("light");

//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light');
//   };

//   return (
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> 
//       <GlobalStyles />
//       <StyledApp>
//         SandPark
//         <button onClick={() => themeToggler()}>Dark / Light</button>
//       </StyledApp>
//     </ThemeProvider>
//     <>
//     <Router>
//       <Navbar />

//       <Switch>

//       </Switch>
//     </Router>
//     </>
//   );
// }

export default App;

