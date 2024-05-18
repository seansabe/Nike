import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt={customerName} className="rounded-full w-[120px] object-cover" />
            <h4 className="font-palanquin font-bold text-xl mt-6">{customerName}</h4>
            <div className="mt-8 flex justify-start gap-1">
                {Array(rating).fill().map((_, index) => (
                    <img key={index} src={star} alt="star" />
                ))}
            </div>
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        </div>
    )
}

export default ReviewCard