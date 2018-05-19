import React, { Component } from 'react'

class DishComments extends Component {

  componentDidMount = () => {
    this.props.setSubTitle({
      title: '评论',
      details: `评论数: 0`
    })
  }

  render() {
    return (
      <div>
        Comments
      </div>
    )
  }
}


export default DishComments