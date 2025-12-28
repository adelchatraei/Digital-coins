import Rows from "./components/rows";

function App() {
    return (
        <div className=" max-w-3/4 mx-auto">
            <div className=" grid grid-cols-6 items-center py-3 text-sm  border-b-2 border-[#ddd] bg-gray-100">
                <nav className="flex flex-col justify-center items-center font-semibold">
                    رمزارز
                </nav>
                <nav className="flex flex-col justify-center items-center font-semibold ">
                    قیمت لحظه‌ای‌تومان
                </nav>
                <nav className="flex flex-col justify-center items-center font-semibold">
                    قیمت‌ لحظه‌ای تتر
                </nav>
                <nav className="flex flex-col justify-center items-center font-semibold">
                    تغییرروزانه(تتر)
                </nav>
                <nav className="flex flex-col justify-center items-center font-semibold">
                    ارزش بازار(دلار)
                </nav>
                <nav className="flex flex-col justify-center items-center font-semibold">
                    عملیات
                </nav>
            </div>
            <div>
                <Rows />
            </div>
        </div>
    );
}

export default App;
