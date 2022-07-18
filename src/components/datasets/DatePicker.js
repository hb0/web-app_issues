import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatePicker as MaterializeDatePicker } from 'react-materialize'

class DatePicker extends Component {
  render () {
    const { id, defaultDate, label, onChange, container } = this.props
    const options = {
      // `autoClose: true` Doesn't work with React 17 & `format: dd.mm.yyyy' [DAT-1344].
      // But it seems like the Datepicker also closes automatically with `autoClose: false`.
      autoClose: true,
      format: 'dd.mm.yyyy',
      defaultDate: defaultDate === undefined ? null : this.props.defaultDate,
      setDefaultDate: this.props.defaultDate !== undefined,
      // Required when Datepicker parent is a small container like a Modal
      // or else the Datepicker is not fully visible
      container: container === undefined ? null : container
    }

    return (
      <MaterializeDatePicker
        id={ id } // used by DatasetsFilter to reset value
        label={label}
        options={ options }
        onChange={ onChange }
        readOnly
        />
    )
  }
}

DatePicker.propTypes = {
  id: PropTypes.string.isRequired, // used by DatasetsFilter to reset value
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  defaultDate: PropTypes.oneOfType([
    PropTypes.object, // Date object
    PropTypes.number // None is represented as -1
  ]),
  container: PropTypes.string
}

export default DatePicker
