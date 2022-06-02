import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'src/assets/styles/utils';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import InputPassword from 'src/components/InputPassword/InputPassword';
import InputText from 'src/components/InputText/InputText';
import { path } from 'src/constants/path';
import { rules } from 'src/constants/rules';
import { register } from '../auth.slice';
import * as S from './register.style';

export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: '',
    },
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await dispatch(register(body));
      unwrapResult(res);
      history.push(path.home);
    } catch (err) {
      if (err.status === 422) {
        for (const key in err.data) {
          setError(key, {
            type: 'server',
            message: err.data[key],
          });
        }
      }
    }
  };

  return (
    <S.StyledRegister>
      <S.Container className="container">
        <S.Banner />
        <S.FormWrapper>
          <S.FormTitle>Register</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
            <S.FormControl>
              <Controller
                name="email"
                control={control}
                rules={rules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={field.onChange}
                    value={getValues('email')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="email" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    name="password"
                    placeholder="Password"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="confirmedPassword"
                control={control}
                rules={{
                  ...rules.confirmedPassword,
                  validate: { samePassword: v => v === getValues('password') || 'Mismatched password' },
                }}
                render={({ field }) => (
                  <InputPassword
                    name="confirmedPassword"
                    placeholder="Confirm password"
                    onChange={field.onChange}
                    value={getValues('confirmedPassword')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="confirmedPassword" />
            </S.FormControl>
            <S.FormButton>
              <Button type="submit">Register</Button>
            </S.FormButton>
          </S.Form>
          <S.FormFooter>
            <span>Have you registered yet?</span>
            <Link to={path.login} className="link">
              Login
            </Link>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Container>
    </S.StyledRegister>
  );
}
