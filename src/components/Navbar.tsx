import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../resources/routes-constants';
import '../styles/navbar.sass';

interface NavLinkType {
  key: number
  title?: string
  url?: string
}

interface TabListType {
  tabList: Array<NavLinkType> | any
}

interface MenuButtonType {
  onMenuButtonClick?: any
}

function NavLinks({ tabList }: TabListType) {
  return tabList.map((item: NavLinkType) => <a
    key={item.key}
    href={item.url}
    className="mr-5 hover:text-white"
  >
    {item.title}
  </a>
  )
}

function MobileLinks({ tabList }: TabListType) {
  return tabList.map((item: NavLinkType) => <a
    key={item.key}
    href={item.url}
    className="py-2 text-center"
  >
    {item.title}
  </a>
  )
}

function MenuButton({ onMenuButtonClick }: MenuButtonType) {
  return (
    <button
      className="flex md:hidden items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base"
      onClick={onMenuButtonClick}
    >
      <svg
        style={{ color: 'white' }}
        height="28px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        width="28px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
          fill="white"
        >
        </path>
      </svg>
    </button>
  )
}

function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const tabList = [
    { key: 1, title: 'Home', url: ROUTES.HOMEPAGE },
    { key: 2, title: 'About Us', url: ROUTES.ABOUTPAGE },
  ];

  const onMenuPress = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap py-2 px-3 md:px-20 flex-row items-center">
        <div className='w-full md:w-auto flex items-center justify-between'>
          <a className="flex title-font font-medium items-center text-white">
            <span className="ml-3 text-lg md:text-xl">Online-Book-Store</span>
          </a>
          <MenuButton
            onMenuButtonClick={() => onMenuPress()}
          />
        </div>
        <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <NavLinks tabList={tabList} />
        </nav>
      </div>
      <nav className={`flex flex-col p-4 absolute -mt-1 text-base rounded custom-transparent-bg ${showMenu ? 'visible opacity-100 top-14' : 'collapse opacity-0 top-12'} md:hidden`}>
        <MobileLinks tabList={tabList} />
      </nav>
    </header>
  );
}

export default Navbar;