import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { path } from 'src/constants/path';
import { useAuthenticated } from 'src/hooks/useAuthenticated';
import Popover from '../Popover/Popover';
import usePopover from 'src/hooks/usePopover';
import * as S from './navbar.style';

export default function Navbar() {
  const authenticated = useAuthenticated();
  const profile = useSelector(state => state.auth.profile);
  const { activePopover, showPopover, hidePopover } = usePopover();

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://cf.shopee.sg/file/a642075e792268a1b23562e65eed4bdd_tn" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to="">Tài khoản của tôi</S.UserLink>
                <S.UserLink to="">Đơn mua</S.UserLink>
                <S.UserButton>Đăng xuất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}

        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  );
}
