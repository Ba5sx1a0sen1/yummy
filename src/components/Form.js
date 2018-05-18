import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Form extends Component {
  state = this.props.config.fields.reduce((obj, t) => {
    obj[t.name] = ''
    return obj
  }, {})

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  formSubmit = e => {
    e.preventDefault()
    let data = this.props.config.fields.reduce((obj, t) => {
      obj[t.name] = this.state[t.name]
      return obj
    }, {})
    console.log('data', data)
  }
  render() {
    const { fields, goto } = this.props.config
    const inputList = fields.map(t => (
      <input
        key={t.name}
        type={t.type}
        placeholder={t.name}
        value={this.state[t.name]}
        onChange={e => this.handleChange(e, t.name)}
      />
    ))
    return (
      <Wrap>
        {inputList}
        <Link to={goto.link}>{goto.text}</Link>
        <Button onClick={this.formSubmit}>提交</Button>
      </Wrap>
    )
  }
}

export default Form

const Wrap = styled.div``

const Button = styled.div``