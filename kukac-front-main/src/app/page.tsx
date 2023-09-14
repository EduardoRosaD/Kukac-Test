"use client"
import Image from 'next/image'
import { useState } from 'react'
import { HomeContext } from '../contexts/HomeContext'

import PalindromoComp from '../components/palindromo/palindromo'
import NotaComp from '@/components/nota/nota'
import VeiculoComp from '@/components/veiculo/index'
import CepComp from '@/components/cep/index'

import { Carro } from '@/components/veiculo/classes/Carro'
import { Moto } from '@/components/veiculo/classes/Moto'

export default function Home() {

  const [palindromo, setPalindromo] = useState<string[]>([]);
  const [palindromoParams, setPalindromoParams] = useState({
    start: Number,
    end: Number
  })

  const [nota, setNota] = useState<number>();
  const [notaParams, setNotaParams] = useState({
    valorPago: Number,
    valorCompra: Number
  })

  const [ veiculoModalState, setVeiculoModalState ] = useState<string>("carro")
  const [ veiculoState, setVeiculoState ] = useState<Carro | Moto>()

  const [ cepsState, setCepsState ] = useState({
    ceps: []
  })
  const [ cepsInfoState, setCepsInfoState ] = useState([])
 

  return (
    <HomeContext.Provider
      value={
        {
          palindromo,
          setPalindromo,
          palindromoParams,
          setPalindromoParams,

          nota,
          setNota,
          notaParams,
          setNotaParams,

          veiculoModalState,
          setVeiculoModalState,
          veiculoState,
          setVeiculoState,

          cepsState,
          setCepsState,
          cepsInfoState,
          setCepsInfoState

        }
      }
    >
      <div className='flex flex-col items-center justify-center min-h-screen py-2  bg-gray-200'>
        <h1 className={MainTitleProjctStyle}>Desafio Prático Kukac</h1>
        <PalindromoComp/>
        <NotaComp/>
        <VeiculoComp/>
        <CepComp/>
      </div>
    </HomeContext.Provider>
  )
}

const MainTitleProjctStyle = `text-5xl font-bold text-center mb-10`