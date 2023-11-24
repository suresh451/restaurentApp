import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {
    menuCategoryList: [],
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
    console.log(fetchedData[0].table_menu_list[1].menu_category)
    console.log(fetchedData[0].table_menu_list[1].category_dishes)
    const categoryData = fetchedData[0].table_menu_list.map(each => ({
      menuCategory: each.menu_category,
    }))

    this.setState({
      menuCategoryList: categoryData,
    })
  }

  render() {
    const {menuCategoryList} = this.state
    console.log(menuCategoryList)
    return (
      <div>
        <nav className="navbar">
          <h1>UNI Resto Cafe</h1>
          <div className="cart">
            <p>My Orders</p>
            <AiOutlineShoppingCart size={25} />
          </div>
        </nav>
        <ul className="header-ul">
          <Link to="/">
            <button type="button">Salads and Soup</button>
          </Link>
          <Link to="/barnyard">
            <button type="button">From The Barnyard</button>
          </Link>
          <Link to="henhouse">
            <button type="button">From the Hen House</button>
          </Link>
          <Link to="fromSea">
            <button type="button">Fresh From The Sea</button>
          </Link>
          <Link to="biryani">
            <button type="button">Biryani</button>
          </Link>
          <Link to="fastFood">
            <button type="button">Fast Food</button>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Header
