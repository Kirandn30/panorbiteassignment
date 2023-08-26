import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import { RootState } from '../redux'
import { setSelectedUser } from '../redux/usersSlice'

export const Main = () => {

    const params = useParams()
    const { users } = useSelector((state: RootState) => state.Users)
    const dispatch = useDispatch()

    useEffect(() => {
        if (users && params.user) {
            const user  = users.find(user => user.id === Number(params.user))
            dispatch(setSelectedUser(user));
        }
    }, [params, users])

        return <Outlet/>
}
