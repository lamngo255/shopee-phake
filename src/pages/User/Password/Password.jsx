import React from 'react';
import * as S from '../Profile/profile.style';
import { PasswordContent } from './password.style';
import InputPassword from '@/components/InputPassword/InputPassword';

export default function Password() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Change password</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>to protect your account</S.ProfileHeaderSubtitle>
        <PasswordContent>
          <S.InputLabel>
            <S.InputLabelLabel>Old password</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="password" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>New password</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="new_password" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Confirm new password</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="confirm_new_password" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.Submit>
            <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
          </S.Submit>
        </PasswordContent>
      </S.ProfileHeader>
    </S.Profile>
  );
}
