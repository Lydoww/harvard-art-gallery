import React, { useEffect, useState } from "react";
import ImageModal from "../ui/ImageModal";

const ArtDetail = ({ art, toggleModal, showModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Image */}

      {art.primaryimageurl && (
        <img
          src={art.primaryimageurl}
          alt={art.title || "Artwork image"}
          onClick={toggleModal}
          className="w-full h-auto rounded-lg mb-6 object-contain cursor-pointer"
        />
      )}
      <ImageModal show={showModal} toggleModal={toggleModal}>
        <img
          src={art.primaryimageurl}
          alt={art.title || "Artwork image"}
          className="w-full h-auto rounded"
        />
      </ImageModal>

      {/* Titre */}
      <h1 className="text-3xl font-bold mb-4">{art.title || "Untitled"}</h1>

      {/* Artiste */}
      {art.people && art.people.length > 0 && (
        <p className="text-lg mb-2">
          <span className="font-semibold">Artist: </span>
          {art.people.map((person, idx) => (
            <span key={person.personid || idx}>
              {person.name}
              {idx < art.people.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}

      {/* Date */}
      {art.dated && (
        <p className="text-md mb-2">
          <span className="font-semibold">Date: </span>
          {art.dated}
        </p>
      )}

      {/* Technique */}
      {art.technique && (
        <p className="text-md mb-2">
          <span className="font-semibold">Technique: </span>
          {art.technique}
        </p>
      )}

      {/* Culture */}
      {art.culture && (
        <p className="text-md mb-4">
          <span className="font-semibold">Culture: </span>
          {art.culture}
        </p>
      )}

      {/* Description / Dimensions */}
      {art.description && <p className="mb-4 italic">{art.description}</p>}

      {art.dimensions && (
        <p className="mb-4 text-sm text-gray-600">
          <span className="font-semibold">Dimensions: </span>
          {art.dimensions}
        </p>
      )}

      {/* Lien vers la page officielle */}
      {art.url && (
        <a
          href={art.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View on Harvard Art Museums
        </a>
      )}
    </div>
  );
};

export default ArtDetail;
