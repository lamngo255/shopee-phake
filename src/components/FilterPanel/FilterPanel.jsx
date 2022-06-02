import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { path } from 'src/constants/path';
import RatingStars from '../RatingStars/RatingStars';
import * as S from './filterPanel.style';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { Controller, useForm } from 'react-hook-form';

export default function FilterPanel({ categories, filters }) {
  const history = useHistory();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || '',
    },
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    setValue('minPrice', filters.minPrice || '');
    setValue('maxPrice', filters.maxPrice || '');
  }, [setValue, filters]);

  const searchPrice = data => {
    const { minPrice, maxPrice } = data;
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters;
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice };
      } else {
        delete _filters.minPrice;
      }
      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice };
      } else {
        delete _filters.maxPrice;
      }

      history.push(path.home + `?${qs.stringify(_filters)}`);
    }
  };

  const validPrice = () => {
    const minPrice = getValues('minPrice');
    const maxPrice = getValues('maxPrice');
    const message = 'Please enter valid price range';

    if (minPrice !== '' && maxPrice !== '') {
      return Number(maxPrice) >= Number(minPrice) || message;
    }
    return minPrice !== '' || maxPrice !== '' || message;
  };

  const clearAll = () => {
    reset();
    history.push({
      pathname: path.home,
    });
  };

  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <svg viewBox="0 0 12 10" className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate">
          <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        All categories
      </S.CategoryTitleLink>
      <S.CategoryList>
        {categories.map(category => (
          <S.CategoryItem key={category._id}>
            <NavLink
              to={path.home + `?category=${category._id}`}
              isActive={(match, location) => {
                if (!match) return false;
                const query = qs.parse(location.search);
                return query.category === category._id;
              }}
            >
              {category.name}
            </NavLink>
          </S.CategoryItem>
        ))}
      </S.CategoryList>
      <S.CategoryTitle>
        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon ">
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Filter
      </S.CategoryTitle>
      <S.FilterGroup>
        <S.FilterGroupHeader>Price range</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <Controller
              name="minPrice"
              control={control}
              rules={{
                validate: { validPrice },
              }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="From"
                  onChange={value => {
                    clearErrors();
                    field.onChange(value);
                  }}
                  value={getValues('minPrice')}
                />
              )}
            />

            <S.PriceRangeLine />
            <Controller
              name="maxPrice"
              control={control}
              rules={{
                validate: { validPrice },
              }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="To"
                  onChange={value => {
                    clearErrors();
                    field.onChange(value);
                  }}
                  value={getValues('maxPrice')}
                />
              )}
            />
          </S.PriceRangeGroup>
          {Object.values(errors).length !== 0 && (
            <S.PriceErrorMessage>Please enter valid price range</S.PriceErrorMessage>
          )}
          <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>Apply</S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      <S.FilterGroup>
        <S.FilterGroupHeader>Rating</S.FilterGroupHeader>
        <RatingStars filters={filters} />
      </S.FilterGroup>
      <S.RemoveFilterButton onClick={clearAll}>Clear all</S.RemoveFilterButton>
    </div>
  );
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
};
