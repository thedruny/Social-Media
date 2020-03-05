import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


export default class MenuExampleVerticalPointing extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing vertical>
                <Menu.Item
                    as={NavLink}
                    to='/profile'
                    name='Profile'
                    active={activeItem === '1'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Messages'
                    as={NavLink}
                    to='/dialogs'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Users'
                    as={NavLink}
                    to='/users'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}