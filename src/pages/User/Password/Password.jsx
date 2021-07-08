import React from 'react';
import * as S from '../Profile/profile.style';
import { PasswordContent } from './password.style';
import InputPassword from 'src/components/InputPassword/InputPassword';

export default function Password() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>Để bảo mật tài khoản</S.ProfileHeaderSubtitle>
        <PasswordContent>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="password" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="new_password" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="confirm_new_password" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </PasswordContent>
      </S.ProfileHeader>
    </S.Profile>
  );
}
