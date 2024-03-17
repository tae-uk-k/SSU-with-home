import React from "react";
import { RoomCardProps } from "@/interfaces";
import Image from "next/image";

const RoomCard = ({ searchResult }: any) => {
  console.log(searchResult);
  const { name, phone, email, imageSrc } = searchResult;

  return (
    <div
      style={{ height: "450px" }}
      className="w-fit rounded-lg border-slate-600 border-2 flex-col m-3"
    >
      <Image src={imageSrc} alt={name} width={300} height={300} />
      <div className="h-full">
        <p>Title: {name}</p>
        <p>address: {phone}</p>
        <p>area: {email}</p>
      </div>
    </div>
  );
};

export default RoomCard;
