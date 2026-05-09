import { useEffect, useState } from "react";

export default function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    return (
        <div>
            <h1>Products</h1>

            {products.map(product => (
                <div key={product.id}>
                    {product.title} - {product.category?.category}
                </div>
            ))}
        </div>
    );
}