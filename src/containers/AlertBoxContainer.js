import React from 'react'
import AlertBox from '../components/AlertBox'
import { getAlertMsg } from '../selectors'
import { connect } from 'react-redux'
import { hideAlert } from '../actions'

const AlertBoxContainer = props => <AlertBox {...props} />

const mapStateToProps = state => ({
    alertMsg: getAlertMsg(state)
  })
  
export default connect(mapStateToProps,{
    hideAlert
})(AlertBoxContainer)