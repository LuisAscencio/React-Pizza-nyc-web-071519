import React from "react";

class PizzaForm extends React.Component {
  state = {
    foundPizzaTopping: "",
    foundPizzaSize: "",
    foundPizzaVeg: ""
  };

  componentDidUpdate(prevState) {
    if (prevState.foundPizza.id !== this.props.foundPizza.id) {
      this.setState({
        foundPizzaTopping: this.props.foundPizza.topping,
        foundPizzaSize: this.props.foundPizza.size,
        foundPizzaVeg: this.props.foundPizza.vegetarian
      });

      // console.log(
      //   "yeah",
      //   this.state.foundPizzaTopping,
      //   this.state.foundPizzaSize,
      //   this.state.foundPizzaVeg
      // );
    }
  }

  changeStateHandler = e => {
    console.log("changed", e.target.value);
    this.setState({
      foundPizzaTopping: e.target.value
    });
  };

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={this.changeStateHandler}
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.foundPizzaTopping}
          />
        </div>
        <div className="col">
          <select value={this.state.foundPizzaSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={this.state.foundPizzaVeg}
              checked={false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={this.state.foundPizzaVeg}
              checked={true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.props.submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
