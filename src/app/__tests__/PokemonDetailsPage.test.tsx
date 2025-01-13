import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PokemonPage from "../[pokemon]/page"

jest.mock("next/link", () => {
  return ({ children, href }) => <a href={href}>{children}</a>
})

jest.mock("../components/PokemonData", () => {
  return function MockPokemonData({ pokemon }) {
    return <div data-testid="pokemon-data">Pokemon: {pokemon}</div>
  }
})

jest.mock("../components/SearchForm", () => {
  return function MockSearchForm() {
    return <div data-testid="search-form">Search Form</div>
  }
})

jest.mock("../components/Loader", () => {
  return function MockLoader() {
    return <div data-testid="loader">Loading...</div>
  }
})

describe("PokemonPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the full page with Pokemon data", async () => {
    const mockParams = Promise.resolve({ pokemon: "pikachu" })

    const { findByTestId, findByText } = render(
      await PokemonPage({ params: mockParams })
    )

    expect(await findByTestId("pokemon-data")).toHaveTextContent(
      "Pokemon: pikachu"
    )
    expect(await findByTestId("search-form")).toBeInTheDocument()
    expect(await findByText("Go back to homepage")).toHaveAttribute("href", "/")
  })

  it("renders the Loader during data fetching", async () => {
    const unresolvedPromise = new Promise(() => {})
    const mockParams = unresolvedPromise

    const { findByTestId } = render(
      <React.Suspense fallback={<div data-testid="loader">Loading...</div>}>
        {PokemonPage({ params: mockParams })}
      </React.Suspense>
    )
    expect(await findByTestId("loader")).toBeInTheDocument()
  })
})
