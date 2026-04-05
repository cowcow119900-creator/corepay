import { Link } from 'react-router-dom';
import { useChannelTalk } from '../hooks/useChannelTalk';

const Footer = () => {
  const { showMessenger } = useChannelTalk();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <span className="text-[16px] font-black tracking-tighter">CP</span>
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                COREPAY
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              코어페이는 정식 사업자 등록 업체로서 고객님의 안전한 거래를 최우선으로 생각합니다. 
              365일 24시간 언제 어디서나 투명한 매입가와 빠른 입금 시스템으로 최상의 서비스를 제공합니다.
            </p>
            <div className="mt-8 space-y-2 text-xs">
              <p>이메일: goodpay1100@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">서비스 메뉴</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/information" className="hover:text-white transition-colors">이용 한도 및 매입가</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">24시 자동화 시스템</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">안전 거래 가이드</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">고객 지원</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={showMessenger}
                  className="hover:text-white transition-colors cursor-pointer text-left w-full"
                >
                   1:1 상담
                </button>
              </li>
              <li>
                <button
                  onClick={showMessenger}
                  className="hover:text-white transition-colors cursor-pointer text-left w-full"
                >
                  상담하기
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs">
          <p>© 2026 COREPAY. All rights reserved. 본 사이트는 소액결제 및 정보이용료 안내를 위한 페이지입니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
