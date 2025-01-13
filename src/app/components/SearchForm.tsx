"use client"

import React, { FormEvent, useState } from "react"
import Input from "./Input"
import Button from "./Button"
import { useRouter } from "next/navigation"

const SearchForm: React.FC = () => {
  const router = useRouter()
  const [pokemonName, setPokemonName] = useState<string>("")

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (pokemonName.trim()) {
      router.push(`/${pokemonName.toLowerCase()}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={pokemonName}
        onChange={setPokemonName}
        placeholder="Enter Pokemon Name"
        className="border border-gray-300 rounded-lg p-2 mr-2 text-black"
      />
      <Button type="submit" disabled={!pokemonName.length}>
        Search
      </Button>
    </form>
  )
}

export default SearchForm
