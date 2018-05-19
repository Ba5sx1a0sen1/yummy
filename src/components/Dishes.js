import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import DishesCard from '../components/DishesCard'

class Dishes extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
        const dishes = [
            {
                _id: '1',
                poster: 'tlms.png',
                name: '提拉米苏',
                price: 20,
                desc: '好吃好吃'
            },
            {
                _id: '2',
                poster: 'hsl.png',
                name: '黑森林',
                price: 20,
                desc: '好吃好吃'
            }
        ]

        return (
            <Wrap>
                <Slider {...settings}>
                    {
                        dishes.map(dish => (
                            <Card key={dish._id} >
                                <DishesCard dish={dish} />
                            </Card>
                        ))
                    }
                </Slider>
            </Wrap>
        )
    }
}

export default Dishes

const Wrap = styled.div`
  height: 100%;
  padding-bottom: 90px;
  .slick-dots {
    bottom: -40px;
    li.slick-active button:before {
      opacity: .9;
      color: white;
    }
    li button:before {
      opacity: .4;
      color: white;
    }
  }
`

const Card = styled.div`
  padding: 35px;
  padding-top: 5px;
  padding-bottom: 0;
  height: 100%;
`
