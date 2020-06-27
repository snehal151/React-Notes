import React from "react";

//make sure add props as a parameter.
function ChildComponent(props) {
  return (
    <div>
      {/*
   when we click on the button in the cc if we want to execute the method defined in the parent component.
   child component calls a parent component method and this is achieved using props.here we pass method itself as 
   prop to the child component.in parent component add attribute.
   */}
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
