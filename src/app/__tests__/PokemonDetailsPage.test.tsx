import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PokemonPage from "../[pokemon]/page"

jest.mock("next/link", () => {
  const Link = ({ children, href }) => <a href={href}>{children}</a>
  Link.displayName = "Link"
  return Link
})

jest.mock("../components/PokemonData", () => {
  const MockPokemonData = ({ pokemon }) => (
    <div data-testid="pokemon-data">Pokemon: {pokemon}</div>
  )
  MockPokemonData.displayName = "MockPokemonData"
  return MockPokemonData
})

jest.mock("../components/SearchForm", () => {
  const MockSearchForm = () => <div data-testid="search-form">Search Form</div>
  MockSearchForm.displayName = "MockSearchForm"
  return MockSearchForm
})

jest.mock("../components/Loader", () => {
  const MockLoader = () => <div data-testid="loader">Loading...</div>
  MockLoader.displayName = "MockLoader"
  return MockLoader
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
