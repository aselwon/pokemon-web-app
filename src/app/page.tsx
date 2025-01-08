"use client"

import { useRouter } from 'next/navigation'
import {FormEvent, useState} from "react";

export default function Home() {
  const router = useRouter();
  const [pokemonName, setPokemonName] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (pokemonName.trim()) {
      router.push(`/${pokemonName.toLowerCase()}`);
    }
  };

  return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <img src="/pikachu.png" alt="Pokemon Logo" className="mb-4"/>
        <h1 className="text-2xl font-bold mb-4 text-black">Welcome to Pokemon App!</h1>
        <form onSubmit={handleSubmit} className="mb-5 flex">
          <input
              type="text"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
              placeholder="Enter Pokemon Name"
              className="border border-gray-300 rounded-lg p-2 mr-2 text-black"
          />
          <button
              type="submit"
              disabled={!pokemonName.length}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 disabled:bg-gray-400"
          >
            Search
          </button>
        </form>
        <p className="text-gray-600">Use the search bar above to find your favorite Pokemon.</p>
      </div>
  );
}
