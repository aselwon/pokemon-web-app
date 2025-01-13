import React from "react"
import SearchForm from "@/app/components/SearchForm"
import Image from "next/image"

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/ash.png"
        alt="Ash Ketchum"
        className="mb-4"
        width={200}
        height={200}
        data-testid="homepage-image"
      />
      <div className="flex flex-col gap-5 items-center">
        <h1
          className="text-2xl font-bold text-black"
          data-testid="homepage-title"
        >
          Welcome to Pokemon App!
        </h1>
        <SearchForm />
        <p className="text-gray-600" data-testid="homepage-subtitle">
          Use the search bar above to find your favorite Pokemon.
        </p>
      </div>
    </div>
  )
}

export default Home
