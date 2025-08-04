const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
    if (!reviews.length) return <p className="mt-8 text-gray-500">No reviews yet.</p>;

    return (
        <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                    <div className="flex items-center">
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="font-bold">{review.name}</p>
                            <p className="text-yellow-500">{review.rating} stars</p>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;
