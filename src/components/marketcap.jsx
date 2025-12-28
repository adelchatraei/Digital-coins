const MarketCap = ({ value }) => {
    const isValid = Number.isFinite(value);

    const text = isValid ? value.toLocaleString("fa-IR") : "---";

    return (
        <span className="flex justify-center items-center text-sm font-medium text-gray-700">
            {text}
            {isValid && <span className="mr-1 text-xs text-gray-500"></span>}
        </span>
    );
};

export default MarketCap;
