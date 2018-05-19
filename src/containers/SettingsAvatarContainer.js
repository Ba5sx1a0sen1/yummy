import React from 'react'
import SettingsAvatar from '../components/SettingsAvatar'
import { getCurrentUser } from '../selectors/authSelectors'
import { connect } from 'react-redux'

const SettingsAvatarContainer = props => <SettingsAvatar {...props} />

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps)(SettingsAvatarContainer)