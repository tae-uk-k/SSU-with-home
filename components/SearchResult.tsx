import React from "react";
import { SearchResultProps } from "@/interfaces";
import RoomCard from "./RoomCard";

const SearchResult = ({ searchResult }: any) => {
  return (
    <div className="flex flex-wrap justify-center">
      {searchResult.map((result: any) => (
        <RoomCard key={result.id} searchResult={result} />
      ))}
    </div>
  );
};

export default SearchResult;
