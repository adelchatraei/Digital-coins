const Change = ({ change }) => {
    const isValid = Number.isFinite(change);
    const isZero = isValid && change === 0;

    const changeClass = isZero
        ? "text-gray-400"
        : change > 0
        ? "text-green-500"
        : "text-red-500";

    const changeText = isZero
        ? "0%"
        : isValid
        ? `${change > 0 ? "▲" : "▼"} ${Math.abs(change).toFixed(2)}%`
        : "---";

    return (
        <span
            className={`flex justify-center items-center text-sm font-medium ${changeClass}`}
        >
            {changeText}
        </span>
    );
};

export default Change;
