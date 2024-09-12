

// import MenuList from "./menu-list";
// import { useState } from "react";
// import {FaMinus, FaPlus} from 'react-icons/fa';

// export default function MenuItem({ item }) {
//     const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//     function handleToggleChildren(getCurrentLabel) {
//         setDisplayCurrentChildren(prevState => ({
//             ...prevState,
//             [getCurrentLabel]: !prevState[getCurrentLabel],
//         }));

//         console.log(displayCurrentChildren);
//     }

//     return (
//         <li>
//             <div style={{ display: 'flex', gap: '20px' }}>
//                 <p>{item.label}</p>
//                 {
//                     item && item.children && item.children.length ? (
//                         <span onClick={() => handleToggleChildren(item.label)}>
//                             {displayCurrentChildren[item.label] ? <FaMinus color= "#ffffff" size={25} /> : <FaPlus color= "#ffffff" size={25}/>}
//                         </span>
//                     ) : null
//                 }
//             </div>
//             {
//                 item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
//                     <MenuList list={item.children} />
//                 ) : null
//             }
//         </li>
//     );
// }


import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';


export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren(prevState => ({
            ...prevState,
            [getCurrentLabel]: !prevState[getCurrentLabel],
        }));

        console.log(displayCurrentChildren);
    }

    return (
        <li className="menu-item">
            <div className="menu-item-content">
                <p className="menu-item-label">{item.label}</p>
                {
                    item && item.children && item.children.length ? (
                        <span 
                            className="menu-item-toggle"
                            onClick={() => handleToggleChildren(item.label)}
                        >
                            {displayCurrentChildren[item.label] ? (
                                <FaMinus size={25} />
                            ) : (
                                <FaPlus size={25} />
                            )}
                        </span>
                    ) : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                    <div className="menu-list">
                        <MenuList list={item.children} />
                    </div>
                ) : null
            }
        </li>
    );
}
