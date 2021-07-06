import React, { useState } from "react";

export default function Cart({ cartList, setCartList }) {
  let total = 0;
  cartList.forEach((item) => {
    total = total + Number(item.price);
  });
  let uniqueList = [];
  cartList.forEach((item) => {
    if (uniqueList.includes(item)) {
      //do nothing
    } else {
      uniqueList.push(item);
    }
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
  const addOneMore = (pName) =>{
    const thisItem = cartList.find((item) => item.productName === pName); 
    setCartList([...cartList,thisItem])
  }
  const removeOne = (pName) =>{
    
    let i;
     cartList.forEach((item,index)=>{
      if(item.productName === pName){
        i=index;
      }
    })
    let copyCartList = [...cartList]
    copyCartList.splice(i,1)
    setCartList(copyCartList)
    
  }

  return (
    <div className="container">
      <div className="left-side">
        <div className="cart-list">
          <h3>My Cart({cartList.length})</h3>
          {uniqueList &&
            uniqueList.length > 0 &&
            uniqueList.map((item, _index) => (
              <div className="item-card" key={_index}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img src={item.imgUrl} alt={item.productName}></img>
                  <div style={{display:"flex",flexDirection:"row",paddingLeft:"2rem",paddingRight:"2rem",justifyContent:"space-between",marginRight:"3rem"}} >
                  <button onClick={()=>removeOne(item.productName)}>-</button>
                  
                  <button onClick={()=>addOneMore(item.productName)}>+</button>
                  </div>
                </div>
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
            <label>price({cartList.length})</label>
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
