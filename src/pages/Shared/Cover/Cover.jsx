const Cover = ({image,  title, description }) => {
    return (
        <div className="hero h-[400px] bg-fixed" style={{ backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default Cover;