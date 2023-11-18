import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import pageCoverImg from "../../../assets/menu/banner3.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from "../../../hooks/useMenu";

import dessertCoverImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaCoverImg from "../../../assets/menu/pizza-bg.jpg"
import saladCoverImg from "../../../assets/menu/salad-bg.jpg"
import soupCoverImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [menu] = useMenu();
    const offeredItems = menu.filter(item => item.category === 'offered');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const saladItems = menu.filter(item => item.category === 'salad');
    const soupItems = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover
                image={pageCoverImg}
                title={"Menu"}
                description={"Would you like to try a dish?"}
            ></Cover>

            <SectionTitle
                heading="Don't Miss"
                subHeading="Today's Offer"
            >
            </SectionTitle>

            <MenuCategory
                items={offeredItems}
            ></MenuCategory>

            <MenuCategory
                coverImg={dessertCoverImg}
                coverTitle={"dessert"}
                coverDesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={dessertItems}
            ></MenuCategory>

            <MenuCategory
                coverImg={pizzaCoverImg}
                coverTitle={"pizza"}
                coverDesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={pizzaItems}
            ></MenuCategory>

            <MenuCategory
                coverImg={saladCoverImg}
                coverTitle={"salad"}
                coverDesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={saladItems}
            ></MenuCategory>

            <MenuCategory
                coverImg={soupCoverImg}
                coverTitle={"soup"}
                coverDesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={soupItems}
            ></MenuCategory>

        </div>
    );
};

export default Menu;