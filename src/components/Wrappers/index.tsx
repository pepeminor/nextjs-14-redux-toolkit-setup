
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Header'), { ssr: false });

('use client');
export const WrapperAppLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
