import React from "react"

import Icon from "../icon/icon"
import HeaderLink from "../header/header-link"

const CoffeeCard = ({
  title,
  taste,
  roast,
  origin,
  grown,
  price,
  weight,
  slug,
}) => (
  <div className="transition ease-in-out duration-150 transform hover:scale-105 hover:shadow-lg">
    <div className={`w-full h-40 border`}>
      <HeaderLink to={slug} className="uppercase text-xs float-right m-2">
        More info
      </HeaderLink>
    </div>
    <div className="p-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs italic">{taste}</p>
    </div>
    <div className="p-2 text-xs space-y-1">
      <p className="">
        <Icon icon="fire" /> <span className="font-bold">{roast}</span> roast
      </p>
      <p className="">
        <Icon icon="map-marker" /> from{" "}
        <span className="font-bold">{origin}</span>
      </p>
      <p className="">
        <Icon icon="leaf" /> grown by <span className="font-bold">{grown}</span>
      </p>
    </div>

    <div className="p-2 space-y-1">
      <p className="uppercase text-xs">Add to cart</p>
      <button type="button" className="w-full">
        <div className="flex justify-between items-end">
          <span className="text-3xl">{price}</span>
          <span className="">{weight}</span>
        </div>
      </button>
    </div>
  </div>
)

export default CoffeeCard
