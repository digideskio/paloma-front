import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import CreateProfilePanel from '../../components/panels/CreateProfilePanel'

const mapStateToProps = (state, ownProps) => {
  return {
    validation: state.validation,
    allValidated: state.allValidated
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const CreateProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfilePanel)

export default CreateProfile
