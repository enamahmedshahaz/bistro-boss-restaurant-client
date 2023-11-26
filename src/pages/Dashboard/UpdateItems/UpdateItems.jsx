import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const menuItem = useLoaderData();


    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { _id, name, image, recipe, category, price } = menuItem;

    const onSubmit = async (data) => {
        console.log('form data: ', data);
        //image upload to imagebb and get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        // console.log('response from image bb: ', res.data);

        if (res.data.success) {
            //now send the item data to the server with image url 
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            //  console.log('response after saving menu item :', menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/manageItems');
            }
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Update Items</title>
            </Helmet>

            <SectionTitle heading="Update an Item" subHeading="What's updated?" ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Current Image</span>
                        </label>
                        <img className="w-52 rounded-md mb-5" src={image} alt={`img of ${name}`} />
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-primary">
                        Update Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>

                </form>
            </div>
        </div>
    );

};

export default UpdateItems;