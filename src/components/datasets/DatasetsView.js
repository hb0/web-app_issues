import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateDatasetsView } from '../../actions/defaultActions'
import DatasetsFilter from './DatasetsFilter'

class DatasetsView extends Component {
  render () {
    const { datasetsView, updateDatasetsView } = this.props
    return (
      <StyledWrapper>
        <StyledBlockWrapper>

          <DatasetsFilter
            time={datasetsView.time}
            setTime={(time) => updateDatasetsView({ time })}/>

        </StyledBlockWrapper>
      </StyledWrapper>
    )
  }
}

DatasetsView.propTypes = {
  // Redux injections
  datasetsView: PropTypes.object.isRequired,
  updateDatasetsView: PropTypes.func.isRequired
}

const StyledBlockWrapper = styled.div`
  display: 'block';
`

const StyledWrapper = styled.div`
  height: 100%;
  padding: 10px 10px 130px 10px;
  overflow-y: auto;

  color: #222;
`

const mapStateToProps = (state) => {
  return {
    datasetsView: state.datasetsView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDatasetsView: (update) => dispatch(updateDatasetsView(update))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsView)
