import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const nameRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3001/post").then((res) => {
            setData(res.data);
        });
    };

    const handleSubmit = () => {
        const Data = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            desc: descRef.current.value,
        };

        axios.post("http://localhost:3001/post", Data).then((res) => {
            setData([...data, res.data]);
        });
    };

    const deleteData = (id) => {
        axios.delete(`http://localhost:3001/post/${id}`).then(() => {
            setData(data.filter((val) => val.id !== id));
        })
    };

    const filteredData = data.filter((item) => {
        return item.name.startsWith(inputValue.toLowerCase());
    });

    return (
        <>
            {/* -----from----- */}

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-light text-center">
                                Enter Your Product
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Product Name :- </label>
                                        <input type="text" className="form-control" placeholder="Enter product name" ref={nameRef} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price :- </label>
                                        <input type="number" className="form-control" placeholder="Enter price" ref={priceRef} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description :-</label>
                                        <input type="text" className="form-control" placeholder="Enter desc..." ref={descRef} />
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button onClick={handleSubmit} className="btn btn-success mx-3">Add In Product List</button>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Search Your Product :-</label>
                                        <input type="text" className="form-control" placeholder="Enter your productname" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----table----- */}

            <h1 className='mt-5 text-center' style={{ fontWeight: 'bold' }}>----------: Product List :----------</h1>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((val) => (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.desc}</td>
                            <td>
                                <button onClick={() => deleteData(val.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Product;