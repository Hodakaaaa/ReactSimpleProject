
import Modal from "./modal";
import { useState } from "react";
import './modal.css';

export default function ModalTest(){
    const [showModalPopup, setShowModalPopUp] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopUp(!showModalPopup);
    }

    function onClose(){
        setShowModalPopUp(false);
    }


    return(
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal
                header={<h1>Customized Header</h1>} 
                footer={<h1>Customized Footer</h1>} 
                onClose={onClose}
                body={
                    <div>Customized Body</div>
                }/>
            }
        </div>
    );
}