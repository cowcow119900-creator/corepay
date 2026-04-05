import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useChannelTalk } from '../hooks/useChannelTalk';

const Support = () => {
  const { showMessenger } = useChannelTalk();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    { q: "정말 5분 안에 입금이 되나요?", a: "네, 맞습니다. 결제 확인 즉시 시스템을 통해 자동 이체가 진행되므로 평균 5분 이내에 고객님의 계좌로 입금됩니다." },
    { q: "신용등급에 영향이 있나요?", a: "휴대폰 결제 한도를 이용하는 서비스이므로 대출과 달리 신용점수 하락에 전혀 영향을 주지 않습니다." },
    { q: "본인 명의 휴대폰만 가능한가요?", a: "네, 보안과 사고 방지를 위해 반드시 본인 명의의 휴대폰과 본인 명의의 계좌로만 이용이 가능합니다." },
    { q: "매입가는 얼마인가요?", a: "매입가는 통신사 정책과 결제 방식에 따라 차이가 있습니다. 상담 시 정확한 매입가를 미리 안내해 드립니다." },
    { q: "미납이나 연체가 있어도 가능한가요?", a: "통신사 미납이 있더라도 현재 결제 한도가 남아있다면 이용이 가능할 수 있습니다. 상담을 통해 확인해 보세요." }
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
                  onClick={showMessenger}
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
