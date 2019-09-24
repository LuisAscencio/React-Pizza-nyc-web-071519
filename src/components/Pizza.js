import React from "react";

const Pizza = props => {
  return (
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "yes" : "no"}</td>
      <td>
        <button
          data-id={props.id}
          type="button"
          className="btn btn-primary"
          onClick={e => {
            props.foundPizzaHandler(e.target);
            // console.log(e.target.dataset.id);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
