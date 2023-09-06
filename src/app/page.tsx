'use client'

import { useState } from "react"

export default function Home() {

  const [jogadorDaVez, setJogadorDaVez] = useState('X') // 'X' ou 'O'
  const [quadrados, setQuadrados] = useState(['', '', '', '', '', '', '', '', '']) // 'X' ou 'O'


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1>Jogo da velha</h1>
    </div>
  )
}
