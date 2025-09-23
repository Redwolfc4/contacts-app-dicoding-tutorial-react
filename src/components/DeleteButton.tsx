import React, { JSX } from "react";
interface DeleteButtonProps {
    id: number;
    onDelete: (id: number) => void;
}


/**
 * A button to delete a contact item.
 * 
 * @param {number} id The id of the contact item to be deleted.
 * @param {(id: number) => void} onDelete A callback function to delete the contact item.
 * @returns {JSX.Element} A JSX element representing the delete button.
 */
function DeleteButton({ id, onDelete }: DeleteButtonProps): JSX.Element {
    return (
        <button className="contact-item__delete" onClick={() => onDelete(id)}>
            X
        </button>
    );
}

export default DeleteButton;