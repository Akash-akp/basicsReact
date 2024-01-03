import { useState } from "react";

const Person = (props) => {

    const [title,setTitle] = useState(props.name);
    function deleteHandler(){
        setTitle('Birthday');
        console.log('delete clicked');
    }

    return (
        <div id="wholeCard" className="">
            <div className="flex justify-between items-center shadow-[0_35px_60px_100px_rgba(0,0,0,0.3)] rounded-xl p-6 bg-Secondary opacity-75 text-white my-4 border border-gray-500">
                <div >
                    {props.children}
                </div>
                <p className="text-right text-2xl ">
                    {title}
                </p>
                <i onClick={deleteHandler} className="fa-solid fa-trash"></i>
            </div>
        </div>
    );
}

export default Person;