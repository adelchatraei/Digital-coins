// const PriceUSDT = (props) => {
//     return <section>{props.children}</section>;
// };

// export default PriceUSDT;

const PriceUSDT = ({ price }) => {
    const isValid = Number.isFinite(price);

    const text = isValid
        ? price.toLocaleString("fa-IR", {
              maximumFractionDigits: 6,
          })
        : "---";

    return (
        <span className="flex justify-center items-center text-sm font-medium text-gray-900">
            {text}
        </span>
    );
};

export default PriceUSDT;
