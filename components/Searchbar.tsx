'use client';

import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu';
import { DropdownMenuProps, SearchbarProps } from '@/interfaces';

const Searchbar = ({ onSearchChange, searchValue }: SearchbarProps) => {
    const [search, setSearch] = useState('');

    const dropdownMenus: DropdownMenuProps[] = [
        {
            label: '가격대',
            options: [
                '10만원 이하', '10~30만원', '30~50만원', '50~100만원',
            ],
        },
        {
            label: '집 종류',
            options: [
                '원룸', '투룸', '쓰리룸', '오피스텔', '아파트',
            ],
        },
        {
            label: '지역',
            options: [
                '서울', '경기', '인천', '대전', '대구', '부산', '울산', '광주', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
            ],
        },
        {
            label: '침대 개수',
            options: [
                '1개', '2개',
            ],
        },
        {
            label: '욕실 개수',
            options: [
                '1개', '2개',
            ],
        }
    ];

    return (
        <div className='flex items-center justify-center h-20 m-10 space-x-4'>
            {/* Search input */}
            <div className='flex items-center justify-center h-12 bg-white rounded-lg shadow-lg'>
                <input className='w-4/5 h-10 pl-5 pr-5 rounded-l-lg outline-none' placeholder='검색어를 입력하세요.'
                onChange={onSearchChange} />
                <button className='w-1/5 h-fit bg-sky-400 rounded-lg text-white font-medium'>검색</button>
            </div>

            {/* Dropdown menus */}
            {
                dropdownMenus.map((dropdownMenu, index) => {
                    return <DropdownMenu key={index} label={dropdownMenu.label} options={dropdownMenu.options} />
                })
            }
        </div>
    )
};

export default Searchbar;