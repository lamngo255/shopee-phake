import React from 'react';
import InputText from 'src/components/InputText/InputText';
import * as S from './profile.style';
import range from 'lodash/range';

export default function Profile() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>Quản lý thông tin hồ sơ</S.ProfileHeaderSubtitle>
      </S.ProfileHeader>

      <S.ProfileInfo>
        <S.ProfileLeft>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>mocmeo@gmail.com</S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Tên</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="name" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="phone" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="address" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <S.SelectDate
                  title="Ngày"
                  options={range(1, 32).map(item => ({
                    name: item,
                    value: item,
                  }))}
                />
                <S.SelectDate
                  title="Tháng"
                  options={range(0, 12).map(item => ({
                    name: item + 1,
                    value: item,
                  }))}
                />
                <S.SelectDate
                  title="Năm"
                  options={range(1900, 2021).map(item => ({
                    name: item,
                    value: item,
                  }))}
                />
              </S.DateSelect>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </S.ProfileLeft>

        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img src="https://cf.shopee.sg/file/a642075e792268a1b23562e65eed4bdd" alt="" />
            </S.Avatar>
            <S.InputFile type="file" accept=".jpg,.jpeg,.png" />
            <S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Dung lượng file tối đa là 1MB</div>
              <div>Định dạng: JPEG, PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  );
}
