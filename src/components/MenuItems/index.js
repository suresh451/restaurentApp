import './index.css'

const MenuItems = props => {
  const {itemDetails} = props
  const {
    dishName,
    price,
    description,
    dishImage,
    currency,
    dishCalories,
    availability,
    nexturl,
  } = itemDetails

  const availabilityValue = availability ? (
    <div>
      <button type="button">-</button>
      <p>0</p>
      <button type="button">+</button>
    </div>
  ) : (
    <p>Not available</p>
  )
  return (
    <li>
      <img src={nexturl} alt={nexturl} />
      <div>
        <div>
          <h1>{dishName}</h1>
          <p>{currency}</p>
          <p>{price}</p>
          <p>{description}</p>
          <p>{availabilityValue}</p>
        </div>
        <div>
          <p>{dishCalories} calories</p>
        </div>
        <img src={dishImage} alt={dishImage} />
      </div>
    </li>
  )
}

export default MenuItems
