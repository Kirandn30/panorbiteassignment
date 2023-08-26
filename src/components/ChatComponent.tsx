import React, { useState } from 'react'
import { IconChevronDown, IconChevronUp, IconMessage } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { UserType } from '../redux/usersSlice';


export const ChatComponent = ({ setUserSelectedForChat}: {
    setUserSelectedForChat: React.Dispatch<React.SetStateAction<UserType | null>>
}) => {
    const {users,selectedUser} = useSelector((state:RootState)=>state.Users)
    const [chatExpanded, setChatExpanded] = useState(false)

  return (
      <div className='fixed bottom-0 right-10 z-10'>
          <div
              className='bg-blue-600 flex justify-between w-72 px-5 py-3 rounded-t-xl cursor-pointer hover:py-4 transform duration-200 ease-in-out'
              onClick={() => {
                  setChatExpanded(prev=>!prev)
              }}
          >
              <div className='flex gap-x-3'>
                  <IconMessage color='white' />
                  <h4 className='text-md text-white'>Chats</h4>
              </div>
              <div>
                  {chatExpanded ? <IconChevronDown color='white' /> : <IconChevronUp color='white' />}
              </div>
          </div>
          {chatExpanded && <div className='h-72 overflow-y-scroll scroll border-blue-600 border-[1px] bg-white py-3'>
              {users?.filter(user => user.id !== selectedUser?.id).map(user => {
                  return (
                      <div className='flex justify-between items-center px-5 hover:bg-blue-100 cursor-pointer py-2'
                          onClick={() => setUserSelectedForChat(user)}
                      >
                          <div className='flex gap-x-3 items-center'>
                              <img src={user.profilepicture} alt={user.name} className='w-8 h-8 rounded-full' />
                              <h3>{user.name}</h3>
                          </div>
                          <div className='h-2 w-2 rounded-full bg-green-600'/>
                      </div>
                  )
              })}
          </div>}
    </div>
  )
}
