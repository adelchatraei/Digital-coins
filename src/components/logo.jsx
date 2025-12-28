const Logo = (props) => {
    return (
        <section className="flex flex-col justify-center items-center">
            <img src={props.imagSrc} alt="" className="w-10 " />
            <div className="flex gap-2">
                <span>{props.faName}</span>
                <span className="font-semibold text-gray-500">
                    {props.enName}
                </span>
            </div>
        </section>
    );
};

export default Logo;
