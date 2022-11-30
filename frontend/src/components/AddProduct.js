import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [add, setAdd] = useState(true);
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        setAdd(false)
        if (add) {
            await axios.post('http://localhost:5000/', {
                title: title,
                price: price
            });

            navigate("/");
        }
       
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Product</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <input
                        className="input"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div id="saveBtn" className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
