'use client'

import { Box } from "@/components/box"
import { useState } from "react"

export default function Home() {

  const [jogadorDaVez, setJogadorDaVez] = useState('X') // 'X' ou 'O'
  const [quadrados, setQuadrados] = useState(['X', 'X', 'X', 'X', 'X', 'X', 'O', 'O', 'O']) // 'X' ou 'O'


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">Jogo da velha</h1>

      <div className="w-full grid grid-cols-colunaResponsiva px-padding-customizado justify-center mt-10">
        {quadrados.map( (item, index) => <Box key={index} valor={item}></Box>)}
      </div>

    </div>
  )
}
