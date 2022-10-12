import './App.css';
import React from 'react';
function GroceryApp(props) {
    let [products, setProducts] = React.useState(props.products || []);
    const updateProduct= (product)=>{
       // 👇️ passing function to setData method
       setProducts(prevState => {
        const newState = prevState.map(obj => {
          // 👇️ if id equals 2, update country property
          if (obj.id === product.id) {
            return {...obj, votes: product.votes};
          }
  
          // 👇️ otherwise return object as is
          return obj;
        });
  
        return newState;
      });
    }
    return ( <div>
        <ul>
          {
           products.map(function(item, i){             
            return  <li key={i}><Product product={item} updateProduct={updateProduct}></Product></li>
           })
         }
        </ul>
      </div>
    );
  }

  const Product = (props) => {
    const plus = () => {
        let prod = props.product;
        prod.votes = props.product.votes + 1;
        props.updateProduct(prod);
    };
    const minus = () => {
        let prod = props.product;
        prod.votes = props.product.votes ==0? 0: props.product.votes - 1;
        props.updateProduct(prod);
    };
    return (        
      <li>
        
        <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };
  

export default GroceryApp;
