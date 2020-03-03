import React, { Component } from 'react';

import { map } from 'underscore'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'

import './Home.css';

import { ReactComponent as User } from '../../images/user.svg'
import { ReactComponent as Nurse } from '../../images/nurse.svg'
import { ReactComponent as House } from '../../images/house.svg'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Clients } from '../../images/clients.svg'
import { ReactComponent as Messages } from '../../images/messages.svg'
import { ReactComponent as Broadcast } from '../../images/broadcast.svg'
import { ReactComponent as Employees } from '../../images/employees.svg'
import { ReactComponent as Appointment } from '../../images/appointment.svg'

const TITLE = 'Home';

const SECTIONS = [
    { title: 'Приёмы',     href: '/appointments',  Icon: Appointment },
    { title: 'События',    href: '/events',        Icon: Star },
    { title: 'Оповещения', href: '/notifications', Icon: Broadcast },
    { title: 'Сообщения',  href: '/messages',      Icon: Messages },
    { title: 'Клиенты',    href: '/clents',        Icon: Clients },
    { title: 'Сотрудники', href: '/employees',     Icon: Employees },
]

export default class Home extends Component {
    render() {
        const listItems = SECTIONS.map((elem) => 
            // <a className='SectionNavigation-Item Section' href={elem.href}>
            //      <elem.Icon className="Section-Icon"/>
            //     <span className="Section-Title">{elem.title}</span>
            //  </a>
            // с помощью компонента Link будет осуществляться
            // навигация по разделам приложения
            <Link className='SectionNavigation-Item Section' to={elem.href}>
                <elem.Icon className='Section-Icon'/>
                <span className='Section-Title'>{elem.title}</span>
            </Link>
        );

        return (
            // <Header
            <div className='Home'>
                <Header
                    title={TITLE}
                    userName='Ivan Ivanov Ivanovich'
                    className='Home-Header'
                    renderIcon={() => (
                        <House className='Header-Icon' />
                    )}
                />
                <div className='Home-Body'>
                    <div className='Home-Body'>
                        <div className="SectionNavigation"> 
                            {listItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




