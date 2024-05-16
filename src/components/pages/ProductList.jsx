import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from "../../redux-saga/product/action/action";
import img from "../../img/product.png";

const ProductList = () => {
    const [inputValue, setInputValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const dispatch = useDispatch();

    const [view, setView] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const product = useSelector((state) => state.userReducer);

    const handleDelete = (id) => {
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: id });
    };

    const handleUpdate = () => {
        dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view });
        setIsModalOpen(false);
    };

    const handleView = (id, index) => {
        const data = product.product[index];
        setView(data);
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setInputValue(value);
        } else if (name === 'price') {
            setPriceValue(value);
        }
    };

    const filteredData = product.product.filter((item) => {
        return (
            item.name.toLowerCase().startsWith(inputValue.toLowerCase()) &&
            (priceValue === '' || parseInt(item.price) <= parseInt(priceValue))
        );
    });

    return (
        <div className="container">
            <h1 className="my-5 text-center" style={{ fontWeight: 'bold' }}>Product List</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Search Your Product :-</label>
                    <input type="text" className="form-control" placeholder="Enter your product name" name="name" value={inputValue} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Search Your Price :-</label>
                    <input type="number" className="form-control" placeholder="Enter your price" name="price" value={priceValue} onChange={handleInputChange} />
                </div>
            </form>
            <div className="table-responsive mt-3">
                <table className="table table-bordered">
                    <thead className="bg-primary text-light" >
                        <tr className="text-center">
                            <th style={{background:'#DADADA'}}>ID</th>
                            <th style={{background:'#DADADA'}}>Product Name</th>
                            <th style={{background:'#DADADA'}}>Price</th>
                            <th style={{background:'#DADADA'}}>Description</th>
                            <th style={{background:'#DADADA'}}>Image</th>
                            <th style={{background:'#DADADA'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((val, index) => (
                            <tr className="text-center" key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>${val.price}</td>
                                <td>{val.desc}</td>
                                <td style={{ width: '30%' }}>
                                    <img src={img} style={{ width: '50%' }} alt="Product" />
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(val.id)} className="btn btn-danger">Delete</button>
                                    <button onClick={() => handleView(val.id, index)} className="btn btn-primary ms-2">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {view && (
                <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor: '#ECECEC'}}>
                                <h5 className="modal-title">Update Product</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Product Name</label>
                                        <input type="text" className="form-control" name="name" value={view.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input type="number" className="form-control" name="price" value={view.price} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <input type="text" className="form-control" name="desc" value={view.desc} onChange={handleInputChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
