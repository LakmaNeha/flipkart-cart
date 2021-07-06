import React, { useState } from "react";

export default function Cart({ cartList, setCartList }) {
  let total = 0;
  cartList.forEach((item) => {
    total = total + Number(item.price);
  });
  const [showSaved, setShowSaved] = useState(false);
  const [wishList, setWishList] = useState([]);
  const removeItem = (pName) => {
    const list = cartList.filter((item) => item.productName !== pName);
    setCartList(list);
  };
  const saveForLater = (pName) => {
    setShowSaved(true);
    const saveItem = cartList.find((item) => item.productName === pName);
    setWishList([...wishList, saveItem]);
    const list = cartList.filter((item) => item.productName !== pName);
    setCartList(list);
  };
  return (
    <div className="container">
      <div className="left-side">
        <div className="cart-list">
          <h3>My Cart</h3>
          {cartList &&
            cartList.length > 0 &&
            cartList.map((item, _index) => (
              <div className="item-card" key={_index}>
                <img src={item.imgUrl} alt={item.productName}></img>
                <div>
                  <p style={{ fontWeight: "bold" }}>{item.brand}</p>
                  <p>{item.productName}</p>
                  <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
                  <p>{item.size}</p>
                  <button onClick={() => removeItem(item.productName)}>
                    REMOVE
                  </button>
                  <button onClick={() => saveForLater(item.productName)}>
                    SAVE FOR LATER
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
          {showSaved && (
            <div className="cart-list">
              <h3>Saved for Later</h3>
              {wishList &&
                wishList.length > 0 &&
                wishList.map((item, _index) => (
                  <div className="item-card" key={_index}>
                    <img src={item.imgUrl} alt={item.productName}></img>
                    <div>
                      <p style={{ fontWeight: "bold" }}>{item.brand}</p>
                      <p>{item.productName}</p>
                      <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
                      <p>{item.size}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <div className="price-container">
          <h4>PRICE DETAILS</h4>
          <hr></hr>
          <div className="col-sep">
            <label>price</label>
            <span>{total}</span>
          </div>
          <div className="col-sep">
            <label>Delivey charges</label>
            <span>FREE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
