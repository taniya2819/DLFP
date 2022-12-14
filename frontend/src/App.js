import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Shipping from "./components/Shipping";
import Login from "./pages/Login";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProductScreen from "./pages/ProductScreen";
import SignUp from "./pages/SignUp"; 
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderDetails from "./components/OrderDetails";
import Account from "./components/Account";
import OrderHistory from "./components/OrderHistory";
import UserProfile from "./components/UserProfile";
// import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<SignIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
           <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
