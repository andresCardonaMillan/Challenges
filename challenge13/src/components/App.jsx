import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices/counterSlices";

export const Counter = () => {
    const {counter} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>
        <h1> APP </h1>
        <hr />
        <span>Counter is: {counter} </span>
        <button className="btn btn-primaty" onClick={() => dispatch(increment())}>+1</button>
        </>
    )

}