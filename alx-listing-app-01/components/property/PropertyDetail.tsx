import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2 text-gray-600">
                <span className="text-yellow-500">{property.rating} stars</span>
                <span>
                    {property.address.city}, {property.address.country}
                </span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                    src={property.image}
                    alt={property.name}
                    className="col-span-2 w-full h-96 object-cover rounded-lg"
                />
                {/* Additional images */}
                {property.images?.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${property.name}-${i}`}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                ))}
            </div>

            {/* Description */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
                <ul className="flex flex-wrap gap-2">
                    {property.category.map((amenity, index) => (
                        <li
                            key={index}
                            className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm"
                        >
                            {amenity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;
