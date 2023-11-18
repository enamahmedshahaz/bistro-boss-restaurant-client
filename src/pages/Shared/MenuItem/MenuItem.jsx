

const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="flex">

            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px] mr-5" src={image} alt="" />

            <div className="flex">

                <div>
                    <h3 className="uppercase text-gray-600 font-semibold">{name}------------------</h3>
                    <p className="text-gray-500 text-sm">{recipe}</p>
                </div>

                <div>
                    <p className="text-yellow-500">{price}</p>
                </div>

            </div>

        </div>
    );
};

export default MenuItem;