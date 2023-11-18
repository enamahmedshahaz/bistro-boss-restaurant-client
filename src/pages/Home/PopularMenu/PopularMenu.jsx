import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {

        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu);
            })

    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
                {
                    menu.map(item => <MenuItem
                        key={item._Id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;