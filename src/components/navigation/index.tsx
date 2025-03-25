import { tw } from 'twind';
import { useState, useEffect } from 'react';
import { PhoneIcon, X } from 'lucide-react';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  { label: `Features`, href: `#features` },
  { label: `Use Cases`, href: `#useCases` },
  { label: `Why Choose Us`, href: `#whyUs` },
  { label: `FAQ`, href: `#faq-section` },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(
      `p-2 text-white focus:outline-none focus:border-none transition-all duration-300 transform hover:rotate-90`, // Rotate on hover
    )}
  >
    {showMenu ? (
      <X className={tw`mr-2 h-6 w-6`} size={24} fill="white" />
    ) : (
      <img
        src={'/hamburger.svg'} // Use hamburger.svg for menu and close.svg for close
        alt="menu icon"
        className={tw('h-8 w-8')}
      />
    )}
  </button>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Keep track of the last scroll position

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scroll Down: Hide Navbar after scrolling 50px
        setScrolling(true);
      } else if (window.scrollY <= 0) {
        // At the top: Show Navbar
        setScrolling(false);
      }
      setLastScrollY(window.scrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={tw(
        `py-4 px-6 md:px-20 fixed w-full top-0 z-50 flex justify-between items-center transition-all duration-300 shadow-lg`,
        scrolling ? 'transform -translate-y-full' : 'transform translate-y-0', // Hide on scroll down
      )}
    >
      {/* Logo */}
      <img className={tw(`h-12`)} src="logo.svg" alt="logo" />

      {/* Right Section */}
      <div className={tw(`flex items-center ml-auto space-x-4`)}>
        {/* Phone Number */}
        <a
          href="tel:+13022344779"
          style={{ background: '#000231' }}
          className={tw(
            `flex items-center text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-800`,
          )}
        >
          <PhoneIcon className={tw`mr-2`} size={16} fill="white" /> +1302-234-4779
        </a>
        {/* Always Visible Hamburger Menu */}
        <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className={tw(
            `absolute top-full right-0 w-full bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-4 px-6 mt-2 rounded-lg shadow-xl transition-all duration-500 transform ease-in-out opacity-100`,
          )}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={tw(
                `block py-2 text-white hover:text-gray-200 transition-all duration-300 transform ease-in-out`,
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
