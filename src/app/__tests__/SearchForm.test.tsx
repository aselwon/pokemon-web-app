import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { useRouter } from "next/navigation"
import SearchForm from "./../components/SearchForm"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}))

describe("SearchForm", () => {
  let mockRouter

  beforeEach(() => {
    mockRouter = {
      push: jest.fn()
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  it("renders input and button", () => {
    render(<SearchForm />)

    const input = screen.getByPlaceholderText("Enter Pokemon Name")
    const button = screen.getByRole("button", { name: /search/i })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it("enables button only when input has value", () => {
    render(<SearchForm />)

    const input = screen.getByPlaceholderText("Enter Pokemon Name")
    const button = screen.getByRole("button", { name: /search/i })

    expect(button).toBeDisabled()

    fireEvent.change(input, { target: { value: "Pikachu" } })

    expect(button).not.toBeDisabled()
  })

  it("updates input value on change", () => {
    render(<SearchForm />)

    const input = screen.getByPlaceholderText("Enter Pokemon Name")

    fireEvent.change(input, { target: { value: "Bulbasaur" } })

    expect(input).toHaveValue("Bulbasaur")
  })

  it("calls router.push with the correct URL on submit", () => {
    render(<SearchForm />)

    const input = screen.getByPlaceholderText("Enter Pokemon Name")
    const button = screen.getByRole("button", { name: /search/i })

    fireEvent.change(input, { target: { value: "Charmander" } })
    fireEvent.click(button)

    expect(mockRouter.push).toHaveBeenCalledWith("/charmander")
  })

  it("does not call router.push when input is empty", () => {
    render(<SearchForm />)

    const button = screen.getByRole("button", { name: /search/i })

    fireEvent.click(button)

    expect(mockRouter.push).not.toHaveBeenCalled()
  })
})
