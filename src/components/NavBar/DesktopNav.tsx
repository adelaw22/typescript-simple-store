import PageContainer from '../pageContainer';
import { NavLink, Link } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const componentStyling = {
  // Icon
  iconStyle: "h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer",
  // Link
  menuStyle: 'px-2 hover:border-b-4 hover:border-gray-900 text-gray-700 font-semibold hover:text-gray-900 hover:font-bold transition ease-in-out delay-150'
};

interface DesktopProps {
  NavBgPosition: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNav = ({ NavBgPosition, setIsOpen }: DesktopProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const showModal = () => {
    setIsOpen(true);
  };

  const menuItem = [
    {
      item: 'Home',
      link: '/'
    },
    {
      item: 'About',
      link: '/about'
    },
    {
      item: 'Contact',
      link: '/contact'
    },
    {
      item: 'Shop',
      link: '/shop'
    },
  ];

  return (
    <nav className={`z-10 top-0 ${NavBgPosition ? 'sticky bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow' : 'bg-[#E9EAEB]'}`}>
      <PageContainer containerStyle="flex justify-between h-16 py-4 items-center">
        <NavLink to='/'>
          <span className='text-3xl font-bold text-gray-900'>Blcwr.</span>
        </NavLink>

        <div className="flex justify-between items-center">
          {menuItem.map((item, i) => (
            <NavLink key={i} to={item.link} className='mx-5'>
              <span className={`${componentStyling.menuStyle}`}>{item.item}</span>
            </NavLink>
          ))}

          <span onClick={showModal} className="w-10 h-10 flex items-center p-1 cursor-pointer relative">
            <ShoppingBagIcon className={`relative left-1 ${componentStyling.iconStyle}`} />
            <div className="h-4 w-4 rounded-full bg-gray-900 text-white absolute right-0 top-0 z-10">
              <p className='text-xs text-center'>{cartItems.length}</p>
            </div>
          </span>
        </div>
      </PageContainer>
    </nav>
  );
};

export default DesktopNav;
