import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';

import { ImageContainer, Logo } from '../../components';
import { useApi, useAuthorization } from '../../hooks';
import { AuthLayout } from '../../layouts';
import useStyles from './styles';

interface IProps {}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!'),
  email: Yup.string().required('Email is required!'),
  retypePassword: Yup.string().required('Passwords are not the same!'),
  password: Yup.string().required('Passwords are not the same!'),
});

export const SignUp: FC<IProps> = (props: IProps): JSX.Element => {
  const api = useApi();
  const { isAuthorized, setAuthorization } = useAuthorization();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: { username: '', password: '', retypePassword: '', email: '' },
    validationSchema,
    onSubmit: (values) =>
      api.authorization
        .signIn({ ...values })
        .then(({ refreshToken, jsonWebToken }) => setAuthorization(jsonWebToken, refreshToken)),
  });

  const { values, handleChange, handleSubmit, isValid, errors } = formik;

  return !isAuthorized ? (
    <AuthLayout>
      <div className={classes.authWrap}>
        <Logo vertical />
        <div className={classes.formWrapper}>
          <FormikProvider value={formik}>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                error={!!errors.username}
                name='username'
                id='username'
                required
                placeholder='Username'
                value={values.username}
                onChange={handleChange}
                helperText={errors.username}
              />
              <TextField
                error={!!errors.email}
                name='email'
                id='email'
                required
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                helperText={errors.email}
              />
              <TextField
                error={!!errors.password}
                name='password'
                id='password'
                required
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
              />
              <TextField
                error={!!errors.password}
                name='retypePassword'
                id='retypePassword'
                required
                placeholder='Retype password'
                value={values.retypePassword}
                onChange={handleChange}
                helperText={errors.retypePassword}
              />
              <Button variant='outlined' type='submit' disabled={!isValid}>
                Sign up
              </Button>
            </form>
          </FormikProvider>
        </div>
      </div>
      <div className={classes.authWrap}>
        <ImageContainer>
          <img src='images/auth1.jpg' alt='Cookify' />
        </ImageContainer>
      </div>
    </AuthLayout>
  ) : (
    <AuthLayout>
      <h1>You are authorized</h1>
      <Link to='/home'>Go Home</Link>
    </AuthLayout>
  );
};