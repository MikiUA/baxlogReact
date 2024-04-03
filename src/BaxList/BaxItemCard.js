import React, { useContext, useState } from 'react'
import { itemContext } from '../context/ItemListContext';
import BaxItemCardUI from './BaxItemCardUI';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

export default function BaxItemCard({ item, id }) {
    const { updateItem, deleteItem } = useContext(itemContext)
    const [isEditing, setIsEditing] = useState(false);
    function onDelete() {
        deleteItem(id)
    }
    function onEdit() {
        setIsEditing(true);
    }
    function onAccomplish() {
        updateItem(id, Object.assign(item, { "status": item.status === "accomplished" ? null : "accomplished" }));
    }
    return <>
        <EditTaskModal isOpen={isEditing} task={item} taskid={id} closeModal={() => setIsEditing(false)} />
        <BaxItemCardUI
            {...{ item, isAccomplished: (item.status === "accomplished"), onDelete, onEdit, onAccomplish }}
        />
    </>
}
