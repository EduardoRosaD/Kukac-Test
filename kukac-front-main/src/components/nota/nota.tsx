import { getNumNotas } from "./actions/actions"
import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'




export default function PalindromoComp() {
    const {  nota,
        setNota,
        notaParams,
        setNotaParams } : any = useContext(HomeContext)
    const { valorPago, valorCompra } = notaParams

    async function handleNotas(start :number,end : number) {
        const notaReturn = await getNumNotas(start,end)
        setNota(notaReturn)
    }
    function handleNotaParams(e: any){
        console.log(notaParams)
        setNotaParams({
            ...notaParams,
            [e.target.name]: e.target.value
        })
    }
    function handleClear(){
        setNota([])
    }
    function handleShow(nota : any){
        if(nota != undefined){
            return "display block"
        }else{
            return "hidden"
        }
    }

    return (
        <div className={MainContStyle}>
            <h1 className={TitleStyle}>Atividade 2</h1>
            <label>Valor Pago</label>
            <input name="valorPago" onChange={handleNotaParams} className={InputStyle}></input>
            <label>Valor Produto</label>
            <input name="valorCompra" onChange={handleNotaParams} className={InputStyle}></input>
            <button className={ButtonStyle} onClick={() => handleNotas(valorPago,valorCompra)}>Mostrar numero de notas recebidas no troco</button>
            <h4 className={handleShow(nota)}>Resultado:</h4>
            <p  className={handleShow(nota)}> Voce receberá {nota} notas de troco</p>
            <button onClick={()=> handleClear()} className={ButtonStyle}>Limpar</button>
        </div>
    )
}



const MainContStyle  =`flex flex-col w-1/2  items-center justify-center    h-full  bg-gray-100 border-2  rounded-md p-10 mt-[50px]
` 

const TitleStyle = `text-2xl font-bold text-center mb-10`

const InputStyle = `w-1/8 p-2 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mb-5`

const ButtonStyle = `w-1/3 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-5 h-[80px]`
