import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PokemonData from "./../components/PokemonData"

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => {
    return <img src={src} alt={alt} {...props} />
  }
}))

global.fetch = jest.fn()

describe("PokemonData Component", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the Pokemon data when the API call is successful", async () => {
    const mockPokemonData = {
      name: "pikachu",
      sprites: {
        front_default: "https://example.com/pikachu.png"
      }
    }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPokemonData
    })

    const { findByText, findByAltText } = render(
      await PokemonData({ pokemon: "pikachu" })
    )

    expect(await findByText(/pikachu/i)).toBeInTheDocument()
    expect(await findByAltText(/pikachu/i)).toHaveAttribute(
      "src",
      mockPokemonData.sprites.front_default
    )
  })

  it("renders an error message when the API call fails", async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false
    })

    const { findByText, findByAltText } = render(
      await PokemonData({ pokemon: "unknown" })
    )

    expect(await findByText(/Pokemon not found/i)).toBeInTheDocument()
    expect(await findByAltText(/sad pikachu/i)).toBeInTheDocument()
  })

  it("renders a generic error message if fetching data throws an error", async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    )

    const { findByText } = render(await PokemonData({ pokemon: "error" }))

    expect(await findByText(/An error occurred/i)).toBeInTheDocument()
  })
})
