

"use client"

import React, { useState } from "react";

 import ImageGallery from "./ImageGallery";
 import ImageUpload from "./ImageUpload";
 import  Header from "./Header";

import { Inter } from "next/font/google";
import images from "@/data/images";
import toast from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

const Gallery = () => {
    const [selectPictures, setSelectPictures] = useState([]);
  const [pictures, setPictures] = useState(images);

    const [dragging, setDragging] = useState(false);
    const [draggedImage, setDraggedImage] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null);
  
    const handleFileUpload = (e) => {
      const selectedFiles = e.target.files;
  
      const newImages = Array.from(selectedFiles).map((file, index) => {
        const id = pictures.length + index + 1;
        const picture = URL.createObjectURL(file);
  
        return { id, picture };
      });
  
      setPictures([...pictures, ...newImages]);
      toast('Image Uploaded.', {
        duration: 3000, // 3 seconds
        style: {
          background: 'green',
          color: 'white',
        },
      });
    };
  
    const handleDeleteFile = () => {
      const updatedImages = pictures.filter(
        (image) => !selectPictures.some((selected) => selected.id === image.id)
      );
  
      setPictures(updatedImages);
      setSelectPictures([]);
      toast('Image Deleted.', {
        duration: 3000, // 3 seconds
        style: {
          background: 'red',
          color: 'white',
        },
      });
    };
  
    const handleDragStart = (image) => {
      setDragging(true);
      setDraggedImage(image);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
      e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
    };
  
    const handleDrop = (targetIndex) => {
      setDragging(false);
  
      if (draggedImage) {
        const updatedImages = pictures.filter(
          (image) => image.id !== draggedImage.id
        );
        updatedImages.splice(targetIndex, 0, draggedImage);
  
        setPictures(updatedImages);
        setDraggedImage(null);
      }
    };
  
    return (
      <main
        className={`min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4 ${inter.className}`}
      >
        <section className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
          <div className="flex flex-col gap-y-2">
          <Header
            selectPictures={selectPictures}
            setSelectPictures={setSelectPictures}
            handleDeleteFile={handleDeleteFile}
          />
            <hr />
            <section className="h-full w-full p-6">
              <div
                className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
                onDragOver={handleDragOver}
              >
                {pictures.map((image, index) => (
                  <ImageGallery
                    key={index}
                    image={image}
                    index={index}
                    selectPictures={selectPictures}
                    setSelectPictures={setSelectPictures}
                    handleDragStart={handleDragStart}
                    handleDrop={handleDrop}
                    dragging={dragging}
                    draggedIndex={draggedIndex}
                  />
                ))}
                <ImageUpload handleFileUpload={handleFileUpload} />
              </div>
            </section>
          </div>
        </section>
      </main>
    );
};
export default Gallery;