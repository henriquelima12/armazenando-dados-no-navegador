export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data) => {
        if(datasUnicas.indexOf(data.data) === -1){
            datasUnicas.push(data.data)
        }
    })

    return datasUnicas
}

export const ordenaData = (data) => {
    data.sort((a, b) => {
        const firstData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const secondData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return firstData - secondData
    })
}