import React from "react"
import Image from "next/image"

interface PokemonDataProps {
  pokemon: string
}

const PokemonData = async ({ pokemon }: PokemonDataProps) => {
  try {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (!results.ok) {
      return (
        <div className="flex items-center flex-col gap-5">
          <Image
            src="/sad-pikachu.png"
            alt="sad pikachu"
            width={100}
            height={100}
          />
          <p className="font bold text-gray-600">
            Pokemon not found. Try searching for another one!
          </p>
        </div>
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
  } catch (error) {
    console.error(error)
    return (
      <p className="text-red-600">
        An error occurred while fetching data. Please try again later.
      </p>
    )
  }
}

export default PokemonData
