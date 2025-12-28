const PriceTMN = ({ price }) => {
    const isValid = Number.isFinite(price);

    const text = isValid ? price.toLocaleString("fa-IR") : "---";

    return (
        <span className="flex justify-center items-center text-sm font-medium text-gray-900 ">
            {text}
            {isValid && (
                <span className="mr-1 text-xs text-gray-500">تومان</span>
            )}
        </span>
    );
};

export default PriceTMN;
