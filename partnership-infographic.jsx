import { useState } from "react";

const Arrow = ({ direction = "down", color = "#DFFF00", size = 20 }) => {
  if (direction === "down")
    return (
      <div style={{ textAlign: "center", lineHeight: 1 }}>
        <svg width={size} height={size} viewBox="0 0 20 20">
          <path d="M10 2 L10 16 M4 11 L10 17 L16 11" stroke={color} strokeWidth="2" fill="none" />
        </svg>
      </div>
    );
  if (direction === "right")
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
        <path d="M2 10 L16 10 M11 4 L17 10 L11 16" stroke={color} strokeWidth="2" fill="none" />
      </svg>
    );
  return null;
};

export default function PartnershipInfographic() {
  const [tab, setTab] = useState("structure");

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      {/* HEADER */}
      <div style={{ borderBottom: "2px solid #DFFF00", padding: "28px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#DFFF00", textTransform: "uppercase", marginBottom: 6 }}>
          [ СБОРКА ] ДОГОВОР ПАРТНЁРСТВА
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 900, margin: 0, lineHeight: 1.15, textTransform: "uppercase" }}>
          КАК УСТРОЕНО
          <br />
          <span style={{ color: "#DFFF00" }}>ПАРТНЁРСТВО ВНУТРИ</span>
        </h1>
        <div style={{ fontSize: 11, color: "#888", marginTop: 6 }}>
          Простое товарищество — ГК РФ, глава 55
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", borderBottom: "1px solid #222" }}>
        {[
          { id: "structure", label: "СТРУКТУРА" },
          { id: "money", label: "ДЕНЬГИ" },
          { id: "roles", label: "РОЛИ" },
          { id: "contract", label: "ДОГОВОР" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              padding: "12px 4px",
              background: tab === t.id ? "#DFFF00" : "transparent",
              color: tab === t.id ? "#000" : "#666",
              border: "none",
              borderRight: "1px solid #222",
              cursor: "pointer",
              fontWeight: 900,
              fontSize: 10,
              letterSpacing: 1.5,
              fontFamily: "inherit",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* STRUCTURE TAB */}
      {tab === "structure" && (
        <div style={{ padding: 20 }}>
          {/* Top level: Brand */}
          <div
            style={{
              background: "#DFFF00",
              color: "#000",
              padding: "16px",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            <div style={{ fontSize: 9, letterSpacing: 3, fontWeight: 700, marginBottom: 4 }}>БРЕНД</div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1 }}>[ СБОРКА ]</div>
            <div style={{ fontSize: 10, marginTop: 4 }}>Закрытый карьерный клуб по подписке</div>
          </div>

          <Arrow />

          {/* Two columns: Tim & Kristina */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 4 }}>
            {/* TIM */}
            <div style={{ border: "2px solid #DFFF00", padding: 14 }}>
              <div style={{ fontSize: 9, letterSpacing: 2, color: "#DFFF00", marginBottom: 6 }}>СТОРОНА 1</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 4 }}>ТИМ</div>
              <div style={{ fontSize: 11, color: "#DFFF00", fontWeight: 700, marginBottom: 10 }}>ПРОДЮСЕР</div>

              {["Бренд и дизайн", "Сайт и инфраструктура", "Маркетинг и воронка", "SMM-агент", "Методология", "Платежи (Tribute)", "Стратегия", "Масштабирование"].map(
                (item, i) => (
                  <div key={i} style={{ fontSize: 10, color: "#ccc", marginBottom: 5, paddingLeft: 10, borderLeft: "2px solid #DFFF00" }}>
                    {item}
                  </div>
                )
              )}
            </div>

            {/* KRISTINA */}
            <div style={{ border: "1px solid #444", padding: 14 }}>
              <div style={{ fontSize: 9, letterSpacing: 2, color: "#888", marginBottom: 6 }}>СТОРОНА 2</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 4 }}>КРИСТИНА</div>
              <div style={{ fontSize: 11, color: "#fff", fontWeight: 700, marginBottom: 10 }}>ЭКСПЕРТ</div>

              {["Лицо бренда", "Личные соцсети", "Групповые разборы (2/нед)", "VIP-консультации", "Мини-группы ПРЕМИУМ", "Активность в чате", "Вебинары и эфиры", "Клиентский сервис"].map(
                (item, i) => (
                  <div key={i} style={{ fontSize: 10, color: "#999", marginBottom: 5, paddingLeft: 10, borderLeft: "2px solid #555" }}>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <Arrow />

          {/* IP Block */}
          <div style={{ background: "#111", border: "1px solid #333", padding: 14, marginBottom: 6 }}>
            <div style={{ fontSize: 9, letterSpacing: 2, color: "#DFFF00", marginBottom: 8 }}>ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <div style={{ fontSize: 10, color: "#DFFF00", fontWeight: 700, marginBottom: 4 }}>СОБСТВЕННОСТЬ ТИМА</div>
                {["Бренд «СБОРКА»", "Сайт и софт", "Методология", "SMM-система", "Шаблоны"].map((item, i) => (
                  <div key={i} style={{ fontSize: 10, color: "#ccc", marginBottom: 3 }}>
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#888", fontWeight: 700, marginBottom: 4 }}>СОБСТВЕННОСТЬ КРИСТИНЫ</div>
                {["Личный бренд", "Соцсети", "Репутация"].map((item, i) => (
                  <div key={i} style={{ fontSize: 10, color: "#999", marginBottom: 3 }}>
                    {item}
                  </div>
                ))}
                <div style={{ fontSize: 10, color: "#666", fontWeight: 700, marginTop: 8, marginBottom: 4 }}>СОВМЕСТНОЕ</div>
                <div style={{ fontSize: 10, color: "#999" }}>Записи вебинаров</div>
              </div>
            </div>
          </div>

          {/* Key point */}
          <div style={{ background: "#DFFF00", color: "#000", padding: 14, textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 900 }}>
              ТИМ ВЛАДЕЕТ ПЛАТФОРМОЙ. КРИСТИНА — ПЕРВЫЙ ЭКСПЕРТ.
            </div>
          </div>
        </div>
      )}

      {/* MONEY TAB */}
      {tab === "money" && (
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#DFFF00", marginBottom: 14 }}>ДВИЖЕНИЕ ДЕНЕГ</div>

          {/* Client Payment */}
          <div style={{ background: "#111", padding: 14, textAlign: "center", marginBottom: 4, border: "1px solid #333" }}>
            <div style={{ fontSize: 9, color: "#888", letterSpacing: 1 }}>КЛИЕНТЫ ПЛАТЯТ</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>100%</div>
            <div style={{ fontSize: 10, color: "#666" }}>карты + крипто со всего мира</div>
          </div>

          <Arrow />

          {/* Tribute */}
          <div style={{ background: "#111", padding: 14, textAlign: "center", marginBottom: 4, border: "1px solid #333" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 9, color: "#888", letterSpacing: 1 }}>ПЛАТФОРМА</div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#fff" }}>TRIBUTE</div>
                <div style={{ fontSize: 10, color: "#666" }}>аккаунт Тима</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 9, color: "#ff4444", letterSpacing: 1 }}>КОМИССИЯ</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#ff4444" }}>-10%</div>
              </div>
            </div>
          </div>

          <Arrow />

          {/* After commission */}
          <div style={{ background: "#111", padding: 14, textAlign: "center", marginBottom: 4, border: "1px solid #333" }}>
            <div style={{ fontSize: 9, color: "#888", letterSpacing: 1 }}>К РАСПРЕДЕЛЕНИЮ</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#DFFF00" }}>90%</div>
          </div>

          <Arrow />

          {/* Split */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
            <div style={{ background: "#DFFF00", color: "#000", padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 9, letterSpacing: 2, fontWeight: 700 }}>ПРОДЮСЕР</div>
              <div style={{ fontSize: 28, fontWeight: 900 }}>50%</div>
              <div style={{ fontSize: 10 }}>= 45% от оплаты</div>
            </div>
            <div style={{ background: "#333", padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 9, letterSpacing: 2, fontWeight: 700, color: "#ccc" }}>ЭКСПЕРТ</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>50%</div>
              <div style={{ fontSize: 10, color: "#aaa" }}>= 45% от оплаты</div>
            </div>
          </div>

          {/* Example calculation */}
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#DFFF00", marginBottom: 10 }}>ПРИМЕР: 60 КЛИЕНТОВ (ЦЕЛЕВОЙ МИКС)</div>

          <div style={{ background: "#111", border: "1px solid #333", padding: 14 }}>
            {[
              { label: "ТРИАЛ (9 чел.)", revenue: "26 100 \u20BD" },
              { label: "СТАНДАРТ (33 чел.)", revenue: "326 700 \u20BD" },
              { label: "ПРЕМИУМ (15 чел.)", revenue: "238 500 \u20BD" },
              { label: "VIP (3 чел.)", revenue: "89 700 \u20BD" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 11 }}>
                <span style={{ color: "#aaa" }}>{item.label}</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>{item.revenue}</span>
              </div>
            ))}
            <div
              style={{
                borderTop: "1px solid #444",
                paddingTop: 8,
                marginTop: 8,
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
              }}
            >
              <span style={{ fontWeight: 900 }}>ИТОГО ВЫРУЧКА</span>
              <span style={{ fontWeight: 900, color: "#DFFF00" }}>681 000 \u20BD</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11 }}>
              <span style={{ color: "#ff4444" }}>Tribute (-10%)</span>
              <span style={{ color: "#ff4444" }}>-68 100 \u20BD</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11 }}>
              <span style={{ color: "#ccc" }}>К распределению</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>612 900 \u20BD</span>
            </div>
            <div
              style={{
                borderTop: "2px solid #DFFF00",
                paddingTop: 10,
                marginTop: 10,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div style={{ background: "#DFFF00", color: "#000", padding: 10, textAlign: "center" }}>
                <div style={{ fontSize: 9, letterSpacing: 1, fontWeight: 700 }}>ТИМУ</div>
                <div style={{ fontSize: 18, fontWeight: 900 }}>306 450 \u20BD</div>
                <div style={{ fontSize: 10 }}>~$3,929</div>
              </div>
              <div style={{ background: "#333", padding: 10, textAlign: "center" }}>
                <div style={{ fontSize: 9, letterSpacing: 1, fontWeight: 700, color: "#ccc" }}>КРИСТИНЕ</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#fff" }}>306 450 \u20BD</div>
                <div style={{ fontSize: 10, color: "#aaa" }}>~$3,929</div>
              </div>
            </div>
          </div>

          {/* Payment note */}
          <div style={{ background: "#111", border: "1px solid #333", padding: 12, marginTop: 8, fontSize: 10, color: "#888", lineHeight: 1.5 }}>
            Выплата доле Эксперта — не позднее 5 рабочих дней после поступления на счёт. Ежемесячный отчёт — до 5-го числа.
          </div>
        </div>
      )}

      {/* ROLES TAB */}
      {tab === "roles" && (
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#DFFF00", marginBottom: 14 }}>РАЗДЕЛЕНИЕ УПРАВЛЕНИЯ</div>

          {/* Strategic */}
          <div style={{ border: "2px solid #DFFF00", padding: 16, marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 9, color: "#DFFF00", letterSpacing: 2 }}>СТРАТЕГИЧЕСКОЕ УПРАВЛЕНИЕ</div>
                <div style={{ fontSize: 16, fontWeight: 900, marginTop: 2 }}>ПРОДЮСЕР (ТИМ)</div>
              </div>
              <div style={{ background: "#DFFF00", color: "#000", padding: "4px 10px", fontSize: 10, fontWeight: 900 }}>СТРАТЕГИЯ</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "🎨", label: "Бренд и визуал" },
                { icon: "🔧", label: "Техническая инфраструктура" },
                { icon: "📈", label: "Маркетинг и GTM" },
                { icon: "🤖", label: "SMM-автоматизация" },
                { icon: "💰", label: "Платежи и финансы" },
                { icon: "📐", label: "Продукт и тарифы" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#000", padding: 8, fontSize: 11, color: "#ccc" }}>
                  <span style={{ marginRight: 6 }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Operational */}
          <div style={{ border: "1px solid #444", padding: 16, marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 9, color: "#888", letterSpacing: 2 }}>ОПЕРАТИВНОЕ УПРАВЛЕНИЕ</div>
                <div style={{ fontSize: 16, fontWeight: 900, marginTop: 2 }}>ЭКСПЕРТ (КРИСТИНА)</div>
              </div>
              <div style={{ background: "#444", color: "#fff", padding: "4px 10px", fontSize: 10, fontWeight: 900 }}>ОПЕРАЦИИ</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "🎤", label: "Вебинары и эфиры" },
                { icon: "👥", label: "Групповые разборы" },
                { icon: "💎", label: "VIP-консультации" },
                { icon: "💬", label: "Чат и сервис" },
                { icon: "📱", label: "Контент в соцсетях" },
                { icon: "🏆", label: "Мини-группы ПРЕМИУМ" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#000", padding: 8, fontSize: 11, color: "#999" }}>
                  <span style={{ marginRight: 6 }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* KPI */}
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#DFFF00", marginBottom: 10, marginTop: 16 }}>KPI ЭКСПЕРТА</div>
          <div style={{ background: "#111", border: "1px solid #333", padding: 14 }}>
            {[
              { metric: "Групповые разборы", value: "2/нед", detail: "90 мин каждый" },
              { metric: "VIP-консультации", value: "до 10 чел.", detail: "4×30 мин/мес на каждого" },
              { metric: "Мини-группы ПРЕМИУМ", value: "2/мес", detail: "4-5 чел. в группе" },
              { metric: "Активность в чате", value: "ежедневно", detail: "ответы, поддержка" },
              { metric: "Вебинары", value: "по плану", detail: "лицо бренда" },
              { metric: "Нагрузка", value: "~34 ч/мес", detail: "оценка по 60 клиентам" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: i < 5 ? "1px solid #222" : "none",
                }}
              >
                <div>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>{item.metric}</div>
                  <div style={{ fontSize: 10, color: "#666" }}>{item.detail}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#DFFF00", whiteSpace: "nowrap" }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* SMM Agent Note */}
          <div style={{ background: "#DFFF00", color: "#000", padding: 14, marginTop: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 1, marginBottom: 4 }}>SMM-АГЕНТ — ВКЛАД ТИМА</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              Тим создаёт и поддерживает автоматизированную систему контент-маркетинга. SMM-агент генерирует контент для обеих сторон. Кристина публикует готовый контент в свои соцсети.
            </div>
          </div>
        </div>
      )}

      {/* CONTRACT TAB */}
      {tab === "contract" && (
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#DFFF00", marginBottom: 14 }}>КЛЮЧЕВЫЕ УСЛОВИЯ ДОГОВОРА</div>

          {[
            {
              section: "ФОРМА",
              content: "Договор простого товарищества (глава 55 ГК РФ). Два гражданина РФ объединяют вклады для извлечения прибыли без образования юридического лица.",
              accent: true,
            },
            {
              section: "ВКЛАДЫ",
              content: "Оцениваются как равные. Продюсер вносит инфраструктуру, бренд, технологии. Эксперт вносит личный бренд, экспертизу, время.",
              accent: false,
            },
            {
              section: "СПЛИТ",
              content: "50/50 после комиссии платформы (10%). Выплата Эксперту — в течение 5 рабочих дней после поступления.",
              accent: true,
            },
            {
              section: "ПЛАТЕЖИ",
              content: "Через аккаунт Продюсера на Tribute. Эксперт — менеджер аккаунта. Возможен переход на другую платёжную систему по взаимному согласию.",
              accent: false,
            },
            {
              section: "IP",
              content: "Бренд, сайт, методология, SMM-система — собственность Продюсера. Личный бренд и соцсети — собственность Эксперта. Записи вебинаров — совместная собственность.",
              accent: true,
            },
            {
              section: "СРОК",
              content: "12 месяцев с автоматическим продлением. Расторжение — уведомление за 30 дней.",
              accent: false,
            },
            {
              section: "ПЕРЕСМОТР",
              content: "Условия можно пересмотреть раз в 3 месяца по взаимному согласию. Инициатор — за 14 дней с обоснованием.",
              accent: false,
            },
            {
              section: "КОНКУРЕНЦИЯ",
              content: "Эксперт не ведёт прямо конкурирующую деятельность в период действия договора.",
              accent: true,
            },
            {
              section: "ПРИ ВЫХОДЕ",
              content: "Бренд «СБОРКА» остаётся у Продюсера. Окончательный расчёт — 15 рабочих дней. Конфиденциальность — 2 года.",
              accent: false,
            },
            {
              section: "НАЛОГИ",
              content: "Каждая сторона самостоятельно платит налоги со своей доли дохода.",
              accent: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                border: item.accent ? "1px solid #DFFF00" : "1px solid #222",
                padding: 14,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: item.accent ? "#DFFF00" : "#333",
                    color: item.accent ? "#000" : "#fff",
                    padding: "4px 8px",
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.section}
                </div>
                <div style={{ fontSize: 12, color: "#ccc", lineHeight: 1.5 }}>{item.content}</div>
              </div>
            </div>
          ))}

          <div
            style={{
              background: "#DFFF00",
              color: "#000",
              padding: 16,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 4 }}>ПОЛНЫЙ ДОГОВОР</div>
            <div style={{ fontSize: 13, fontWeight: 900 }}>
              12 разделов — готов к подписанию (.docx)
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ borderTop: "2px solid #DFFF00", padding: "16px 20px", marginTop: 16, textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: "#DFFF00", letterSpacing: 2 }}>[ СБОРКА ]</div>
        <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>СОБЕРИСЬ И НАЙДИ РАБОТУ.</div>
      </div>
    </div>
  );
}
