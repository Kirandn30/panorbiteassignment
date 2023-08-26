import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { setSelectedUser } from '../redux/usersSlice'
import { useNavigate } from 'react-router-dom'
import bg from "../assets/bgimage.jpg"

const UserSelection = () => {
    const { users } = useSelector((state: RootState) => state.Users)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div
            className='h-screen flex justify-center items-center bg-cover'
            style={{ backgroundImage: `url(${bg})`}}
        >
            <div className='w-full max-w-xl rounded-xl overflow-hidden bg-white shadow-2xl'>
                <div className='bg-gray-100 p-8'>
                    <h1 className='text-2xl font-bold text-center text-gray-500'>Select an account</h1>
                </div>
                <div className='px-10 h-[500px] overflow-y-scroll scroll'>
                    {users?.map(user => (
                        <div onClick={() => {
                            dispatch(setSelectedUser(user))
                            navigate(`/view/${user.id}`)
                        }}>
                            <div className='py-3 flex gap-x-5 items-center hover:scale-105 duration-200 cursor-pointer'>
                                <img
                                    src={user.profilepicture}
                                    alt={user.name}
                                    className='h-10 w-10 rounded-full'
                                />
                                <h2>{user.name}</h2>
                            </div>
                            <hr className='w-full' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserSelection