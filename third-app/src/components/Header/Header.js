import React, { Component } from 'react';

// import cn from 'classname'

import './Header.css';

export default class Header extends Component {
    render () {
        const {
            title,
            userName,
            className,
            renderIcon
        } = this.props

        return (
            // <div className={cn('Header', className)}></div>
            // <div className={`Header-${className}`}>
            <div className={`Header ${className}`}>
                <div className='Header-Body'>
                    <div className='flex-1 d-flex flex-row justify-content-center align-items-center'> 
                        {renderIcon && renderIcon()}
                        <div className='Header-Title'>
                            {title}
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-end align-items-center'>
                        {userName && (
                            <div className='Header-UserName'>
                                {userName}
                            </div>
                        )}
                        <a className='btn btn-primary Header-ExitBtn'>
                            Выйти
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}