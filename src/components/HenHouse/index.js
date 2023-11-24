import {Component} from 'react'

import MenuItems from '../MenuItems'

import './index.css'

class HenHouse extends Component {
  state = {
    dishesList: [],
  }

  componentDidMount() {
    this.getMenuCategories()
  }

  getMenuCategories = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
    console.log(fetchedData[0].table_menu_list[0].menu_category)
    console.log(fetchedData[0].table_menu_list.category_dishes)

    const dishesData = fetchedData[0].table_menu_list[2].category_dishes.map(
      eachDish => ({
        id: eachDish.dish_id,
        dishName: eachDish.dish_name,
        currency: eachDish.dish_currency,
        price: eachDish.dish_price,
        dishCalories: eachDish.dish_calories,
        availability: eachDish.dish_Availability,
        description: eachDish.dish_description,
        dishImage: eachDish.dish_image,
        nexturl: eachDish.nexturl,
      }),
    )

    this.setState({
      dishesList: dishesData,
    })
  }

  render() {
    const {dishesList} = this.state
    return (
      <>
        <ul>
          {dishesList.map(eachDish => (
            <MenuItems itemDetails={eachDish} key={eachDish.id} />
          ))}
        </ul>
      </>
    )
  }
}

export default HenHouse
