'use client'

import { Box } from "@/components/box"
import { useState, useEffect } from "react"

export default function Home() {

  const [jogadorDaVez, setJogadorDaVez] = useState('X')
  const [valoresQuadrados, setValoresQuadrados] = useState(['', '', '', '', '', '', '', '', ''])
  const [posicoesVencedoras, setPosicoesVencedoras] = useState([[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]])


  useEffect(() => {
    posicoesVencedoras.forEach( (item) => {
  
      if ( valoresQuadrados[item[0]] !== '' && valoresQuadrados[item[0]] === valoresQuadrados[item[1]] && valoresQuadrados[item[1]] === valoresQuadrados[item[2]] ) {
        return setTimeout(() => [alert(`O JOGADOR '${jogadorDaVez == 'X' ? 'O' :  'X'}' VENCEU`)], 100)  
      }
  
    })
  }, [valoresQuadrados, posicoesVencedoras])


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">Jogo da velha</h1>

      <div className="w-full grid grid-cols-colunaResponsiva px-padding-customizado justify-center mt-10">
        {valoresQuadrados.map( (item, index) => <Box key={index} id={index} valor={item} jogadorDaVez={jogadorDaVez} setJogadorDaVez={setJogadorDaVez} valoresQuadrados={valoresQuadrados} setValoresQuadrados={setValoresQuadrados} posicoesVencedoras={posicoesVencedoras} />)}
      </div>

    </div>
  )
}
