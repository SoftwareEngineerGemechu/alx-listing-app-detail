import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "OceanViewVilla",
    description: "Beautiful villa with a view of the ocean and modern amenities.",
    rating: 5,
    price: 250,
    address: { city: "Miami", country: "USA" },
    category: ["Wi-Fi", "Pool", "Kitchen", "Parking"],
    image: "/images/villa-main.jpg",
    images: ["/images/villa1.jpg", "/images/villa2.jpg"],
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/avatar1.jpg",
        rating: 5,
        comment: "Amazing stay! Highly recommended."
      },
      {
        name: "Jane Smith",
        avatar: "/images/avatar2.jpg",
        rating: 4,
        comment: "Great location and beautiful house."
      }
    ]
  }
];
