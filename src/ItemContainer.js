import React,{useEffect,useState} from 'react'


export default function ItemContainer({cartList,setCartList}) {
    const [data,setData]=useState([]);
   

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson)
            
            console.log(myJson);
            
          });
      }
      useEffect(()=>{
        getData()
     
      },[])
      
      const add = (id) =>{
          
          const list = data.filter((item)=> item.key===id )
          list[0].quantity=1;
          setCartList([...cartList,list[0]])

      }
      
    return (
        
       
        <div  className="itemContainer">
            
             {
               data && data.length>0 && data.map((item)=>
               <div className="item" key={item.key}>
                
                <img src={item.imgUrl} alt={item.productName}></img>
                <p style={{fontWeight: "bold"}}>{item.brand}</p>
                <p>{item.productName}</p>
                <div className="couple">
                <div className="item-details">
                <p style={{fontWeight: "bold"}}>₹{item.price}</p>
                <p >{item.size}</p>
                </div>
                {cartList.find((i)=>i.productName===item.productName) !== undefined ? <button>Added</button> : <button onClick={()=>add(item.key)}>Add to Cart</button> }
                </div>
                </div>
                )
             }
        </div>
       
    )
}
