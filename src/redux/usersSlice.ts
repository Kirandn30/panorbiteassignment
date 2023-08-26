import { createSlice } from '@reduxjs/toolkit';

export interface UserDetailState {
    loading: boolean;
    users: null | UserType[];
    selectedUser: null | UserType
}

const initialState: UserDetailState = {
    loading: true,
    users: null,
    selectedUser:null
};

export const UserSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
    },
});


export const { setUsers, setLoading, setSelectedUser } = UserSlice.actions;

export const UserSliceReducer = UserSlice.reducer;

export interface UserType {
    id: number
    name: string
    username: string
    email: string
    profilepicture: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}
