import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux";
import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Number of Cakes: {props.numOfCakes} </h1>
      <button>Buy Cake</button>
      <h1>Number of Donuts: </h1>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: dispatch(buyCake())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
