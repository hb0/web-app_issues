import React, { Component } from 'react'
import DatePicker from './DatePicker'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Modal, Button, Row, Col } from 'react-materialize'
import PropTypes from 'prop-types'

class DatasetsTimeFilter extends Component {
  render () {
    return (
      <Modal
        actions={[
          <Button key="closing" small waves="light" flat modal='close' node="button"
            style={{ margin: '5px', backgroundColor: '#3F8730', color: 'white' }}
            onClick={this.onAccept} >Zeitraum festlegen</Button>,
          <Button key="clear" small waves="light" flat modal='close' node="button"
            style={{ margin: '5px', backgroundColor: '#3F8730', color: 'white' }}
            onClick={this.props.onClickClear} >Abbrechen</Button>
        ]}
        style={{ width: '390px' }}
      options={{ endingTop: '1%' /* Default is 10% */ }}
        trigger={this.trigger()} >

        <TimeframeDefinition key='timeframeDefinition'>
          <Row style={{ margin: '0px' }}>
            <Col s={12}>
              <Row style={{ margin: '0px' }}>
                <Col s={5}>
                  <DatePicker
                    id="filterDatasetFromDate" // used by DatasetsFilter to reset value
                    label="von"
                    container="body" // To avoid croppying by the <Modal /> container
                    onChange={this.props.setFromDate}
                    defaultDate={this.props.fromDate} />
                </Col>
                <Col s={1} style={{ marginTop: '2rem' }}>
                  -
                </Col>
                <Col s={5}>
                  <DatePicker
                    id="filterDatasetToDate" // used by DatasetsFilter to reset value
                    label="bis"
                    container="body" // To avoid croppying by the <Modal /> container
                    onChange={this.handleToDateChanged}
                    defaultDate={this.props.toDate} />
                </Col>
              </Row>
            </Col>
          </Row>
        </TimeframeDefinition>

      </Modal>
    )
  }

  currentTriggerText = () => {
    const { from, to } = this.props.time

    /* Check if both of them are not provided */
    const fromDateUnspecified = from === null
    const toDateUnspecified = to === null

    const toDateString = new Date(to).toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    /* Offset the substracted 1 millisecond. */
    const fromDateString = new Date(from + 1).toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    if (!fromDateUnspecified && !toDateUnspecified) {
      return fromDateString + ' - ' + toDateString
    } else if (!fromDateUnspecified && toDateUnspecified) {
      return 'ab ' + fromDateString
    } else if (fromDateUnspecified && !toDateUnspecified) {
      return 'bis ' + toDateString
    } else {
      return 'Zeitraum'
    }
  }

  trigger = () => {
    return (
      <Button small waves="light" style={{ margin: '5px', backgroundColor: '#3F8730' }} node="button">{this.currentTriggerText()}</Button>
    )
  }

  handleToDateChanged = (toDate) => {
    const lastSecondOfTheDay = new Date(toDate.setDate(toDate.getDate() + 1) - 1000)
    this.props.setToDate(lastSecondOfTheDay)
  }

  onAccept = (e) => {
    const { fromDate, toDate } = this.props

    /* Check if both of them are not provided */
    const fromDateUnspecified = fromDate === null
    const toDateUnspecified = toDate === null
    if (fromDateUnspecified && toDateUnspecified) {
      console.log('Bitte wählen Sie einen Erfassungszeitraum aus.')
      return
    }

    /* Set time for the one that is provided. */
    const newFrom = fromDateUnspecified ? null : fromDate.getTime()
    const newTo = toDateUnspecified ? null : toDate.getTime()
    this.props.setTime({
      from: newFrom,
      to: newTo,
      active: true
    })
  }
}

const TimeframeDefinition = styled.div``

DatasetsTimeFilter.propTypes = {
  fromDate: PropTypes.object, // can be null
  toDate: PropTypes.object, // can be null
  setFromDate: PropTypes.func.isRequired,
  setToDate: PropTypes.func.isRequired,
  onClickClear: PropTypes.func.isRequired,
  time: PropTypes.object.isRequired,
  setTime: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsTimeFilter)
