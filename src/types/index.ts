export type PropertyType = 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial';
export type PropertyStatus = 'sale' | 'rent';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq ft
    garage?: number;
    yearBuilt?: number;
  };
  amenities: string[];
  type: PropertyType;
  status: PropertyStatus;
  images: string[];
  agent: {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    rating: number;
  };
  isFeatured?: boolean;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialization: string[];
  listingsCount: number;
  rating: number;
  reviewsCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'agent' | 'admin';
}
