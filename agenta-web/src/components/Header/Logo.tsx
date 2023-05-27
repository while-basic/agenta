// components/Logo/Logo.tsx
import logoWhiteMode from '../../assets/logo-light-small.png'
import Image from 'next/image';
import Link from 'next/link';
import useResetApp from '@/lib/hooks/useResetApp';


const Logo: React.FC = () => {
  const resetApp = useResetApp();
  return (
    <div style={{
      border: "1px solid black;",
      padding: "10px",
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10
    }}>
      <Link href="/" onClick={resetApp}>
        <div style={{
          color: '#000',
          textDecoration: 'none',
          fontSize: '2em',
          fontWeight: 'bold'
        }}>
          Agenta
        </div>
      </Link >
    </div >
  );
};

export default Logo;