import { notFound } from "next/navigation"
import Link from "next/link"
import SearchForm from "@/app/components/SearchForm"
import Image from "next/image"

interface PokemonPageProps {
  params: Promise<{
    pokemon: string
  }>
}

export default async function PokemonPage(props: PokemonPageProps) {
  const params = await props.params
  const { pokemon } = params

  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if (!results.ok) {
    notFound()
  }

  const data = await results.json()

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-black gap-5">
      <div className="flex flex-col items-center gap-5">
        <Image src="/pikachu.png" alt="Pokemon Logo" className="mb-4" />
        <SearchForm />
        <p className="text-gray-600">
          Use the search bar above to find your favorite Pokemon.
        </p>
        <h1 className="text-2xl capitalize font-bold">{data.name}</h1>
        <Image src={data.sprites.front_default} alt={data.name} />
        <Link href="/" className="bg-blue-500 text-white rounded-lg px-4 py-2">
          Go back to homepage
        </Link>
      </div>
    </div>
  )
}
