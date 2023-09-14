import api from '../../../config/server'
import { Carro } from '../classes/Carro'
import { Moto } from '../classes/Moto'


export async function salvarCarro({ modelo, anoFabricacao, marca, quantidadePortas }: Carro): Promise<void> {
    if (quantidadePortas > 4 || quantidadePortas < 2) return alert("Quantidade de portas inválida!")
    try {
        const carroObj = new Carro(modelo, Number(anoFabricacao), marca, Number(quantidadePortas))
        const carroReturn = await api.post(`veiculos/carro`, carroObj)
        console.log(carroReturn.data)
        return alert("Carro salvo com sucesso!")
    } catch (error) {
        console.log(error)
    }
}

export async function salvarMoto({modelo, anoFabricacao, rodas, passageiros, marca }: Moto): Promise<void> {
    if (rodas > 2 || rodas < 2) return alert("Motos devem ter 2 rodas!")
    if ( passageiros > 2 || passageiros < 1) return alert("Motos devem ter 1 ou 2 passageiros!")
    try {
        const moto = new Moto(modelo, Number(anoFabricacao),  Number(rodas), Number(passageiros), marca)
        const motoReturn = await api.post(`veiculos/moto`, moto)
        console.log(motoReturn.data)
        return alert("Moto salva com sucesso!")
    } catch (error) {
        console.log(error)
    }
}
