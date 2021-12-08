import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Forms.scss';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { authContext } from '../../hooks/useAuth';

const CONTAINER = styled.div`
  background: #fff;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 60%;
  }

  label {
    color: #9926f0;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #9926f0;
    padding: 1em 1em 0 1em;
    justify-content: center;
    text-align: center;
  }

  .form-group {
    margin-bottom: 2.5em;
  }

  .error {
    border: 2px solid #ff6565;
  }

  .error-message {
    color: #ff6565;
    padding: 0.5em 0.5em 2em 0.5em;
    height: 1em;
    position: flex;
    font-size: 0.8em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #9926f0;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  margin-top: 1em;
  &:hover {
    background: #d122e3;
  }
`;

export const LoginForm = () => {
  const auth = useContext(authContext);
  const history = useHistory();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo requerido'),
    password: Yup.string()
      .min(8, 'Las contraseñas deben tener mínimo 8 caracteres')
      .required('Campo requerido'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    // When button submits form and form is in the process of submitting, submit button is disabled
    setSubmitting(true);
    await auth
      .login(values.email, values.password)
      .then(history.push('/home'))
      .then(auth.setUser(auth.user));
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="form-section-login">
      <CONTAINER>
        <h1>
          <FormattedMessage id="Registro Joga" />
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <MYFORM onSubmit={handleSubmit} className="mx-auto">
              <Form.Group controlId="formEmail">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="jLopez84@joga.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'error' : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>
                  <FormattedMessage id="password" /> :
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'error' : null
                  }
                />
                {touched.password && errors.password ? (
                  <div className="error-message">{errors.password}</div>
                ) : null}
              </Form.Group>
              <br />
              <Link to="/signup">
                <FormattedMessage id="createaccount" />
              </Link>
              <br />
              <Link to="/">
                <FormattedMessage id="returntomainpage" />
              </Link>
              <br />
              <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </BUTTON>
            </MYFORM>
          )}
        </Formik>
      </CONTAINER>
    </div>
  );
};
