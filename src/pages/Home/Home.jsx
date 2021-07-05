import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './home.style';
import FilterPanel from 'src/components/FilterPanel/FilterPanel';
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult';
import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { getCategories, getProducts } from './home.slice';
import useQuery from 'src/hooks/useQuery';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const query = useQuery();

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data);
      });
  }, [dispatch]);

  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 30,
      sortBy: query.sortBy || 'view',
    };
    setFilters(_filters);

    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
    };

    (async () => {
      const data = await dispatch(getProducts({ params }));
      const res = unwrapResult(data);
      setProducts(res.data);
    })();
  }, [query, dispatch]);

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} filters={filters} />
        </S.Side>
        <S.Main>
          <SearchItemResult products={products} filters={filters} />
        </S.Main>
      </S.Container>
    </div>
  );
}
