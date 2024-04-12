// src/components/PropertyCard.tsx
import React from 'react';
import { Property } from '../types'; // Adjust the import path based on where you place your types

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-off-white">
      <img className="w-full" src={property.picture} alt={property.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{property.name}</div>
        <p className="text-gray-700 text-base">
          {property.postalCode}
        </p>
        <p className="text-gray-700 text-base">
          {property.latitude}
        </p> <p className="text-gray-700 text-base">
          {property.longitude}
        </p> <p className="text-gray-700 text-base">
          {property.price}
        </p> <p className="text-gray-700 text-base">
          {property.nbRoomsMin}
        </p> <p className="text-gray-700 text-base">
          {property.nbRoomsMax}
        </p> <p className="text-gray-700 text-base">
          {property.picture}
        </p>

        {/* Additional property details here */}
      </div>
    </div>
  );
};

export default PropertyCard;
