import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { POST_PRODUCT_PENDING} from "../../redux-saga/product/action/action";

const ProductForm = () => {
    const name = useRef();
    const price = useRef();
    const desc = useRef();
    const dispatch = useDispatch();

    const addProduct = () => {
        let data = {
            name: name.current.value,
            price: price.current.value,
            desc: desc.current.value
        };

        dispatch({ type: POST_PRODUCT_PENDING, payload: data });
    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-header text-center" style={{backgroundColor: '#DADADA'}}>
                            <h2>Enter Your Product</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Product Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter product name" ref={name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price:</label>
                                    <input type="number" className="form-control" placeholder="Enter price" ref={price} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <input type="text" className="form-control" placeholder="Enter description" ref={desc} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button onClick={addProduct} className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
