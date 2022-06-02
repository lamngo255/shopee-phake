import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getDate, getMonth, getYear, isExists } from 'date-fns';
import InputText from '@/components/InputText/InputText';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import range from 'lodash/range';
import * as S from './profile.style';
import { rules } from '@/constants/rules';
import { updateMe } from '@/pages/Auth/auth.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export default function Profile() {
  const profile = useSelector(state => state.auth.profile);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: profile.name || '',
      phone: profile.phone || '',
      address: profile.address || '',
      date: profile.date_of_birth ? getDate(new Date(profile.date_of_birth)) : '',
      month: profile.date_of_birth ? getMonth(new Date(profile.date_of_birth)) : '',
      year: profile.date_of_birth ? getYear(new Date(profile.date_of_birth)) : '',
    },
  });

  const dispatch = useDispatch();

  const update = async data => {
    const body = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      date_of_birth: new Date(data.year, data.month, data.date).toISOString(),
    };

    try {
      const res = await dispatch(updateMe(body)).then(unwrapResult);
      toast.success(res.message, {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key],
          });
        }
      }
    }
  };

  const validateDate = () => {
    return (
      isExists(Number(getValues('year')), Number(getValues('month')), Number(getValues('date'))) ||
      'Ngày sinh không đúng'
    );
  };

  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>My profile</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>Manage user profile</S.ProfileHeaderSubtitle>
      </S.ProfileHeader>

      <S.ProfileInfo>
        <S.ProfileLeft onSubmit={handleSubmit(update)}>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>{profile.email}</S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Name</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="name"
                control={control}
                rules={rules.name}
                render={({ field }) => (
                  <InputText name="name" type="text" onChange={field.onChange} value={getValues('name')} />
                )}
              />
              <ErrorMessage name="name" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Phone number</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="phone"
                control={control}
                rules={rules.phone}
                render={({ field }) => (
                  <InputText name="phone" type="text" onChange={field.onChange} value={getValues('phone')} />
                )}
              />
              <ErrorMessage name="phone" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Address</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="address"
                control={control}
                rules={rules.address}
                render={({ field }) => (
                  <InputText name="address" type="text" onChange={field.onChange} value={getValues('address')} />
                )}
              />
              <ErrorMessage name="address" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>D.O.B</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <Controller
                  name="date"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate,
                    },
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Day"
                      onChange={field.onChange}
                      value={getValues('date')}
                      options={range(0, 32).map(item => ({
                        name: item,
                        value: item,
                      }))}
                    />
                  )}
                />

                <Controller
                  name="month"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate,
                    },
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Month"
                      onChange={field.onChange}
                      value={getValues('month')}
                      options={range(0, 12).map(item => ({
                        name: item + 1,
                        value: item,
                      }))}
                    />
                  )}
                />

                <Controller
                  name="year"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate,
                    },
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Year"
                      onChange={field.onChange}
                      value={getValues('year')}
                      options={range(1900, 2021).map(item => ({
                        name: item,
                        value: item,
                      }))}
                    />
                  )}
                />
              </S.DateSelect>
            </S.InputLabelContent>
            <S.ErrorMessage>
              <ErrorMessage name="date" errors={errors} />
            </S.ErrorMessage>
          </S.InputLabel>
          <S.Submit>
            <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
          </S.Submit>
        </S.ProfileLeft>

        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img src="https://cf.shopee.sg/file/a642075e792268a1b23562e65eed4bdd" alt="" />
            </S.Avatar>
            <S.InputFile type="file" accept=".jpg,.jpeg,.png" />
            <S.ButtonUpload light>Picture</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Maximum size is 1MB</div>
              <div>Format: JPEG, PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  );
}
