import { createSlice } from "@reduxjs/toolkit";

const initailUserList = [
  {
    id: 1,
    name: "Sujay Pagam",
    email: "sujaypagam111@gmail.com",
  },
  {
    id: 2,
    name: "Prashnat Nawale",
    email: "prashantnawale123@gmail.com",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: initailUserList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);

      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const findUser = state.find((user) => user.id);
      if (findUser) {
        return state.filter((user) => user.id != action.payload);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
