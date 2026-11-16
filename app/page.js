import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919819000302?text=" +
  encodeURIComponent("Hello Brass Line Hirer, I would like to make an enquiry.");

const ADDRESS =
  "401, La Varna Tower, 290, L.T Marg, Opp. St. Xavier's High School, Near Metro Theatre, Marine Lines";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("La Varna Tower, 290 L.T Marg, Marine Lines, Mumbai");

/* ---------- small inline icons ---------- */
const Icon = ({ children }) => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L15 13l4 1.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);
const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Icon>
);
const PinIcon = () => (
  <Icon>
    <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);
const GlobeIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z" />
  </Icon>
);
const ArrowIcon = () => (
  <Icon>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);
const DownloadIcon = () => (
  <Icon>
    <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
  </Icon>
);
const WhatsAppIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.2 15.04l-.3-.18-3.13.82.84-3.05-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 4.1c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.93 2.5 1.06 2.67c.13.17 1.8 2.9 4.45 3.95 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.24.22-.6.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.02-.15.18-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.55-1.46-1.8-.15-.27-.02-.4.12-.54.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.6-1.43-.82-1.96-.2-.51-.43-.44-.6-.45h-.5Z" />
  </svg>
);

export default function Home() {
  return (
    <main className="page">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="rings" aria-hidden="true" />
        <div className="plate">
          <Image
            src="/logo.png"
            alt="Brass Line Hirer – quality & service is our passion"
            width={571}
            height={149}
            priority
            className="logo"
          />
        </div>
        <p className="hero-line">Mumbai’s brass, copper &amp; gold hire, for every occasion.</p>
        <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
        <p className="hero-sub">+91 98190 00302</p>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section className="section" aria-labelledby="about-title">
        <h2 id="about-title">About Us</h2>
        <p className="about">
          Brass Line Hirer, a premier name in event solutions, stands distinguished in the
          industry for its commitment to excellence. With a legacy of unparalleled service, we
          offer a comprehensive range of top-quality brass instruments for hire, ensuring your
          event resonates with sophistication and harmony. Our dedication to customer
          satisfaction is reflected in every aspect of our service, from our meticulously
          maintained instruments to our prompt and reliable delivery. Whether it’s a grand
          celebration or an intimate gathering, Brass Line Hirer is your trusted partner for
          creating unforgettable musical experiences. Contact us today or visit our website to
          explore our offerings.
        </p>
      </section>

      {/* ---------- WEBSITES ---------- */}
      <section className="section" aria-labelledby="web-title">
        <h2 id="web-title">Our websites</h2>
        <ul className="rows">
          <li>
            <a className="row" href="https://www.brasslinehirer.com" target="_blank" rel="noopener noreferrer">
              <GlobeIcon />
              <span className="row-text">
                <span className="row-main">www.brasslinehirer.com</span>
              </span>
              <ArrowIcon />
            </a>
          </li>
          <li>
            <a className="row" href="https://www.brasslineindia.com" target="_blank" rel="noopener noreferrer">
              <GlobeIcon />
              <span className="row-text">
                <span className="row-main">www.brasslineindia.com</span>
              </span>
              <ArrowIcon />
            </a>
          </li>
        </ul>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className="section" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact Us</h2>
        <ul className="rows">
          <li>
            <a className="row" href={MAP_URL} target="_blank" rel="noopener noreferrer">
              <PinIcon />
              <span className="row-text">
                <span className="row-label">Address</span>
                <span className="row-main row-address">{ADDRESS}</span>
              </span>
              <ArrowIcon />
            </a>
          </li>
          <li>
            <a className="row" href="mailto:brasslinehirer@gmail.com">
              <MailIcon />
              <span className="row-text">
                <span className="row-label">Email</span>
                <span className="row-main">brasslinehirer@gmail.com</span>
              </span>
            </a>
          </li>
          <li>
            <a className="row" href="tel:+919819000302">
              <PhoneIcon />
              <span className="row-text">
                <span className="row-label">Phone</span>
                <span className="row-main">9819000302</span>
              </span>
            </a>
          </li>
          <li>
            <a className="row" href="tel:+919820229075">
              <PhoneIcon />
              <span className="row-text">
                <span className="row-label">Phone</span>
                <span className="row-main">9820229075</span>
              </span>
            </a>
          </li>
        </ul>

        <a className="btn btn-ghost" href="/brassline-hirer.vcf" download>
          <DownloadIcon />
          Save our contact
        </a>
      </section>

      <footer className="footer">
        <p>quality &amp; service is our passion</p>
        <p>© {new Date().getFullYear()} Brass Line Hirer</p>
      </footer>
    </main>
  );
}
