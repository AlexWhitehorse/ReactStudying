import React, { Component } from 'react'

import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next'

import './Table.css'

const NO_DATA_TEXT = 'Нет данных'

export default class Table extends Component {
    // static PropTypes = {
    //     columns: PropTypes.arrayOf(PropTypes.object), //Table colum Descriptors
    //     data: PropTypes.arrayOf(PropTypes.object), // Table data
    //     keyField: PropTypes.string, //Unic column name
    //     noDataText: PropTypes.string,

    //     className: PropTypes.string,
    //     containerClass: PropTypes.string,
    // }

    static defaultProps = {
        data: [],
        columns: [],
        keyField: 'id',
        noDataText: NO_DATA_TEXT,
    }

    render() {
        const {
            data,
            columns,
            keyField,

            className,
            containerClass,

            noDataText,
        } = this.props

        // const keys = columns.keys()
        // console.log(columns.keys())
        let keys = columns.map((elem) => {
            return elem.dataField;
        })

        return (
            <div className={`TableContainer ${containerClass}`}>
                <table>
                    <Thead
                        columns={columns}
                        // data = {data}
                    />
                    <Tbody 
                        rowsData={data}
                    />
                    
                </table>

            </div>
        )
    }
}

class Thead extends Component {

    constructor(props) {
        super(props)

        this.columns = props.columns.slice();
        console.log(props.data)
    }
    
    render() {
        const listColumns = this.columns.map((elem) => 
                <th key={elem.dataField}>
                    {elem.text}
                </th>
            );

        return (
                <thead>
                    <tr>
                        {listColumns}
                    </tr>
                </thead>
        )
    }
}

class Tbody extends Component {
    constructor(props) {
        super(props)

        this.rows = props.rowsData.slice();
        // this.keys = props.keys.slice();
        // console.log(props.rowsData)
    }

    render() {
        return (
            <tbody>
                <tr>
                    {/* {listRows} */}
                    <td>12.08.98 12:50</td>
                    <td>ВасЯ Ффпфпф</td>
                    <td>Ждёт</td>
                    <td>Петя пывпрып</td>
                    <td>Жалоба</td>
                    <td>Диагноз</td>
                </tr>
            </tbody>
        )
    }
}