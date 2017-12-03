import React, { Component } from 'react';
import { connect } from 'react-redux';



class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deceiding';
            case false:
                return 'im loggedout';
            default:
                return 'im looged in';
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Emaily</a>
                    <ul>
                        <li className="right">
                            {this.renderContent()}
                        </li>
                    </ul>
                </div>
            </nav>
        ); 
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);