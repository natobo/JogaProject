import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Forms.scss';
import { Link } from 'react-router-dom';

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

export const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    bio: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    username: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Email inválido').required('Campo requerido'),
    password: Yup.string()
      .min(8, 'Las contraseñas deben tener mínimo 8 caracteres')
      .required('Campo requerido'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir')
      .required('Campo requerido'),
    bio: Yup.string().required('Campo requerido'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // When button submits form and form is in the process of submitting, submit button is disabled
    setSubmitting(true);
    // Simulate submitting to database, shows us values submitted, resets form
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="formSignUp" className="form-section">
      <CONTAINER>
        <h1>Registro Joga</h1>
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
              {console.log(values)}
              <Form.Group controlId="formName">
                <Form.Label>Nombre :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Juan López"
                  /* Set onChange to handleChange */
                  onChange={handleChange}
                  /* Set onBlur to handleBlur */
                  onBlur={handleBlur}
                  /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                  value={values.name}
                  /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                  className={touched.name && errors.name ? 'error' : null}
                />
                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                {touched.name && errors.name ? (
                  <div className="error-message">{errors.name}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="formUserName">
                <Form.Label>Nombre de usuario/gamertag:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="jlopez84"
                  /* Set onChange to handleChange */
                  onChange={handleChange}
                  /* Set onBlur to handleBlur */
                  onBlur={handleBlur}
                  /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                  value={values.username}
                  /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                  className={
                    touched.username && errors.username ? 'error' : null
                  }
                />
                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                {touched.username && errors.username ? (
                  <div className="error-message">{errors.username}</div>
                ) : null}
              </Form.Group>
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
                <Form.Label>Contraseña :</Form.Label>
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
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Confirmar contraseña :</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirmar contraseña"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                  className={
                    touched.passwordConfirm && errors.passwordConfirm
                      ? 'error'
                      : null
                  }
                />
                {touched.passwordConfirm && errors.passwordConfirm ? (
                  <div className="error-message">{errors.passwordConfirm}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="formBio">
                <Form.Label>Bio :</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  placeholder="¿Cómo quieres que te conozca la comunidad?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                  className={touched.bio && errors.bio ? 'error' : null}
                  style={{ height: '100px' }}
                />
                {touched.bio && errors.bio ? (
                  <div className="error-message">{errors.bio}</div>
                ) : null}
              </Form.Group>
              <br />
              <Link to="/login">Ir a login</Link>
              <br />
              <Link to="/">Volver landing</Link>
              <br />
              <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </BUTTON>
            </MYFORM>
          )}
        </Formik>
      </CONTAINER>
    </section>
  );
};
