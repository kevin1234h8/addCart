import "./App.css";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { useState } from "react";
import Cart from "./component/Cart";
function App() {
  const [openCart, setOpenCart] = useState(true);
  const [add, setAdd] = useState([]);
  const handleClick = (item) => {
    if (add.indexOf(item) === -1) {
      setAdd([...add, item]);
    }
  };
  const handleChange = (item, d) => {
    const ind = add.indexOf(item);
    const newAdd = add;
    newAdd[ind].amount += d;

    if (newAdd[ind].amount === 0) newAdd[ind].amount = 1;
    setAdd([...newAdd]);
  };

  return (
    <div className="App">
      <Navbar setOpenCart={setOpenCart} add={add} />
      {openCart ? (
        <Products handleClick={handleClick} />
      ) : (
        <Cart setAdd={setAdd} add={add} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
