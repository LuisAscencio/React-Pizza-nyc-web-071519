import React from "react";
import Pizza from "../components/Pizza";
const PizzaList = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {props.pizzas.map(pizza => {
          return (
            <Pizza
              foundPizzaHandler={props.foundPizzaHandler}
              key={pizza.id}
              id={pizza.id}
              topping={pizza.topping}
              size={pizza.size}
              vegetarian={pizza.vegetarian}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default PizzaList;
