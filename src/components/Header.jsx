import React from "react";

const GalleryHeader = ({
    selectPictures,
    setSelectPictures,
  handleDeleteClick,
}) => {
  return (
    <nav className="py-4 px-6">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {selectPictures.length === 0 ? (
            "Gallery"
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
          className="text-red-500 font-medium hover:underline"
          onClick={handleDeleteClick}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default GalleryHeader;