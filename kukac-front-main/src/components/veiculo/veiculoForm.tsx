import { salvarCarro, salvarMoto } from "./actions/actions"
import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'

import { Carro } from "./classes/Carro"
import api from '../../config/server'
import { Moto } from "./classes/Moto"




export default function VeiculoForm() {
    const { veiculoModalState,
        setVeiculoModalState,
        veiculoState,
        setVeiculoState }: any = useContext(HomeContext)

    function handleVeiculoParams(e: any) {
        console.log(veiculoState)
        setVeiculoState({
            ...veiculoState,
            [e.target.name]: e.target.value
        })
    }
    function handleClear() {
        setVeiculoState()
    }
    function handleModalState(tipo: string): void {
        setVeiculoModalState(tipo)
    }
    function showCarInput(modalState: string): string {
        if (modalState == "carro") {
            return "display block"
        } else {
            return "hidden"
        }
    }
    function showMotoInput(modalState: string): string {
        if (modalState == "moto") {
            return "display block"
        } else {
            return "hidden"
        }
    }
    function handleVeiculoForm(e: any, tipo: string) {
        e.preventDefault()
        if (tipo == "carro") {
            salvarCarro(veiculoState)
        } else {
            salvarMoto(veiculoState)
        }
    }


    return (
        <div className={MainContStyle}>
            <h1 className={TitleStyle}>Atividade 3</h1>
            <div className={InputsSetterContlStyle}>
                <div className={InputsLabelStyle}>
                    <label>Carro</label>
                    <input type="checkbox" checked={veiculoModalState === "carro"} name="carro" onChange={() => handleModalState("carro")}></input>
                </div>
                <div className={InputsLabelStyle}>
                    <label>Moto</label>
                    <input type="checkbox" checked={veiculoModalState === "moto"} name="moto" onChange={() => handleModalState("moto")}></input>
                </div>
            </div>
            <label>Modelo</label>
            <input name="modelo" onChange={handleVeiculoParams} className={InputStyle}></input>
            <label>Marca</label>
            <input name="marca" onChange={handleVeiculoParams} className={InputStyle}></input>
            <label>Ano</label>
            <input type="number" name="anoFabricacao"  onChange={handleVeiculoParams} className={InputStyle}></input>
            <div className={showCarInput(veiculoModalState)}>
                <label>Portas</label>
                <input type="number" name="quantidadePortas" onChange={handleVeiculoParams} className={InputStyle}></input>
            </div>
            <div className={showMotoInput(veiculoModalState)}>
                <label>Rodas</label>
                <input name="rodas" onChange={handleVeiculoParams} className={InputStyle}></input>
                <label>Passageiros</label>
                <input name="passageiros" onChange={handleVeiculoParams} className={InputStyle}></input>
            </div>

            <button className={ButtonStyle} onClick={(e) => handleVeiculoForm(e, veiculoModalState)}>Salvar</button>

        </div>
    )
}



const MainContStyle = `flex flex-col w-1/2  items-center justify-center    h-full  bg-gray-100 order-2 
            `

const TitleStyle = `text-2xl font-bold text-center mb-10`

const InputsSetterContlStyle = `w-1/3   border-gray-400  mt-5 h-[80px] flex gap-20 justify-center items-center`

const InputsLabelStyle = `flex flex-col items-center justify-center gap-1`


const InputStyle = `w-1/8 p-2 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mb-5`

const ButtonStyle = `w-1/3 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-5 h-[80px]`
