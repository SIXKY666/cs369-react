import React from "react";
import { useLoaderData, Form, redirect } from 'react-router-dom'
const ProductEdit = () =>{
    const product = useLoaderData()
    return(
        <>
            <Form className="product-form">
                {product ? (
                    <>
                        <h2>Edit {product.name}</h2>
                        <div>
                            <span>Name:</span>
                            <input type={"name"} value={product.name} />
                        </div>
                        <div>
                            <span>Category:</span>
                            <input type={"text"} value={product.category} />
                        </div>
                        <div>
                            <span>Price:</span>
                            <input type={"text"} value={product.price} />
                        </div>
                        <div>
                            <input type={"radio"} value={true} />Available
                            <input type={"radio"} value={false} />Out of stock
                        </div>
                        <div>
                            <span>Detail:</span>
                            <textarea></textarea>
                        </div>
                    </>
                ) : (
                    <div>No such product!</div>
                )}
            </Form>
        </>
    )
}
export default ProductEdit
export const save = async({params}) =>{
    const { id } = params
    const res = await fetch('/products/' + id, {
        method: "PUT"
    })

    if (!res.ok) {
        throw Error("Could not update product")
    }
    return redirect(`/products`)
}