import api from '../../../config/server'

export  async function getNumNotas(valorPago:number, valorCompra:number) : Promise<string[]>{
    const notaReturn =  await api.get(`notas?valorPago=${valorPago}&valorCompra=${valorCompra}`)
    console.log(notaReturn.data)
    return notaReturn.data
}
