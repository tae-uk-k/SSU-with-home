import React from 'react';
import { DropdownMenuProps } from '@/interfaces';

const DropdownMenu = ({label, options}: DropdownMenuProps) => {
    return (
        <div className='flex items-center justify-center w-50 h-12 bg-white rounded-lg shadow-lg text-xs'>
            <p className='pl-2 whitespace-nowrap'>{label}:</p>
            <select className='w-4/5 h-10 pl-5 pr-5 rounded-l-lg outline-none'>
                <option value=''>전체</option>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
};

export default DropdownMenu;