import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Smartphone, CreditCard, HelpCircle } from 'lucide-react';
import { useChannelTalk } from '../hooks/useChannelTalk';

const Information = () => {
  const { showMessenger } = useChannelTalk();
  const [amount, setAmount] = React.useState(100000);
  const feeRate = 0.15; // 예시 매입가 15%

  const limits = [
    { carrier: "SKT", limit: "최대 100만원", info: "결제 한도 상향 가능" },
    { carrier: "KT", limit: "최대 100만원", info: "월별 정책에 따라 변동" },
    { carrier: "LG U+", limit: "최대 100만원", info: "본인 확인 필수" },
    { carrier: "알뜰폰", limit: "최대 30만원", info: "통신사별 상이" }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">이용 한도 및 매입가 안내</h1>
          <p className="text-slate-600">투명한 매입가 정책으로 정직하게 운영합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Limits Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Smartphone className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">통신사별 이용 한도</h2>
            </div>
            <div className="space-y-4">
              {limits.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-lg">{item.carrier}</div>
                    <div className="text-sm text-slate-500">{item.info}</div>
                  </div>
                  <div className="text-primary font-bold text-xl">{item.limit}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400 flex items-start gap-2">
              <HelpCircle size={16} className="shrink-0 mt-0.5" />
              한도는 고객님의 통신사 이용 실적 및 정책에 따라 다를 수 있으며, 상담을 통해 정확한 확인이 가능합니다.
            </p>
          </motion.div>

          {/* Fee Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">매입가 계산기</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">신청 금액 (원)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xl font-bold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="금액을 입력하세요"
                />
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 space-y-4">
                <div className="flex justify-between text-slate-600">
                  <span>소액결제 정상기준 (약 15%)</span>
                  <span>- {(amount * feeRate).toLocaleString()}원</span>
                </div>
                <div className="border-t border-primary/10 pt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">최종 입금 예정액</span>
                  <span className="text-3xl font-black text-primary">{(amount * (1 - feeRate)).toLocaleString()}원</span>
                </div>
              </div>
              <button
                onClick={showMessenger}
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all cursor-pointer"
              >
                이 금액으로 상담 신청하기
              </button>
            </div>
          </motion.div>
        </div>

        {/* Comparison Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">소액결제 vs 정보이용료</h2>
            <p className="text-slate-600 mt-2">나에게 맞는 서비스는 무엇일까요?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">휴대폰 소액결제</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• 쇼핑몰, 배달 앱 등 일반 결제 한도 사용</li>
                <li>• 통신사별 월 최대 100만원 한도</li>
                <li>• 상대적으로 높은 매입가 적용</li>
                <li>• 가장 대중적이고 빠른 현금화 방식</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">콘텐츠 정보이용료 (구글결제)</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• 구글 플레이스토어, 앱스토어 결제 한도 사용</li>
                <li>• 소액결제와 별도로 추가 100만원 한도 존재</li>
                <li>• 소액결제 한도를 모두 소진했을 때 유용</li>
                <li>• 게임 아이템, 유료 앱 결제 방식 활용</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
