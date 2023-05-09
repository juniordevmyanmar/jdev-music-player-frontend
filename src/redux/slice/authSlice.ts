import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../config";
import { RootState } from "../app/store";

interface userStateType {
  name: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
  dateofBirth?: Date | null;
}

interface loginType {
  email: string;
  password: string;
}

interface initialStateType {
  data: string;
  loading: boolean;
  error: any;
}
const initialState: initialStateType = {
  data: '',
  loading: false,
  error: "",
};

//register a user
export const registerUser = createAsyncThunk<string,userStateType>(
  "auth/register",
  async (
    { name, email, password, address, phone, dateofBirth },
    thunkAPI
  ) => {
    try {
      const response = await axios({
        method: "post",
        url: `${URL}/register`,
        data: {
          name,
          email,
          password,
          address,
          phone,
          dateofBirth,
        },
      });
      localStorage.setItem('data',JSON.stringify(response.data))
      return response.data
    } catch (error: any) {
      console.log(error.response.data.error[0].message.value);
      return thunkAPI.rejectWithValue(error.response.data.error[0].message.value);
    }
  }
);

//user login
export const loginUser = createAsyncThunk<string,loginType>(
  "auth/login",
  async (
    { email, password },
    thunkAPI
  ) => {
    try {
      const response = await axios({
        method: "post",
        url: `${URL}/login`,
        data: {
          email,
          password,
        },
      });
      localStorage.setItem('data',JSON.stringify(response.data))
      return response.data
    } catch (error: any) {
      // console.log(error)
      // console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;

    });
    builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;



//selectors 

export const getUser = (state: RootState) => state.user