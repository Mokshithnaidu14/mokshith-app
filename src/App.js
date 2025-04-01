import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login1";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext,useState } from "react";
export const appContext = createContext();
function App() {
  const [users, setUsers] = useState([]);//updating value from input
  const [user, setUser] = useState({});//storing the value
  const products=[
          {id:1,name:"product 1",price:30},
          {id:2,name:"product 2",price:40},
          {id:3,name:"product 3",price:50},
          {id:4,name:"product 4",price:60},
          {id:5,name:"product 5",price:70},
          {id:6,name:"product 6",price:80},
      ];
  return (
    <div>
      <BrowserRouter>
        <appContext.Provider value={{ users, setUsers, user, setUser,products}}>
          <Header />
          <Routes>
            <Route index element={<Products />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;