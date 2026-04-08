import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Clock, CheckCircle2, MessageSquare, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useFreshchat } from '../hooks/useFreshchat';

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
  const { openChat } = useFreshchat();

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
              내 폰 안의 가치,<br />
              전문가와 함께<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                스마트하게 비교하고<br />
                설계하세요.
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              복잡한 모바일 금융 서비스, 혼자 고민하지 마세요. 코어페이는 AI 시스템과<br className="hidden md:block" />
              전문 상담사를 통해 고객님께 가장 유리한 이용 가이드를 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openChat}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">코어페이만의 전문 상담 서비스</h2>
            <p className="text-slate-600">고객님의 상황에 맞는 최적의 금융 가이드를 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={32} />,
                title: "실시간 맞춤 비교",
                desc: "다양한 서비스의 요율과 혜택을 실시간으로 비교하여, 고객님께 가장 유리한 선택지를 즉시 안내해 드립니다."
              },
              {
                icon: <ShieldCheck className="text-secondary" size={32} />,
                title: "투명한 정보 제공",
                desc: "모든 이용 절차와 수수료를 투명하게 공개합니다. 과도한 요구 없이 정직한 가이드만을 약속드립니다."
              },
              {
                icon: <CheckCircle2 className="text-accent" size={32} />,
                title: "1:1 밀착 가이드",
                desc: "초보자도 어렵지 않게! 전문 상담사가 신청부터 완료까지 모든 과정을 친절하게 1:1로 안내해 드립니다."
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">안전한 상담 프로세스</h2>
            <p className="text-slate-600">전문가와 함께하는 체계적인 3단계 안내 절차</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "맞춤 상담", desc: "고객님의 현재 상황과 필요 한도를 파악하여 최적의 플랜을 제시합니다." },
                { step: "02", title: "비교 및 선택", desc: "제시된 여러 방안 중 고객님께 가장 유리한 서비스를 직접 비교하고 선택합니다." },
                { step: "03", title: "안전한 진행", desc: "선택하신 서비스가 안전하게 처리될 수 있도록 전 과정을 실시간으로 가이드합니다." }
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">신뢰할 수 있는 금융 파트너,<br />코어페이가 약속합니다.</h2>
                <ul className="space-y-4">
                  {[
                    "365일 24시간 실시간 전문 상담사 대기",
                    "개인정보 암호화 및 철저한 보안 가이드 준수",
                    "불필요한 과잉 서비스 권유 절대 없음",
                    "누적 상담 건수 10만 건 돌파, 높은 신뢰도"
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
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">상담 만족 후기</h2>
                <p className="text-slate-600">코어페이의 전문적인 안내를 받으신 고객님들의 후기입니다.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "김*현",
                    rating: 5,
                    date: "2026.03.28",
                    content: "처음이라 모르는 게 많았는데, 상담원분이 제 상황에 맞춰서 가장 유리한 방법을 조목조목 비교해주셔서 정말 큰 도움이 됐어요. 안내도 너무 친절했습니다!"
                  },
                  {
                    name: "이*우",
                    rating: 5,
                    date: "2026.03.25",
                    content: "여러 곳 알아봤지만 코어페이만큼 투명하게 정보를 알려주는 곳이 없더라고요. 수수료나 절차를 미리 다 설명해주니 안심하고 진행할 수 있었습니다."
                  },
                  {
                    name: "박*아",
                    rating: 5,
                    date: "2026.03.20",
                    content: "새벽 시간인데도 상담이 가능해서 놀랐어요. 급한 마음에 이것저것 물어봤는데 귀찮은 내색 없이 하나하나 가이드해주셔서 정말 감사했습니다."
                  },
                  {
                    name: "최*준",
                    rating: 5,
                    date: "2026.03.15",
                    content: "복잡한 금융 용어 대신 알기 쉽게 설명해주셔서 좋았습니다. 덕분에 저에게 가장 적합한 서비스를 선택할 수 있었어요. 전문성이 느껴집니다."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">나에게 맞는 최적의 플랜을 찾아보세요</h2>
            <p className="text-slate-600 mb-10 text-lg">
              AI 기반 전문 상담 시스템이 24시간 대기 중입니다. <br className="hidden md:block" />
              고객님의 입장에서 가장 유리한 방향으로 안내해 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openChat}
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
