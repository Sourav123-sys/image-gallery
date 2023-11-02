
"use client"
import React from "react";
import Image from "next/image";
import Drop from "./Drop";


const ImageGallery = ({
  image,
  index,
  selectPictures,
  setSelectPictures,
  handleDragStart,
  handleDrop,
  dragging,
  draggedIndex,
}) => {

  
  return (
    <div
      key={index}
      className={
        "group relative before:content-[''] before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-move" +
        (index === 0 ? " md:col-span-2 md:row-span-2" : " col-span-1") +
        (selectPictures.find((photo) => photo.id === image.id)
          ? " opacity-100"
          : " hover:before:bg-black/50")
      }
      draggable={true}
      onDragStart={() => handleDragStart(image)}
      onDrop={() => handleDrop(index)}
    >
      <Image
        src={image.picture}
        alt={image.id}
        height={index === 0 ? 390 : 184}
        width={index === 0 ? 390 : 184}
        className={
          "h-full w-full max-w-full rounded-lg object-contain border-2" +
          " " +
          (selectPictures.find((photo) => photo.id === image.id) &&
            "opacity-70")
        }
      />
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectPictures.find((photo) => photo.id === image.id)
            ? "opacity-100"
            : "opacity-0")
        }
        checked={
          selectPictures.find((photo) => photo.id === image.id) ? true : false
        }
        onChange={() => {
          if (selectPictures.find((photo) => photo.id === image.id))
            setSelectPictures(
              selectPictures.filter((photo) => photo.id !== image.id)
            );
          else setSelectPictures([...selectPictures, image]);
        }}
      />
      <Drop
        dragging={dragging}
        draggedIndex={draggedIndex}
        image={image}
      />
    </div>
  );
};

export default ImageGallery;
