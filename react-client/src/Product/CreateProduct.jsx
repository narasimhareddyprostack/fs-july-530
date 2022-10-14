import React, { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'
const CreateProduct = () => {
    let [product, setProduct] = React.useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })
    let [submitted, setSubmitted] = useState(false)
    let updateData = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setProduct({
                    ...product,
                    image: reader.result
                });
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    let submitHandler = (event) => {
        event.preventDefault();
        let url = 'http://127.0.0.1:5000/api/products/'
        Axios.post(url, product).then((response) => {
            setSubmitted(true)
        }).catch(() => { })

    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        <pre>{JSON.stringify(submitted)}</pre>
        {
            submitted ? <>
                <Navigate to="/products" />
            </> : <>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h5>Create Product</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input name="name" type="text" className="form-control" placeholder="Product Name" onChange={updateData} />
                                        </div>
                                        <div className="form-group">
                                            {/*  <input name="image" type="text" className="form-control" placeholder="Image" onChange={updateData} /> */}
                                            <input name="image" type="file" className="form-control-file" placeholder="Product Name"  onChange={changeImage} />
                                        </div>
                                        <div className="form-group">
                                            <input name="price" type="number" className="form-control" placeholder="Price" onChange={updateData} />
                                        </div>
                                        <div className="form-group">
                                            <input name="qty" type="number" className="form-control" placeholder="QTY" onChange={updateData} />
                                        </div>
                                        <div className="form-group">
                                            <input name="info" type="text" className="form-control" placeholder="Information" onChange={updateData} />
                                        </div>
                                        <input type="submit" className="btn btn-success" value="Create Product" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        }

    </div>
}

export default CreateProduct
