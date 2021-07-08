import ConcludeButton from './concluirTarefa.js'
import DeleteButton from './deletarTarefa.js'
import { carregaTask } from './carregarTarefa.js'

export const handleNovoItem = (event) => {
    event.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem("tasks")) || []
    const input = document.querySelector("[data-form-input]")
    const valor = input.value

    const calendar = document.querySelector("[data-form-date]")
    const date = moment(calendar.value)
    const data = date.format('DD/MM/YYYY')
    const horario = date.format("HH:mm")

    const concluida = false;

    const dados = {
        valor, 
        data,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados] 

    localStorage.setItem("tasks", JSON.stringify(tarefasAtualizadas))

    input.value = ""

    carregaTask()
}

export const Task = ({valor, horario, concluida}, id) => {
    const task = document.createElement('li')

    const content = `<p class="content">${horario} * ${valor}</p>`

    if(concluida){
        task.classList.add('done')
    }
    task.classList.add('task')

    task.innerHTML = content

    task.appendChild(ConcludeButton(carregaTask, id))
    task.appendChild(DeleteButton(carregaTask, id))

    return task

}