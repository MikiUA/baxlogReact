import React, { useCallback, useContext, useState } from 'react'
import TASK from '../TASK/TASK'
import { itemContext } from '../context/ItemListContext';
import EditTaskModalUI from './EditTaskModalUI';
import ModalContext from './ModalContext';

export default function EditTaskModal({ isOpen, task, taskid, closeModal }) {
    const [item, setItem] = useState(task || new TASK());
    const [newTagValueandError, setNewTagValue] = useState(["", false]);
    const updateCurrentItem = useCallback((key, event) => {
        const newVal = event.target.value;
        let newItem = { ...item };
        newItem[key] = newVal;
        setItem(newItem);
    }, [item]);
    const addTag = useCallback((event) => {
        const newVal = event.target.value;
        if (item.tags.indexOf(newVal) > -1) {
            setNewTagValue([newVal, "Item already exists"]);
        }
        else {
            let newItem = { ...item };
            newItem.tags.push(newVal);
            setItem(newItem);
            setNewTagValue(["", false]);
        }
    }, [item])
    const delTag = useCallback((newVal) => {
        if (item.tags.indexOf(newVal) <= -1) return;
        let newItem = { ...item };
        newItem.tags = newItem.tags.filter((tag) => (tag !== newVal));
        setItem(newItem);
    }, [item])
    const cancel = useCallback(() => {
        setItem(task);
    }, [task])
    const { updateItem, addItem } = useContext(itemContext);
    const accept = () => {
        taskid ? updateItem(taskid, item) : addItem(item);
        closeModal();
    }
    return (
        <ModalContext
            {...{ item, baseItem: item, updateCurrentItem, newTagValueandError, addTag, delTag }}
        // item={item}
        // updateCurrentItem={updateCurrentItem}
        >
            <EditTaskModalUI
                isOpen={isOpen}
                accept={accept}
                closeModal={closeModal}
                cancel={cancel}
            />
        </ModalContext>
    )
}
