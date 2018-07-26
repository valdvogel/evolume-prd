import React from 'react';
import ReactDOM from 'react-dom';
import { history } from '../routes/AppRouter'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import configureStore from '../store/configureStore'



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }
    onClick = () => {
        localStorage.removeItem('user');
        this.props.startLogout();
        history.push('/');
        window.location.reload();


    }
    componentDidMount = () => {
        //console.log(this.state);
    }
    openNav = () => {
        document.getElementById("mySidenav").style.width = "180px";
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {

        const login = localStorage.getItem('user') != null ? true : false;

        if (!login) {
            return (
                <header id="header">
                    <div className="inner">
                        <NavLink to="/" className="logo">
                            <img src="https://s3.us-east-2.amazonaws.com/evolumewebappimages/logo_cut_white.png" width="100px" height="57px" />
                        </NavLink>
                        <nav id="nav">
                            <NavLink to="/sobrenos" activeClassName="is-active">Sobre Nós</NavLink>
                            <NavLink to="/cadastro" activeClassName="is-active" exact={true}>Cadastrar</NavLink>
                            <NavLink to="/login" activeClassName="is-active">Entrar</NavLink>
                            <NavLink to="/help" activeClassName="is-active">Ajuda</NavLink>
                        </nav>
                        <div id="mySidenav" className="sidenav">
                            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                            <NavLink to="/sobrenos">Sobre Nós</NavLink>
                            <NavLink to="/cadastro" exact={true}>Cadastrar</NavLink>
                            <NavLink to="/login">Entrar</NavLink><br/>
                            <NavLink to="/help">Ajuda </NavLink>
                        </div>
                        <a href="#navPanel" className="navPanelToggle"><span onClick={this.openNav} className="fa fa-bars"></span></a>
                    </div>

                </header>

            )
        } else {
            return (
                <header id="header">
                    <div className="inner">
                        <NavLink to="/" className="logo">
                            <img src="https://s3.us-east-2.amazonaws.com/evolumewebappimages/logo_cut_white.png" width="100px" height="57px" />
                        </NavLink>
                        <nav id="nav">
                            <NavLink to="/locador" activeClassName="is-active">Sou Locador</NavLink>
                            <NavLink to="/locatario" activeClassName="is-active" exact={true}>Locatario</NavLink>
                            <NavLink to="/help" activeClassName="is-active">Ajuda</NavLink>
                            <button onClick={this.onClick}>Logout</button>
                        </nav>

                        <div id="mySidenav" className="sidenav">
                            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                            <NavLink to="/locador" activeClassName="is-active">Sou Locador</NavLink>
                            <NavLink to="/locatario" activeClassName="is-active" exact={true}>Locatario</NavLink>
                            <NavLink to="/help" activeClassName="is-active">Ajuda</NavLink>
                            <button onClick={this.onClick}>Logout</button>
                        </div>
                        <a href="#navPanel" className="navPanelToggle"><span onClick={this.openNav} className="fa fa-bars"></span></a>
                    </div>
                </header>
            )

        }
    }
}
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())


});

export default connect(undefined, mapDispatchToProps)(Header);