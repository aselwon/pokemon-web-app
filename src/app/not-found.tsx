import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-black gap-5">
      <Image src="/pikachu.png" alt="Pikachu" />
      <h1>404 - Page Not Found</h1>
      <p>Pokemon not found. Try searching for another one!</p>
      <Link href="/" className="bg-blue-500 text-white rounded-lg px-4 py-2">
        Go back to homepage
      </Link>
    </div>
  )
}
