import { ordenaData, removeDatasRepetidas } from "../service/data.js"
import { criarData } from "./criarData.js"

export const carregaTask = () => {
    const list = document.querySelector("[data-list]")

    const saveTasks = JSON.parse(localStorage.getItem("tasks")) || []

    list.innerHTML = " "
    const datasUnicas = removeDatasRepetidas(saveTasks)
    ordenaData(datasUnicas)
    datasUnicas.forEach((dia) => {
        list.appendChild(criarData(dia))
    })
}