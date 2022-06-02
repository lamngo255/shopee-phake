import { FC } from 'react';
import HeaderRegister from '@/components/HeaderRegister/HeaderRegister';

interface RegisterLayoutProps {
  title: string;
  children: any;
}

const RegisterLayout: FC<RegisterLayoutProps> = ({ children, title }) => {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default RegisterLayout;
