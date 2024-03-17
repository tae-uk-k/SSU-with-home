"use client";

import Topnav from "@/components/Topnav";
import Searchbar from "@/components/Searchbar";
import SearchResultTopnav from "@/components/SearchResultTopnav";
import SearchResult from "@/components/SearchResult";
import { SearchResults, SearchResultProps } from "@/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";

const searchResult: SearchResults[] = [
  {
    id: 1,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 2,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 3,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 4,
    title: "서울시 강남구",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 5,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 6,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
  {
    id: 7,
    title: "서울시 강남구 자취방",
    imagesrc: "https://via.placeholder.com/300x300",
    address1: "서울시 강남구",
    address2: "역삼동 123-456",
    price: 100000,

    room: 1,
    bathroom: 1,
    area: 10,
  },
];

export default function Home() {
  const [search, setSearch] = useState("dddd");
  const [users, setUsers] = useState([]);

  const func = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const imageUrl = "https://via.placeholder.com/300x300";
    const data2 = res.data.map((item: any) => {
      // item.imageSrc = imageUrl;
      return { ...item, imageSrc: imageUrl };
    });

    setUsers(data2);
  };

  console.log(users);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    func();
  }, []);
  return (
    <main className="max-w-7xl x-auto">
      <Topnav />
      <Searchbar onSearchChange={handleInputChange} searchValue={search} />
      <SearchResult searchResult={users} />
    </main>
  );
}
