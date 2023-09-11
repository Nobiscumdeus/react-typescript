import { MouseEvent, useState } from "react";
function ListingGrouping() {
    const items = [
        "Togo",
        "Benin Republic",
        "NIgeria",
        "Cote d'Voire ",
        "Ghana",
    ];

    const handleClick = (event: MouseEvent) => {
        console.log(event);
    };
    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li
                    //Dynamic adding of classes
                    className="list-group-item"
                    key={index}
                    onClick={handleClick}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

interface AnotherListProps {
    items: string[]; //COntains a string and an array
    heading: string;
    onSelectItem:(item:string)=>void; //A function is being utilized as a parameter
}

//A destructuring has been done below, hence it could have been props:AnotherListProps 
function AnotherList({ items, heading,onSelectItem }: AnotherListProps) {
    //paremeter called props eith its type before it
    const [selectedIndex, setSelectedIndex] = useState(-1); //-1 means nothing selected, 0 means the first index etc

    return (
        <div>
            <h5> {heading}</h5>
            <ul className="list-group">
                {/* If not for destructuring, code below would have been {props.items.map .....etc}*/}
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        
                        onClick={() => {
                            onSelectItem(item);
                            setSelectedIndex(index);

                        }}
                        
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnotherList;
