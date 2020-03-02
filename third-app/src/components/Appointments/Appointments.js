import React, { Component } from 'react'

// import { map } from 'underscore'
// import Moment from 'react-moment'

import './Appointments.css'

import Table from '../Table/Table'
import Header from '../Header/Header'

import {ReactComponent as Appointment} from '../../images/appointment.svg'

// Fictive data from server
import {appointments as data } from '../../lib/MockData'

const TITLE = 'Приёмы'

export default class Appointments extends Component {

    render() {
        return (
            <div className="Appointments">
                <Header 
                    title= {TITLE}
                    userName = 'Ivan Ivanowich ivanov'
                    className="Appointments-Header"
                    renderIcon={() => (
                        <Appointment className= 'Header-Icon' />
                    )}
                />
                <div className= 'Appointments-body'>
                    SomeText
                    <Table 
                        data = {data}
                        columns={[
                            {
                                dataField: 'date',
                                text: 'Дата',
                                headerStyle: {
                                    width: '200px'
                                },
                                formatter: (time, row) => {
                                    return (
                                        `Time: ${time}`
                                    )
                                }
                            },
                            {
                                dataField: 'clientName',
                                text: 'Клиент'
                            },
                            {
                                dataField: 'status',
                                text: 'Стату    с'
                            },
                            {
                                dataField: 'holderName',
                                text: 'Принимающий'
                            },
                            {
                                dataField: 'compliences',
                                text: 'Жалобы'
                            },
                            {
                                dataField: 'diagnosis',
                                text: 'Диагноз'
                            }     
                        ]}
                    />
                </div>
            </div>
        )
    }
}