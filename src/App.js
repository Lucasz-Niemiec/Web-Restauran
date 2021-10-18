//Global styles
import { GlobalStyle } from "./GlobalStyle";
import Theme from "./themePropvider";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

//
function App() {
  return (
    <Theme>
      <Router>
        <NavbarMenu />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/:id" element={<FoodInfo />} />
          <Route path=":id" element={<FoodInfo />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </Theme>
  );
}

export default App;
