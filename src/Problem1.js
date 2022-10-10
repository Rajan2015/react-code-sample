import './App.css';
import React from 'react';
function GroceryApp(props) {
    let [products, setProducts] = React.useState(props.products);
    return (
      <>
         <ul>
    <li>
      <span>Oranges</span> - <span>votes: 1</span><button>+</button> <button>-</button>
    </li>
    <li>
      <span>Bananas</span> - <span>votes: 0</span><button>+</button> <button>-</button>
    </li>
  </ul>
      </>
    );
  }

  const Product = props => {
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
    };
    const minus = () => {
      // Call props.onVote to decrease the vote count for this product
    };
    return (
      <li>
        <span>{/* Product name */}</span> - <span>votes: {/* Number of votes*/}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };
  

export default GroceryApp;
