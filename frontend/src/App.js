import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row top">
          <div>
            <a className="brand" href="/">
              Online Book Store
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sing In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved - 2022</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
