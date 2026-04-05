import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Clock, CheckCircle2, MessageSquare, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useChannelTalk } from '../hooks/useChannelTalk';

const DepositHistory = () => {
  const [deposits, setDeposits] = React.useState([
    { id: 1, name: "김*현", amount: "150,000", time: "방금 전" },
    { id: 2, name: "이*우", amount: "300,000", time: "2분 전" },
    { id: 3, name: "박*아", amount: "50,000", time: "5분 전" },
    { id: 4, name: "최*준", amount: "100,000", time: "8분 전" },
    { id: 5, name: "정*윤", amount: "200,000", time: "12분 전" },
  ]);

  React.useEffect(() => {
    const names = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
    const lastNames = ["현", "우", "아", "준", "윤", "민", "서", "진", "영", "호"];
    const amounts = ["50,000", "100,000", "150,000", "200,000", "300,000", "500,000"];

    const interval = setInterval(() => {
      const newDeposit = {
        id: Date.now(),
        name: `${names[Math.floor(Math.random() * names.length)]}*${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: "방금 전"
      };

      setDeposits(prev => [newDeposit, ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white h-full border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-accent" size={20} />
          <h3 className="text-xl font-bold">실시간 입금 현황</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <AnimatePresence initial={false}>
          {deposits.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, x: -20, height: 0 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xs font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">{item.name} 고객님</div>
                  <div className="text-[10px] text-slate-500 uppercase">{item.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-accent font-black text-lg">+{item.amount}원</div>
                <div className="text-[10px] text-green-500 font-bold">입금완료</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-slate-500">※ 실제 입금 내역을 기반으로 실시간 갱신됩니다.</p>
      </div>
    </div>
  );
};

const Main = () => {
  const { showMessenger } = useChannelTalk();

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full mb-6 border border-white/20">
              AI 기반 스마트 금융 서비스 플랫폼
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              복잡한 서류 없이,<br />
              내 폰 안의 한도를<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5분 만에 현금으로</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              당장의 현금 유동성이 필요하신가요? 코어페이는 AI 시스템을 통해<br className="hidden md:block" />
              가장 빠르고 안전한 소액결제 현금화 서비스를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={showMessenger}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all cursor-pointer"
              >
                지금 바로 1:1 무료 상담받기
                <ArrowRight size={20} />
              </button>
              <Link
                to="/information"
                className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                서비스 안내 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">왜 코어페이인가요?</h2>
            <p className="text-slate-600">수많은 고객님이 코어페이를 선택하는 3가지 핵심 이유</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={32} />,
                title: "압도적인 속도",
                desc: "신청부터 입금까지 단 5분! 24시간 자동화 시스템으로 기다림 없는 즉시 입금을 보장합니다."
              },
              {
                icon: <ShieldCheck className="text-secondary" size={32} />,
                title: "투명한 매입가",
                desc: "숨겨진 비용 ZERO! 업계 최고 수준의 매입가를 사전에 명확히 안내하며 정직하게 운영합니다."
              },
              {
                icon: <CheckCircle2 className="text-accent" size={32} />,
                title: "무심사 간편 이용",
                desc: "신용등급 하락 걱정 NO! 복잡한 서류나 심사 과정 없이 본인 명의의 휴대폰만 있다면 누구나 가능합니다."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all group"
              >
                <div className="p-8">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">5분 완성, 이용 절차</h2>
            <p className="text-slate-600">누구나 따라 할 수 있는 아주 간편한 3단계 프로세스</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "상담 신청", desc: "카카오톡을 통해 1:1 상담을 신청하고 한도를 확인합니다." },
                { step: "02", title: "결제 진행", desc: "안내에 따라 소액결제 또는 정보이용료 결제를 안전하게 진행합니다." },
                { step: "03", title: "즉시 입금", desc: "결제 확인 즉시 고객님의 계좌로 5분 이내에 현금이 입금됩니다." }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-primary/30 border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust And Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">신뢰할 수 있는 정식 업체,<br />코어페이가 약속합니다.</h2>
                <ul className="space-y-4">
                  {[
                    "365일 24시간 실시간 입금 시스템 가동",
                    "개인정보 암호화 및 철저한 보안 관리",
                    "불법 매입가 및 추가 비용 요구 절대 없음",
                    "누적 이용 고객 5만 명 돌파, 높은 재방문율"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent" size={20} />
                      <span className="text-lg opacity-90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/10">
                  <div className="text-4xl font-bold mb-2">5만+</div>
                  <div className="text-sm opacity-70">누적 이용 고객</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/10">
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-sm opacity-70">고객 만족도</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/10">
                  <div className="text-4xl font-bold mb-2">5분</div>
                  <div className="text-sm opacity-70">평균 입금 시간</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/10">
                  <div className="text-4xl font-bold mb-2">24h</div>
                  <div className="text-sm opacity-70">상담 및 입금</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Live Status Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Testimonials */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">고객 리얼 후기</h2>
                <p className="text-slate-600">코어페이를 이용하신 고객님들의 솔직한 목소리입니다.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "김*현",
                    rating: 5,
                    date: "2026.03.28",
                    content: "갑자기 급전이 필요해서 막막했는데, 상담원분이 너무 친절하게 안내해주셔서 5분 만에 입금 받았어요. 매입가도 미리 알려주신 그대로라 믿음이 갑니다!"
                  },
                  {
                    name: "이*우",
                    rating: 5,
                    date: "2026.03.25",
                    content: "다른 곳은 복잡하고 시간도 오래 걸리는데 코어페이는 정말 빠르네요. 새벽 시간인데도 바로 처리해주셔서 정말 감사했습니다. 다음에도 꼭 이용할게요."
                  },
                  {
                    name: "박*아",
                    rating: 5,
                    date: "2026.03.20",
                    content: "처음이라 걱정이 많았는데 정식 업체라 그런지 확실히 다르네요. 보안도 철저하고 입금 확인도 실시간으로 알려주니 안심하고 거래했습니다."
                  },
                  {
                    name: "최*준",
                    rating: 5,
                    date: "2026.03.15",
                    content: "급하게 병원비가 필요했는데 코어페이 덕분에 한숨 돌렸습니다. 상담부터 입금까지 막힘없이 진행되어서 정말 만족스러워요."
                  }
                ].map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.content}"</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-900">{review.name} 고객님</span>
                      <span className="text-slate-400">{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Live Status */}
            <div className="lg:col-span-1">
              <DepositHistory />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
              <MessageSquare className="text-white" size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 한도를 확인해보세요</h2>
            <p className="text-slate-600 mb-10 text-lg">
              AI 기반 전문 상담 시스템이 24시간 대기 중입니다. <br className="hidden md:block" />
              가장 빠르고 친절하게 안내해 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={showMessenger}
                className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transition-all cursor-pointer"
              >
                 1:1 상담하기
              </button>
            </div>
            <p className="mt-8 text-sm text-slate-400">
              * 상담은 무료이며, 결제 전까지 어떠한 비용도 발생하지 않습니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Main;
