import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "./enquiry-form";
import { MobileMenu } from "./mobile-menu";
import { NavServices } from "./nav-services";
import { BrandLink } from "./scroll-top";
import { services } from "./services/data";
import { ADDRESS, FACEBOOK_URL, MAPS_URL, PHONE_HREF, ZALO_URL } from "./site";

// Header, contact block and footer shared by the home page and service pages.
// Section links point at the home page so they work from any route.

export function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <BrandLink>
          <Image src="/alice-emblem.png" alt="" width={44} height={44} />
          <span className="brand__name">ALICE &amp; CO.</span>
        </BrandLink>
        <nav className="nav" aria-label="Main">
          <Link href="/#about">About</Link>
          <NavServices
            items={services.map(({ slug, name }) => ({ slug, name }))}
          />
          <Link href="/#clients">Clients</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#faq">FAQ</Link>
          <a
            href={PHONE_HREF}
            className="nav__phone"
            aria-label="Call 033 409 5326"
          >
            033 409 5326
          </a>
        </nav>
        <MobileMenu
          items={services.map(({ slug, name }) => ({ slug, name }))}
        />
      </div>
    </header>
  );
}

export function ContactSection({
  defaultService,
}: {
  defaultService?: string;
}) {
  return (
    <section id="contact" className="section contact">
      <Image
        src="/hero-skyline.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="contact__shade" />
      <div className="wrap contact__grid">
        <div className="contact__info" data-reveal>
          <div className="eyebrow">Contact</div>
          <h2 className="heading">Let us be your people in Vietnam.</h2>
          <dl className="contact__rows">
            <div className="contact__row">
              <dt>Your contact</dt>
              <dd>Nguyen Thi Thao Uyen</dd>
            </div>
            <div className="contact__row">
              <dt>Phone / Zalo</dt>
              <dd>
                <a href={PHONE_HREF}>+84 33 409 5326</a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>Office</dt>
              <dd>{ADDRESS}</dd>
            </div>
          </dl>
          <div className="contact__links">
            <a href={MAPS_URL} target="_blank" rel="noopener">
              Google Maps
            </a>
            <a href={ZALO_URL} target="_blank" rel="noopener">
              Zalo
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener">
              Facebook
            </a>
          </div>
        </div>
        <EnquiryForm
          services={services.map((service) => service.name)}
          defaultService={defaultService}
        />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div className="footer__brand">
            <Image
              src="/logo-full.png"
              alt="ALICE & CO. — Your Local Partner in Vietnam"
              width={170}
              height={182}
            />
          </div>
          <div className="footer__col footer__col--wide">
            <h2>Services</h2>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <h2>Company</h2>
            <Link href="/#about">About</Link>
            <Link href="/#clients">Clients</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div className="footer__col footer__col--wide">
            <h2>Contact</h2>
            <span>Nguyen Thi Thao Uyen</span>
            <a href={PHONE_HREF} className="footer__phone">
              +84 33 409 5326
            </a>
            <span>{ADDRESS}</span>
          </div>
        </div>
        <div className="footer__legal">
          © 2026 ALICE &amp; CO. · Your local partner in Vietnam
        </div>
      </div>
    </footer>
  );
}
