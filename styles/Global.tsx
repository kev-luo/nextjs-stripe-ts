import { create } from "domain";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

export default function LayoutStyles({ children }: { children: any }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}