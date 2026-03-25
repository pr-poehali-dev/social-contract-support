import Icon from "@/components/ui/icon";

const WHO_CAN = [
  { icon: "Users", title: "Малоимущие семьи", desc: "Доход ниже прожиточного минимума в регионе" },
  { icon: "Baby", title: "Многодетные семьи", desc: "3 и более детей" },
  { icon: "UserX", title: "Безработные", desc: "Официально не трудоустроенные граждане РФ" },
  { icon: "Briefcase", title: "Самозанятые", desc: "Официально зарегистрированные" },
  { icon: "Shield", title: "Ветераны СВО", desc: "Без учёта дохода" },
  { icon: "UserCheck", title: "ИП на старте", desc: "Зарегистрированные менее 1 года назад" },
];

const BP_STRUCTURE = [
  { num: "1", title: "Резюме проекта", desc: "Краткое описание идеи, цели, сумма гранта" },
  { num: "2", title: "Описание деятельности", desc: "Вид деятельности, ОКВЭД, форма регистрации" },
  { num: "3", title: "Анализ рынка", desc: "Целевая аудитория, конкуренты, спрос" },
  { num: "4", title: "Маркетинговый план", desc: "Каналы продвижения, ценообразование" },
  { num: "5", title: "Производственный план", desc: "Оборудование, помещение, технология" },
  { num: "6", title: "Финансовый план", desc: "Расходы, доходы, окупаемость, прогноз" },
  { num: "7", title: "Риски и меры", desc: "Оценка рисков и пути их минимизации" },
];

const INCOME_TABLE = [
  { month: "1 мес", income: "15 000", expenses: "12 000", profit: "3 000" },
  { month: "2 мес", income: "25 000", expenses: "14 000", profit: "11 000" },
  { month: "3 мес", income: "35 000", expenses: "16 000", profit: "19 000" },
  { month: "6 мес", income: "55 000", expenses: "20 000", profit: "35 000" },
  { month: "9 мес", income: "70 000", expenses: "22 000", profit: "48 000" },
  { month: "12 мес", income: "85 000", expenses: "25 000", profit: "60 000" },
];

export default function Infographic() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-[900px] mx-auto">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-8 mb-4 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%)"
          }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Icon name="TrendingUp" size={14} className="text-amber-400" />
              Бизнес-план для социального контракта 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Получите{" "}
              <span className="text-amber-400">350 000 ₽</span>{" "}
              от государства
            </h1>
            <p className="text-emerald-100 text-lg">Разработка бизнес-плана с вероятностью одобрения 99% · Дистанционно по всей России</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">

          {/* КТО МОЖЕТ */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Icon name="Users" size={20} className="text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg leading-tight">Кто может претендовать</h2>
                <p className="text-gray-400 text-xs">на социальный контракт</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {WHO_CAN.map((item) => (
                <div key={item.title} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex gap-2.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name={item.icon} size={14} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs leading-tight">{item.title}</div>
                    <div className="text-gray-400 text-[10px] leading-tight mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-amber-800 text-xs flex items-center gap-2">
              <Icon name="Info" size={12} className="text-amber-600 shrink-0" />
              Доход считается за 3 месяца до обращения
            </div>
          </div>

          {/* СТРУКТУРА БП */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <Icon name="FileText" size={20} className="text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg leading-tight">Структура бизнес-плана</h2>
                <p className="text-gray-400 text-xs">7 обязательных разделов</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {BP_STRUCTURE.map((item) => (
                <div key={item.num} className="flex items-center gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                    <span className="font-semibold text-gray-900 text-xs">{item.title}</span>
                    <span className="text-gray-400 text-[10px] text-right max-w-[130px]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ТАБЛИЦА ДОХОДОВ */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
              <Icon name="BarChart3" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg leading-tight">Расчёт доходов на 2026 год</h2>
              <p className="text-gray-400 text-xs">Пример финансового плана (прогноз по месяцам), ₽</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
                  <th className="text-left px-4 py-3 font-semibold text-sm">Период</th>
                  <th className="text-right px-4 py-3 font-semibold text-sm">Выручка, ₽</th>
                  <th className="text-right px-4 py-3 font-semibold text-sm">Расходы, ₽</th>
                  <th className="text-right px-4 py-3 font-semibold text-sm">Прибыль, ₽</th>
                  <th className="text-right px-4 py-3 font-semibold text-sm">Рост</th>
                </tr>
              </thead>
              <tbody>
                {INCOME_TABLE.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.month}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.income}</td>
                    <td className="px-4 py-3 text-right text-red-500">{row.expenses}</td>
                    <td className="px-4 py-3 text-right font-bold text-emerald-700">{row.profit}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${(parseInt(row.profit) / 60000) * 80 + 8}px` }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-emerald-50 border-t-2 border-emerald-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Итого за год</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">385 000</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">109 000</td>
                  <td className="px-4 py-3 text-right font-bold text-emerald-700 text-base">176 000</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3 flex items-center gap-1">
            <Icon name="Info" size={11} className="shrink-0" />
            Цифры являются прогнозом и разрабатываются индивидуально под ваш проект и регион
          </p>
        </div>

        {/* ТЕСТ */}
        <div className="bg-gradient-to-br from-emerald-950 to-teal-900 rounded-3xl p-6 mb-4 text-white">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
              <Icon name="ClipboardCheck" size={20} className="text-amber-400" />
            </div>
            <div>
              <h2 className="font-bold text-white text-lg leading-tight">Тест на предпринимательские компетенции</h2>
              <p className="text-emerald-400 text-xs">Обязательный этап для получения соцконтракта</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              { icon: "Hash", val: "45", label: "вопросов в тесте", color: "from-emerald-500 to-teal-600" },
              { icon: "Clock", val: "20", label: "минут на прохождение", color: "from-amber-500 to-yellow-500" },
              { icon: "Percent", val: "50%", label: "правильных ответов достаточно", color: "from-teal-500 to-emerald-600" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white leading-none">{s.val}</div>
                  <div className="text-emerald-300 text-xs mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: "BookOpen", text: "Темы: основы предпринимательства, финансовая грамотность, маркетинг" },
              { icon: "Target", text: "Нужно верно ответить минимум на 23 вопроса из 45" },
              { icon: "GraduationCap", text: "В комплекте с бизнес-планом — подготовка к тесту в подарок" },
              { icon: "CheckCircle", text: "Тест проходит онлайн или очно через соцзащиту вашего региона" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                <Icon name={item.icon} size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="text-emerald-100 text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl p-6 text-center">
          <h3 className="font-bold text-emerald-950 text-2xl mb-2">Готовы начать? Консультация — бесплатно!</h3>
          <p className="text-emerald-800 mb-4">Валентина · Высшее экономическое образование · По всей России дистанционно</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+79611151442" className="bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-emerald-800 transition-colors">
              <Icon name="Phone" size={16} className="text-white" />
              +7 (961) 115-14-42
            </a>
            <a href="https://t.me/ProBusinessPlan" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-emerald-50 transition-colors border border-emerald-200">
              <Icon name="Send" size={16} className="text-emerald-700" />
              Написать в Telegram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
