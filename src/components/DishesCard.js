import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class DishesCard extends Component {
  render() {
    return (
      <Wrap to={`/dish/id`} >
        <Poster />
        <Details>
          <Name>
            黑森林
          </Name>
          <Price>
            23元
          </Price>
          <Desc>
            非常好吃
            <Mask />
          </Desc>
        </Details>
      </Wrap>
    )
  }
}

export default DishesCard

const Wrap = styled(Link) `
  display: block;
  min-height: 75vh;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.20);
  display: flex;
  flex-direction: column;
`

const Poster = styled.div`
  width: 100%;
  height: 210px;
  background: lightseagreen;
`

const Details = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const Name = styled.div`
  text-align: center;
  font-size: 26px;
  color: #F77062;
  line-height: 32px;
  margin-top: 45px;
`

const Price = styled.div`
  color: #878787;
  text-align: center;
  margin-top: 20px;
`

const Desc = styled.div`
  font-size: 14px;
  color: #878787;
  margin-top: 20px;
  text-align: center;
  line-height: 24px;
  position: relative;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
`