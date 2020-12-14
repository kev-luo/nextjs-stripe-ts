import Head from 'next/head'
import styles from 'styles/Home.module.css'
import LayoutStyles from "styles/Global"
import { Field } from "styles/Form";
import { Wrapper } from "styles/Shared";

export default function Home() {
  return (
    <LayoutStyles>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <h1>Finance Logger</h1>
      </Wrapper>
      <footer>
        <form>
          <Field>
            <label>Type: </label>
            <select>
              <option value="invoice">Invoice</option>
              <option value="payment">Payment</option>
            </select>
          </Field>
          <Field>
            <label>To / From:</label>
            <input type="text" />
          </Field>
          <Field>
            <label>Details: </label>
            <input type="text" />
          </Field>
          <Field>
            <label>Amount ($):</label>
            <input type="number" />
          </Field>
          <button>Add</button>
        </form>
      </footer>
    </LayoutStyles>
  )
}
