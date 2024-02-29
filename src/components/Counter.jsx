import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/countSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    console.log(count);
    const dispatch = useDispatch()



    return (
        <div className="max-w-6xl mx-auto mt-20 ">
            <div className="w-[700px] h-72 mx-auto border-4 rounded-2xl border-y-stone-200 border-x-stone-400 p-4 ">
                <div className="flex justify-evenly">

                    <button className="w-[150px] bg-pink-300 px-4 py-1 rounded-lg text-lg font-medium" onClick={() => dispatch(increment())}>Increment</button>
                    <button className="w-[150px] bg-green-300 px-4 py-1 rounded-lg text-lg font-medium" onClick={() => dispatch(incrementByValue(10))}>Increment by 10</button>
                    <button className="w-[150px] bg-orange-300 px-4 py-1 rounded-lg text-lg font-medium" onClick={() => dispatch(decrement())}>Decrement</button>
                </div>

                <div>
                    <div className="flex justify-center items-center mt-20">
                        <div className="w-[100px] h-[100px] bg-yellow-300 rounded-full">
                             <h1 className="text-lg font-medium text-center">{count}</h1>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;