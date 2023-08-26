import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { SimpleMap } from '../components/MapComponent';
import { ChatComponent } from '../components/ChatComponent';
import { UserType } from '../redux/usersSlice';
import { IndividualChat } from '../components/IndividualChat';

const Profile = () => {

  const { selectedUser } = useSelector((state: RootState) => state.Users)
  const [userSelectedForChat, setUserSelectedForChat] = useState<UserType | null>(null)


  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-2'>
        <div className='pt-10 pb-5'>
          <img
            src={selectedUser?.profilepicture}
            alt={selectedUser?.name}
            className='h-48 w-48 rounded-full block m-auto'
          />
        </div>
        <div className='space-y-5'>
          <h2 className='text-center font-bold text-gray-600 text-2xl'>{selectedUser?.name}</h2>
          <div className='flex justify-center gap-x-3'>
            <div className='text-right font-semibold text-gray-400 text-xl space-y-3'>
              <h3>Username :</h3>
              <h3>e-mail :</h3>
              <h3>Phone :</h3>
              <h3>website :</h3>
            </div>
            <div className='font-bold text-gray-600 text-xl space-y-3'>
              <h3>{selectedUser?.username}</h3>
              <h3>{selectedUser?.email}</h3>
              <h3>{selectedUser?.phone}</h3>
              <h3>{selectedUser?.website}</h3>
            </div>
          </div>
          <hr className='border-gray-400 w-10/12 m-auto' />
        </div>
        <div className='space-y-5 mt-2'>
          <h2 className='text-center font-medium text-gray-400 text-xl'>Company</h2>
          <div className='flex justify-center gap-x-3'>
            <div className='text-right font-semibold text-gray-400 text-xl space-y-3'>
              <h3>Name :</h3>
              <h3>catchphrase :</h3>
              <h3>bs :</h3>
            </div>
            <div className='font-bold text-gray-600 text-xl space-y-3'>
              <h3>{selectedUser?.company.name}</h3>
              <h3>{selectedUser?.company.catchPhrase}</h3>
              <h3>{selectedUser?.company.bs}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='space-y-5 pl-10 pt-10 text-left'>
          <h2 className='font-medium text-gray-400 text-xl'>Address</h2>
          <div className='flex justify-start gap-x-3'>
            <div className='text-right font-semibold text-gray-400 text-xl space-y-3'>
              <h3>Street :</h3>
              <h3>Suite :</h3>
              <h3>City :</h3>
              <h3>Zipcode :</h3>
            </div>
            <div className='font-bold text-gray-600 text-xl space-y-3'>
              <h3>{selectedUser?.address.street}</h3>
              <h3>{selectedUser?.address.suite}</h3>
              <h3>{selectedUser?.address.city}</h3>
              <h3>{selectedUser?.address.zipcode}</h3>
            </div>
          </div>
        </div>
        <div className=''>
          {selectedUser &&
            <SimpleMap
              zoom={10}
            center={{ lat: Number(selectedUser.address.geo.lat.replace("hotlink-ok", '')), lng: Number(selectedUser.address.geo.lng.replace("hotlink-ok", '')) }}
            />}
          <div className='flex gap-x-3 justify-end pr-10 pt-3'>
            <p className='text-sm text-gray-400'>Lat: <strong className='text-gray-700 text-sm'>{selectedUser?.address.geo.lat}</strong></p>
            <p className='text-sm text-gray-400'>Lat: <strong className='text-gray-700 text-sm'>{selectedUser?.address.geo.lng}</strong></p>
          </div>
        </div>
      </div>
      <ChatComponent setUserSelectedForChat={setUserSelectedForChat} />
      {userSelectedForChat && <IndividualChat userSelectedForChat={userSelectedForChat} setUserSelectedForChat={setUserSelectedForChat} />}
    </div>
  )
}

export default Profile;