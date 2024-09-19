import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../../app/CartSlice.js';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { HiChip } from 'react-icons/hi';
import { TbDrone } from 'react-icons/tb';
import { FaCamera, FaFan, FaCarBattery } from 'react-icons/fa';
import { LuRadioTower } from 'react-icons/lu';
import { BsTools } from 'react-icons/bs';
import { AiOutlineBoxPlot } from 'react-icons/ai';
import logo from '../../assets/20240718_133407.png';
import menu from '../../assets/menu.png';

export const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  const onNavScroll = () => {
    setNavState(window.scrollY > 30);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    document.getElementById('search-bar').classList.toggle('show-search');
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  return (
    <header
      className={
        !navState
          ? 'absolute top-3 left-0 right-0 opacity-100 z-50'
          : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-12 h-auto ${navState && 'filter brightness-0'}`}
          />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <div className="search" id="search-bar">
              <input
                type="text"
                className="search__input"
                placeholder="Search..."
              />
              <button
                className="search__button"
                id="search-button"
                onClick={toggleSearch}
              >
                <MagnifyingGlassIcon className={`search__icon ${navState && 'filter brightness-0'} `}/>
                <span className="search__close">&times;</span>
              </button>
            </div>
          </li>
          <li className="grid items-center">
            <img
              src={menu}
              alt="new logo"
              className={`w-7 h-auto cursor-pointer ${
                navState && 'filter brightness-0'
              }`}
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute top-10 right-2 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20 backdrop-blur-lg bg-opacity-0">
                <a
                  href="src/externalpage/electronics/electronics.html"
                  target="_blank"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <HiChip className="w-6 h-6 inline-block mr-2" />
                  Electronics
                </a>
                <a
                  href="src/externalpage/frames/frames.html"
                  target="_blank"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <TbDrone className="w-6 h-6 inline-block mr-2" />
                  Frames
                </a>
                <a
                  href="src/externalpage/camera/camera.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <FaCamera className="w-6 h-6 inline-block mr-2" />
                  Camera
                </a>
                <a
                  href="src/externalpage/motors/motors.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <AiOutlineBoxPlot className="w-6 h-6 inline-block mr-2" />
                  Motors
                </a>
                <a
                  href="src/externalpage/battery/battery.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <FaCarBattery className="w-6 h-6 inline-block mr-2" />
                  Battery
                </a>
                <a
                  href="src/externalpage/radio/radio.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <LuRadioTower className="w-6 h-6 inline-block mr-2" />
                  Radio
                </a>
                <a
                  href="src/externalpage/accessories/accessories.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <BsTools className="w-6 h-6 inline-block mr-2" />
                  Accessories
                </a>
                <a
                  href="src/externalpage/propellors/propellors.html"
                  className="block px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-black"
                >
                  <FaFan className="w-6 h-6 inline-block mr-2" />
                  Propellors
                </a>
              </div>
            )}
          </li>
          <li className="grid items-center">
            <HeartIcon
              className={`icon-style w-7 h-auto ${
                navState && 'text-slate-900 transition-all duration-300'
              }`}
            />
          </li>
          <li className="grid items-center relative">
            <button
              type="button"
              onClick={onCartToggle}
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon
                className={`icon-style w-7 h-auto ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
              <div
                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                  navState
                    ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                    : 'bg-slate-100 text-slate-900 shadow-slate-100'
                }`}
              >
                {totalQTY}
              </div>
            </button>
          </li>
          <li className="grid items-center">
            <a href="src/signInForm/form.html" target="_blank">
              <UserCircleIcon
                className={`icon-style w-7 h-auto ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};






