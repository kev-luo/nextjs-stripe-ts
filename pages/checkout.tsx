import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {
  const handleClick = async () => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ quantity: 1 })
    }).then(res => {
      console.log(res);
      return res.json()
    })

    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId,
    })
    if (result.error) {
      console.log(result.error.message);
    }
  }

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  )
}