import { FC } from 'react';
import { Message } from './errorMessage.style';

interface ErrorMessageProps {
  errors: any;
  name: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errors, name }) => {
  const error = errors[name];

  return <Message>{error && error.message}</Message>;
};

export default ErrorMessage;
