import "./App.css";
import ItemContainer from "./ItemContainer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import {useState} from 'react'

function App() {
  const [cartList,setCartList] = useState([])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: "5rem" }}>
          <Switch>
            <Route exact path="/">
              <ItemContainer cartList={cartList} setCartList={setCartList} />
            </Route>
            <Route path="/cart">
              <Cart cartList={cartList} setCartList={setCartList} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
