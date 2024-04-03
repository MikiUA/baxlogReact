import React, { useContext, useState } from 'react'
import NavbarUI from './NavbarUI'
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import { filterContext } from '../context/FilterContext';

export default function Navbar() {
    const [isAddingTask, setIsAddingTask] = useState(false);
    const { filter, setFilter } = useContext(filterContext);
    return <>
        <EditTaskModal
            isOpen={isAddingTask} closeModal={() => setIsAddingTask(false)}
        />
        <NavbarUI
            onAddTask={() => setIsAddingTask(true)} currentAction={filter} setCurrentAction={setFilter}
        />
    </>
}
