/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Icon from "@/components/ui/icon";



const OFFICE_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/bbec7320-5d4c-434a-b424-baa1806221f5.jpg";
const OFFICER_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/663ec27a-f3cd-41a9-ba0e-14556ccd3796.jpg";
const BUILDING_IMG = "https://cdn.poehali.dev/projects/5e538291-1efb-4dc5-8e79-6979b91bfeab/files/20f5ae7b-dab8-47e8-997a-ebd53b9d6095.jpg";

const slides = [
  { id: 1, label: "Титульная" },
  { id: 2, label: "Введение" },
  { id: 3, label: "Работа" },
  { id: 4, label: "Навыки" },
  { id: 5, label: "Выводы" },
];

const MvdEmblem = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const outer = size === "lg" ? 90 : 52;
  const inner = size === "lg" ? 70 : 40;
  const star = size === "lg" ? 36 : 20;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{
        width: outer, height: outer, borderRadius: "50%",
        background: "linear-gradient(135deg, #c8a84b, #f0d080, #a87820)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 24px rgba(200,168,75,0.45)"
      }}>
        <div style={{
          width: inner, height: inner, borderRadius: "50%",
          background: "#0d1f3c",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px solid rgba(200,168,75,0.5)"
        }}>
          <span style={{ fontSize: star, color: "#f0d080" }}>★</span>
        </div>
      </div>
      {size === "sm" && (
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 3, color: "#f0d080" }}>МВД</div>
      )}
    </div>
  );
};

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0a1628", fontFamily: "'Montserrat', sans-serif" }}>

      {/* SIDEBAR */}
      <nav style={{
        width: 200, minWidth: 200,
        background: "#0d1f3c",
        borderRight: "2px solid #1e3a6e",
        display: "flex", flexDirection: "column",
        padding: "24px 0"
      }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "0 16px 24px",
          borderBottom: "1px solid #1e3a6e",
          marginBottom: 16
        }}>
          <MvdEmblem size="sm" />
          <div style={{ marginTop: 8, fontSize: 9, color: "#4a6280", letterSpacing: 1, textAlign: "center", lineHeight: 1.4 }}>
            РОССИЯ<br />МВД
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4, padding: "0 12px" }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => setCurrent(i)} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 6,
              border: i === current ? "1px solid rgba(200,168,75,0.3)" : "1px solid transparent",
              borderLeft: i === current ? "3px solid #c8a84b" : "3px solid transparent",
              background: i === current ? "rgba(30,80,160,0.4)" : "transparent",
              cursor: "pointer", textAlign: "left", transition: "all 0.2s"
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#c8a84b", minWidth: 20 }}>
                {String(s.id).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 12, fontWeight: 500, color: i === current ? "#fff" : "#aac4e8" }}>
                {s.label}
              </span>
            </button>
          ))}
        </div>

        <div style={{ padding: 16, fontSize: 10, color: "#4a6280", textAlign: "center", letterSpacing: 1, borderTop: "1px solid #1e3a6e" }}>
          2025 / 2026
        </div>
      </nav>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* ===== SLIDE 1: TITLE ===== */}
        {current === 0 && (
          <div key="s1" style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", animation: "fadeIn 0.4s ease" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${BUILDING_IMG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.2) saturate(0.5)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(30,58,110,0.7) 100%)" }} />
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20, padding: 40, maxWidth: 700 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "#c8a84b", border: "1px solid #c8a84b", padding: "6px 20px", borderRadius: 2 }}>
                РОССИЙСКАЯ ФЕДЕРАЦИЯ
              </div>
              <MvdEmblem size="lg" />
              <h1 style={{ fontSize: 26, fontWeight: 800, color: "#fff", lineHeight: 1.3, textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>
                Отчёт о производственной<br />практике
              </h1>
              <div style={{ width: 80, height: 3, background: "linear-gradient(90deg, #c8204a, #c8a84b)", borderRadius: 2 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: "MapPin", text: "Отдел МВД России по Орловскому району" },
                  { icon: "GraduationCap", text: "Специальность: Правоохранительные органы" },
                  { icon: "Calendar", text: "2025 — 2026 учебный год" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#aac4e8", justifyContent: "center" }}>
                    <Icon name={icon as any} size={15} style={{ color: "#c8a84b" }} />
                    {text}
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "20px 32px", textAlign: "left", width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
                  {["Выполнил обучающийся", "Руководитель практики"].map((label) => (
                    <div key={label}>
                      <div style={{ fontSize: 10, color: "#6a8aaa", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
                      <div style={{ borderBottom: "1px solid #2a4a7a", height: 28, marginTop: 4 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== SLIDE 2: INTRODUCTION ===== */}
        {current === 1 && (
          <div key="s2" style={{ flex: 1, padding: "36px 48px 24px", background: "#0f1e38", display: "flex", flexDirection: "column", animation: "fadeIn 0.4s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24, paddingBottom: 18, borderBottom: "2px solid #1e3a6e" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(200,168,75,0.18)", lineHeight: 1, fontFamily: "Georgia, serif", minWidth: 64 }}>02</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>Введение</h2>
                <p style={{ fontSize: 13, color: "#6a8aaa", margin: 0 }}>Цели и задачи производственной практики</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "Target", color: "#e84b6e", bg: "rgba(200,32,74,0.15)", accent: "#c8204a", title: "Цель практики", text: "Получение практических навыков профессиональной деятельности в сфере правоохранительной службы, закрепление теоретических знаний, полученных в процессе обучения." },
                ].map((card) => (
                  <div key={card.title} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid #1e3a6e`, borderLeft: `3px solid ${card.accent}`, borderRadius: 8, padding: 16, display: "flex", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: card.color }}>
                      <Icon name={card.icon as any} size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{card.title}</div>
                      <p style={{ fontSize: 12, color: "#8aaacc", lineHeight: 1.6, margin: 0 }}>{card.text}</p>
                    </div>
                  </div>
                ))}
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1e3a6e", borderLeft: "3px solid #3366cc", borderRadius: 8, padding: 16, display: "flex", gap: 14, flex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(51,102,204,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#5599ee" }}>
                    <Icon name="ListChecks" size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Задачи практики</div>
                    <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: "#8aaacc", lineHeight: 2 }}>
                      <li>Ознакомление со структурой и функциями отдела МВД</li>
                      <li>Изучение нормативно-правовой базы деятельности органов</li>
                      <li>Участие в работе с документацией и материалами дел</li>
                      <li>Освоение порядка несения дежурства и охраны порядка</li>
                      <li>Приобретение навыков работы с гражданами</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <img src={BUILDING_IMG} alt="Здание МВД" style={{ width: "100%", height: 170, objectFit: "cover", borderRadius: 8, border: "2px solid #1e3a6e" }} />
                <div style={{ fontSize: 10, color: "#4a6280", textAlign: "center", letterSpacing: 0.5 }}>Отдел МВД России по Орловскому району</div>
                <div style={{ background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.2)", borderRadius: 8, padding: 12, display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                  {[
                    { icon: "Clock", text: "Продолжительность:", val: "4 недели" },
                    { icon: "Building2", text: "База практики:", val: "Отдел МВД, Орловский р-н" },
                  ].map(({ icon, text, val }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#aac4e8" }}>
                      <Icon name={icon as any} size={14} style={{ color: "#c8a84b", flexShrink: 0 }} />
                      <span>{text} <strong style={{ color: "#fff" }}>{val}</strong></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== SLIDE 3: WORK ===== */}
        {current === 2 && (
          <div key="s3" style={{ flex: 1, padding: "36px 48px 24px", background: "#0f1e38", display: "flex", flexDirection: "column", animation: "fadeIn 0.4s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24, paddingBottom: 18, borderBottom: "2px solid #1e3a6e" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(200,168,75,0.18)", lineHeight: 1, fontFamily: "Georgia, serif", minWidth: 64 }}>03</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>Проделанная работа</h2>
                <p style={{ fontSize: 13, color: "#6a8aaa", margin: 0 }}>Выполненные функции и задачи в период практики</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 24, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "FileText", title: "Работа с документами", desc: "Оформление протоколов, заявлений, рапортов и иной служебной документации в соответствии с установленными требованиями." },
                  { icon: "Users", title: "Приём граждан", desc: "Участие в приёме граждан, регистрации обращений, первичном рассмотрении заявлений и жалоб." },
                  { icon: "Shield", title: "Охрана общественного порядка", desc: "Участие в патрулировании территории, обеспечении порядка на общественных мероприятиях." },
                  { icon: "Search", title: "Оперативная деятельность", desc: "Ознакомление с методами оперативно-розыскной деятельности и работой следственного отдела." },
                ].map((item, i) => (
                  <div key={item.title} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid #1e3a6e",
                    borderRadius: 8, padding: "14px 16px",
                    display: "flex", gap: 14, alignItems: "flex-start",
                    borderLeft: i === 0 ? "3px solid #c8204a" : i === 1 ? "3px solid #3366cc" : i === 2 ? "3px solid #c8a84b" : "3px solid #2aaa66",
                  }}>
                    <div style={{ width: 36, height: 36, borderRadius: 6, background: "rgba(30,80,180,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#5599ee" }}>
                      <Icon name={item.icon as any} size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 11, color: "#7a9abf", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <img src={OFFICER_IMG} alt="Рабочий процесс" style={{ width: "100%", height: 165, objectFit: "cover", borderRadius: 8, border: "2px solid #1e3a6e" }} />
                <div style={{ fontSize: 10, color: "#4a6280", textAlign: "center" }}>Рабочий процесс в отделе МВД</div>
                <img src={OFFICE_IMG} alt="Рабочее место" style={{ width: "100%", height: 165, objectFit: "cover", borderRadius: 8, border: "2px solid #1e3a6e" }} />
                <div style={{ fontSize: 10, color: "#4a6280", textAlign: "center" }}>Рабочее место сотрудника</div>
              </div>
            </div>
          </div>
        )}

        {/* ===== SLIDE 4: SKILLS ===== */}
        {current === 3 && (
          <div key="s4" style={{ flex: 1, padding: "36px 48px 24px", background: "#0f1e38", display: "flex", flexDirection: "column", animation: "fadeIn 0.4s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24, paddingBottom: 18, borderBottom: "2px solid #1e3a6e" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(200,168,75,0.18)", lineHeight: 1, fontFamily: "Georgia, serif", minWidth: 64 }}>04</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>Полученные знания и навыки</h2>
                <p style={{ fontSize: 13, color: "#6a8aaa", margin: 0 }}>Профессиональные компетенции, приобретённые в ходе практики</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
              {[
                { icon: "BookOpen", border: "#3366cc", iconBg: "rgba(51,102,204,0.2)", iconColor: "#5599ee", title: "Правовые знания", items: ["Нормативно-правовая база МВД", "Уголовно-процессуальное право", "Административное законодательство", "Права и обязанности сотрудника"] },
                { icon: "Briefcase", border: "#c8204a", iconBg: "rgba(200,32,74,0.2)", iconColor: "#e84b6e", title: "Профессиональные навыки", items: ["Составление служебных документов", "Работа с базами данных МВД", "Ведение делопроизводства", "Взаимодействие с гражданами"] },
                { icon: "Brain", border: "#1e5a8e", iconBg: "rgba(30,90,142,0.3)", iconColor: "#7ab4ee", title: "Личностные качества", items: ["Стрессоустойчивость", "Дисциплина и ответственность", "Работа в команде", "Принятие решений в сложных ситуациях"] },
                { icon: "Zap", border: "#c8a84b", iconBg: "rgba(200,168,75,0.15)", iconColor: "#f0d080", title: "Практический опыт", items: ["Несение дежурства", "Патрулирование территории", "Участие в оперативных мероприятиях", "Взаимодействие с другими службами"] },
              ].map((block) => (
                <div key={block.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1e3a6e", borderTop: `3px solid ${block.border}`, borderRadius: 10, padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: block.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: block.iconColor }}>
                      <Icon name={block.icon as any} size={18} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 0.5 }}>{block.title}</div>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                    {block.items.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#8aaacc" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#c8a84b", flexShrink: 0, display: "inline-block" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== SLIDE 5: CONCLUSION ===== */}
        {current === 4 && (
          <div key="s5" style={{ flex: 1, padding: "36px 48px 24px", background: "#0f1e38", display: "flex", flexDirection: "column", animation: "fadeIn 0.4s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24, paddingBottom: 18, borderBottom: "2px solid #1e3a6e" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(200,168,75,0.18)", lineHeight: 1, fontFamily: "Georgia, serif", minWidth: 64 }}>05</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>Выводы и результаты</h2>
                <p style={{ fontSize: 13, color: "#6a8aaa", margin: 0 }}>Итоги прохождения производственной практики</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 24, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.2)", borderRadius: 10, padding: 20 }}>
                  <Icon name="Quote" size={28} style={{ color: "#c8a84b", marginBottom: 8 }} />
                  <p style={{ fontSize: 13, color: "#aac4e8", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    В ходе производственной практики в Отделе МВД России по Орловскому району были успешно достигнуты все поставленные цели и задачи. Полученный практический опыт стал важнейшей основой для дальнейшей профессиональной деятельности.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                  {[
                    { num: "4", label: "недели практики" },
                    { num: "5+", label: "подразделений изучено" },
                    { num: "20+", label: "документов оформлено" },
                    { num: "100%", label: "задание выполнено" },
                  ].map((r) => (
                    <div key={r.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1e3a6e", borderRadius: 8, padding: 14, textAlign: "center" }}>
                      <div style={{ fontSize: 26, fontWeight: 800, color: "#f0d080", fontFamily: "Georgia, serif" }}>{r.num}</div>
                      <div style={{ fontSize: 10, color: "#6a8aaa", marginTop: 4, lineHeight: 1.3 }}>{r.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Закреплены теоретические знания по специальности",
                    "Приобретены практические навыки работы в органах МВД",
                    "Сформировано понимание структуры правоохранительной системы",
                    "Подтверждена правильность выбора профессионального пути",
                  ].map((text) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.03)", border: "1px solid #1e3a6e", borderRadius: 6, padding: "10px 14px", fontSize: 12, color: "#aac4e8" }}>
                      <Icon name="CheckCircle2" size={16} style={{ color: "#4ade80", flexShrink: 0 }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <img src={OFFICER_IMG} alt="Итоги" style={{ width: "100%", height: 170, objectFit: "cover", borderRadius: 8, border: "2px solid #1e3a6e" }} />
                <div style={{ background: "linear-gradient(135deg, #0d2a5a, #1e3a6e)", border: "2px solid #c8a84b", borderRadius: 10, padding: 18, textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "#8aaacc", letterSpacing: 1, textTransform: "uppercase" }}>Оценка за практику</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#f0d080", margin: "6px 0 2px", textTransform: "uppercase", letterSpacing: 2 }}>Отлично</div>
                  <div style={{ fontSize: 12, color: "#c8a84b" }}>5 / 5</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1e3a6e", borderRadius: 8, padding: 14 }}>
                  {["Подпись студента", "Руководитель", "Дата"].map((label) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "#6a8aaa", marginBottom: 10 }}>
                      <span>{label}:</span>
                      <span style={{ flex: 1, marginLeft: 8, borderBottom: "1px solid #2a4a7a", height: 16 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTROLS */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 48px", borderTop: "1px solid #1e3a6e", background: "#0d1f3c" }}>
          <button onClick={prev} disabled={current === 0} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 6,
            background: "rgba(255,255,255,0.06)", border: "1px solid #1e3a6e",
            color: "#aac4e8", fontSize: 13, fontWeight: 600,
            cursor: current === 0 ? "not-allowed" : "pointer",
            opacity: current === 0 ? 0.3 : 1,
            fontFamily: "'Montserrat', sans-serif",
            transition: "all 0.2s"
          }}>
            <Icon name="ChevronLeft" size={18} /> Назад
          </button>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: i === current ? 4 : "50%",
                background: i === current ? "#c8a84b" : "#2a4a7a",
                border: "none", cursor: "pointer",
                transition: "all 0.25s"
              }} />
            ))}
          </div>
          <button onClick={next} disabled={current === slides.length - 1} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 6,
            background: "rgba(255,255,255,0.06)", border: "1px solid #1e3a6e",
            color: "#aac4e8", fontSize: 13, fontWeight: 600,
            cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
            opacity: current === slides.length - 1 ? 0.3 : 1,
            fontFamily: "'Montserrat', sans-serif",
            transition: "all 0.2s"
          }}>
            Далее <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body { margin: 0; }
      `}</style>
    </div>
  );
}