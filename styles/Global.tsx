import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  h1{
  margin: 40px auto;
  color: #ff0aa7;
  text-align: center;
  }
  ul{
    padding: 0;
    list-style-type: none;
  }
  li{
    padding: 6px 10px;
    border: 1px solid #eee;
    margin: 10px auto;
  }
  li h4{
    color: #ff0aa7;
    margin: 0;
    text-transform: capitalize;
  }
  li p{
    color: #333;
    margin: 8px 0 0;
  }
  footer{
    background: #eee;
    padding: 60px;
    margin-top: 60px;
  }
  form{
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  label{
    display: block;
    font-weight: bold;
    font-size: 0.8em;
    color: #333;
    margin: 16px 0 6px;
  }
  input, select{
    padding: 6px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button{
  color: white;
  border: 0;
  background: #ff0aa7;
  padding: 6px;
  min-width: 80px;
  border-radius: 4px;
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