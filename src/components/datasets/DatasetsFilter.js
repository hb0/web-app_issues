import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatasetsTimeFilter from './DatasetsTimeFilter.js'

class DatasetsFilter extends Component {
  state = {
    // The currently selected from- and to-date
    fromDate: null, // none selected
    toDate: null // none selected
  }

  render () {
    return (
      <div>
        <DatasetsTimeFilter
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
          setFromDate={(fromDate) => this.setState({ fromDate })}
          setToDate={(toDate) => this.setState({ toDate })}
          onClickClear={this.onClearFilters}
          time={this.props.time}
          setTime={this.props.setTime} />
      </div>
    )
  }

  onClearFilters = () => {
    // this.props.setModality(Options.All)
    this.onTimeFilterClear()
  }

  onTimeFilterClear = (e) => {
    // Update internal state
    this.setState({
      fromDate: null,
      toDate: null
    })

    // Update UI manually
    document.getElementById('filterDatasetFromDate').value = ''
    document.getElementById('filterDatasetToDate').value = ''

    // Update global state
    this.props.setTime({
      active: false,
      to: null,
      from: null
    })
  }
}

DatasetsFilter.propTypes = {
  time: PropTypes.object.isRequired,
  setTime: PropTypes.func.isRequired
}

export default DatasetsFilter
