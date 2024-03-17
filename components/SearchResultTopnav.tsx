import React from 'react'
import { SearchResultTopnavProps } from '@/interfaces';

const SearchResultTopnav = ({ searchValue }: SearchResultTopnavProps) => {
    return (
        <div className='w-full'>
            {
                <h1 className='text-2xl'>{searchValue}에 대한 검색결과입니다.</h1>
            }
        </div>
    );
};

export default SearchResultTopnav;