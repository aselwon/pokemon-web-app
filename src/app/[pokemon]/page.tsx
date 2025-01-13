import Link from "next/link"
import SearchForm from "@/app/components/SearchForm"
import { Suspense } from "react"
import Loader from "@/app/components/Loader"
import React from "react"

const PokemonData = React.lazy(() => import("../components/PokemonData"))

interface PokemonPageProps {
  params: Promise<{
    pokemon: string
  }>
}

export default async function PokemonPage(props: PokemonPageProps) {
  const params = await props.params
  const { pokemon } = params

  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-black gap-5">
        <div className="flex flex-col items-center gap-5">
          <SearchForm />
          <PokemonData pokemon={pokemon} />
          <p className="text-gray-600">
            Use the search bar above to find your favorite Pokemon.
          </p>
          <Link
            href="/"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Go back to homepage
          </Link>
        </div>
      </div>
    </Suspense>
  )
}
