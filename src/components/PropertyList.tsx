// src/components/PropertyList.tsx
import React from 'react';
import { Property } from '../types'; // Ensure the path matches where you placed your types
import PropertyCard from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <PropertyCard key={`${property.id}__${index}`} property={property} />
        ))}
      </div>
    );
  };




export default PropertyList;