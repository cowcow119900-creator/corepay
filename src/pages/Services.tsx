import React from 'react';
import { motion } from 'motion/react';
import { Clock, Bell, Star, Shield, Zap, RefreshCw } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">코어페이만의 특별한 서비스</h1>
          <p className="text-slate-600">차별화된 시스템으로 더 빠르고 안전하게 이용하세요.</p>
        </div>

        {/* Main Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Clock className="text-primary" size={32} />,
              title: "24시간 무인 자동 입금",
              desc: "새벽이나 공휴일에도 상관없습니다. 365일 24시간 가동되는 자동화 시스템으로 신청 즉시 입금됩니다."
            },
            {
              icon: <Bell className="text-accent" size={32} />,
              title: "실시간 진행 알림",
              desc: "상담부터 결제, 입금 완료까지 모든 과정을 신속하게 진행 도와드립니다."
            },
            {
              icon: <Star className="text-yellow-500" size={32} />,
              title: "VIP 고객 우대 혜택",
              desc: "지속적으로 이용해주시는 단골 고객님께는 추가 할인 및 우선 상담 혜택을 제공합니다."
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
              <span>FAST & AUTOMATED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              기다림 없는<br />실시간 자동화 시스템
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              코어페이는 자체 개발한 핀테크 자동화 솔루션을 통해 상담원 연결 대기 시간을 획기적으로 줄였습니다. 
              간단한 본인 인증 후 결제가 완료되면 시스템이 즉시 계좌 이체를 실행합니다.
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
              이용할수록 커지는<br />단골 고객 특별 혜택
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              코어페이를 믿고 다시 찾아주시는 고객님들을 위해 멤버십 제도를 운영하고 있습니다. 
              이용 횟수가 늘어날수록 매입가는 높아지고, 입금 속도는 더욱 빨라집니다.
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
