import React from 'react'
import Sidebar from '../components/Sidebar'
import { getIsAuthenticated } from '../selectors/authSelectors'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

const SidebarContainer = props => <Sidebar {...props} />

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps, {
    logout
})(SidebarContainer)