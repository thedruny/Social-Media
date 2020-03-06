import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuHeader extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu pointing secondary size="massive" color="teal" >
                <Menu.Item
                    name='Profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to='/profile'
                />
                <Menu.Item
                    name='Messages'
                    active={activeItem === 'dialogs'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to='/dialogs'
                />
                <Menu.Item
                    name='Users'
                    active={activeItem === 'users'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to='/users'
                />
                {this.props.isAuth
                    ? < Menu.Menu position='right'>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.props.logout}
                        />
                    </Menu.Menu>
                    : < Menu.Menu position='right'>
                        <Menu.Item
                            name='Login'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/login'
                        />
                    </Menu.Menu>
                }
            </Menu>
        )
    }
}