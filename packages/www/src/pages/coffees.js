import React from "react"

import PageLayout from "../components/layout/subpage-layout"
import CoffeeCard from "../components/card/coffee-card"

const Coffees = () => {
  return (
    <PageLayout>
      <section className="container mx-auto">
        <div className="grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <CoffeeCard
            title="Kape Barako"
            taste="Hints of chocolate, nuts, and caramel"
            roast="Light"
            origin="Kalinga, Benguet"
            grown="Cordillera Growers"
            price="$ 0.00"
            weight="250g"
          />
          <CoffeeCard
            title="Kape Barako"
            taste="Hints of chocolate, nuts, and caramel"
            roast="Light"
            origin="Kalinga, Benguet"
            grown="Cordillera Growers"
            price="$ 0.00"
            weight="250g"
          />
        </div>
      </section>

      {/* {"filters"} */}
    </PageLayout>
  )
}

export default Coffees
