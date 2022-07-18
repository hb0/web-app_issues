import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateInfrastructureView } from '../../actions/defaultActions'
import { Dropdown, Button } from 'react-materialize'

export const Options = {
  All: 'ALL',
  Option1: 'OPTION1',
  Option2: 'OPTION2',
  Option3: 'OPTION3'
}

class InfrastructureView extends Component {
  render () {
    const { option } = this.props.infrastructureView

    return (
      <Container>

        <Dropdown
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: false
            // container: 'body' <<<<<<<<<<<< cause for the bug!
          }}
          trigger={
            <Button
              style={{ backgroundColor: '#3F8730', color: '#FFFFFF' }}
              node="button"
              waves="light"
              small>
              {option}
            </Button>}>
          { Object.values(Options).map(option => {
            return (
              <a
                key={option}
                onClick={() => this.onClick(option) } >
              {option}
              </a>
            )
          })
          }
        </Dropdown>

      </Container>
    )
  }

  onClick = (option) => {
    const { infrastructureView, updateInfrastructureView } = this.props
    console.log('selected option => ' + option)
    if (infrastructureView.option !== option) {
      updateInfrastructureView({ option })
    }
  }
}

const Container = styled.div`
  height: 100%;
  padding: 10px 10px 130px 10px;
  overflow-y: auto;
`

InfrastructureView.propTypes = {
  // Redux injections
  infrastructureView: PropTypes.object.isRequired,
  updateInfrastructureView: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    infrastructureView: state.infrastructureView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInfrastructureView: (update) => { dispatch(updateInfrastructureView(update)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfrastructureView)
