import useAuth from "../../hooks/useAuth";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;

    const { user } = useAuth();

    const handleAddToCart = (food) => {
        console.log('Add to cart:', food);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} alt={`image of ${name}`} /></figure>
            <p className="bg-slate-800 text-white font-semibold absolute right-0 mt-4 mr-4 p-2 rounded-md">${price}</p>
            <div className="card-body bg-[#F3F3F3]">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn text-[#BB8506] bg-[#E8E8E8] border-[#BB8506] border-b-2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;