import { useState } from "react";

const ProductForm = () =>{

    const [userName,setUserName] = useState('');
    const [date,setDate] = useState('');

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
        // console.log(event.target.value);
        console.log(userName);
    }

    const dateChangeHandler = async (event) =>{
        setDate(event.target.value);
        // console.log(event.target.value);
        console.log(date)
    }

    return (
        <form className="text-lg text-center">
            <input type="text" placeholder="Name" onChange={nameChangeHandler} className="m-2 px-2 text-white placeholder:text-gray-300 placeholder:text-center text-center w-full bg-Secondary focus:border-[0.5px] focus:bg-gray-900 focus:outline-none focus:ring-Other border-gray-500 rounded-lg"></input>
            <div className="flex items-center">
                <label className="text-gray-300 mx-2 w-full">
                    Date of Birth :-
                </label>
                <input type="date" onChange={dateChangeHandler} className="m-2 px-2 text-white placeholder:text-gray-300 placeholder:text-center text-center w-full bg-Secondary focus:border-[0.5pxNC] focus:bg-gray-900 focus:outline-none border-gray-500 [color-scheme:dark] rounded-lg"></input>
            </div>
            <button type="submit" className="m-2 border border-gray-800 bg-Secondary w-[200px] p-[2px] rounded-lg text-gray-300 focus:bg-gray-900">Add</button>
        </form>
    );
}

export default ProductForm;
