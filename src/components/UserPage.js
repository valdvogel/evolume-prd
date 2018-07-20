import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import UserForm from './UserForm';

export const UserFormPage = ({ startLoginGoogle, startLoginFacebook }) => (
  <div>
      <section id="main" className="cadastro-wrapper">
          <div className="inner">
              <header className="align-center">
                  <h2>Cadastro</h2>
              </header>
              <div className="w3l-main">
                  <div className="w3l-from">
                      <button onClick={startLoginGoogle} className="loginBtn loginBtn--google">Entrar com Google</button>
                      <button onClick={startLoginFacebook} className="loginBtn loginBtn--facebook">Entrar com Facebook</button>
                      <br/>
                      <br/>
                      <UserForm />
                  </div>
              </div>
          </div>
      </section>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLogin('Google')),
  startLoginFacebook: () => dispatch(startLogin('Facebook'))

});

export default connect(undefined, mapDispatchToProps)(UserFormPage);
