const Card = (props) => {
    return (
        <div className="mx-auto w-[500px] my-2 bg-Primary p-5 rounded-xl border border-gray-500">
            {props.children}
        </div>
    );
}

export default Card;