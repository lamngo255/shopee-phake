import React from 'react';
import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 Shopee.</div>
          <S.Language>
            Language
            <span>English</span>
            <span>Vietnamese</span>
          </S.Language>
        </S.Footer1>
      </div>
    </S.Footer>
  );
}
