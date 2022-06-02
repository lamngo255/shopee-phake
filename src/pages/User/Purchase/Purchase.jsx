import React from 'react';
import * as S from './purchase.style';

export default function Purchase() {
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem to="">Tất cả</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ xác nhận</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ lấy hàng</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đang giao</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đã huỷ</S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        <S.OrderCard>
          <S.OrderCardContent>
            <S.OrderCardDetail>
              <img src="https://cf.shopee.sg/file/3769829b5ed36cd77b1f5642bddabecb_tn" alt="" />
              <S.OrderContent>
                <S.OrderName>Fitted Bedsheet Pillow Case Bedding Single/Super Single</S.OrderName>
                <S.OrderQuantity>x 1</S.OrderQuantity>
              </S.OrderContent>
            </S.OrderCardDetail>
            <S.OrderCardPrice>đ1000</S.OrderCardPrice>
          </S.OrderCardContent>
          <S.OrderCardButtonsContainer>
            <S.PurchaseButton to="" light={1}>
              Xem sản phẩm
            </S.PurchaseButton>
            <S.TotalPrice>
              <S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
              <S.TotalPricePrice>đ2000</S.TotalPricePrice>
            </S.TotalPrice>
          </S.OrderCardButtonsContainer>
        </S.OrderCard>
      </S.PurchaseList>
    </div>
  );
}
