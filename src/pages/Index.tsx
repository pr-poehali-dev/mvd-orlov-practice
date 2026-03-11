/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_BUILDING = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/ac42a882-3322-4827-aab0-6d098246ab05.jpg";
const IMG_OFFICER  = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/a7ceaefa-d150-43e6-a784-4dee99fc455e.jpg";
const IMG_PATROL   = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/226c9057-0689-45bf-b45c-eeea3fec12e1.jpg";
const IMG_HALL     = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/b911ac49-dca8-4632-8006-5f60d9af1901.jpg";

const slides = [
  { id: 1, title: "Титул" },
  { id: 2, title: "Об отделе МВД" },
  { id: 3, title: "Цели практики" },
  { id: 4, title: "Что я делал" },
  { id: 5, title: "Документы" },
  { id: 6, title: "Чему научился" },
  { id: 7, title: "Фотографии" },
  { id: 8, title: "Итоги" },
];

// Pill badge
const Pill = ({ text, bg = "#2563eb", color = "#fff" }: { text: string; bg?: string; color?: string }) => (
  <span style={{ display: "inline-block", background: bg, color, fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.5 }}>
    {text}
  </span>
);

// Section heading inside slide
const STitle = ({ text }: { text: string }) => (
  <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>{text}</div>
);

// Numbered fact box
const Stat = ({ n, label }: { n: string; label: string }) => (
  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "16px 14px", textAlign: "center", flex: 1 }}>
    <div style={{ fontSize: 28, fontWeight: 900, color: "#60a5fa", fontVariantNumeric: "tabular-nums" }}>{n}</div>
    <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 4, lineHeight: 1.4 }}>{label}</div>
  </div>
);

// Card with left color border
const Card = ({ accent = "#3b82f6", children }: { accent?: string; children: React.ReactNode }) => (
  <div style={{ background: "#1e293b", borderRadius: 14, borderLeft: `4px solid ${accent}`, padding: "16px 20px" }}>
    {children}
  </div>
);

// Check item
const Check = ({ text }: { text: string }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#cbd5e1", lineHeight: 1.55 }}>
    <span style={{ color: "#34d399", fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
    {text}
  </div>
);

export default function Index() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur(c => Math.max(0, c - 1));
  const next = () => setCur(c => Math.min(slides.length - 1, c + 1));

  const S = { flex: 1, padding: "40px 52px 32px", display: "flex" as const, flexDirection: "column" as const, animation: "fadeUp 0.3s ease" };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a", fontFamily: "'Montserrat', sans-serif", color: "#f1f5f9" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width: 210, minWidth: 210, background: "#1e293b", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
        {/* Logo */}
        <div style={{ padding: "28px 22px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#fbbf24,#f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>★</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 2, color: "#f1f5f9" }}>МВД</div>
              <div style={{ fontSize: 9, color: "#64748b", letterSpacing: 1 }}>РОССИЯ</div>
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 10, color: "#475569", lineHeight: 1.6 }}>Производственная<br />практика</div>
        </div>

        {/* Nav */}
        <div style={{ flex: 1, padding: "10px 10px", display: "flex", flexDirection: "column", gap: 3 }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 10,
              border: "none",
              background: i === cur ? "rgba(96,165,250,0.15)" : "transparent",
              cursor: "pointer", textAlign: "left", transition: "all 0.15s",
              outline: i === cur ? "1px solid rgba(96,165,250,0.35)" : "none",
            }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: i === cur ? "#60a5fa" : "#475569", minWidth: 20 }}>
                {String(s.id).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 11, fontWeight: i === cur ? 700 : 400, color: i === cur ? "#e2e8f0" : "#64748b" }}>
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 9, color: "#334155", lineHeight: 1.7 }}>
          Митюрев Р.Н.<br />
          Группа 223-П · 2025–2026
        </div>
      </aside>

      {/* ── SLIDES ── */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* ══ 1. TITLE ══ */}
        {cur === 0 && (
          <div style={{ ...S, padding: 0, position: "relative", overflow: "hidden" }}>
            {/* BG photo */}
            <img src={IMG_BUILDING} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0f172a 50%, rgba(30,58,138,0.6))" }} />

            <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "52px 64px", maxWidth: 720 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                <Pill text="ПРОИЗВОДСТВЕННАЯ ПРАКТИКА" />
                <Pill text="2025–2026" bg="#1e293b" />
              </div>

              <h1 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: -0.5 }}>
                Производственная<br />
                <span style={{ color: "#60a5fa" }}>практика</span>
              </h1>

              <div style={{ width: 48, height: 4, background: "linear-gradient(90deg,#3b82f6,#a78bfa)", borderRadius: 4, marginBottom: 28 }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 520 }}>
                {[
                  ["Место практики", "Отдел МВД России по Орловскому району"],
                  ["Обучающийся", "Митюрев Руслан Николаевич"],
                  ["Группа", "223-П"],
                  ["Специальность", "Правоохранительные органы"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 16px", backdropFilter: "blur(8px)" }}>
                    <div style={{ fontSize: 9, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{k}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right photo card */}
            <div style={{ position: "absolute", right: 52, bottom: 60, width: 260, borderRadius: 18, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.5)" }}>
              <img src={IMG_BUILDING} alt="МВД Орловский район" style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ background: "#1e293b", padding: "10px 16px", fontSize: 11, color: "#94a3b8" }}>
                Отдел МВД, Орловский район
              </div>
            </div>
          </div>
        )}

        {/* ══ 2. ABOUT ══ */}
        {cur === 1 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="02 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0", letterSpacing: -0.3 }}>Об отделе МВД</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Место, где проходила практика</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <img src={IMG_BUILDING} alt="Здание МВД" style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 16 }} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { icon: "MapPin", label: "Где находится", val: "Орловский район" },
                    { icon: "Shield", label: "Тип", val: "Территориальный ОВД" },
                    { icon: "Clock", label: "Режим работы", val: "Круглосуточно" },
                    { icon: "Users", label: "Подчинение", val: "МВД России" },
                  ].map(({ icon, label, val }) => (
                    <div key={label} style={{ background: "#1e293b", borderRadius: 12, padding: "12px 14px" }}>
                      <Icon name={icon as any} size={14} style={{ color: "#60a5fa", marginBottom: 6 }} />
                      <div style={{ fontSize: 9, color: "#475569", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", marginTop: 2 }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card accent="#3b82f6">
                  <STitle text="Что делает отдел" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {[
                      "Охрана порядка в Орловском районе",
                      "Раскрытие преступлений",
                      "Приём заявлений от граждан",
                      "Расследование дел (дознание)",
                      "Патрулирование улиц и дорог",
                    ].map(t => <Check key={t} text={t} />)}
                  </div>
                </Card>

                <Card accent="#8b5cf6">
                  <STitle text="Структура отдела" />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Дежурная часть", "Уголовный розыск", "Дознание", "ГИБДД", "Участковые", "ППС"].map(t => (
                      <span key={t} style={{ background: "rgba(139,92,246,0.2)", color: "#c4b5fd", fontSize: 11, padding: "4px 10px", borderRadius: 8 }}>{t}</span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* ══ 3. GOALS ══ */}
        {cur === 2 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="03 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Зачем нужна практика?</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Цели и задачи</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card accent="#f59e0b">
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 28 }}>🎯</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#fbbf24", marginBottom: 6 }}>Главная цель</div>
                      <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.65, margin: 0 }}>
                        Попробовать настоящую работу полицейского — не по учебнику, а в реальных условиях. Понять, как устроен отдел МВД изнутри.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card accent="#3b82f6">
                  <div style={{ fontWeight: 700, color: "#93c5fd", marginBottom: 10 }}>Что хотел узнать</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Как работает дежурная часть",
                      "Как принимают заявления от людей",
                      "Как оформляются документы",
                      "Как проходит патруль",
                    ].map(t => <Check key={t} text={t} />)}
                  </div>
                </Card>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5 }}>Задачи практики</div>
                {[
                  { n: "01", text: "Познакомиться со структурой отдела МВД" },
                  { n: "02", text: "Узнать, как работают законы на практике" },
                  { n: "03", text: "Помогать с документами и бумагами" },
                  { n: "04", text: "Участвовать в дежурстве и нарядах" },
                  { n: "05", text: "Общаться с гражданами и помогать им" },
                  { n: "06", text: "Понять, как ведётся делопроизводство" },
                ].map(({ n, text }) => (
                  <div key={n} style={{ display: "flex", gap: 14, alignItems: "center", background: "#1e293b", borderRadius: 12, padding: "12px 16px" }}>
                    <span style={{ fontSize: 14, fontWeight: 900, color: "#3b82f6", minWidth: 26 }}>{n}</span>
                    <span style={{ fontSize: 12, color: "#cbd5e1" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ══ 4. WHAT I DID ══ */}
        {cur === 3 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="04 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Что я делал</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Чем занимался во время практики</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
              {[
                { icon: "Radio", color: "#3b82f6", emoji: "📻", title: "Дежурная часть", text: "Был рядом с дежурным — принимал звонки, помогал регистрировать обращения граждан в специальном журнале (КУСП).", time: "1–2 неделя" },
                { icon: "Users", color: "#8b5cf6", emoji: "👥", title: "Приём граждан", text: "Помогал людям оформить заявление, объяснял, куда обратиться. Общался с посетителями в приёмной части.", time: "Каждый день" },
                { icon: "FileText", color: "#f59e0b", emoji: "📄", title: "Работа с бумагами", text: "Составлял рапорты, справки, заполнял бланки протоколов. Учился делать это правильно по образцу.", time: "3–4 неделя" },
                { icon: "Car", color: "#10b981", emoji: "🚔", title: "Патрулирование", text: "Выезжал с нарядом ППС — смотрел, как держат порядок на улицах, реагируют на вызовы.", time: "2–3 неделя" },
              ].map(({ color, emoji, title, text, time }) => (
                <div key={title} style={{ background: "#1e293b", borderRadius: 16, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 10, borderTop: `3px solid ${color}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ fontSize: 28 }}>{emoji}</div>
                    <span style={{ fontSize: 10, background: "rgba(255,255,255,0.07)", color: "#94a3b8", padding: "3px 10px", borderRadius: 8 }}>{time}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9" }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ 5. DOCS ══ */}
        {cur === 4 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="05 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Работа с документами</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Какие бумаги оформлял и изучал</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Card accent="#3b82f6">
                  <STitle text="Процессуальные документы" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Протокол осмотра места происшествия",
                      "Протокол задержания",
                      "Объяснение от гражданина",
                      "Постановление об отказе",
                    ].map(t => (
                      <div key={t} style={{ display: "flex", gap: 8, fontSize: 12, color: "#cbd5e1" }}>
                        <span style={{ color: "#3b82f6", flexShrink: 0 }}>→</span>{t}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card accent="#8b5cf6">
                  <STitle text="Служебные документы" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Рапорты о происшествиях",
                      "Справки и заключения",
                      "Журнал КУСП",
                      "Книга нарядов",
                    ].map(t => (
                      <div key={t} style={{ display: "flex", gap: 8, fontSize: 12, color: "#cbd5e1" }}>
                        <span style={{ color: "#8b5cf6", flexShrink: 0 }}>→</span>{t}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "#1e293b", borderRadius: 16, padding: 20 }}>
                  <STitle text="Главные правила при работе с бумагами" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {[
                      "Писать чётко и без ошибок",
                      "Использовать только официальные бланки",
                      "Соблюдать сроки — за опоздание штраф",
                      "Хранить документы под замком (ДСП)",
                      "Нумеровать и регистрировать всё",
                    ].map(t => <Check key={t} text={t} />)}
                  </div>
                </div>

                <div style={{ background: "linear-gradient(135deg,#1e3a5f,#1e293b)", borderRadius: 16, padding: 20, border: "1px solid rgba(96,165,250,0.2)" }}>
                  <div style={{ fontSize: 13, color: "#93c5fd", fontStyle: "italic", lineHeight: 1.7 }}>
                    "Каждый документ имеет юридическую силу. Одна ошибка в протоколе — и дело могут закрыть."
                  </div>
                  <div style={{ marginTop: 10, fontSize: 11, color: "#475569" }}>— вывод из практики</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══ 6. SKILLS ══ */}
        {cur === 5 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="06 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Чему я научился</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Навыки, которые получил за практику</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, flex: 1 }}>
              {[
                { emoji: "⚖️", color: "#3b82f6", title: "Правовые знания", items: ["Как работает закон на практике", "КоАП РФ — административные дела", "Уголовно-процессуальный кодекс", "Права и обязанности сотрудника"] },
                { emoji: "💼", color: "#8b5cf6", title: "Рабочие навыки", items: ["Оформление документов", "Работа с базами МВД", "Приём и регистрация заявлений", "Делопроизводство"] },
                { emoji: "🗣️", color: "#f59e0b", title: "Общение с людьми", items: ["Работа в напряжённых ситуациях", "Помощь людям в трудных ситуациях", "Чёткое объяснение информации", "Терпение и спокойствие"] },
                { emoji: "🧠", color: "#10b981", title: "Мышление", items: ["Анализ ситуации быстро", "Принятие решений", "Применение закона в жизни", "Оценка рисков"] },
                { emoji: "🤝", color: "#ec4899", title: "Работа в команде", items: ["Субординация и уважение", "Чёткое выполнение задач", "Взаимодействие с коллегами", "Дисциплина"] },
                { emoji: "🚔", color: "#06b6d4", title: "Опыт службы", items: ["Дежурство в наряде", "Патрулирование района", "Выезд на происшествия", "Регистрация в КУСП"] },
              ].map(({ emoji, color, title, items }) => (
                <div key={title} style={{ background: "#1e293b", borderRadius: 14, padding: "18px 18px", borderTop: `3px solid ${color}` }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#f1f5f9", marginBottom: 10 }}>{title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {items.map(item => (
                      <div key={item} style={{ display: "flex", gap: 7, fontSize: 11, color: "#94a3b8", alignItems: "flex-start" }}>
                        <span style={{ color, flexShrink: 0, marginTop: 2, fontSize: 8 }}>●</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ 7. PHOTOS ══ */}
        {cur === 6 && (
          <div style={S}>
            <div style={{ marginBottom: 24 }}>
              <Pill text="07 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Фотографии</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>МВД России по Орловскому району</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "1fr 1fr", gap: 14, flex: 1 }}>
              <div style={{ gridRow: "1 / 3", borderRadius: 18, overflow: "hidden", position: "relative" }}>
                <img src={IMG_BUILDING} alt="Здание МВД Орловский район" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(15,23,42,0.9))", padding: "20px 20px 16px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9" }}>Отдел МВД России по Орловскому району</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>Здание отдела · Орловская область</div>
                </div>
              </div>

              <div style={{ borderRadius: 16, overflow: "hidden", position: "relative" }}>
                <img src={IMG_OFFICER} alt="Работа сотрудника" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(15,23,42,0.85))", padding: "14px 14px 10px", fontSize: 11, color: "#e2e8f0" }}>
                  Работа в отделе
                </div>
              </div>

              <div style={{ borderRadius: 16, overflow: "hidden", position: "relative" }}>
                <img src={IMG_PATROL} alt="Патруль" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(15,23,42,0.85))", padding: "14px 14px 10px", fontSize: 11, color: "#e2e8f0" }}>
                  Патрулирование района
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══ 8. SUMMARY ══ */}
        {cur === 7 && (
          <div style={S}>
            <div style={{ marginBottom: 28 }}>
              <Pill text="08 / 08" bg="#1e3a5f" />
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 0" }}>Итоги практики</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Что получилось, что понял</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card accent="#f59e0b">
                  <p style={{ fontSize: 14, color: "#e2e8f0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    Практика в Отделе МВД по Орловскому району помогла мне понять, как на самом деле работает полиция. Я убедился, что выбрал правильный путь, и теперь знаю, чего ожидать в будущей профессии.
                  </p>
                </Card>

                <div style={{ display: "flex", gap: 10 }}>
                  <Stat n="4" label="недели практики" />
                  <Stat n="6" label="подразделений" />
                  <Stat n="30+" label="документов" />
                  <Stat n="50+" label="обращений" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Узнал, как работает дежурная часть изнутри",
                    "Научился правильно оформлять служебные документы",
                    "Понял, как применяются законы в реальных ситуациях",
                    "Почувствовал ответственность профессии полицейского",
                    "Убедился, что хочу работать в правоохранительных органах",
                  ].map(t => <Check key={t} text={t} />)}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ borderRadius: 16, overflow: "hidden" }}>
                  <img src={IMG_HALL} alt="Отдел МВД" style={{ width: "100%", height: 180, objectFit: "cover" }} />
                </div>

                <div style={{ background: "#1e293b", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 11, color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Подписи</div>
                  {[
                    "Студент: Митюрев Р.Н.",
                    "Руководитель практики",
                    "Дата",
                  ].map(label => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-end", gap: 8, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: 11, color: "#64748b", flexShrink: 0 }}>{label}:</span>
                      <span style={{ flex: 1 }} />
                    </div>
                  ))}
                </div>

                <div style={{ background: "#1e3a5f", borderRadius: 16, padding: 18, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#60a5fa", marginBottom: 4 }}>ГРУППА</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#f1f5f9" }}>223-П</div>
                  <div style={{ fontSize: 10, color: "#475569", marginTop: 4 }}>Правоохранительные органы · 2025–2026</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTROLS */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#1e293b", flexShrink: 0 }}>
          <button onClick={prev} disabled={cur === 0} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 20px", borderRadius: 10, border: "none",
            background: cur === 0 ? "rgba(255,255,255,0.04)" : "#334155",
            color: cur === 0 ? "#334155" : "#e2e8f0",
            fontSize: 12, fontWeight: 600, cursor: cur === 0 ? "not-allowed" : "pointer",
            fontFamily: "Montserrat, sans-serif",
          }}>
            <Icon name="ChevronLeft" size={16} /> Назад
          </button>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} style={{
                width: i === cur ? 24 : 7, height: 7,
                borderRadius: i === cur ? 4 : "50%",
                background: i === cur ? "#60a5fa" : "#334155",
                border: "none", cursor: "pointer", transition: "all 0.2s", padding: 0,
              }} />
            ))}
          </div>

          <button onClick={next} disabled={cur === slides.length - 1} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 20px", borderRadius: 10, border: "none",
            background: cur === slides.length - 1 ? "rgba(255,255,255,0.04)" : "#3b82f6",
            color: cur === slides.length - 1 ? "#334155" : "#fff",
            fontSize: 12, fontWeight: 600, cursor: cur === slides.length - 1 ? "not-allowed" : "pointer",
            fontFamily: "Montserrat, sans-serif",
          }}>
            Далее <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        body { margin: 0; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
      `}</style>
    </div>
  );
}
