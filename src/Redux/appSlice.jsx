import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
    isSideBarOpen:true
    },
    reducers:{

        toggleSideBar:(state,action)=>{

             state.isSideBarOpen=!state.isSideBarOpen;

        },
        closeMenu:(state,action)=>{

             state.isSideBarOpen=false;
        }
    }
})

export const {toggleSideBar,closeMenu} = appSlice.actions;
export default appSlice.reducer;