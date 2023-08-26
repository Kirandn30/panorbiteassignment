import React, { useRef, useState } from 'react'
import { UserType } from '../redux/usersSlice'
import { IconChevronDown, IconChevronUp, IconSend, IconX } from '@tabler/icons-react'
import spacetime from 'spacetime'

export const IndividualChat = ({ userSelectedForChat, setUserSelectedForChat }: {
    userSelectedForChat: UserType
    setUserSelectedForChat: React.Dispatch<React.SetStateAction<UserType | null>>
}) => {

    const [chatExpanded, setChatExpanded] = useState(false)
    const [conversation, setConversation] = useState(dummyChat)
    const [message, setMessage] = useState('')
    const divRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className='fixed bottom-0 right-1/4 z-10'>
            <div
                className='bg-blue-600 flex justify-between w-72 px-5 py-2 rounded-t-xl cursor-pointer hover:py-3 transform duration-200 ease-in-out'
                onClick={() => {
                    setChatExpanded(prev => !prev)
                }}
            >
                <div className='flex gap-x-3 items-center'>
                    <img src={userSelectedForChat.profilepicture} alt={userSelectedForChat.name} className='h-8 w-8 rounded-full' />
                    <h4 className='text-md text-white'>{userSelectedForChat.name}</h4>
                </div>
                <div className='flex items-center gap-x-2'>
                    {chatExpanded ? <IconChevronDown color='white' /> : <IconChevronUp color='white' />}
                    <IconX color='white' size={20} onClick={() => setUserSelectedForChat(null)} />
                </div>
            </div>
            {chatExpanded && <div className='h-72 border-blue-600 border-[1px] bg-white py-3 relative'>
                <div className='grid gap-y-3 h-60 pb-28 overflow-y-scroll scroll px-2' ref={divRef}>
                    {conversation.map(chat => {
                        if (chat.sender === "user1") {     
                            return (
                                <div className='max-w-[200px] justify-self-end p-3 pb-1 bg-white rounded-2xl rounded-br-[0px] space-y-3 shadow-lg'>
                                    <p className='text-xs'>{chat.message}</p>
                                    <p className='text-[10px] text-gray-500 text-right'>
                                        {spacetime(chat.timestamp).format("nice")}
                                    </p>
                                </div>
                            )
                        } else {
                            return (
                                <div className='max-w-[200px] justify-self-start p-3 pb-1 bg-blue-100 rounded-2xl rounded-bl-[0px] space-y-3 shadow-lg'>
                                    <p className='text-xs'>{chat.message}</p>
                                    <p className='text-[10px] text-gray-500 text-right'>
                                        {spacetime(chat.timestamp).format("nice")}
                                    </p>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='absolute bottom-0 w-full'>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            if (!message) return
                            setConversation(prev => {
                                return [...prev, { message, sender: "user1", timestamp: new Date().toDateString() }]
                            })
                            setMessage('')
                            if (!divRef.current) return
                            divRef.current.scrollTop = divRef.current.scrollHeight;
                        }}
                    >
                        <hr className='border-gray-600'/>
                        <input
                            type="text"
                            className='w-full p-3 border-transparent focus:border-transparent focus:border-teal focus:outline-none focus:ring-0'
                            placeholder='Your message here...'
                            onChange={(event) => setMessage(event.target.value)}
                            value={message}
                        />
                        <button className='absolute top-3 right-2 hover:scale-110 active:scale-90' type='submit'>
                            <IconSend color='blue'/>
                        </button>
                    </form>
                </div>
            </div>}
        </div>
    )
}


const dummyChat = [
    {
        sender: 'user1',
        message: 'Hey there! How are you?',
        timestamp: '2023-08-24 10:00:00'
    },
    {
        sender: 'user2',
        message: 'Hi! Im doing well, thanks.How about you?',
        timestamp: '2023-08-24 10:05:00'
    },
    {
        sender: 'user1',
        message: "I'm good too, thanks for asking.",
        timestamp: '2023-08-24 10:10:00'
    },
    {
        sender: 'user2',
        message: 'Thats great to hear!',
        timestamp: '2023-08-24 10:15:00'
    },
];
