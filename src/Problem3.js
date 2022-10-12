import './App.css';
import React from 'react';
function Child() {
    return (
      <>
        <div>Child</div>
        <button>Change Parent Value</button>
      </>
    );
  }
  
  function Message() {
    const [show, setShow] = React.useState(false)
  
    return (
      <>
      <h4>The Message component contains an anchor element and a paragraph below the anchor. Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:
      </h4>
      <ul>
        <li>At the start, the paragraph should not be rendered.</li>
        <li> After a click, the paragraph should be rendered.</li>
        <li>After another click, the paragraph should not be rendered.</li>
        </ul>
        <p>Finish the Message component by implementing this logic.</p>

    <React.Fragment>
          <a onClick={()=>{
            setShow(!show);
          }} href="#">Want to buy a new car? Click me</a>
          {show && <p>Call +11 22 33 44 now!</p>}
        </React.Fragment>
      </>
    );
  }

export default Message;
