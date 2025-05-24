import React from "react";

const GalleryCard = ({ gallery }) => {
  return (
    <>
      <div className="w-full rounded-2xl overflow-hidden bg-white shadow-md p-4">
        <h2 className="font-semibold">{gallery.name}</h2>
        <p className="text-sm text-gray-600">
          Artworks: {gallery.objectcount || "Unknown"}
        </p>
        <p className="text-sm text-gray-600">
          {gallery.url ? (
            <a
              href={gallery.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline font-semibold"
            >
              Explore the gallery online
            </a>
          ) : (
            "No link for this gallery"
          )}
        </p>
      </div>
    </>
  );
};

export default GalleryCard;
