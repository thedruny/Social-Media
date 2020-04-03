import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    render() {
        return <div className='col-12'>
            <Header {...this.props} />
        </div>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});

export default connect(mapStateToProps, { logout })(HeaderContainer);