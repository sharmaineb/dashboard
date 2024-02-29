import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImage from '../public/profile.png';

import { IoCamera } from "react-icons/io5";
import { FaMoneyBill } from 'react-icons/fa';
import { GiRaceCar } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi'
import { IoMdHome } from 'react-icons/io';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-gray-900 border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-slate-700 text-white p-3 rounded-lg inline-block'>
                        <IoCamera size={20} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <IoMdHome size={20} />
                    </div>
                </Link>
                <Link href='/school'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <HiOutlineAcademicCap size={20} />
                    </div>
                </Link>
                <Link href='/movies'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <BiCameraMovie size={20} />
                    </div>
                </Link>
                <Link href='/sports'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <GiRaceCar size={20} />
                    </div>
                </Link>
                <Link href='/finance'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FaMoneyBill size={20} />
                    </div>
                </Link>
            </div>
            <div className='mt-auto'>
                <Link href='/profile'>
                    <div className='bg-blue-200 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block'>
                        <Image src={ProfileImage} alt="Profile" width={20} height={20} />
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar;

