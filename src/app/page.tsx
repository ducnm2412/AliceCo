import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HeroVideo } from "./hero-video";
import { Motion } from "./motion";
import { services } from "./services/data";
import { CARD_SIZES } from "./site";
import { Arrow, ContactSection, SiteFooter, SiteHeader } from "./site-chrome";

const clients = [
  {
    title: "Companies & investors",
    text: "Market entry, sourcing and representation for foreign businesses.",
  },
  {
    title: "Expats & families",
    text: "The right home in Ho Chi Minh City, found, checked and leased.",
  },
  {
    title: "Visiting executives",
    text: "A capable local counterpart from day one of your trip.",
  },
];

const roles = [
  "Legal advice",
  "Consulting",
  "Sourcing",
  "Interpreting",
  "Coordination",
  "Representation",
  "Personal assistance",
];

// The seven roles sit evenly around the hub, starting at twelve o'clock.
// Positions are percentages of the square orbit.
const ORBIT_RADIUS = 39;
const HUB_RADIUS = 20;
const orbit = roles.map((role, index) => {
  const angle = ((index / roles.length) * 360 - 90) * (Math.PI / 180);
  const cos = Math.round(Math.cos(angle) * 1000) / 1000;
  const sin = Math.round(Math.sin(angle) * 1000) / 1000;
  return {
    role,
    cos,
    sin,
    x: 50 + cos * ORBIT_RADIUS,
    y: 50 + sin * ORBIT_RADIUS,
  };
});

const strengths = [
  {
    numeral: "I",
    title: "Legal background",
    text: "Contract and procedural risks caught before they cost you.",
  },
  {
    numeral: "II",
    title: "Clear reporting",
    text: "Updates in English after every step, so you always know where things stand.",
  },
  {
    numeral: "III",
    title: "On the ground in HCMC",
    text: "In person, with a deep local network.",
  },
];

const steps = [
  {
    title: "Listen",
    text: "Tell us your goals by phone or Zalo.",
  },
  {
    title: "Scope",
    text: "We map the requirements, risks and plan.",
  },
  {
    title: "Act",
    text: "We do the work on the ground and keep you updated.",
  },
  {
    title: "Hand over",
    text: "You get the result, and a partner who stays.",
  },
];

const gallery = [
  {
    image: "/AnhSanPham6.webp",
    alt: "Checking goods against a quality checklist in a warehouse",
    position: "center",
    title: "Quality inspections",
    text: "Goods checked against your checklist before they leave the warehouse.",
  },
  {
    image: "/AnhSanPham5.png",
    alt: "Explaining production details to visiting clients",
    position: "30% center",
    title: "Factory visits",
    text: "We walk the production line with you, or in your place.",
  },
  {
    image: "/AnhSanPham9.webp",
    alt: "Signing for a confidential delivery at the office",
    position: "35% center",
    title: "Mail and parcels",
    text: "Confidential deliveries received, signed for and stored.",
  },
];

const faqs = [
  {
    question: "Do I need to be in Vietnam myself?",
    answer:
      "No. We can attend meetings, negotiate and oversee projects on your behalf.",
  },
  {
    question: "Do you work with individuals too?",
    answer: "Yes. We also help expats and families settle in Ho Chi Minh City.",
  },
  {
    question: "Where are you based?",
    answer:
      "Le Van Tho Street, Go Vap District, Ho Chi Minh City.",
  },
];

export default function Home() {
  return (
    <>
      <Motion />
      <SiteHeader />

      <main>
        <section id="top" className="hero">
          <Image
            src="/hero-skyline.jpg"
            alt="Ho Chi Minh City skyline over the Saigon River at dusk"
            fill
            preload
            sizes="100vw"
            className="hero__image"
          />
          <HeroVideo />
          <div className="hero__shade" />
          <div className="hero__copy">
            <div className="hero__logo">
              <Image
                src="/alice-emblem.png"
                alt=""
                width={220}
                height={220}
                className="hero__emblem"
              />
              <div className="hero__wordmark">ALICE &amp; CO.</div>
            </div>
            <div className="eyebrow">Your local partner in Vietnam</div>
            <h1>
              In Vietnam,
              <br />
              who do you call?
            </h1>
            <p className="hero__lede">
              Five situations every foreign business and expat meets here. One
              local partner who answers them all.
            </p>
          </div>
        </section>

        <section className="strip" aria-label="Our five services">
          <div className="wrap strip__track">
            {/* The copy only shows on narrow screens, where the row scrolls
                as a seamless loop */}
            {[false, true].map((clone) => (
              <ul
                key={String(clone)}
                className={clone ? "strip__clone" : undefined}
                aria-hidden={clone || undefined}
              >
                {services.map((service, index) => (
                  <Fragment key={service.slug}>
                    {index > 0 && (
                      <li className="strip__dot" aria-hidden="true" />
                    )}
                    <li>{service.short}</li>
                  </Fragment>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section id="about" className="section section--ivory">
          <div className="wrap about">
            <div className="media about__media" data-reveal>
              <Image
                src="/AnhSanPham8.webp"
                alt="Advisor in discussion with two international clients above the city"
                fill
                sizes="(max-width: 1000px) 100vw, 720px"
              />
            </div>
            <div className="about__copy" data-reveal>
              <div className="eyebrow">About ALICE &amp; CO.</div>
              <h2 className="heading">International standards. Local roots.</h2>
              <p>
                We know how things are really done in Vietnam, and we carry that
                knowledge for you, to the standard international clients expect.
              </p>
              <div className="about__motto">Your local partner in Vietnam.</div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="wrap stack">
            <div className="head-center" data-reveal>
              <div className="eyebrow">What we do</div>
              <h2 className="heading">
                Five services that cover the whole journey.
              </h2>
            </div>
            <div className="services">
              {services.map((service, index) => (
                <article key={service.slug} className="service" data-reveal>
                  <div className="media service__media">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes={CARD_SIZES}
                    />
                  </div>
                  <div className="service__body">
                    <div className="small-label">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="card-title">{service.name}</h3>
                    <p className="body-sm">{service.text}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="service__link"
                    >
                      Explore the service
                      <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
              <article className="service service--cta" data-reveal>
                <div>
                  <div className="small-label">Not sure where to begin?</div>
                  <h3>Tell us the situation. We will tell you what it takes.</h3>
                </div>
                <a href="#contact" className="btn btn--navy">
                  Enquire
                  <Arrow />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="situation">
          <Image
            src="/AnhSanPham7.webp"
            alt="Riverside apartment towers in Ho Chi Minh City at dusk"
            fill
            sizes="100vw"
          />
          <div className="situation__shade" />
          <div className="wrap">
            <div className="situation__copy" data-reveal>
              <div className="eyebrow">A question we hear often</div>
              <blockquote>
                “My family is moving to Saigon. Where will we live?”
              </blockquote>
              <div className="situation__rule" />
              <div className="small-label">Relocation &amp; Housing</div>
              <p>
                We find, inspect and lease your home, then hand you the keys.
              </p>
            </div>
          </div>
        </section>

        <section id="clients" className="section section--deep">
          <div className="wrap split">
            <div className="split__aside" data-reveal>
              <div className="eyebrow">Who we work with</div>
              <h2 className="heading">
                Three kinds of client. One standard of care.
              </h2>
            </div>
            <div className="split__main">
              {clients.map((client) => (
                <div key={client.title} className="client" data-reveal>
                  <h3>{client.title}</h3>
                  <p className="body-sm">{client.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--raised">
          <div className="wrap model">
            <div className="model__head" data-reveal>
              <div className="eyebrow">Our model</div>
              <h2 className="heading">One trusted local partner</h2>
              <p className="body-sm">
                Seven roles you would normally hire separately, in one
                engagement.
              </p>
              <dl className="model__tally">
                <div>
                  <dt>7</dt>
                  <dd>Functions</dd>
                </div>
                <div>
                  <dt>1</dt>
                  <dd>Contract</dd>
                </div>
                <div>
                  <dt>1</dt>
                  <dd>Contact</dd>
                </div>
              </dl>
            </div>
            <div className="orbit" data-reveal>
              <svg
                className="orbit__lines"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  className="orbit__ring"
                  cx="50"
                  cy="50"
                  r={ORBIT_RADIUS}
                />
                {orbit.map((point) => (
                  <line
                    key={point.role}
                    x1={50 + point.cos * HUB_RADIUS}
                    y1={50 + point.sin * HUB_RADIUS}
                    x2={point.x}
                    y2={point.y}
                  />
                ))}
              </svg>
              <div className="orbit__hub">
                <div className="orbit__name">ALICE &amp; CO.</div>
                <div className="orbit__role">Single point of accountability</div>
              </div>
              <ol className="orbit__items">
                {orbit.map((point, index) => (
                  <li
                    key={point.role}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {point.role}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap why">
            <div className="why__media" data-reveal>
              <div className="why__photo">
                <Image
                  src="/images.jpg"
                  alt="Ba Son bridge and the Ho Chi Minh City riverfront lit up at night"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </div>
              <p className="why__seal">
                One brief. One team. One line of accountability.
              </p>
            </div>
            <div className="why__copy">
              <div data-reveal>
                <div className="eyebrow">Why clients choose us</div>
                <h2 className="heading">What sets our work apart.</h2>
              </div>
              <div className="why__list">
                {strengths.map((strength) => (
                  <div key={strength.title} className="strength" data-reveal>
                    <div className="strength__numeral" aria-hidden="true">
                      {strength.numeral}
                    </div>
                    <div>
                      <h3 className="card-title">{strength.title}</h3>
                      <p className="body-sm">{strength.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <Image
            src="/77659b0edc1d2adccb21efa96b92aed3.jpg"
            alt=""
            fill
            sizes="100vw"
          />
          <div className="process__shade" />
          <div className="wrap stack">
            <div className="head-center" data-reveal>
              <div className="eyebrow">How we work</div>
              <h2 className="heading">From first call to handover.</h2>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} className="step" data-reveal>
                  <div className="step__number">{index + 1}</div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="body-sm">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="process__cta" data-reveal>
              <a href="#contact" className="btn btn--gold">
                Start with a call
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap stack" style={{ gap: 40 }}>
            <div className="head-center" data-reveal>
              <div className="eyebrow">Where we work</div>
              <h2 className="heading">In the field, not behind a desk.</h2>
            </div>
            <div className="gallery">
              {gallery.map((photo) => (
                <figure key={photo.title} className="scene" data-reveal>
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes={CARD_SIZES}
                    style={{ objectPosition: photo.position }}
                  />
                  <figcaption className="scene__caption">
                    <h3>{photo.title}</h3>
                    <p>{photo.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section--ivory">
          <div className="wrap split">
            <div className="split__aside" data-reveal>
              <div className="eyebrow">Questions</div>
              <h2 className="heading">Before you get in touch.</h2>
            </div>
            <div className="split__main faq" data-reveal>
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
