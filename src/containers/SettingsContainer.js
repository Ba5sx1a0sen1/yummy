import React from 'react'
import Settings from '../components/Settings'
import { getFriends } from '../selectors/authSelectors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
      friends: getFriends(state)
})

const SettingsContainer = props => <Settings {...props} />

export default connect(mapStateToProps)(SettingsContainer)
