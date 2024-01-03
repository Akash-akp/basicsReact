
const PersonBirthday = (props) => {

    const day = props.day;
    const month = props.month;
    const year = props.year;

    return (
        <div className="text-center flex justify-center items-center h-[90px] w-[90px] p-2 bg-Tertiary rounded-lg border border-gray-500 text-white text-sm" >
            <div>
                <div className="text-[15px] font-bold leading-none">{month} </div>
                <div className="text-[12px] font-md">{year} </div>
                <div className="text-[22px] font-extrabold">{day} </div>
            </div>
        </div>
    );
}

export default PersonBirthday;