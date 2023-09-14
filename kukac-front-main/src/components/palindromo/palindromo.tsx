import { getPalindromo } from "./actions/actions"
import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'




export default function PalindromoComp() {
    const { palindromo, setPalindromo, palindromoParams,
        setPalindromoParams } : any = useContext(HomeContext)
    const { start, end } = palindromoParams

    async function handlePalindromo(start :number,end : number) {
        const palindromoReturn = await getPalindromo(start,end)
        setPalindromo(palindromoReturn)
    }
    function handlePalindromoParams(e: any){
        setPalindromoParams({
            ...palindromoParams,
            [e.target.name]: e.target.value
        })
    }
    function handleClear(){
        setPalindromo([])
    }


    return (
        <div className={MainContStyle}>
            <h1 className={TitleStyle}>Atividade 1</h1>
            <label>Inicio</label>
            <input name="start" onChange={handlePalindromoParams} className={InputStyle}></input>
            <label>Fim</label>
            <input name="end" onChange={handlePalindromoParams} className={InputStyle}></input>
            <button className={ButtonStyle} onClick={() => handlePalindromo(start,end)}>Mostrar Palindromos entre inicio e fim</button>
            <h4 className={ palindromo.length  >0  ? "display block" : "hidden"}>Resultado:</h4>
            {palindromo.map((item: string, index: number) => (
                <div className="flex flex-col items-center justify-center" key={index}>
                    <p>{item}</p>
                </div>
            ))}
            <button onClick={()=> handleClear()} className={ButtonStyle}>Limpar</button>
        </div>
    )
}



const MainContStyle  =`flex flex-col w-1/2  items-center justify-center    h-full  bg-gray-100 border-2  rounded-md p-10` 

const TitleStyle = `text-2xl font-bold text-center mb-10`

const InputStyle = `w-1/8 p-2 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mb-5`

const ButtonStyle = `w-1/3 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-5 h-[80px]`
