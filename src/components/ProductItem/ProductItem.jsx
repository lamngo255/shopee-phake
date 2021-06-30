import React from 'react';
import { Link } from 'react-router-dom';
import ProductRating from '../ProductRating/ProductRating';
import * as S from './productItem.style';

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img src="https://cf.shopee.sg/file/fd364e4a6c817ddf6338a986cbd1978b_tn" alt="" />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>Mayer 3L Air Fryer MMAF3000 Shopee Exclusive</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>đ 8.700</S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>đ 8.700</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating />
              <S.ProductItemSold>
                <span>1.7k</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  );
}
