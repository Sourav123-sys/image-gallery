
"use client"


import React from "react";
import { AiFillDelete } from 'react-icons/ai';
const GalleryHeader = ({
    selectPictures,
    setSelectPictures,
    handleDeleteFile,
}) => {
    return (
        <nav className="py-4 px-6">
            <article className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold ">
                    {selectPictures.length === 0 ? (
                        <span className=" animate-pulse">Gallery</span>
                    ) : (
                        <label
                            htmlFor="select"
                            className="flex flex-row justify-between items-center gap-x-4"
                        >
                            <input
                                type="checkbox"
                                name="select"
                                id="select"
                                checked={selectPictures.length > 0}
                                className="h-5 w-5 accent-blue-500 cursor-pointer"
                                onChange={() => setSelectPictures([])}
                            />
                            {selectPictures.length} Files Selected
                        </label>
                    )}
                </h1>
                <button
  className="text-red-500 font-medium hover:bg-red-600 hover:text-white hover:scale-105 transform transition-transform hover:duration-300 p-2 rounded-lg border border-red-600 hover:border-red-700 flex items-center justify-center"
  onClick={handleDeleteFile}
>
<AiFillDelete/> Delete files
</button>


            </article>
        </nav>
    );
};

export default GalleryHeader;