import SearchForm from "@/app/components/SearchForm"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/pikachu.png"
        alt="Pokemon Logo"
        className="mb-4"
        width={400}
        height={300}
      />
      <h1 className="text-2xl font-bold mb-4 text-black">
        Welcome to Pokemon App!
      </h1>
      <SearchForm />
      <p className="text-gray-600">
        Use the search bar above to find your favorite Pokemon.
      </p>
    </div>
  )
}
