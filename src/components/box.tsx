'use client'

import { useState } from "react"

interface BoxProps {
  id: number,
  valor: string,
  jogadorDaVez: string,
  valoresQuadrados: string[],
  setValoresQuadrados: any,
  setJogadorDaVez: any
}

export function Box ({valor, id, jogadorDaVez, setJogadorDaVez, valoresQuadrados, setValoresQuadrados}:BoxProps) {

  const [valorState, setValorState] = useState(valor)

  function mudarJogadorDaVez() {
    let novoJogador: string

    if (jogadorDaVez == 'X') {
      return novoJogador = 'O'
    } else { return novoJogador = 'X' }
  }

  function click () {
    setValorState(jogadorDaVez)

    const novosValoresQuadrados = [...valoresQuadrados]
    novosValoresQuadrados[id] = jogadorDaVez
    setValoresQuadrados(novosValoresQuadrados)
    
    const novoJogador = mudarJogadorDaVez()
    setJogadorDaVez(novoJogador)
}


  return (
    <div onClick={click} className="border border-black text-black w-36 h-36 flex justify-center items-center hover:cursor-pointer text-3xl">{valorState}</div>
  )
}