const deleteTask = (atualiza, id) => {
    const index = id

    const saveTasks = JSON.parse(localStorage.getItem("tasks"))

    saveTasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(saveTasks))

    atualiza()
}

const DeleteButton = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', () => deleteTask(atualiza, id))

    return botaoDeleta
}

export default DeleteButton