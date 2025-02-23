import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../stores/StoreContext'

export default observer(() => {
    const store = useStore()
    const [task, setTask] = useState('')

    return (
        <div>
            <h2>Список задач</h2>
            <h2>{store.name}</h2>

            <input value={task} onChange={(e) => setTask(e.target.value)} />
            <button
                onClick={() => {
                    store.setName(task)
                }}
            >
                Добавить задачу
            </button>
        </div>
    )
})
