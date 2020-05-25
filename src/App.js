import React from "react";
import { connect } from "react-redux";
import { buyCake,sellCake,sellIceCream,buyIceCream } from "./redux";
import "./styles.css";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Number of Cakes: {props.numOfCakes} </h1>
      <button style={{marginRight:"2%"}} onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.sellCake}>Sell Cake</button>
      <h1>Number of Donuts: {props.iceCream}</h1>
      <button style={{marginRight:"2%"}} onClick={props.buyIceCream}>Buy Ice Cream</button>
      <button onClick={props.sellIceCream}>Sell Ice Cream</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    numOfCakes: state.cake.numOfCakes,
    iceCream: state.iceCream.numOfIceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: dispatch(buyCake())
  };
};

export default connect(
  mapStateToProps,
  {buyCake,sellCake,buyIceCream,sellIceCream}
)(App);
