import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResponseProducts } from "../modules/products/types/products.type";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: (headers) => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                headers.set("Content-Type", "application/json");
                if (token) {
                    headers.set("authorization", `Bearer ${token}`);
                }
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IResponseProducts[], void>({
            query: () => `/products`,
        }),
    }),
});

export const {
    useGetProductsQuery,
} = baseApi;