import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './home.style';
import FilterPanel from 'src/components/FilterPanel/FilterPanel';
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult';
import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { getCategories } from './home.slice';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data);
      });
  }, [dispatch]);

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} />
        </S.Side>
        <S.Main>
          <SearchItemResult></SearchItemResult>
        </S.Main>
      </S.Container>
    </div>
  );
}
