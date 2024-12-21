import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, createProduct, editProduct, removeProduct } from "./productAction";
import { IProduct } from "../../interfaces/IProduct";

type ProductState = {
	products: IProduct[];
	loading: boolean;
	error?: string | null;
};

const initialState: ProductState = {
	products: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(createProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(createProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
				state.loading = false;
				state.products.push(action.payload);
			})
			.addCase(createProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(editProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(editProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
				state.loading = false;
				const index = state.products.findIndex((product) => product.id === action.payload.id);
				if (index !== -1) {
					state.products[index] = action.payload;
				}
			})
			.addCase(editProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(removeProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(removeProduct.fulfilled, (state, action: PayloadAction<number>) => {
				state.loading = false;
				state.products = state.products.filter((product) => product.id !== action.payload);
			})
			.addCase(removeProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

const productReducer = productSlice.reducer;

export default productReducer;