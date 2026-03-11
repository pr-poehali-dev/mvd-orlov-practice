/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Icon from "@/components/ui/icon";

const OFFICE_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/bbec7320-5d4c-434a-b424-baa1806221f5.jpg";
const OFFICER_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/663ec27a-f3cd-41a9-ba0e-14556ccd3796.jpg";
const BUILDING_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/20f5ae7b-dab8-47e8-997a-ebd53b9d6095.jpg";

const STUDENT = "Митюрев Руслан Николаевич";
const GROUP = "223-П";
const DEPT = "Отдел МВД России по Орловскому району";

const slides = [
  { id: 1, label: "Титул" },
  { id: 2, label: "О месте практики" },
  { id: 3, label: "Цели и задачи" },
  { id: 4, label: "Структура отдела" },
  { id: 5, label: "Ежедневная работа" },
  { id: 6, label: "Документооборот" },
  { id: 7, label: "Навыки и знания" },
  { id: 8, label: "Фотоматериалы" },
  { id: 9, label: "Выводы" },
];

const C = {
  bg: "#f5f4f0",
  dark: "#1a2540",
  navy: "#1e3a6e",
  navyLight: "#2a4f8f",
  red: "#c0202e",
  gold: "#b8922a",
  goldLight: "#d4a83a",
  text: "#1a2540",
  textMid: "#4a5878",
  textLight: "#8a9ab8",
  white: "#ffffff",
  cardBg: "#ffffff",
  border: "#dde2ee",
  accent: "#e8ecf8",
};

const SlideHeader = ({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 28 }}>
    <div style={{ width: 6, height: 52, background: `linear-gradient(180deg, ${C.red}, ${C.navy})`, borderRadius: 3, marginRight: 18, flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 2, fontFamily: "Montserrat, sans-serif" }}>
          {num} / {String(slides.length).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 11, color: C.textLight, letterSpacing: 1 }}>——</span>
        <span style={{ fontSize: 11, color: C.textLight, letterSpacing: 1 }}>МВД RUSSIA</span>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: C.dark, margin: "2px 0 0", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: 12, color: C.textMid, margin: "3px 0 0", fontFamily: "Montserrat, sans-serif" }}>{subtitle}</p>}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.15 }}>
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: C.gold, fontSize: 14 }}>★</span>
      </div>
    </div>
  </div>
);

const Tag = ({ text, color = C.navy }: { text: string; color?: string }) => (
  <span style={{ display: "inline-block", background: color, color: C.white, fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 3, letterSpacing: 0.5, fontFamily: "Montserrat, sans-serif" }}>
    {text}
  </span>
);

const InfoCard = ({ icon, title, value, accent = false }: { icon: string; title: string; value: string; accent?: boolean }) => (
  <div style={{ background: accent ? C.navy : C.cardBg, border: `1px solid ${accent ? C.navy : C.border}`, borderRadius: 10, padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
    <div style={{ width: 38, height: 38, borderRadius: 8, background: accent ? "rgba(255,255,255,0.1)" : C.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: accent ? C.goldLight : C.navy }}>
      <Icon name={icon as any} size={18} />
    </div>
    <div>
      <div style={{ fontSize: 10, color: accent ? "rgba(255,255,255,0.5)" : C.textLight, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "Montserrat, sans-serif" }}>{title}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: accent ? C.white : C.dark, marginTop: 2, fontFamily: "Montserrat, sans-serif" }}>{value}</div>
    </div>
  </div>
);

export default function Index() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#e8eaf0", fontFamily: "Montserrat, sans-serif" }}>

      {/* LEFT NAV */}
      <nav style={{
        width: 220, minWidth: 220, background: C.dark,
        display: "flex", flexDirection: "column", position: "relative", overflow: "hidden"
      }}>
        {/* Decorative stripe */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: `linear-gradient(180deg, ${C.red} 0%, ${C.gold} 50%, ${C.navy} 100%)` }} />

        {/* Logo area */}
        <div style={{ padding: "28px 20px 22px 24px", borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22, color: C.dark }}>★</span>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.white, letterSpacing: 2 }}>МВД</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: 1, marginTop: 1 }}>РОССИЯ</div>
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 10, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
            Отчёт о производственной практике
          </div>
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => setCurrent(i)} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 6,
              border: "none",
              background: i === current ? "rgba(255,255,255,0.1)" : "transparent",
              borderLeft: i === current ? `3px solid ${C.goldLight}` : "3px solid transparent",
              cursor: "pointer", textAlign: "left", transition: "all 0.18s"
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: i === current ? C.goldLight : "rgba(255,255,255,0.25)", minWidth: 18, fontFamily: "Georgia, serif" }}>
                {String(s.id).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 11, fontWeight: i === current ? 700 : 400, color: i === current ? C.white : "rgba(255,255,255,0.45)", letterSpacing: 0.3 }}>
                {s.label}
              </span>
              {i === current && <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: C.goldLight }} />}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", lineHeight: 1.6, letterSpacing: 0.3 }}>
            {STUDENT}<br />
            Группа {GROUP} · 2025–2026
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.bg }}>

        {/* ====== SLIDE 1: TITLE ====== */}
        {current === 0 && (
          <div key="s1" style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", animation: "fadeUp 0.35s ease" }}>
            {/* Top red stripe */}
            <div style={{ height: 6, background: `linear-gradient(90deg, ${C.red}, ${C.navy}, ${C.gold})`, flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex" }}>
              {/* Left content */}
              <div style={{ flex: 1, padding: "48px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  <Tag text="ПРОИЗВОДСТВЕННАЯ ПРАКТИКА" color={C.red} />
                  <Tag text="2025–2026" color={C.navy} />
                </div>
                <h1 style={{ fontSize: 32, fontWeight: 900, color: C.dark, lineHeight: 1.2, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
                  Отчёт о прохождении<br />
                  <span style={{ color: C.navy }}>производственной</span><br />
                  практики
                </h1>
                <div style={{ width: 60, height: 4, background: `linear-gradient(90deg, ${C.red}, ${C.gold})`, borderRadius: 2, marginBottom: 28 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 440 }}>
                  <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "16px 20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {[
                        { l: "Обучающийся", v: STUDENT },
                        { l: "Группа", v: GROUP },
                        { l: "Специальность", v: "Правоохранительные органы" },
                        { l: "Место практики", v: "Отдел МВД, Орловский район" },
                      ].map(({ l, v }) => (
                        <div key={l}>
                          <div style={{ fontSize: 9, color: C.textLight, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: C.dark, marginTop: 3 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <div style={{ flex: 1, background: C.navy, borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 }}>УЧЕБНЫЙ ГОД</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: C.goldLight }}>2025 / 2026</div>
                    </div>
                    <div style={{ flex: 1, background: C.red, borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", letterSpacing: 0.5 }}>ПРОДОЛЖИТЕЛЬНОСТЬ</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: C.white }}>4 недели</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right image */}
              <div style={{ width: 320, position: "relative", flexShrink: 0 }}>
                <img src={BUILDING_IMG} alt="МВД" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${C.bg} 0%, transparent 30%)` }} />
                <div style={{ position: "absolute", bottom: 32, right: 20, background: "rgba(26,37,64,0.92)", borderRadius: 10, padding: "14px 18px", backdropFilter: "blur(10px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 18, color: C.dark }}>★</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: C.white, letterSpacing: 2 }}>МВД РОССИЯ</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: 1 }}>ОРЛОВСКИЙ РАЙОН</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 2: ABOUT ====== */}
        {current === 1 && (
          <div key="s2" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="02" title="О месте практики" subtitle="Отдел МВД России по Орловскому району" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 22, borderLeft: `4px solid ${C.navy}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>Общая информация</div>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                    Отдел МВД России по Орловскому району является территориальным органом 
                    Министерства внутренних дел Российской Федерации. Осуществляет охрану 
                    общественного порядка, борьбу с преступностью и обеспечение безопасности граждан.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { icon: "MapPin", title: "Расположение", value: "Орловский район" },
                    { icon: "Shield", title: "Тип органа", value: "Территориальный ОВД" },
                    { icon: "Users", title: "Подчинение", value: "МВД России" },
                    { icon: "Calendar", title: "Период практики", value: "4 недели" },
                  ].map(({ icon, title, value }) => (
                    <InfoCard key={title} icon={icon} title={title} value={value} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <img src={BUILDING_IMG} alt="Здание МВД" style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, border: `1px solid ${C.border}` }} />
                <div style={{ background: C.navy, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.goldLight, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Основные функции подразделения</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Охрана общественного порядка и безопасности",
                      "Предупреждение и раскрытие преступлений",
                      "Производство дознания по уголовным делам",
                      "Работа с обращениями граждан",
                    ].map((text) => (
                      <div key={text} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
                        <span style={{ color: C.goldLight, flexShrink: 0, marginTop: 1 }}>→</span>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 3: GOALS ====== */}
        {current === 2 && (
          <div key="s3" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="03" title="Цели и задачи практики" subtitle="Программа прохождения производственной практики" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.red}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(192,32,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: C.red }}>
                      <Icon name="Target" size={16} />
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, textTransform: "uppercase", letterSpacing: 0.5 }}>Главная цель</div>
                  </div>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                    Получение практических навыков профессиональной деятельности в сфере правоохранительной службы и закрепление теоретических знаний, полученных в процессе обучения в техникуме.
                  </p>
                </div>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.navy}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>Индивидуальное задание</div>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                    Изучение организации работы дежурной части, ознакомление с порядком регистрации и рассмотрения заявлений и сообщений о преступлениях.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>Задачи практики</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { n: "01", text: "Ознакомление со структурой и функциями отдела МВД", color: C.red },
                    { n: "02", text: "Изучение нормативно-правовой базы деятельности органов внутренних дел", color: C.navy },
                    { n: "03", text: "Участие в работе с документацией и материалами административных дел", color: C.red },
                    { n: "04", text: "Освоение порядка несения дежурства и охраны общественного порядка", color: C.navy },
                    { n: "05", text: "Приобретение практических навыков работы с гражданами", color: C.red },
                    { n: "06", text: "Изучение основ делопроизводства в органах внутренних дел", color: C.navy },
                  ].map(({ n, text, color }) => (
                    <div key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color, minWidth: 22 }}>{n}</span>
                      <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 4: STRUCTURE ====== */}
        {current === 3 && (
          <div key="s4" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="04" title="Структура отдела МВД" subtitle="Подразделения, с которыми осуществлялось взаимодействие" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {[
                { icon: "Radio", color: C.red, title: "Дежурная часть", desc: "Круглосуточное дежурство, регистрация заявлений, оперативное реагирование на сообщения о происшествиях." },
                { icon: "Search", color: C.navy, title: "Уголовный розыск", desc: "Раскрытие преступлений, розыск лиц, проведение оперативно-розыскных мероприятий." },
                { icon: "FileText", color: C.gold, title: "Дознание", desc: "Производство дознания по уголовным делам, составление процессуальных документов." },
                { icon: "Car", color: C.red, title: "ГИБДД", desc: "Надзор за дорожным движением, оформление ДТП, регистрационные действия с транспортными средствами." },
                { icon: "UserCheck", color: C.navy, title: "Участковые", desc: "Профилактическая работа с населением, обход административных участков, работа с подучётными лицами." },
                { icon: "Shield", color: C.gold, title: "ОМС / ООП", desc: "Охрана общественного порядка, обеспечение безопасности на общественных мероприятиях." },
              ].map(({ icon, color, title, desc }) => (
                <div key={title} style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderTop: `3px solid ${color}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, background: color === C.red ? "rgba(192,32,46,0.1)" : color === C.navy ? "rgba(30,58,110,0.1)" : "rgba(184,146,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color }}>
                      <Icon name={icon as any} size={16} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>{title}</div>
                  </div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== SLIDE 5: DAILY WORK ====== */}
        {current === 4 && (
          <div key="s5" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="05" title="Ежедневная работа" subtitle="Выполненные функции и задачи в период практики" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "Clock", color: C.navy, title: "Несение дежурства", desc: "Участвовал в работе дежурной части: приём граждан, регистрация сообщений о преступлениях и происшествиях в КУСП, обработка входящих звонков.", time: "1-2 нед." },
                  { icon: "Users", color: C.red, title: "Работа с гражданами", desc: "Помощь в оформлении заявлений, консультирование по вопросам подачи документов, запись на приём к участковому уполномоченному.", time: "Ежедневно" },
                  { icon: "FileText", color: C.gold, title: "Документооборот", desc: "Участие в составлении протоколов, рапортов, справок и иных служебных документов согласно установленным требованиям.", time: "3-4 нед." },
                  { icon: "Car", color: C.navy, title: "Патрулирование", desc: "Выезды с нарядом ППС для патрулирования административного участка, охрана общественного порядка в общественных местах.", time: "2-3 нед." },
                ].map(({ icon, color, title, desc, time }) => (
                  <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 18px" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: color === C.red ? "rgba(192,32,46,0.1)" : color === C.navy ? "rgba(30,58,110,0.1)" : "rgba(184,146,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
                      <Icon name={icon as any} size={18} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{title}</div>
                        <span style={{ fontSize: 9, background: C.accent, color: C.navy, padding: "2px 8px", borderRadius: 4, fontWeight: 600, letterSpacing: 0.3, flexShrink: 0, marginLeft: 8 }}>{time}</span>
                      </div>
                      <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.55 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <img src={OFFICER_IMG} alt="Рабочий процесс" style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, border: `1px solid ${C.border}` }} />
                <div style={{ background: C.navy, borderRadius: 10, padding: 18 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.goldLight, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Итого за период</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                      { n: "20", l: "рабочих дней" },
                      { n: "4", l: "подразделения" },
                      { n: "30+", l: "документов" },
                      { n: "50+", l: "обращений" },
                    ].map(({ n, l }) => (
                      <div key={l} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: C.goldLight, fontFamily: "Georgia, serif" }}>{n}</div>
                        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 6: DOCUMENTS ====== */}
        {current === 5 && (
          <div key="s6" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="06" title="Документооборот" subtitle="Виды документов, с которыми осуществлялась работа" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "FilePlus", color: C.red, title: "Процессуальные документы", items: ["Протокол осмотра места происшествия", "Протокол административного задержания", "Объяснения от граждан", "Постановление об отказе в возбуждении дела"] },
                  { icon: "FileCheck", color: C.navy, title: "Служебные документы", items: ["Рапорты о происшествиях", "Справки и заключения", "Журнал учёта КУСП", "Книги нарядов и инструктажей"] },
                ].map(({ icon, color, title, items }) => (
                  <div key={title} style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${color}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                      <div style={{ width: 30, height: 30, borderRadius: 6, background: color === C.red ? "rgba(192,32,46,0.1)" : "rgba(30,58,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color }}>
                        <Icon name={icon as any} size={15} />
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, textTransform: "uppercase", letterSpacing: 0.5 }}>{title}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {items.map((item) => (
                        <div key={item} style={{ display: "flex", gap: 8, fontSize: 11, color: C.textMid, alignItems: "center" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>Требования к оформлению</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { icon: "PenLine", text: "Соблюдение установленных форм и бланков МВД" },
                      { icon: "AlignLeft", text: "Чёткость и грамотность при составлении документов" },
                      { icon: "Lock", text: "Соблюдение режима секретности (ДСП)" },
                      { icon: "Archive", text: "Правильная нумерация и регистрация документов" },
                      { icon: "Clock4", text: "Соблюдение сроков исполнения документов" },
                    ].map(({ icon, text }) => (
                      <div key={text} style={{ display: "flex", gap: 10, alignItems: "center", background: C.accent, borderRadius: 8, padding: "8px 12px", fontSize: 11, color: C.textMid }}>
                        <Icon name={icon as any} size={14} style={{ color: C.navy, flexShrink: 0 }} />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: C.navy, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.goldLight, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Практический вывод</div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    Работа с документами требует высокой точности, внимательности и знания нормативно-правовой базы. Каждый документ имеет юридическую силу и может быть использован в судебном разбирательстве.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 7: SKILLS ====== */}
        {current === 6 && (
          <div key="s7" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="07" title="Полученные знания и навыки" subtitle="Профессиональные компетенции, приобретённые за период практики" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {[
                {
                  icon: "BookOpen", color: C.navy, title: "Правовые знания",
                  items: ["Нормативно-правовая база МВД России", "Уголовно-процессуальное право", "Административное законодательство", "КоАП РФ (практическое применение)"]
                },
                {
                  icon: "Briefcase", color: C.red, title: "Профессиональные навыки",
                  items: ["Составление служебных документов", "Работа с базами данных МВД", "Ведение делопроизводства", "Регистрация обращений граждан"]
                },
                {
                  icon: "MessageSquare", color: C.gold, title: "Коммуникативные навыки",
                  items: ["Взаимодействие с гражданами", "Работа в конфликтных ситуациях", "Чёткое изложение информации", "Психологическая устойчивость"]
                },
                {
                  icon: "Brain", color: C.navy, title: "Аналитические навыки",
                  items: ["Анализ материалов дел", "Применение норм права", "Оценка ситуации на месте", "Принятие решений"]
                },
                {
                  icon: "Users2", color: C.red, title: "Командная работа",
                  items: ["Взаимодействие с сотрудниками", "Субординация и дисциплина", "Чёткое исполнение приказов", "Корпоративная культура МВД"]
                },
                {
                  icon: "Zap", color: C.gold, title: "Практический опыт",
                  items: ["Несение службы в наряде", "Патрулирование территории", "Участие в мероприятиях", "Оформление материалов КУСП"]
                },
              ].map(({ icon, color, title, items }) => (
                <div key={title} style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderTop: `3px solid ${color}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 7, background: color === C.red ? "rgba(192,32,46,0.1)" : color === C.navy ? "rgba(30,58,110,0.1)" : "rgba(184,146,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color }}>
                      <Icon name={icon as any} size={14} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.dark, textTransform: "uppercase", letterSpacing: 0.3 }}>{title}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: 7, fontSize: 11, color: C.textMid, alignItems: "flex-start" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 5 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== SLIDE 8: PHOTOS ====== */}
        {current === 7 && (
          <div key="s8" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="08" title="Фотоматериалы" subtitle="Рабочий процесс и условия прохождения практики" />
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, flex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ gridColumn: "1 / 3" }}>
                  <img src={BUILDING_IMG} alt="Здание МВД" style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, border: `1px solid ${C.border}` }} />
                  <div style={{ fontSize: 11, color: C.textLight, textAlign: "center", marginTop: 6, fontStyle: "italic" }}>Здание Отдела МВД России по Орловскому району</div>
                </div>
                <div>
                  <img src={OFFICER_IMG} alt="Рабочий процесс" style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10, border: `1px solid ${C.border}` }} />
                  <div style={{ fontSize: 11, color: C.textLight, textAlign: "center", marginTop: 6, fontStyle: "italic" }}>Рабочий процесс</div>
                </div>
                <div>
                  <img src={OFFICE_IMG} alt="Рабочее место" style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10, border: `1px solid ${C.border}` }} />
                  <div style={{ fontSize: 11, color: C.textLight, textAlign: "center", marginTop: 6, fontStyle: "italic" }}>Рабочее место сотрудника</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: C.navy, borderRadius: 12, padding: 20, flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.goldLight, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Условия практики</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { icon: "CheckCircle2", text: "Оборудованное рабочее место" },
                      { icon: "CheckCircle2", text: "Наставник — опытный сотрудник" },
                      { icon: "CheckCircle2", text: "Доступ к базам данных МВД" },
                      { icon: "CheckCircle2", text: "Участие в реальных мероприятиях" },
                      { icon: "CheckCircle2", text: "Благоприятная рабочая атмосфера" },
                    ].map(({ icon, text }) => (
                      <div key={text} style={{ display: "flex", gap: 8, fontSize: 11, color: "rgba(255,255,255,0.7)", alignItems: "center" }}>
                        <Icon name={icon as any} size={13} style={{ color: "#4ade80", flexShrink: 0 }} />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: C.textLight, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>Практика пройдена</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: C.navy, fontFamily: "Georgia, serif" }}>Успешно</div>
                  <div style={{ fontSize: 10, color: C.textLight, marginTop: 4 }}>без нарушений дисциплины</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== SLIDE 9: CONCLUSION ====== */}
        {current === 8 && (
          <div key="s9" style={{ flex: 1, padding: "36px 48px 28px", animation: "fadeUp 0.35s ease" }}>
            <SlideHeader num="09" title="Выводы и результаты" subtitle="Итоги прохождения производственной практики" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.gold}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
                    <Icon name="Quote" size={22} style={{ color: C.gold }} />
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, textTransform: "uppercase", letterSpacing: 0.5 }}>Общее заключение</div>
                  </div>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    В ходе прохождения производственной практики в Отделе МВД России по Орловскому району были успешно достигнуты все поставленные цели и задачи. Приобретённый практический опыт позволил лучше понять специфику работы правоохранительных органов и применить теоретические знания на практике.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                  {[
                    { num: "20", label: "рабочих\nдней" },
                    { num: "6", label: "изученных\nподразделений" },
                    { num: "30+", label: "документов\nоформлено" },
                    { num: "5", label: "оценка за\nпрактику" },
                  ].map(({ num, label }) => (
                    <div key={label} style={{ background: C.navy, borderRadius: 10, padding: "14px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: 24, fontWeight: 800, color: C.goldLight, fontFamily: "Georgia, serif" }}>{num}</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginTop: 4, lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Закреплены теоретические знания по специальности «Правоохранительные органы»",
                    "Приобретены практические навыки несения службы в органах внутренних дел",
                    "Изучена нормативно-правовая база деятельности органов МВД России",
                    "Сформировано профессиональное понимание работы правоохранительной системы",
                    "Подтверждена правильность выбора профессионального пути",
                  ].map((text) => (
                    <div key={text} style={{ display: "flex", gap: 10, fontSize: 12, color: C.textMid, alignItems: "center", background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "9px 14px" }}>
                      <Icon name="CheckCircle2" size={15} style={{ color: "#16a34a", flexShrink: 0 }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <img src={OFFICER_IMG} alt="Итоги" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, border: `1px solid ${C.border}` }} />
                <div style={{ background: C.navy, borderRadius: 12, padding: 22, textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <span style={{ fontSize: 26, color: C.dark }}>★</span>
                  </div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Оценка за практику</div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: C.goldLight, letterSpacing: 2 }}>ОТЛИЧНО</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>5 / 5</div>
                </div>
                <div style={{ background: C.cardBg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 10, color: C.textLight, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Подписи</div>
                  {["Обучающийся: " + STUDENT.split(" ")[0], "Руководитель практики", "Дата принятия отчёта"].map((label) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 10, fontSize: 10, color: C.textMid }}>
                      <span style={{ flexShrink: 0 }}>{label}:</span>
                      <span style={{ flex: 1, borderBottom: `1px solid ${C.border}`, height: 14 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTROLS */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 40px", borderTop: `1px solid ${C.border}`, background: C.white, flexShrink: 0 }}>
          <button onClick={prev} disabled={current === 0} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "7px 18px", borderRadius: 6,
            background: current === 0 ? C.border : C.dark,
            border: "none", color: current === 0 ? C.textLight : C.white,
            fontSize: 12, fontWeight: 600, cursor: current === 0 ? "not-allowed" : "pointer",
            fontFamily: "Montserrat, sans-serif", transition: "all 0.2s",
          }}>
            <Icon name="ChevronLeft" size={16} /> Назад
          </button>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? 28 : 7, height: 7,
                borderRadius: i === current ? 4 : "50%",
                background: i === current ? C.navy : C.border,
                border: "none", cursor: "pointer", transition: "all 0.2s",
                padding: 0,
              }} />
            ))}
          </div>
          <button onClick={next} disabled={current === slides.length - 1} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "7px 18px", borderRadius: 6,
            background: current === slides.length - 1 ? C.border : C.red,
            border: "none", color: current === slides.length - 1 ? C.textLight : C.white,
            fontSize: 12, fontWeight: 600, cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
            fontFamily: "Montserrat, sans-serif", transition: "all 0.2s",
          }}>
            Далее <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }
      `}</style>
    </div>
  );
}
