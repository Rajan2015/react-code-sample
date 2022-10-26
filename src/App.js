import './App.css';
import React from 'react';
import GroceryApp  from './Problem1';
import Problem2 from './Problem2';
import { UserContext } from './UserProvider';
import Message from './Problem3';


function App() {
  const [currentProblem, setCurrentProblem] = React.useState(0);
  const userDetails = React.useContext(UserContext);
  const onChangeValue =  (event) => {
    setCurrentProblem(event.target.value);
  }

  return (
    <div className="">
      <p>Hello {userDetails.username}</p>
      <p>There are 3 set of problems that need to be fixed as below:</p>
      <div onChange={onChangeValue}>
        <input type="radio" value="1" name="problem" /> Problem 1
        <input type="radio" value="2" name="problem" /> Problem 2
        <input type="radio" value="3" name="problem" /> Problem 3
      </div>
    <p>================================================================================================</p>
    {currentProblem==="3" &&
<>
<p>
You have a GroceryApp component, which receives a list of products, each one with name and votes.
<br/> The app should render an unordered list, with a list item for each product. Products can be upvoted or downvoted.
<br/>By appropriately using React state and props, implement the upvote/downvote logic.
<br/> <br/> Keep the state in the topmost component, while the Product component should accept props.
</p>
     <GroceryApp
  products={[
    {id:1, name: "Oranges", votes: 2 },
    {id:2, name: "Bananas", votes: 5 }
  ]}
/>
</>}
    {currentProblem==="1" && <Problem2/>}
    {currentProblem==="2" && <Message/>}
       
    </div>
  );
}

export default App;
