import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    foundPizza: {}
  };

  submitHandler = () => {
    console.log("patch!!!!");
  };

  foundPizzaHandler = foundPizzaId => {
    let foundPizza = this.state.pizzas.find(pizza => {
      return parseInt(foundPizzaId.dataset.id) === pizza.id;
    });
    this.setState({
      foundPizza: foundPizza
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas").then(response => {
      response.json().then(data => {
        this.setState({
          pizzas: data
        });
        // console.log("pizza", this.state.pizzas);
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          submitHandler={this.submitHandler}
          foundPizza={this.state.foundPizza}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          foundPizzaHandler={this.foundPizzaHandler}
        />
      </Fragment>
    );
  }
}

export default App;
