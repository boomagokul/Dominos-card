import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPizza } from "../../Redux/Dominos/dominos.actions";

const Dominos = () => {
    let pizzaState = useSelector((state) => {
        return state.Pizza;
    });

    let dispatch = useDispatch();

    let buyyingPizza = () => {
        dispatch(buyPizza());
    };
    return (
        <React.Fragment>
            <h1 className="bg-primary text-center">Dominos</h1>
            <div className="d-flex m-auto ml-auto">
                <img
                    src={
                        "https://www.dominos.co.in/blog/wp-content/uploads/2021/12/Dominos-Winter-Sale-Offers.jpg"
                    }
                    width={500}
                    height={700}
                />
                <div>
                    <h3>Dominos</h3>
                    <h5>Available Pizzas</h5>
                    <h5>No of Pizzas Available:- {pizzaState.count}</h5>

                    <button className="btn btn-primary" onClick={buyyingPizza}>
                        Buy Now
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dominos;