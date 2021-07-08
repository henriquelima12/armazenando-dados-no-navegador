import { Task } from "./criarTarefa.js"

export const criarData = (data) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    const dataMoment = moment(data, 'DD/MM/YYYY')

    const date = document.createElement("li")
    
    const content = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`
    date.innerHTML = content

    tasks.forEach((tasks, id) => {
        const dia = moment(tasks.data, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)
        if(diff===0){
            date.appendChild(Task(tasks, id))
        }
    })

    return date

}