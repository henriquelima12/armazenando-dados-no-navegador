import {handleNovoItem} from './componentes/criarTarefa.js'
import { carregaTask } from './componentes/carregarTarefa.js'

const newTask = document.querySelector("[data-form-button]")
newTask.addEventListener('click', handleNovoItem)

carregaTask()


