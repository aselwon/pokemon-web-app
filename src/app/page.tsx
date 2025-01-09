import React from "react"
import SearchForm from "@/app/components/SearchForm"
import Image from "next/image"

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/pikachu.png"
        alt="Pokemon Logo"
        className="mb-4"
        width={400}
        height={300}
        data-testid="homepage-image"
      />
      <h1
        className="text-2xl font-bold mb-4 text-black"
        data-testid="homepage-title"
      >
        Welcome to Pokemon App!
      </h1>
      <SearchForm />
      <p className="text-gray-600" data-testid="homepage-subtitle">
        Use the search bar above to find your favorite Pokemon.
      </p>
    </div>
  )
}

export default Home
