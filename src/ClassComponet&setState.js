import React from "react";

 class App extends React.Component{
  state ={
    count:2
  }; //state is a object, 바꿀,바뀔 데이터를 state 에 넣는다.
  add =()=>{
    this.setState(current =>({count:current.count +1}));
  };
  minus =()=>{
    this.setState(current=>({count:current.count-1}));
  }
  render(){
    return (
      <div>
      <h1>The number is : {this.state.count} </h1>
      <button onClick ={this.add}>Add</button> 
      <button onClick ={this.minus}>Minus</button>
      </div>
    );
  }
 }

export default App;
