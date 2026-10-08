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
    text: "Foreign businesses, investors and international sourcing teams preparing to operate in Vietnam, or already here. Typically engaged for market entry, sourcing and representation.",
  },
  {
    title: "Expats & families",
    text: "Foreign professionals and their families moving to Ho Chi Minh City. We find and inspect the apartment, negotiate the lease and hand over the keys.",
  },
  {
    title: "Visiting executives",
    text: "Senior leaders and international business people in Vietnam on short-term business, who need a capable local counterpart from day one.",
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
    text: "We know Vietnamese law, administrative procedure and where contracts carry risk — so issues are caught before they cost you.",
  },
  {
    numeral: "II",
    title: "One trusted local partner",
    text: "A single relationship replaces seven separate providers, with one team accountable for the outcome.",
  },
  {
    numeral: "III",
    title: "On the ground in HCMC",
    text: "We are there in person, resolving matters quickly with international working standards and a deep local network.",
  },
];

const steps = [
  {
    title: "Listen",
    text: "You tell us your goals, timeline and concerns by phone or Zalo.",
  },
  {
    title: "Scope",
    text: "We set out what is required in Vietnam, the risks to watch and a clear plan.",
  },
  {
    title: "Act",
    text: "Our team carries out the work on the ground and keeps you informed throughout.",
  },
  {
    title: "Hand over",
    text: "You receive the finished result — and a partner who remains available afterwards.",
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
    question: "What does “one trusted local partner” replace?",
    answer:
      "The seven parties foreign clients usually hire one by one: a lawyer, a consultant, a sourcing agency, an interpreter, a coordinator, a local representative and a personal assistant.",
  },
  {
    question: "Do I need to be in Vietnam myself?",
    answer:
      "Not necessarily. Through our Local Representation service we attend meetings, negotiate contracts and oversee project progress on your behalf.",
  },
  {
    question: "Do you work with individuals as well as companies?",
    answer:
      "Yes. Alongside businesses and investors, we support expats and families relocating to Ho Chi Minh City, and executives here on short-term business.",
  },
  {
    question: "Where are you based?",
    answer:
      "In Ho Chi Minh City — our office is on Le Van Tho Street, Go Vap District.",
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
            <a
              href="#about"
              className="hero__scroll"
              aria-label="Scroll to About ALICE & CO."
            />
          </div>
        </section>

        <section className="strip" aria-label="Our five services">
          <ul className="wrap">
            {services.map((service, index) => (
              <Fragment key={service.slug}>
                {index > 0 && <li className="strip__dot" aria-hidden="true" />}
                <li>{service.short}</li>
              </Fragment>
            ))}
          </ul>
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
                Vietnam rewards those who understand how things are really done
                here — the regulations, the paperwork, the relationships. We
                exist to carry that knowledge for you.
              </p>
              <p>
                From a first market study to a signed lease or an audited
                factory, our team works at the standard international clients
                expect, backed by a deep local network built in Ho Chi Minh
                City.
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
                We advise on the move, find and inspect apartments, negotiate
                the lease and hand the home over to you.
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
                Seven functions that clients normally contract separately are
                delivered through a single engagement, with a single point of
                accountability.
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
              <p className="body-sm gallery__lede">
                Factories, warehouses, meeting rooms and front desks — wherever
                your interests need someone present.
              </p>
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
