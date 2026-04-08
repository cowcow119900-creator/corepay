import React from 'react';
import { motion } from 'motion/react';
import { Clock, Bell, Star, Shield, Zap, RefreshCw } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">전문적인 상담 및 가이드 시스템</h1>
          <p className="text-slate-600">차별화된 컨설팅으로 최적의 금융 솔루션을 제안합니다.</p>
        </div>

        {/* Main Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Clock className="text-primary" size={32} />,
              title: "24시간 실시간 전문 상담",
              desc: "새벽이나 공휴일에도 상관없습니다. 365일 24시간 대기 중인 전문 상담사가 실시간으로 맞춤 가이드를 제공합니다."
            },
            {
              icon: <Bell className="text-accent" size={32} />,
              title: "맞춤형 서비스 비교",
              desc: "고객님의 상황에 가장 적합한 서비스를 선별하고, 각 서비스의 장단점을 상세히 비교하여 안내해 드립니다."
            },
            {
              icon: <Star className="text-yellow-500" size={32} />,
              title: "프리미엄 컨설팅 혜택",
              desc: "지속적으로 이용해주시는 고객님께는 전담 상담사 배정 및 우선 가이드 혜택을 제공합니다."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100 text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Section */}
        <div className="space-y-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
              <Zap size={20} />
              <span>SMART & ADVISORY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              기다림 없는<br />실시간 상담 지원 시스템
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              코어페이는 자체 개발한 지능형 상담 솔루션을 통해 고객님의 문의에 즉각적으로 대응합니다. 
              복잡한 절차 설명부터 한도 조회까지, 시스템과 전문가가 협업하여 가장 빠른 가이드를 제공합니다.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Shield className="text-primary shrink-0" size={20} />
                <span className="font-medium">보안 인증 완료</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <RefreshCw className="text-primary shrink-0" size={20} />
                <span className="font-medium">실시간 한도 조회</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-4">
              <Star size={20} />
              <span>VIP MEMBERSHIP</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              함께할수록 깊어지는<br />파트너십 특별 혜택
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              코어페이를 믿고 지속적으로 상담받으시는 고객님들을 위해 멤버십 제도를 운영하고 있습니다. 
              이용 횟수가 늘어날수록 더 정교한 맞춤 가이드와 우대 혜택을 경험하실 수 있습니다.
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                <span className="font-bold">3회 이상 이용 시</span>
                <span className="text-accent font-bold">매입가 1% 추가 우대</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                <span className="font-bold">10회 이상 이용 시</span>
                <span className="text-accent font-bold">매입가 3% 추가 우대 + 기프티콘</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
