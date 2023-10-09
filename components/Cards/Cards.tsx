import React from "react";
import Image from "next/image";
export type CardsProps = {
  rendering: { componentName: string };
  backgroundColor: string;
  label: string;
  title: string;
  authorName: string;
  description: string;
  date: string;
  numberofCards: number;
};

const Cards = ({
  backgroundColor,
  label,
  title,
  authorName,
  description,
  date,
  numberofCards,
}: CardsProps) => {
  return (
    <div className="cards-container flex flex-wrap">
      {/* -------- CARDS -------- */}
      {Array(numberofCards)
        .fill(0)
        .map((temp, i) => (
          <div
            className="card rounded-lg shadow-lg max-w-sm m-4 hover:cursor-pointer"
            key={i}
          >
            <Image
              src="https://picsum.photos/200/300"
              alt="card-image"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-detail-container p-4">
              <p className="text-teal-400 ">{label}</p>
              <h3 className="font-bold text-xl">{title}</h3>
              <span className="text-gray-500">
                <strong>By</strong>
                {authorName}
              </span>
              <p className="txt-xs break-words">{description}</p>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
