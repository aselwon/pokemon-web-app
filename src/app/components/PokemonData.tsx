import React from "react"
import Image from "next/image"

interface PokemonDataProps {
  pokemon: string
}

const PokemonData = async ({ pokemon }: PokemonDataProps) => {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if (!results.ok) {
    return (
      <p className="text-gray-600">
        Pokemon not found. Try searching for another one!
      </p>
    )
  }

  const data = await results.json()

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl capitalize font-bold">{data.name}</h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={100}
        height={100}
      />
    </div>
  )
}

export default PokemonData