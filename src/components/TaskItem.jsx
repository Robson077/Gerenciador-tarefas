
import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "completa" : "Não completa"}</p>
        </>
    )
}

export default TaskItem