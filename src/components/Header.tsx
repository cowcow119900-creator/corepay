import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useFreshchat } from '../hooks/useFreshchat';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { openChat } = useFreshchat();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '상세정보', path: '/information' },
    { name: '기능/서비스', path: '/services' },
    { name: '소개/안내', path: '/about' },
    { name: '문의/지원', path: '/support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <span className="text-[16px] font-black tracking-tighter">CP</span>
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                COREPAY
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-slate-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={openChat}
              className="flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-7 py-3 rounded-full text-sm font-black hover:shadow-xl hover:shadow-primary/30 transition-all cursor-pointer active:scale-95"
            >
              24시 실시간 상담
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openChat();
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-secondary text-white w-full py-4 rounded-xl font-black shadow-lg shadow-primary/20 cursor-pointer active:scale-[0.98] transition-transform"
                >
                  24시 실시간 상담
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
