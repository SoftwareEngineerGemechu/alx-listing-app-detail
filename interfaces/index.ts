export interface Address {
    city: string;
    country: string;
  }

  export interface Review {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }

  export interface PropertyProps {
    name: string;
    description: string;
    rating: number;
    price: number;
    address: Address;
    category: string[];
    image: string;
    images?: string[];
    reviews?: Review[];
}
