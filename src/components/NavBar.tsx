import { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { RootState } from '../redux';
import { IconChevronRight } from "@tabler/icons-react"
import OnClickPopover from './Modal';

const NavBar = ({ children }: { children: ReactNode }) => {

    const [active, setActive] = useState('')
    const { selectedUser } = useSelector((state: RootState) => state.Users)

    return (
        <div className='p-10'>
            <div className='flex'>
                <div className='h-screen p-10 grid items-center bg-gradient-to-b from-[#3C58C8] to-[#5E3CC9] min-w-[250px] rounded-3xl'>
                    <div className='relative bg-gra-600'>
                        <div className={`absolute transform duration-100 ease-in -right-14 ${active === "posts" ? "translate-y-16" : active === "gallery" ? "translate-y-32" : active === "todo" ? "translate-y-48" : "translate-y-0"}`}>
                            <div className='bg-white h-10 w-10 rounded-full flex justify-center items-center'>
                                <IconChevronRight />
                            </div>
                        </div>
                        {options.map((option, index) => (
                            <Link to={`/view/${selectedUser?.id}/${option.route}`}>
                                <div
                                    className={`${option.route === active ? "text-white" : "text-gray-400"} py-3 space-y-3 cursor-pointer relative`}
                                    onClick={() => setActive(option.route)}
                                >
                                    <h3 className='text-xl font-medium'> {option.label}</h3>
                                    {options.length - 1 !== index && <hr className='border-gray-400' />}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='w-full h-screen pl-10 '>
                    <div className='space-y-5'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-bold text-gray-600'>{options.find(heading => heading.route === active)?.label ?? "Profile"}</h3>
                            <OnClickPopover>
                            <div className='flex gap-x-3 items-center hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                                <img src={selectedUser?.profilepicture} alt={selectedUser?.name} className='w-10 h-10 rounded-full' />
                                <h3>{selectedUser?.name}</h3>
                            </div>
                            </OnClickPopover>
                        </div>
                        <hr className='border-gray-400' />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
};

const options = [
    {
        label: "Profile",
        route: ""
    },
    {
        label: "Posts",
        route: "posts"
    },
    {
        label: "Gallery",
        route: "gallery"
    },
    {
        label: "ToDo",
        route: "todo"
    },
]

export default NavBar
