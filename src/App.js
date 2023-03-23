import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title: 'Pepsi',
          img: 'pepis.jpg',
          desc: 'best cola im my opinion',
          category: 'Cola',
          price: '0.89'
        },
        {
          id:2,
          title: 'Monster Energy',
          img: 'Monster.jpg',
          desc: 'Tasty energy drink (Not good for your heart)',
          category: 'Energy drink',
          price: '1.89'
        },
        {
          id:3,
          title: 'Dr. Pepper',
          img: 'DrPepper.jpg',
          desc: 'for an amateur',
          category: 'Cola',
          price: '1.89'
        },
        {
          id:4,
          title: 'Mountain Dew',
          img: 'MountainDew.jpg', 
          desc: 'Lemonade',
          category: 'Soda',
          price: '1.29'
        },
        {
          id:5,
          title: 'Mirinda',
          img: 'Mirinda.jpg',
          desc: 'Lemonade',
          category: 'Soda',
          price: '1.49'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder}/> 
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach( (el) => {
      if(el.id === item.id) {
        isInArray = true   // нужно еще добавить функцию количества товара, который добавили в корзину больше 1 раза
    }})
    if(!isInArray){
      this.setState({ orders: [...this.state.orders, item] })
  }}
}

export default App;
