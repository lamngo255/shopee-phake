import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { path } from '@/constants/path';
import { useAuthenticated } from '@/hooks/useAuthenticated';
import Popover from '../Popover/Popover';
import usePopover from '@/hooks/usePopover';
import * as S from './navbar.style';
import { logout } from '@/pages/Auth/auth.slice';

export default function Navbar() {
  const dispatch = useDispatch();
  const authenticated = useAuthenticated();
  const profile = useSelector(state => state.auth.profile);
  const { activePopover, showPopover, hidePopover } = usePopover();

  const handleLogout = () => dispatch(logout());

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://cf.shopee.sg/file/a642075e792268a1b23562e65eed4bdd_tn" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>My account</S.UserLink>
                <S.UserLink to={path.purchase}>Orders</S.UserLink>
                <S.UserButton onClick={handleLogout}>Logout</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}

        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Register</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Login</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  );
}
