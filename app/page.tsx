"use client";

import { FormEvent, useState } from "react";

const services = [
  ["01 · ТЕРАПІЯ", "Лікування зубів", "Карієс, реставрації, лікування некаріозних уражень і травм.", "Пломба від 1 300 грн"],
  ["02 · ЕНДОДОНТІЯ", "Лікування каналів", "Первинне лікування та переліковування каналів, у тому числі під мікроскопом.", "від 1 850 грн"],
  ["03 · ПРОФІЛАКТИКА", "Професійна гігієна", "Ультразвукова чистка, Air Flow, профілактика захворювань ясен.", "1 500 грн"],
  ["04 · ПРОТЕЗУВАННЯ", "Коронки та вініри", "Металокераміка, цирконій, керамічні вініри, знімні конструкції.", "Коронки від 5 850 грн"],
  ["05 · ХІРУРГІЯ", "Видалення зубів", "Атравматичне видалення, зуби мудрості та хірургічні втручання.", "від 2 200 грн"],
  ["06 · ІМПЛАНТАЦІЯ", "Відновлення зубів", "Класична й одномоментна імплантація, протезування на імплантах.", "Megagen — 450$"],
];

const cases = [
  ["/photos/case-front-restoration.webp", "Естетична реставрація передніх зубів"],
  ["/photos/case-incisor-restoration.webp", "Відновлення фронтального зуба"],
  ["/photos/case-crown.webp", "Відновлення форми зуба"],
  ["/photos/case-front-teeth.webp", "Реставрація передніх зубів"],
  ["/photos/case-molar-restoration.webp", "Реставрація жувального зуба"],
  ["/photos/case-side-restoration.webp", "Відновлення жувальної групи"],
  ["/photos/case-caries.webp", "Лікування карієсу"],
  ["/photos/case-cleaning.webp", "Професійна гігієна"],
];

const practice = [
  ["/photos/microscope-treatment.webp", "Лікування під мікроскопом"],
  ["/photos/child-appointment.webp", "Дитячий прийом"],
  ["/photos/family-appointment.webp", "Дбайливий підхід"],
  ["/photos/doctor-consultation.webp", "Зрозуміла консультація"],
];

const clinic = [
  ["/photos/reception-wide.webp", "Ресепшн клініки"],
  ["/photos/reception-team.webp", "Простір Primak Dent"],
  ["/photos/reception-consult.webp", "Консультація лікаря"],
  ["/photos/reception-consult-2.webp", "Турбота про пацієнта"],
  ["/photos/reception-close.webp", "Зона очікування"],
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.get("name"), phone: data.get("phone"), website: data.get("website") }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <div className="topbar"><div className="wrap"><span>м. Київ · метро Дорогожичі</span><span>Пн–Сб 09:00–19:00</span></div></div>
      <header><div className="wrap nav">
        <a className="brand" href="#top" aria-label="Primak Dent — на головну"><span className="logo-mark">PD</span><span><b>PRIMAK DENT</b><small>сучасна стоматологія</small></span></a>
        <nav className="menu" aria-label="Головна навігація"><a href="#services">Послуги</a><a href="#why">Чому ми</a><a href="#works">Роботи</a><a href="#prices">Ціни</a><a href="#contacts">Контакти</a></nav>
        <div className="actions"><a className="phone" href="tel:+380988800202">098 880 02 02</a><a className="btn primary" href="#contacts">Записатися</a></div>
      </div></header>

      <main id="top">
        <section className="hero"><div className="wrap hero-grid">
          <div className="hero-copy"><span className="eyebrow">Стоматологія · Київ · Дорогожичі</span><h1>Здорова посмішка починається з <span>правильного плану лікування</span></h1><p>Комплексна стоматологія для дорослих і дітей: від профілактики та лікування карієсу до протезування, хірургії й імплантації.</p><div className="hero-btns"><a className="btn primary" href="#contacts">Записатися на консультацію</a><a className="btn secondary" href="#services">Переглянути послуги ↓</a></div><div className="hero-facts"><span>● лікування під збільшенням</span><span>● стерилізація MELAG</span><span>● сучасна діагностика</span></div></div>
          <div className="hero-photo"><img src="/photos/microscope-treatment-wide.webp" alt="Лікарі Primak Dent проводять лікування пацієнта під мікроскопом" /><div className="floating"><div><strong>Не знаєте, з чого почати?</strong><small>Огляд + план лікування</small></div><div className="price-tag">400 грн</div></div></div>
        </div></section>

        <div className="trust"><div className="wrap trust-grid"><div><b>Комплексна діагностика</b><span>КТ, ортопантомограма, фотопротокол</span></div><div><b>Лікування під збільшенням</b><span>Контроль точності на ключових етапах</span></div><div><b>Стерилізація MELAG</b><span>Сучасні стандарти обробки інструментів</span></div><div><b>Поетапний план</b><span>Розуміння наступних кроків до початку лікування</span></div></div></div>

        <section className="services" id="services"><div className="wrap"><div className="section-head"><div><span className="eyebrow">Послуги</span><h2>Все необхідне —<br />в одній стоматології</h2></div></div><div className="service-grid">{services.map(([number,title,text,price],index)=><article className={`service-card ${index===0?"featured":""}`} key={title}><div><span className="service-no">{number}</span><h3>{title}</h3><p>{text}</p></div><div className="service-bottom"><strong>{price}</strong><span>↗</span></div></article>)}</div></div></section>

        <section className="consult"><div className="wrap consult-box"><div><h3>Не знаєте, яке лікування потрібне?</h3><p>Почніть із консультації. Лікар проведе огляд, пояснить стан зубів і складе зрозумілий план подальших дій.</p></div><div className="consult-right"><div className="consult-price">Консультація<b>400 грн</b></div><a className="btn primary" href="#contacts">Обрати час</a></div></div></section>

        <section id="why"><div className="wrap why-grid"><div className="why-visual"><img src="/photos/doctor-consultation.webp" alt="Лікар Primak Dent консультує пацієнтку" /><div className="visual-caption">Спокійно пояснюємо кожен етап і допомагаємо обрати зрозумілий план лікування.</div></div><div><span className="eyebrow">Чому Primak Dent</span><h2>Спокійно пояснюємо.<br />Акуратно лікуємо.</h2><div className="why-list">{[['01','Сучасне обладнання','Діагностика та лікування з використанням сучасних технологій.'],['02','Професійна команда лікарів','Фахівці з профільною освітою та досвідом ведення комплексних випадків.'],['03','Високі стандарти стерилізації','Автоклав і обладнання MELAG для обробки інструментів.'],['04','Робота зі збільшенням','Більше контролю й точності під час лікування.'],['05','Зрозумілий вибір лікування','Поетапний план і пояснення варіантів без перевантаження термінами.']].map(([n,t,d])=><div className="why-item" key={n}><div className="why-icon">{n}</div><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></div></section>

        <section className="works" id="works"><div className="wrap"><div className="section-head"><div><span className="eyebrow">Практика клініки</span><h2>Наші роботи</h2></div><p>Реальні клінічні випадки Primak Dent. Результат кожного лікування індивідуальний.</p></div><div className="case-grid">{cases.map(([src,title])=><article className="case-card" key={src}><div className="case-photo"><img src={src} alt={title} loading="lazy" /></div><div className="case-caption">{title}</div></article>)}</div><div className="practice-grid">{practice.map(([src,label])=><figure className="practice-photo" key={src}><img src={src} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div></div></section>

        <section id="prices"><div className="wrap"><div className="section-head"><div><span className="eyebrow">Ціни</span><h2>Орієнтири до запису</h2></div></div><div className="price-grid"><div className="price-list">{[['Консультація','400 грн'],['Комплексна чистка','1 500 грн'],['Фотополімерна пломба','від 1 300 грн'],['Реставрація переднього зуба','від 1 900 грн']].map(([a,b])=><div className="price-row" key={a}><span>{a}</span><b>{b}</b></div>)}</div><div className="price-list">{[['Лікування каналів','від 1 850 грн'],['Металокерамічна коронка','5 850 грн'],['Видалення постійного зуба','від 2 200 грн'],['Імплантація Megagen','450$']].map(([a,b])=><div className="price-row" key={a}><span>{a}</span><b>{b}</b></div>)}</div></div><p className="price-note">* Фінальна вартість залежить від клінічної ситуації та визначається після огляду.</p></div></section>

        <section className="reviews" id="reviews"><div className="wrap"><div className="section-head"><div><span className="eyebrow">Відгуки</span><h2>Що кажуть пацієнти</h2></div></div><div className="review-grid">{[['Ірина','Уважний підхід, усе пояснили й показали, лікування пройшло акуратно та комфортно.'],['Олександр','Якісна реставрація і пломбування. Робота дуже акуратна, результатом задоволений.'],['Володимир','Ввічливий персонал, затишна клініка, запропонували варіанти лікування і все зрозуміло пояснили.']].map(([name,text])=><blockquote className="review" key={name}><div className="stars">★★★★★</div><p>«{text}»</p><b>{name}</b><small>відгук пацієнта</small></blockquote>)}</div></div></section>

        <section className="clinic-gallery"><div className="wrap"><div className="section-head"><div><span className="eyebrow">Primak Dent</span><h2>Клініка та консультації</h2></div></div><div className="clinic-grid">{clinic.map(([src,label],index)=><figure className={`clinic-shot clinic-${index+1}`} key={src}><img src={src} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div></div></section>

        <section className="contact" id="contacts"><div className="wrap contact-box"><div className="contact-copy"><span className="eyebrow dark">Запис на прийом</span><h2>Залиште номер — адміністратор допоможе обрати час</h2><p>Без довгих анкет. Для першого контакту достатньо імені та телефону.</p><div className="details"><div><b>Адреса</b><span>м. Київ, вул. Максима Берлінського, 4</span></div><div><b>Телефон</b><a href="tel:+380988800202">098 880 02 02</a></div><div><b>Графік</b><span>Пн–Сб 09:00–19:00</span></div></div></div><form className="form" onSubmit={submitAppointment}><h3>Записатися на консультацію</h3><p>Залиште контакти — ми зв’яжемося з вами у робочий час.</p><label><span>Ваше ім’я</span><input name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Наприклад, Олена" /></label><label><span>Номер телефону</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" minLength={8} maxLength={24} required placeholder="+38 ___ ___ __ __" /></label><label className="honeypot" aria-hidden="true"><span>Ваш сайт</span><input name="website" tabIndex={-1} autoComplete="off" /></label><button className="btn primary" type="submit" disabled={formState==="sending"}>{formState==="sending"?"Надсилаємо…":"Записатися"}</button><div className={`form-status ${formState}`} aria-live="polite">{formState==="success"?"Дякуємо! Заявку надіслано. Ми зв’яжемося з вами у робочий час.":formState==="error"?"Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.":""}</div><div className="tiny">Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.</div></form></div></section>
      </main>
      <footer><div className="wrap foot"><span>© Primak Dent</span><span>Стоматологія · Київ · Дорогожичі</span></div></footer>
    </>
  );
}
