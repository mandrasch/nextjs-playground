import React from "react";

interface RocketCardProps {
  name: string;
  description: string;
  first_flight: string;
}

const RocketCard: React.FC<RocketCardProps> = ({
  name,
  description,
  first_flight,
}) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6">
      <img
        className="w-full h-48 object-cover mb-6"
        src="https://picsum.photos/seed/picsum/400"
        alt="Rocket Image"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-700 font-bold mt-2">
          First Flight: {first_flight}
        </p>
        {/* You can add more details or customize the card as needed */}
      </div>
    </div>
  );
};

export default RocketCard;
