const concludeTask = (atualiza, id) => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"))

    saveTasks[id].concluida = !saveTasks[id].concluida

    localStorage.setItem("tasks", JSON.stringify(saveTasks))

    atualiza()
}

const ConcludeButton = (atualiza, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')

    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concludeTask(atualiza, id))

    return botaoConclui
}

export default ConcludeButton