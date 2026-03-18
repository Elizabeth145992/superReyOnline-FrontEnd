"use client"

import { useGetProductsQuery } from "@/src/lib/baseApi";

export function ProductList() {
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading) return <p>Cargando...</p>

    return (
        <div>
            {data?.map((product) => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    );
}