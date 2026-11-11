import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наші лікарі — Primak Dent",
  description: "Лікарі Primak Dent: спеціалізація, освіта та досвід роботи. Стоматологія в Києві на вул. Максима Берлінського, 4.",
  alternates: { canonical: "/doctors" },
};

const doctors = [
  ["Дульнєв Кирило Вячеславович", "Лікар-стоматолог", "КМУ", "8 років"],
  ["Кислюк Тетяна Миколаївна", "Лікар-стоматолог-терапевт", "НМУ ім. О.О. Богомольця", "16 років"],
  ["Корзаченко Вікторія Тарасівна", "Лікар-стоматолог-терапевт", "КМУ", "8 років"],
  ["Кулик Валерія Сергіївна", "Дитячий лікар-стоматолог", "НМУ ім. О.О. Богомольця", "8 років"],
  ["Лук’янчук Людмила Іванівна", "Лікар-стоматолог-терапевт", "НМУ ім. О.О. Богомольця", "23 роки"],
  ["Примак Олександр Іванович", "Лікар-стоматолог-хірург", "НМУ ім. О.О. Богомольця", "52 роки"],
  ["Чешко Ружена Володимирівна", "Лікар-стоматолог-терапевт", "НМУ ім. О.О. Богомольця", "35 років"],
  ["Шарапова Наталія Сергіївна", "Лікар-стоматолог-ортопед", "НМУ ім. О.О. Богомольця", "5 років"],
  ["Шарапова Олена Іванівна", "Лікар-стоматолог-терапевт", "НМУ ім. О.О. Богомольця", "23 роки"],
];

export default function DoctorsPage() {
  return (
    <>
      <main className="wrap doctors-page">
        <a className="btn secondary" href="/">← На головну</a>
        <div className="section-head"><div><h1>Наші лікарі</h1><p>Команда стоматології Primak Dent у Києві.</p></div><a className="btn primary" href="/#contacts">Записатися на консультацію</a></div>
        <div className="doctors-grid">
          {doctors.map(([name, specialty, education, experience]) => (
            <article className="doctor-card" key={name}>
              <h2>{name}</h2>
              <p>{specialty}</p>
              <dl><div><dt>Освіта</dt><dd>{education}</dd></div><div><dt>Стаж роботи</dt><dd>{experience}</dd></div></dl>
            </article>
          ))}
        </div>
        <p className="price-note">Стаж роботи наведено станом на листопад 2026 року.</p>
      </main>
      <footer><div className="wrap foot"><span>ТОВ «Примак Дент» · ЄДРПОУ 42962432<br />Ліцензія МОЗ від 22.05.2020 №1236</span><a href="/#contacts">Контакти та запис</a><a href="/privacy">Політика конфіденційності</a></div></footer>
    </>
  );
}
