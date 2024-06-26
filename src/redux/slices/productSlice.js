import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosinstance";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId }, { rejectWithValue, dispatch }) => {
    try {
      const method = productId ? "put" : "post";
      const endpoint = productId ? `/products/${productId}` : "/products";
      const { data } = await axiosInstance[method](endpoint, { product });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("Error saving product");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  'product/fetchHomePageProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/products');
      return data;
    } catch (error) {
      return rejectWithValue('Error fetching products');
    }
  }
);

export const deleteProduct = createAsyncThunk("product/deleteProduct", async ({ id }, { rejectWithValue, dispatch }) => {
  try {
    await axiosInstance.delete(`/products/${id}`);
    dispatch(fetchHomePageProducts());
  } catch (error) {
    return rejectWithValue('Error fetching products');
  }
})


const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    homePageProducts: [],
    selectedProduct: null,
  },
  reducers: {
    setSelectProduct: (state, action) => {
      state.selectedProduct = action.payload;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(saveProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchHomePageProducts.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(fetchHomePageProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.homePageProducts = action.payload.products;
        state.productCategories = action.payload.categories;
        // state.error = null;
      })
      .addCase(fetchHomePageProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { setSelectProduct } = productSlice.actions;



