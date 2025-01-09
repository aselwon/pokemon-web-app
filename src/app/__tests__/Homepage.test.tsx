import { render, screen } from "@testing-library/react"
import HomePage from "@/app/page"

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn()
  }))
}))

jest.mock("../components/SearchForm", () => {
  const MockSearchForm = () => {
    return <form role="form">Mocked SearchForm</form>
  }
  MockSearchForm.displayName = "MockSearchForm"
  return MockSearchForm
})

describe("HomePage Component", () => {
  it("should render the Pokemon logo image", () => {
    render(<HomePage />)
    const logoImage = screen.getByTestId("homepage-image")
    expect(logoImage).toBeInTheDocument()
  })

  it("should render the welcome message with title and subtitle", () => {
    render(<HomePage />)
    const titleElement = screen.getByTestId("homepage-title")
    const subtitleElement = screen.getByTestId("homepage-subtitle")

    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()

    expect(titleElement).toHaveTextContent("Welcome to Pokemon App!")
    expect(subtitleElement).toHaveTextContent(
      "Use the search bar above to find your favorite Pokemon."
    )
  })

  it("should render the SearchForm component", () => {
    render(<HomePage />)
    const searchFormElement = screen.getByRole("form", { hidden: true })
    expect(searchFormElement).toBeInTheDocument()
  })
})
