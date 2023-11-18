import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuCategory = ({ coverImg, coverTitle, coverDesc, items }) => {

    return (
        <div>

            {/* only show cover if title is passed */}

            {coverTitle && <Cover
                image={coverImg}
                title={coverTitle}
                description={coverDesc}
            ></Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-8'>
                {
                    items.map(item => <MenuItem
                        key={item._Id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </div>
    );
};

export default MenuCategory;


MenuCategory.propTypes = {
    coverImg: PropTypes.string,
    coverTitle: PropTypes.string,
    coverDesc: PropTypes.string,
    items: PropTypes.array,
}