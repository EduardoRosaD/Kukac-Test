import api from '../../../config/server'

export  async function getPalindromo(start:number, end:number) : Promise<string[]>{
    const palindromoReturn =  await api.get(`palindromos?start=${start}&end=${end}`)
    console.log(palindromoReturn.data)
    return palindromoReturn.data
}
