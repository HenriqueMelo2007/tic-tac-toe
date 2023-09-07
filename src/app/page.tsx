'use client'

import { Box } from "@/components/box"
import { useState } from "react"

export default function Home() {

  const [jogadorDaVez, setJogadorDaVez] = useState('X')
  const [valoresQuadrados, setValoresQuadrados] = useState(['', '', '', '', '', '', '', '', ''])
  const [posicoesVencedoras, setPosicoesVencedoras] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]])


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">Jogo da velha</h1>

      <div className="w-full grid grid-cols-colunaResponsiva px-padding-customizado justify-center mt-10">
        {valoresQuadrados.map( (item, index) => <Box key={index} id={index} valor={item} jogadorDaVez={jogadorDaVez} setJogadorDaVez={setJogadorDaVez} valoresQuadrados={valoresQuadrados} setValoresQuadrados={setValoresQuadrados}></Box>)}
      </div>

    </div>
  )
}
