import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController';
import ProductRating from 'src/components/ProductRating/ProductRating';
import { formatK, formatMoney, getIdFromNameId, rateSale } from 'src/utils/helper';
import { getProductDetail } from './productDetail.slice';
import * as S from './productDetail.style';

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { idProduct } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const realId = getIdFromNameId(idProduct);
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        setProduct(res.data);
      });
  }, [dispatch, idProduct]);

  return (
    <div>
      {product && (
        <div className="container">
          <S.ProductBriefing>
            <S.ProductImages>
              <S.ProductImageActive>
                <img src={product.image} alt="" />
              </S.ProductImageActive>
              <S.ProductImageSlider>
                <S.ProductIconButtonPrev>
                  <svg
                    enableBackground="new 0 0 13 20"
                    viewBox="0 0 13 20"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left-bold"
                  >
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                  </svg>
                </S.ProductIconButtonPrev>
                {product.images.map((image, index) => (
                  <S.ProductImage key={index}>
                    <img src={image} alt="" />
                  </S.ProductImage>
                ))}
                <S.ProductIconButtonNext>
                  <svg
                    enableBackground="new 0 0 13 21"
                    viewBox="0 0 13 21"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-right-bold"
                  >
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                  </svg>
                </S.ProductIconButtonNext>
              </S.ProductImageSlider>
            </S.ProductImages>
            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>{formatK(product.sold)}</span>
                  <span>Đã bán</span>
                </S.ProductSold>
              </S.ProductMeta1>
              <S.ProductPrice>
                <S.ProductPriceOriginal>đ{formatMoney(product.price_before_discount)}</S.ProductPriceOriginal>
                <S.ProductPriceSale>đ{formatMoney(product.price)}</S.ProductPriceSale>
                <S.ProductPriceSalePercent>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </S.ProductPriceSalePercent>
              </S.ProductPrice>
              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Số lượng</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityController>
                  <ProductQuantityController />
                </S.ProductBuyQuantityController>
                <S.ProductBuyQuantityQuantity>{product.quantity} sản phẩm có sẵn</S.ProductBuyQuantityQuantity>
              </S.ProductBuyQuantity>
              <S.ProductButtons>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon _2FCuXA icon-add-to-cart"
                >
                  <g>
                    <g>
                      <polyline
                        fill="none"
                        points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                      />
                      <circle cx={6} cy="13.5" r={1} stroke="none" />
                      <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                    </g>
                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1="7.5" x2="10.5" y1={7} y2={7} />
                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1={9} x2={9} y1="8.5" y2="5.5" />
                  </g>
                </svg>
                Thêm vào giỏ hàng
              </S.ProductButtons>
            </S.ProductMeta>
          </S.ProductBriefing>

          <S.ProductContent>
            <S.ProductContentHeading>MÔ TẢ SẢN PHẨM</S.ProductContentHeading>
            <S.ProductContentDetail></S.ProductContentDetail>
          </S.ProductContent>
        </div>
      )}
    </div>
  );
}
