import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/${id}`);
        getProducts();
    }

    return (
        <div>
            <h4>Products</h4>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-small is-success">Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList