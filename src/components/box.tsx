'use client'

interface BoxProps {
  valor: string,
}

export function Box ({valor}:BoxProps) {
  return (
    <div className="border-4 border-black text-black w-36 h-36 flex justify-center items-center">{valor}</div>
  )
}