'use client'

import { useState } from "react"

interface BoxProps {
  id: number,
  valor: string,
  jogadorDaVez: string,
  valoresQuadrados: string[],
  setValoresQuadrados: any,
}

export function Box ({valor, id, jogadorDaVez, valoresQuadrados, setValoresQuadrados}:BoxProps) {

  const [valorState, setValorState] = useState(valor)

  function click () {
    setValorState(jogadorDaVez)

    const novosValoresQuadrados = [...valoresQuadrados]
    novosValoresQuadrados[id] = jogadorDaVez
    setValoresQuadrados(novosValoresQuadrados)
}


  return (
    <div onClick={click} className="border border-black text-black w-36 h-36 flex justify-center items-center hover:cursor-pointer text-3xl">{valorState}</div>
  )
}