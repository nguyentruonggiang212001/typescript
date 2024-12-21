import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProduct";
import instance from "../../services";


export const fetchProducts = createAsyncThunk<IProduct[]>("/products/fetchProducts", async () => {
	const { data } = await instance.get("/products");
	console.log(data);
	return data;
});

export const fetchProductById = createAsyncThunk<IProduct, number | string>(
  "products/fetchProductById",
  async (id) => {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  }
);


export const createProduct = createAsyncThunk<IProduct, IProduct>("/products/createProduct", async (product) => {
	const { data } = await instance.post("/products", product);
	return data;
});

export const editProduct = createAsyncThunk<IProduct, {id: number, product: IProduct}>("/products/editProduct", async ({ id, product }) => {
	const { data } = await instance.patch(`/products/${id}`, product);
	return data;
});

export const removeProduct = createAsyncThunk<number, number>("/products/removeProduct", async (id) => {
	await instance.delete(`/products/${id}`);
	return id;
});