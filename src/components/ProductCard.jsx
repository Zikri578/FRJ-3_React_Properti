import React, { useState } from 'react';
import MyButton from "./MyButton";

export default function ProductCard(props) {

    const [quantity, setQuantity] = useState(1);

    function pengurangan() {
        if (quantity < 1) {
            return
        }
        setQuantity(quantity - 1);
    }

    function penambahan() {
        setQuantity(quantity + 1);
    }

    return (
        <div className="product_card">

            <img src={props.image} alt="" />

            <div className="pc_content">
                <h1>{props.name}</h1>
                <p> Rp. {props.price} </p>

                <div className="input_quantity">
                    <button onClick={pengurangan}> - </button>
                    <input type="number" value={quantity} />
                    <button onClick={penambahan}> + </button>
                </div>

                <MyButton content={"Beli Sekarang"} bgColor={"orange"} color={"white"} />

            </div>

        </div>
    )
}