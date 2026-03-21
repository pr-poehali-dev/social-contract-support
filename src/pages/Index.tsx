import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CONSULTANT_IMG = "https://cdn.poehali.dev/projects/6a6a572a-97fe-4eef-b000-6d6611ec7d41/files/1ac463b9-acc4-4b94-a82f-e8cdc5ed4237.jpg";
const SUCCESS_IMG = "https://cdn.poehali.dev/projects/6a6a572a-97fe-4eef-b000-6d6611ec7d41/bucket/edf23910-fd09-4949-aee6-0e182c951df1.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Phone",
    title: "Бесплатная консультация",
    desc: "Определяем ваши шансы на получение выплаты, разбираем вашу ситуацию и помогаем выбрать нишу, если вы ещё не определились.",
    tag: "Бесплатно",
  },
  {
    icon: "FileText",
    title: "Бизнес-план под ключ",
    desc: "Разработка подробного бизнес-плана с финансовыми расчётами по требованиям именно вашего региона. Вероятность одобрения — 99%.",
    tag: "Основная услуга",
  },
  {
    icon: "GraduationCap",
    title: "Подготовка к тестированию",
    desc: "В комплекте с бизнес-планом — вопросы для подготовки к тесту на предпринимательские компетенции. Пройдёте уверенно.",
    tag: "Бонус",
  },
  {
    icon: "RefreshCw",
    title: "Корректировки бесплатно",
    desc: "Если соцзащита запросит правки — внесём изменения без доплаты. Сопровождаем до получения положительного решения.",
    tag: "Гарантия",
  },
  {
    icon: "TrendingUp",
    title: "Финансовые расчёты",
    desc: "Профессиональные финансовые модели и прогнозы, которые убеждают комиссию в жизнеспособности вашей идеи.",
    tag: "Экспертиза",
  },
  {
    icon: "ClipboardList",
    title: "Закрывающие документы",
    desc: "Подготовка отчётности и закрывающих документов по запросу органов соцзащиты в течение всего срока действия контракта.",
    tag: "В комплекте",
  },
];

const PORTFOLIO = [
  { title: "Кабинет косметолога", amount: "350 000 ₽", region: "Одобрено в декабре 2025", category: "Красота", result: "Одобрено" },
  { title: "Ферма мясо-молочного направления", amount: "350 000 ₽", region: "Одобрено в декабре 2025", category: "Сельское хозяйство", result: "Одобрено" },
  { title: "Личное подсобное хозяйство", amount: "200 000 ₽", region: "Одобрено в 2025", category: "ЛПХ", result: "Одобрено" },
  { title: "Услуги для бизнеса", amount: "350 000 ₽", region: "Одобрено в 2025", category: "Самозанятость", result: "Одобрено" },
  { title: "Мастерская ручных изделий", amount: "280 000 ₽", region: "Одобрено в 2025", category: "Ремёсла", result: "Одобрено" },
  { title: "Онлайн-обучение", amount: "200 000 ₽", region: "Одобрено в 2025", category: "Образование", result: "Одобрено" },
];

const REVIEWS = [
  {
    name: "Ольга М.",
    city: "Краснодар",
    text: "Никогда не думала, что смогу получить господдержку. Всё объяснили по-человечески, помогли собрать документы. Получила 350 000 ₽ на открытие пекарни!",
    stars: 5,
    date: "Февраль 2025",
  },
  {
    name: "Сергей К.",
    city: "Воронеж",
    text: "Обращался уже дважды. Первый раз отказали — пришёл сюда, переделали план, и со второй попытки одобрили. Профессионалы своего дела.",
    stars: 5,
    date: "Январь 2025",
  },
  {
    name: "Марина Л.",
    city: "Ростов-на-Дону",
    text: "Быстро, чётко, без лишней воды. За 2 недели бизнес-план был готов, ещё через месяц деньги были на счету. Рекомендую всем!",
    stars: 5,
    date: "Декабрь 2024",
  },
  {
    name: "Ирина Д.",
    city: "Ставрополь",
    text: "Изначально сомневалась, но результат превзошёл ожидания. Очень индивидуальный подход — учли все мои особенности и ситуацию.",
    stars: 5,
    date: "Ноябрь 2024",
  },
];

const STEPS = [
  { num: "01", title: "Бесплатная консультация", desc: "Определяем ваши шансы, разбираем ситуацию и помогаем выбрать направление бизнеса" },
  { num: "02", title: "Договор и анкета", desc: "Заключаем договор, вы заполняете анкету о своём проекте — всё дистанционно" },
  { num: "03", title: "Разработка бизнес-плана", desc: "Готовим план с финансовыми расчётами и бонусом — вопросами к тесту на предпринимательские компетенции" },
  { num: "04", title: "Сопровождение до результата", desc: "Вносим правки по запросу соцзащиты и готовим отчётность в течение всего срока контракта" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-golos bg-white text-gray-900 overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-white" />
            </div>
            <span className="font-oswald text-lg font-bold text-emerald-800 tracking-wide">ProБизнесПлан</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Бесплатная консультация
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-gray-700 font-medium py-2 border-b border-gray-50">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#contacts")} className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-xl mt-2">
              Бесплатная консультация
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Icon name="Star" size={14} className="text-amber-400 fill-amber-400" />
              Высшее экономическое образование · Работаю дистанционно по всей России
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Получите до{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                350 000 ₽
              </span>{" "}
              от государства
            </h1>
            <p className="text-emerald-100 text-xl leading-relaxed mb-8 max-w-lg">
              Это не кредит — деньги не нужно возвращать. Помогу получить соцконтракт на развитие своего дела: напишу бизнес-план с вероятностью одобрения 99%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-gradient-to-r from-amber-400 to-yellow-400 text-emerald-950 font-bold text-lg px-8 py-4 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Получить бесплатную консультацию
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                Узнать об услугах
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: 8, suf: " млн+", label: "Выдано клиентам за декабрь 2025" },
                { val: 10, suf: " лет", label: "Опыта в разработке бизнес-планов" },
                { val: 99, suf: "%", label: "Вероятность одобрения" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-oswald text-3xl md:text-4xl font-bold text-amber-400">
                    <Counter target={s.val} suffix={s.suf} />
                  </div>
                  <div className="text-emerald-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl" />
            <img
              src={CONSULTANT_IMG}
              alt="Консультант"
              className="relative w-full h-[520px] object-cover rounded-3xl shadow-2xl border-2 border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Заявка одобрена!</div>
                <div className="text-gray-500 text-xs">Получено 350 000 ₽</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/50" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Процесс работы</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-gray-900">Как мы работаем</h2>
            </div>
          </AnimSection>
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <AnimSection key={s.num}>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 z-10">
                      <Icon name="ArrowRight" size={20} className="text-emerald-400" />
                    </div>
                  )}
                  <div className="font-oswald text-5xl font-bold text-emerald-100 mb-4">{s.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Что мы предлагаем</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-gray-900">Наши услуги</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Полное сопровождение от идеи до получения денег на счёт</p>
            </div>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimSection key={i}>
                <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                      <Icon name={s.icon} size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gradient-to-br from-emerald-950 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, #f59e0b 0%, transparent 50%)"
        }} />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative">
          <AnimSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-400/10 rounded-3xl blur-xl" />
              <img
                src={SUCCESS_IMG}
                alt="О компании"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </AnimSection>
          <AnimSection>
            <div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">О нас</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 mb-6">Меня зовут Валентина</h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                Я имею высшее экономическое образование и более 10 лет пишу бизнес-планы. В каждый разработанный мной план вложена частичка моей души — я люблю то, что делаю.
              </p>
              <p className="text-emerald-200 leading-relaxed mb-8">
                Только за декабрь 2025 года мои клиенты получили более 8 миллионов рублей по соцконтракту и различным грантам. Среди проектов — кабинет косметолога, ферма мясо-молочного направления и многое другое. Работаю дистанционно — вы не тратите время на дорогу, я всегда на связи.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "GraduationCap", text: "Высшее экономическое образование" },
                  { icon: "Laptop", text: "Работаю дистанционно по всей России" },
                  { icon: "Shield", text: "Гарантия: правки бесплатно до одобрения" },
                  { icon: "Heart", text: "Конфиденциальность и честность" },
                ].map((f) => (
                  <div key={f.text} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <Icon name={f.icon} size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-emerald-100">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Наши результаты</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-gray-900">Портфолио</h2>
              <p className="text-gray-500 mt-4 text-lg">Реальные проекты, получившие одобрение</p>
            </div>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <AnimSection key={i}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                      <Icon name="CheckCircle" size={12} className="text-emerald-500" />
                      {p.result}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {p.region}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="font-oswald text-2xl font-bold text-emerald-700">{p.amount}</span>
                    <span className="text-gray-400 text-sm ml-2">получено</span>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection>
            <div className="text-center mt-10">
              <p className="text-gray-500">Это лишь часть наших проектов. Каждый месяц мы помогаем новым клиентам получить господдержку.</p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Что говорят клиенты</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-gray-900">Отзывы</h2>
            </div>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <AnimSection key={i}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all relative">
                  <div className="absolute top-6 right-6 text-emerald-200">
                    <Icon name="Quote" size={40} />
                  </div>
                  <div className="flex mb-4 gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                        {r.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                        <div className="text-gray-400 text-xs flex items-center gap-1">
                          <Icon name="MapPin" size={10} />
                          {r.city}
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-300 text-xs">{r.date}</span>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHO FITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-10">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Кому подойдёт</span>
              <h2 className="font-oswald text-4xl font-bold mt-2 text-gray-900">Кто может получить соцконтракт?</h2>
            </div>
          </AnimSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "Users", title: "Малоимущие и многодетные семьи", desc: "Доход ниже прожиточного минимума в регионе" },
              { icon: "UserX", title: "Безработные граждане", desc: "Официально не трудоустроенные граждане РФ" },
              { icon: "Briefcase", title: "Самозанятые", desc: "Официально зарегистрированные самозанятые" },
              { icon: "Shield", title: "Ветераны СВО", desc: "С 2026 года — без учёта уровня дохода" },
            ].map((c) => (
              <AnimSection key={c.title}>
                <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-100">
                    <Icon name={c.icon} size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection>
            <p className="text-center text-gray-400 text-sm mt-6">Доход считается за три месяца, предшествующих месяцу обращения</p>
          </AnimSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-amber-400 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-emerald-950 mb-4">
              Готовы сделать первый шаг?
            </h2>
            <p className="text-emerald-800 text-xl mb-8">Перестаньте откладывать — начните работать на себя, а не на чужие цели. Бесплатная консультация прямо сейчас!</p>
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-emerald-900 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:bg-emerald-800 hover:scale-105 transition-all shadow-xl"
            >
              Получить бесплатную консультацию
            </button>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Связаться с нами</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-gray-900">Контакты</h2>
              <p className="text-gray-500 mt-4 text-lg">Оставьте заявку — перезвоним в течение 30 минут</p>
            </div>
          </AnimSection>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Оставить заявку</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ваша бизнес-идея</label>
                    <textarea
                      rows={4}
                      placeholder="Кратко опишите, чем хотите заниматься..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400 resize-none"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all text-lg">
                    Отправить заявку
                  </button>
                  <p className="text-center text-gray-400 text-xs">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </div>
              </div>
            </AnimSection>
            <AnimSection>
              <div className="flex flex-col gap-6">
                <div className="bg-gradient-to-br from-emerald-950 to-teal-900 rounded-2xl p-8 text-white">
                  <h3 className="font-bold text-xl mb-6">Наши контакты</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { icon: "Phone", label: "Телефон", val: "+7 (961) 115-14-42", href: "tel:+79611151442" },
                      { icon: "Send", label: "Telegram", val: "@ProBusinessPlan", href: "https://t.me/ProBusinessPlan" },
                      { icon: "MessageCircle", label: "WhatsApp", val: "+7 (961) 115-14-42", href: "https://wa.me/79611151442" },
                    ].map((c) => (
                      <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <Icon name={c.icon} size={18} className="text-amber-400" />
                        </div>
                        <div>
                          <div className="text-emerald-300 text-xs">{c.label}</div>
                          <div className="font-semibold">{c.val}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-amber-900 mb-1">Работаем по всей России</div>
                      <div className="text-amber-700 text-sm leading-relaxed">
                        Помогаем клиентам из любого региона. Все консультации можно проводить онлайн — по видеосвязи или телефону.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Icon name="TrendingUp" size={16} className="text-white" />
              </div>
              <span className="font-oswald text-lg font-bold tracking-wide">ProБизнесПлан</span>
            </div>
            <p className="text-emerald-400 text-sm text-center">
              © 2026 · Валентина · Профессиональная разработка бизнес-планов для соцконтракта
            </p>
            <div className="flex gap-4">
              {NAV_LINKS.slice(0, 3).map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="text-emerald-400 hover:text-white text-sm transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}