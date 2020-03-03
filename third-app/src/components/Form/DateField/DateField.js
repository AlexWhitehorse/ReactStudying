import React, {Component} from 'react'

import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import {FormGroup, Label} from 'reactstrap'

import './DateField.css'

export default class DateField extends Component {

    static propTypes = {
        name: PropTypes.string,
          label: PropTypes.string,
          hasTime: PropTypes.bool,
          placeholder: PropTypes.string,
          dateFormat: PropTypes.string,
          timeFormat: PropTypes.string,
          timeInterval: PropTypes.number,        
          className: PropTypes.string,        
          onChange: PropTypes.func
    }

    static dafaultProps = {
        hasTime: false,
        dateFormat: 'dd/MM/yyyy',
        // time Format that rendering in dropdown list
        timeFormat: 'HH:mm',
        // Time choise step
        timeInterval: 30,
        onChange: function () {}
    }

    onChange = (value) => {
        const {name, onChange: cb} = this.props
        cb(name, value)
    }

    render () {
        const {
            name,
            label,
            value,

            dateFormat,

            hasTime,
            timeFormat,
            timeInterval,

            onChange,
            className,
            placeholder
        } = this.props

        return (
            <FormGroup className={`DateField ${className}`}>
                <div>
                    {label ? (
                        <Label className='dateField-Label'>
                            {label}
                        </Label>
                    ) : null}
                    <DatePicker
                        name={name}
                        selected={value}

                        dateFormat={dateFormat}

                        timeFormat={timeFormat}
                        showTimeSelect = {hasTime}
                        timeIntervals={timeInterval}

                        onChange={this.onChange}
                        placeholderText={placeholder}
                        className="DateField-Input form-control"
                    />
                </div>
            </FormGroup>
        )
    }
}