import React from 'react'
import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import { getIsAuthenticated, getCurrentUser } from '../selectors/authSelectors'

const SidebarContainer = props => <Sidebar {...props} />

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
    currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, {
    logout
})(SidebarContainer)