import logo from "../../assets/ProductpadiLogo3dark.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (place: string) => {
    navigate('/', { state: { scrollTo: place } });
  };

  return (
    <header className="flex items-center justify-between p-4 border-b-2 fixed top-0 w-full z-20 bg-white">
      {/* Set height and width for the logo */}
      <img src={logo} alt="logo" className="h-[50px] w-[120px]" />

      <div className="hidden md:block">
        <span onClick={() => handleClick('home')} className="mx-10 text-[var(--primary-color)]">Home</span>
        <span onClick={() => handleClick('features')} className="mx-10 text-[var(--primary-color)]">Features</span>
        <span onClick={() => handleClick('about')} className="mx-10 text-[var(--primary-color)]">About Us</span>
      </div>

      <button onClick={() => handleClick('contact')} className="btn primary-btn bg-[var(--primary-color)] py-2 px-4 text-white rounded-2xl">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
