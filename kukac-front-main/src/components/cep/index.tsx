import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'

import { getCepsInfos } from './actions/actions'

import api from '../../config/server'

import CepInfo from './cepInfo'
import { CepInfoInterface } from './interfaces/CepInfoInterface'



export default function CepComp() {
    const cepsNumber = [0, 1, 2, 3, 4]
    const { cepsState,
        setCepsState,
        cepsInfoState,
        setCepsInfoState }: any = useContext(HomeContext)

    function handleCepParams(e: any) {
        let localCeps = cepsState.ceps
        localCeps[e.target.name] = e.target.value
        setCepsState({
            ceps: localCeps
        })

    }


    async function handleCepForm(e: any) {
        e.preventDefault()
        console.log(cepsState.ceps)
        const cepsReturn = await getCepsInfos(cepsState.ceps)
        setCepsInfoState([...cepsReturn])
        console.log(cepsInfoState)
    }

    return (
        <div className={MainContStyle}>
            <h1 className={TitleStyle}>Atividade 4</h1>
            <form>
                {cepsNumber.map((cep: any) => {
                    return (
                        <div>
                            <label className='mr-[10px]'>CEP {cep + 1}</label>
                            <input name={cep} onChange={handleCepParams} className={InputStyle}></input>
                        </div>
                    )
                }
                )}
            </form>
            <button onClick={(e) => handleCepForm(e)} className={ButtonStyle}>Mostrar Ceps</button>
            {cepsInfoState.map((cep: CepInfoInterface) => {
                return (
                    <div>
                        <CepInfo cep={cep} />
                    </div>
                )
            }
            )}
        </div>
    )
}



const MainContStyle = `flex flex-col w-1/2  items-center justify-center    h-full  bg-gray-100 border-2  rounded-md p-10 mt-[50px]
`

const TitleStyle = `text-2xl font-bold text-center mb-10`

const InputStyle = `w-1/8 p-2 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mb-5`

const ButtonStyle = `w-1/3 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-5 h-[80px]`
