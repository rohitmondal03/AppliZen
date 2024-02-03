import { Card } from "~/components/ui/card";

export default function BillingPage() {
  return (
    <section className="page_container">
      <div className="head_div">
        <h1>Billing History</h1>

        <p>
        Explore a detailed history of your account transactions. From subscription charges to payment receipts, view a comprehensive record of your billing activity. Stay informed and track your financial history effortlessly.
        </p>
      </div>

      <Card className="border-gray-500 h-56 w-fit p-10">
        <h1 className="text-4xl">Billing History</h1>
      </Card>
    </section>
  )
}
