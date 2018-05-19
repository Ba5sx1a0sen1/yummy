import React, { Component } from 'react'
import styled from 'styled-components'
import DashboardItem from '../components/DashboardItem'

class Dashboard extends Component {
  
  render() {
    const comments = [
      {
        _id: '5a27dcca6b481776199ae99f',
        updatedAt: '2017-12-06T12:04:26.391Z',
        createdAt: '2017-12-06T12:04:26.391Z',
        content: '好吃',
        dish: {
          '_id': '5a26738e8ed6687f81859d24',
          'poster': 'tlms.png'
        },
        user: {
          _id: '5a2638f58b8b05037aed5007',
          username: 'happypeter',
          avatar: '44cc62180b17e78e7079b32298b81a30'
        },
        "__v": 0
      }
    ]
    const cardList = comments.map(comment =>
      <DashboardItem key={comment._id} comment={comment} />
    )
    return (
      <Wrap>
         { cardList }
      </Wrap>
    )
  }
}

export default Dashboard

const Wrap = styled.div`
  height: 100%;
  background-color: #F9FAFB;
  padding-bottom: 10px;
  padding-top: 10px;
`