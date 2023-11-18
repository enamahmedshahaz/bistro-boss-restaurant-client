import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularMenu = data.filter(item => item.category === 'popular');
    //             setMenu(popularMenu);
    //         })

    // }, [])

    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
                {
                    popularMenu.map(item => <MenuItem
                        key={item._Id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;