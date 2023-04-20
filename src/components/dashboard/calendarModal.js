import React, {useState} from 'react';

export const Modal =  (open) => {
    const [modal,setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
        {/* <button onClick={toggleModal}>
            Open
        </button> */}
        <div
            onClick={toggleModal}
            className="overflow-hidden">
        </div>
        <div className='' >
            <h2>Hello Modal</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
        </div>
        </>
    )
}