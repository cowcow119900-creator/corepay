import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useFreshchat } from '../hooks/useFreshchat';

const Support = () => {
  const { openChat } = useFreshchat();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    { q: "상담은 정말 무료인가요?", a: "네, 모든 상담은 100% 무료로 진행됩니다. 고객님의 상황에 맞는 최적의 플랜을 안내받으신 후 진행 여부를 결정하시면 됩니다." },
    { q: "신용등급에 영향이 있나요?", a: "휴대폰 결제 한도를 활용한 가이드를 제공하므로, 일반적인 대출과 달리 신용점수 하락에 전혀 영향을 주지 않습니다." },
    { q: "어떤 서비스를 비교해주시나요?", a: "소액결제, 정보이용료 등 다양한 모바일 금융 서비스의 요율과 한도를 실시간으로 비교하여 가장 유리한 방안을 제시해 드립니다." },
    { q: "상담 시간은 어떻게 되나요?", a: "코어페이는 365일 24시간 연중무휴로 운영됩니다. 언제든 편하신 시간에 문의 주시면 전문 상담사가 답변해 드립니다." },
    { q: "미납이나 연체가 있어도 상담 가능한가요?", a: "네, 가능합니다. 현재 상황에서 이용 가능한 최선의 대안이 있는지 함께 고민하고 안내해 드리겠습니다." }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">고객 지원 센터</h1>
          <p className="text-slate-600">궁금하신 점을 빠르게 해결해 드립니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">빠른 상담 채널</h2>
              <div className="space-y-4">
                <button
                  onClick={openChat}
                  className="w-full flex items-center gap-4 p-5 bg-[#FEE500] text-slate-900 rounded-2xl font-bold hover:opacity-90 transition-all cursor-pointer"
                >
                  <MessageCircle size={24} />
                   1:1 상담
                </button>
                <div className="flex items-center gap-4 p-5 bg-slate-50 text-slate-600 rounded-2xl font-medium">
                  <Mail size={24} />
                  goodpay1100@gmail.com
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">상담 가능 시간</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                코어페이는 고객님의 편의를 위해 <br />
                <strong>365일 24시간</strong> 연중무휴로 <br />
                상담 및 입금 서비스를 운영합니다.
              </p>
            </div>
          </div>

          {/* FAQ & Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* FAQ Accordion */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">자주 묻는 질문 (FAQ)</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-slate-800 hover:text-primary transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-slate-600 pb-4 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
