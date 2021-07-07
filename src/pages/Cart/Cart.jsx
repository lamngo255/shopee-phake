import React from 'react';
import Checkbox from 'src/components/Checkbox/Checkbox';
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController';
import * as S from './cart.style';

export default function Cart() {
  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckbox>
            <Checkbox />
          </S.ProductHeaderCheckbox>
          <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
        </S.ProductHeader>
        <S.ProductSection>
          <S.CartItem>
            <S.CartItemCheckbox>
              <Checkbox />
            </S.CartItemCheckbox>
            <S.CartItemOverview>
              <S.CartItemOverviewImage to="">
                <img src="https://cf.shopee.sg/file/51b175e61945849c8cf650072d4671d7_tn" alt="" />
              </S.CartItemOverviewImage>
              <S.CartItemOverviewNameWrapper>
                <S.CartItemOverviewName to="">
                  Mask, BFE>99%, 3 PLY Medical Mask, Disposable Face Mask, 50 pcs
                </S.CartItemOverviewName>
              </S.CartItemOverviewNameWrapper>
            </S.CartItemOverview>
            <S.CartItemUnitPrice>
              <span>đ1000</span>
              <span>đ2000</span>
            </S.CartItemUnitPrice>
            <S.CartItemQuantity>
              <ProductQuantityController />
            </S.CartItemQuantity>
            <S.CartItemTotalPrice>
              <span>đ10000</span>
            </S.CartItemTotalPrice>
            <S.CartItemAction>
              <S.CartItemActionButton>Xoá</S.CartItemActionButton>
            </S.CartItemAction>
          </S.CartItem>
        </S.ProductSection>
      </div>

      <S.CartFooter>
        <S.CartFooterCheckbox>
          <Checkbox />
        </S.CartFooterCheckbox>
        <S.CartFooterButton>Chọn tất cả</S.CartFooterButton>
        <S.CartFooterButton>Xoá</S.CartFooterButton>
        <S.CartFooterSpaceBetween></S.CartFooterSpaceBetween>
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán (1 sản phẩm)</div>
            <div>đ1000</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ1000</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckout>Mua hàng</S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  );
}
