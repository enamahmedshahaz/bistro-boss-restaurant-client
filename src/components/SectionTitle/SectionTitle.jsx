import PropTypes from 'prop-types';


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 w-3/12 mx-auto text-center">
               <p className="text-amber-600 mb-3 text-lg"> ---{subHeading}---</p>
              <h2 className="uppercase text-3xl border-y-2 py-2">  {heading}</h2>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}