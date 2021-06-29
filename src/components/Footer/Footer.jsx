import React from 'react';
import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
          <S.Language>
            Ngôn ngữ
            <span>Tiếng Anh</span>
            <span>Tiếng Việt</span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH Shopee</div>
          <div>
            Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </S.Footer2>
      </div>
    </S.Footer>
  );
}
