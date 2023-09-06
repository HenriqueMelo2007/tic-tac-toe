'use client'

import { useState } from "react"

export default function Home() {

  const [jogadorDaVez, setJogadorDaVez] = useState('X') // 'X' ou 'O'
  const [quadrados, setQuadrados] = useState(['', '', '', '', '', '', '', '', '']) // 'X' ou 'O'


  return (
    <h1>Jogo da véia</h1>
  )
}
