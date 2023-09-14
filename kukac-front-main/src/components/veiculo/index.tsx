import VeiculoForm from "./veiculoForm"


export default function VeiculoComp() {
    return (
        <div className={MainContStyle}>
          <VeiculoForm/>
        </div>
    )
}



const MainContStyle  =`flex flex-col w-1/2  items-center justify-center    h-full  bg-gray-100 border-2  rounded-md p-10 mt-[50px]` 

const TitleStyle = `text-2xl font-bold text-center mb-10`

const InputStyle = `w-1/8 p-2 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mb-5`

const ButtonStyle = `w-1/3 h-10 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-5 h-[80px]`
