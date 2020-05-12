import React from "react"
import Card from "./card"

const ProductCard = ({ title, desc, price, img = "dark" }) => (
  <Card>
    <div className={`w-full h-24 bg-secondary-${img}`} />
    <div className="p-4 space-y-2">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{desc}</p>
    </div>
    <div className="p-4 flex justify-between items-center">
      <h3 className="font-bold text-xl">{price}</h3>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </Card>
)

export default ProductCard
