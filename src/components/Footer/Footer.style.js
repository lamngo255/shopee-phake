import styled from 'styled-components';

export const Footer = styled.footer`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 4.2rem 0 3.7rem;
  background: #f5f5f5;
  width: 100%;
  min-width: max-content;
`;

export const Footer1 = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Language = styled.div`
  display: flex;
  span {
    padding: 0 0.3125rem;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;
