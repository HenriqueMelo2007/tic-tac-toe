'use client'

import { useState } from "react"

interface BoxProps {
  id: number,
  valor: string,
  jogadorDaVez: string,
}

export function Box ({valor, id, jogadorDaVez}:BoxProps) {

  const [valorState, setValorState] = useState(valor)

  function click () {
    setValorState(jogadorDaVez)
  }


  return (
    <div onClick={click} className="border border-black text-black w-36 h-36 flex justify-center items-center hover:cursor-pointer text-3xl">{valorState}</div>
  )
}