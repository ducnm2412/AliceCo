import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Motion } from "../../motion";
import { PHONE_HREF } from "../../site";
import { Arrow, ContactSection } from "../../site-chrome";
import { getService, services } from "../data";

// Everything here depends on the slug, so it renders inside the page's
// Suspense boundary and the header and footer stay in the shared App Shell
export async function ServiceContent({
  params,
}: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const related = services.filter((other) => other.slug !== service.slug);

  return (
    <>
      {/* Keyed so reveal animations re-bind when moving between services */}
      <Motion key={service.slug} />
      <section className="page-hero">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          preload
          sizes="100vw"
          className="page-hero__image"
        />
        <div className="page-hero__shade" />
        <div className="wrap page-hero__copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.short}</span>
          </nav>
          <div className="eyebrow">
            Service {String(index + 1).padStart(2, "0")}
          </div>
          <h1>{service.name}</h1>
          <p className="page-hero__lede">{service.text}</p>
          <div className="page-hero__actions">
            <a href="#contact" className="btn btn--gold">
              Enquire
              <Arrow />
            </a>
            <a href={PHONE_HREF} className="btn btn--ghost">
              Call 033 409 5326
            </a>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="wrap split">
          <div className="split__aside" data-reveal>
            <div className="eyebrow">Overview</div>
            <h2 className="heading">{service.headline}</h2>
          </div>
          <div className="split__main overview" data-reveal>
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="overview__audience">
              <div className="small-label">Who it is for</div>
              <ul>
                {service.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <div className="head-center" data-reveal>
            <div className="eyebrow">What is included</div>
            <h2 className="heading">Everything the work involves.</h2>
          </div>
          <div className="includes">
            {service.includes.map((item, itemIndex) => (
              <article key={item.title} className="include" data-reveal>
                <div className="small-label">
                  {String(itemIndex + 1).padStart(2, "0")}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="body-sm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="wrap split">
          <div className="split__aside" data-reveal>
            <div className="eyebrow">Good to know</div>
            <h2 className="heading">How it works in Vietnam.</h2>
            <p className="body-sm">
              General guidance based on the rules and market practice in 2026.
              We confirm what applies to your case before you act.
            </p>
          </div>
          <dl className="split__main facts">
            {service.facts.map((fact) => (
              <div key={fact.label} className="fact" data-reveal>
                <dt>{fact.label}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section process">
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
            <h2 className="heading">Four steps, one team.</h2>
          </div>
          <ol className="steps">
            {service.steps.map((step, stepIndex) => (
              <li key={step.title} className="step" data-reveal>
                <div className="step__number">{stepIndex + 1}</div>
                <h3 className="card-title">{step.title}</h3>
                <p className="body-sm">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="wrap split">
          <div className="split__aside" data-reveal>
            <div className="eyebrow">Questions</div>
            <h2 className="heading">What clients ask us.</h2>
          </div>
          <div className="split__main faq" data-reveal>
            {service.faqs.map((faq, faqIndex) => (
              <details key={faq.question} open={faqIndex === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <div className="head-center" data-reveal>
            <div className="eyebrow">Other services</div>
            <h2 className="heading">One partner for the whole journey.</h2>
          </div>
          <div className="related">
            {related.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="related__card"
                data-reveal
              >
                <span className="small-label">{other.short}</span>
                <span className="related__name">{other.name}</span>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultService={service.name} />
    </>
  );
}
