import { FC, ChangeEvent } from 'react';
import * as S from './checkbox.style';

interface CheckboxProps {
  onChange: (val: boolean) => void;
  checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ onChange, checked, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    onChange && onChange(value);
  };

  return (
    <S.Checkbox>
      <S.CheckboxInput type="checkbox" onChange={handleChange} checked={checked} {...props} />
      <S.CheckboxBox />
    </S.Checkbox>
  );
};

export default Checkbox;
