import { Link } from "react-router-dom";

const ArtCard = ({ art, onImageLoad, isReady }) => {
  return (
    <Link to={`/arts/${art.id}`}>
      <div className="relative group w-full rounded-2xl overflow-hidden cursor-pointer">
        {/* Image visible par défaut */}
        <img
          src={art.primaryimageurl}
          alt={`Image of ${art.title}`}
          onLoad={onImageLoad}
          className={`w-full h-52 object-cover rounded-2xl transition-filter duration-300 delay-100 group-hover:blur-sm ${isReady ? "opacity-100" : "opacity-0"}`}
        />

        {/* Overlay texte visible au hover */}
        <div
          className="
          absolute inset-0
          p-4
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-90
          text-white
          rounded-2xl
          flex flex-col
          bg-gray-900/90
          overflow-y-auto
        "
        >
          <h2 className="text-lg font-bold text-center mb-6 break-words">
            {art.title || "Untitled"}
          </h2>

          <p className="text-sm mb-1 break-words">
            <span className="font-semibold text-blue-400">Artist:</span>{" "}
            {art.people?.map((person) => person.name).join(", ") || "Unknown"}
          </p>

          <p className="text-sm mb-1 break-words">
            <span className="font-semibold text-blue-400">Culture:</span>{" "}
            {art.culture || "Unknown"}
          </p>

          <p className="text-sm break-words">
            <span className="font-semibold text-blue-400">Date:</span>{" "}
            {art.dated || "Unknown"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArtCard;
