import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { UserType, setSelectedUser } from '../redux/usersSlice';
import { findNextTwoObjects } from '../utils/helperFunctions';
import { useNavigate } from 'react-router-dom';

const OnClickPopover = ({ children }: { children: ReactNode }) => {
    const { selectedUser, users } = useSelector((state: RootState) => state.Users)
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const [nextUsers, setNextUsers] = useState<UserType[]>([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        setIsPopoverVisible(!isPopoverVisible);
    };

    useEffect(() => {
        if (users && selectedUser) {
            const result = findNextTwoObjects(users, selectedUser.id)
            setNextUsers(result)
        }
    }, [selectedUser])


    return (
        <div className="relative inline-block">
            <button onClick={handleButtonClick}>
                {children}
            </button>
            {isPopoverVisible && (
                <div className="absolute top-full right-0 mt-2 p-4 bg-white rounded-2xl shadow-2xl w-80 z-10">
                    <img
                        src={selectedUser?.profilepicture}
                        alt={selectedUser?.name}
                        className='w-24 h-24 rounded-full block m-auto mt-6'
                    />
                    <div>
                        <h2 className='text-center text-gray-600 text-xl'>{selectedUser?.name}</h2>
                        <h2 className='text-center text-gray-400 text-base'>{selectedUser?.email}</h2>
                    </div>
                    <div className='py-3'>
                        <hr className='' />
                    </div>
                    <div className='space-y-5'>
                        {nextUsers.map((user, index) => (
                            <button
                                onClick={() => {
                                    navigate(`/view/${user.id}`)
                            }}
                            >
                                <div className='flex gap-x-3 pl-14'>
                                    <img
                                        src={user.profilepicture}
                                        alt={user.name}
                                        className='h-8 w-8 rounded-full'
                                    />
                                    <h2>{user.name}</h2>
                                </div>
                                {nextUsers.length - 1 !== index && <div className='pt-3'>
                                    <hr />
                                </div>}
                            </button>
                        ))}
                        <div className='text-center'>
                            <button
                                className='bg-red-500 rounded-2xl text-white px-3 py-1'
                                onClick={() => {
                                    dispatch(setSelectedUser(null))
                                    navigate('/')
                                }}
                            >
                                    Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnClickPopover;