import React, { useState } from "react";
import { useLoaderData, Form, redirect, useNavigate } from 'react-router-dom'

const ProductEdit = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    const [data, setData] = useState(product);

    const onInputChange = (event) => {
        console.log(event.target + " : " + event.target.value);
        const { name, value } = event.target;
        if (name === "stocked") {
            setData({ ...data, [name]: value === "true" });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    return (
        <>
            <Form method="post">
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={data.category}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        id="price"
                        name="price"
                        value={data.price}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="stocked">Stocked:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="stocked"
                                value={true}
                                checked={data.stocked}
                                onChange={onInputChange}
                            />
                            In Stock
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="stocked"
                                value={false}
                                checked={!data.stocked}
                                onChange={onInputChange}
                            />
                            Out of Stock
                        </label>
                    </div>
                </div>
                <button type="submit">Save</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    Cancel
                </button>
            </Form>
        </>
    )
}
export default ProductEdit
export const putProduct = async(data, id) => {
    try {
        const response = await fetch(`/products/`+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update product');
        }

    }catch (error) {
        console.error('Error:', error)
    }
}
export const save = async ({ request, params }) => {
    const {id} = params
    const formData = await request.formData()
    let product = Object.fromEntries(formData)
    //console.log("save"+JSON.stringify(product));
    if(product.stocked === "true"){
        product.stocked = true;
    }else{
        product.stocked = false;
    }
    if (!product) {
        throw new Error('Error in editing the product ')
    }
    product = { id: params.id, ...product }
    await putProduct(product,id)
    return redirect(`/products/${id}`)
}