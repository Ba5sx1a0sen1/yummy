import React, { Component } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

class Cart extends Component {
  render() {
    const dishes = [
              {
                '_id': '5a26738e8ed6687f81859d24',
                'name': '提拉米苏',
                'price': 23,
                'poster': 'tlms.png',
                'desc': '非常好吃'
              },
              {
                '_id': '5a2683d98ed6687f81859d25',
                'name': '黑森林',
                'price': 12,
                'poster': 'hsl.png',
                'desc': '非常好吃'
              }
            ]
            let itemList = dishes.map(dish =>
              <CartItem key={dish._id} dish={dish} />
            )
    return (
      <Wrap>
        <Hero>
          <h1>
            200 元
          </h1>
        </Hero>
        <ListWrap>
          <ItemList>
            {itemList}
          </ItemList>
          <CheckoutButton>
            结算
          </CheckoutButton>
        </ListWrap>
      </Wrap>
    )
  }
}

export default Cart

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Hero = styled.div`
  height: 230px;
  padding-top: 50px;
  h1 {
    text-align: center;
    color: white;
  }
`

const ListWrap = styled.div`
  background-color: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
`

const ItemList = styled.div`
  background-color: #fff;
  margin-top: -40px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  overflow: auto;
  height: 40vh;
`

const CheckoutButton = styled.div`
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  font-size: 14px;
  line-height: 56px;
  text-align: center;
  color: #FFFFFF;
`