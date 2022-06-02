import { FC, ChangeEvent, FocusEvent } from 'react';

interface BaseInputNumberProps {
  onChange: (val: string) => void;
  onBlur: (val: any) => void;
  value: string;
}

const BaseInputNumber: FC<BaseInputNumberProps> = ({ onChange, value, onBlur, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const val = event.target.value;
    onBlur && onBlur(val);
  };

  return <input type="text" onChange={handleChange} value={value} onBlur={handleBlur} {...props} />;
};

export default BaseInputNumber;
