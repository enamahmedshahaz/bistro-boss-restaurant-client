import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";

import "./Featured.css";

const Featured = () => {
    return (
        <section className="featured-section text-white mb-4 bg-fixed"> 
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            >
            </SectionTitle>

            <div className="md:flex justify-center items-center px-40 py-10 bg-slate-600 bg-opacity-40">
                <img className="w-[500px] rounded-md" src={featuredImage} alt="" />
                <div className="space-y-4 md: ml-5">
                    <p>March 20, 2023</p>
                    <h3 className="uppercase font-semibold">
                        Where can I get some?
                    </h3>
                    <p className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline uppercase border-0 border-b-2">Read More</button>
                </div>

            </div>

        </section>
    );
};

export default Featured;