import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, FileText, CheckCircle, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Intro */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-primary/10 rounded-3xl mb-6"
          >
            <Award className="text-primary" size={48} />
          </motion.div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">신뢰할 수 있는 금융 가이드 파트너, 코어페이</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            코어페이는 복잡한 모바일 금융 환경 속에서 고객님이 가장 현명한 선택을 하실 수 있도록 돕는 
            금융 컨설팅 전문 플랫폼입니다. 정직한 안내와 투명한 정보를 통해 업계의 새로운 기준을 만들어갑니다.
          </p>
        </div>

        {/* Business Info Card */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 text-center">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                <CheckCircle className="text-accent" size={28} />
                코어페이의 정직한 가이드 선언
              </h3>
              <p className="text-lg leading-relaxed opacity-80">
                저희 코어페이는 불법적인 정보 편취나 과도한 수수료 요구를 절대 하지 않습니다. 
                모든 상담은 고객님의 상황을 최우선으로 고려하며, 진행 전 모든 조건을 명확히 안내합니다. 
                신뢰할 수 있는 파트너로서 고객님의 권익을 보호하고 최선의 솔루션을 제안할 것을 약속드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Guide */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">불법 사기 업체 구별법 4가지</h2>
            <p className="text-slate-600 mt-2">안전한 거래를 위해 반드시 확인하세요!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "과도하게 높은 매입가 유혹", desc: "평균 시세보다 터무니없이 높은 매입가를 제시하며 유인하는 곳은 사기일 확률이 높습니다." },
              { title: "선입금 요구", desc: "결제 전 보증금이나 매입가 명목으로 선입금을 요구하는 곳은 100% 사기입니다." },
              { title: "개인 계좌 입금 유도", desc: "법인 계좌가 아닌 개인 명의의 계좌로만 거래를 유도하는 곳은 주의가 필요합니다." },
              { title: "연락 두절 빈번", desc: "상담 시 대답이 느리거나 전화 연결이 잘 되지 않는 곳은 신뢰하기 어렵습니다." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex gap-4">
                <ShieldAlert className="text-red-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Protection Policy */}
        <div className="bg-slate-50 rounded-[3rem] p-12 text-center">
          <Users className="text-primary mx-auto mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-6">고객 보호 정책</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <FileText className="text-slate-400 shrink-0" size={20} />
              <p className="text-sm text-slate-600">
                <strong>개인정보 보호:</strong> 수집된 정보는 서비스 제공 목적 외에 절대 사용되지 않으며, 거래 완료 후 즉시 파기됩니다.
              </p>
            </div>
            <div className="flex gap-4">
              <FileText className="text-slate-400 shrink-0" size={20} />
              <p className="text-sm text-slate-600">
                <strong>책임 보상제:</strong> 코어페이의 과실로 인해 문제가 발생할 경우, 피해 금액의 100%를 보상해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
