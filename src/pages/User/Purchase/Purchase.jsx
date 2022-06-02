import React from 'react';
import * as S from './purchase.style';

export default function Purchase() {
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem to="">All</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">To Confirm</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">To Ship</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">To Receive</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Cancelled</S.PurchaseTabItem>
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
              View product
            </S.PurchaseButton>
            <S.TotalPrice>
              <S.TotalPriceLabel>Total price</S.TotalPriceLabel>
              <S.TotalPricePrice>đ2000</S.TotalPricePrice>
            </S.TotalPrice>
          </S.OrderCardButtonsContainer>
        </S.OrderCard>
      </S.PurchaseList>
    </div>
  );
}
