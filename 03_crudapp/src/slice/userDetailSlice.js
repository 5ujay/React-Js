import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk alway return a promise which give pending ,
// reject or fullfill to handle this we use extrareducer to handle thos 3 things

// Create Action
export const createUser = createAsyncThunk(
  "createdUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://67a24161409de5ed5254d393.mockapi.io/crud",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("error in creating user :", error);
    }
  }
);

// Read Action
export const readUser = createAsyncThunk(
  "readUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://67a24161409de5ed5254d393.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Error in reading user: " + error.message);
    }
  }
);

// Delete Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://67a24161409de5ed5254d393.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Error in deleting user: " + error.message);
    }
  }
);

// update Action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://67a24161409de5ed5254d393.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Error in deleting user: " + error.message);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // create user
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // read user
      .addCase(readUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.users = state.users.filter((user) => user.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;

export const {searchUser} = userDetail.actions