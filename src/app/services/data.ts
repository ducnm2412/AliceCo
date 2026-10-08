export type Service = {
  slug: string;
  name: string;
  short: string;
  text: string;
  image: string;
  alt: string;
  headline: string;
  intro: string[];
  audience: string[];
  includes: { title: string; text: string }[];
  facts: { label: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

// Facts reflect publicly available guidance as of 2026. They are a starting
// point for a conversation, not legal advice, and are confirmed per case.
export const services: Service[] = [
  {
    slug: "market-entry",
    name: "Vietnam Market Entry",
    short: "Market Entry",
    text: "Market research, company registration, business licences, recruitment and office search.",
    image: "/AnhSanPham8.webp",
    alt: "Advisor briefing two foreign clients in an office overlooking Ho Chi Minh City",
    headline: "From first market study to an operating company.",
    intro: [
      "Setting up in Vietnam is less about filling in forms than about choosing the right sequence. Your business lines decide whether you can incorporate quickly or need investment approval first, how much foreign ownership is allowed and what licences follow.",
      "We map that path before anything is filed, prepare and legalise the documents, register the company and stay with you through the first months: bank account, tax registration, first hires and an office that the authorities will accept.",
    ],
    audience: [
      "Foreign companies opening a subsidiary or representative office",
      "Investors assessing Vietnam before committing capital",
      "Founders moving an existing business to Ho Chi Minh City",
    ],
    includes: [
      {
        title: "Market and feasibility research",
        text: "Demand, competitors, pricing and the regulatory conditions for your sector, summarised in a brief you can take to your board.",
      },
      {
        title: "Business line and structure check",
        text: "We confirm whether your activities are open, conditional or restricted for foreign investors and recommend the entity: LLC, JSC or representative office.",
      },
      {
        title: "Document preparation and legalisation",
        text: "Passports, parent-company papers and board resolutions notarised, consularly legalised and translated into Vietnamese before filing.",
      },
      {
        title: "Company registration",
        text: "Filing for the Enterprise Registration Certificate and, where required, the Investment Registration Certificate, through to company seal and public notice.",
      },
      {
        title: "Post-licence set-up",
        text: "Capital account, tax registration, e-invoicing, social insurance registration and any sub-licences your sector needs.",
      },
      {
        title: "Recruitment and office search",
        text: "Shortlisting first employees and finding an office or registered address that meets registration requirements.",
      },
    ],
    facts: [
      {
        label: "New Investment Law",
        text: "Law 143/2025/QH15 applies from 1 March 2026. In eligible sectors a foreign investor may now form the company first and obtain the investment certificate within 12 months.",
      },
      {
        label: "Capital",
        text: "There is no general minimum, but capital must suit the project and be contributed in full within 90 days of incorporation.",
      },
      {
        label: "Registered address",
        text: "A real, verifiable commercial address is needed when the application is filed. Residential apartments are generally not accepted.",
      },
      {
        label: "Timing",
        text: "A few weeks for open sectors under the new sequence; several months where the sector is conditional or needs approval.",
      },
    ],
    steps: [
      {
        title: "Assess",
        text: "We review your business lines, ownership plans and budget against the current market access rules.",
      },
      {
        title: "Prepare",
        text: "We list every document, arrange legalisation abroad and secure the registered address.",
      },
      {
        title: "Register",
        text: "We file, follow up with the authorities and answer their queries until the certificates are issued.",
      },
      {
        title: "Operate",
        text: "Bank, tax and staffing set up, with a compliance calendar so nothing is missed in year one.",
      },
    ],
    faqs: [
      {
        question: "Can a foreigner own 100% of a company in Vietnam?",
        answer:
          "In most sectors, yes. Some conditional sectors cap foreign ownership or require a Vietnamese partner, which is why we check your business lines before anything else.",
      },
      {
        question: "Do I need to travel to Vietnam to register?",
        answer:
          "Usually not. With properly legalised documents and a power of attorney, we can file and follow up on your behalf. You may want to visit for the bank account.",
      },
      {
        question: "What has changed in 2026?",
        answer:
          "The new Investment Law lets eligible investors incorporate before completing investment registration, which can shorten set-up considerably. Local practice is still settling, so we plan for the cautious timeline.",
      },
    ],
  },
  {
    slug: "trade-sourcing",
    name: "Trade & Sourcing",
    short: "Trade & Sourcing",
    text: "Supplier search, on-site factory audits, purchasing management and quality inspection.",
    image: "/AnhSanPham6.webp",
    alt: "Quality inspection with a checklist inside a warehouse in Vietnam",
    headline: "The right supplier, checked on site, before you pay.",
    intro: [
      "Vietnam is one of the region's strongest manufacturing bases, from furniture and garments to electronics components. But a supplier's website and sample room tell you little about what happens on the factory floor.",
      "We work only for the buyer. We find and verify suppliers, visit their factories, manage purchase orders and inspect goods before they ship, so that problems are found while they can still be fixed.",
    ],
    audience: [
      "Importers and brands moving part of their supply chain to Vietnam",
      "Sourcing teams that need eyes on the ground between visits",
      "Small businesses placing their first order with a Vietnamese factory",
    ],
    includes: [
      {
        title: "Supplier search and shortlist",
        text: "Manufacturers matched to your product, volumes and certifications, with a comparison of prices, lead times and terms.",
      },
      {
        title: "Factory audits",
        text: "On-site checks that the business licence matches the company and address, that it is a real factory rather than a trading office, and that capacity and quality systems are as claimed.",
      },
      {
        title: "Samples and purchase orders",
        text: "Sample approval, clear specifications, and purchase contracts that set the quality standard and the remedy if it is not met.",
      },
      {
        title: "Production follow-up",
        text: "During-production checks and progress reports with photos, so delays are flagged early.",
      },
      {
        title: "Pre-shipment inspection",
        text: "Random sampling against your specification and approved sample: quantity, workmanship, function, packing and labels.",
      },
      {
        title: "Loading supervision",
        text: "For high-value orders, we watch the container being loaded, count cartons and check condition before it is sealed.",
      },
    ],
    facts: [
      {
        label: "Audit first",
        text: "A factory audit before the first deposit is the cheapest protection against a supplier that cannot deliver.",
      },
      {
        label: "When to inspect",
        text: "Pre-shipment inspection is normally done when 80–100% of the order is finished and packed.",
      },
      {
        label: "AQL sampling",
        text: "Sample sizes and acceptable defect levels follow ISO 2859-1. Write the AQL into the purchase contract before production starts.",
      },
      {
        label: "Final payment",
        text: "Hold the balance until the inspection passes. Rework, discount or refusal should be agreed in advance.",
      },
    ],
    steps: [
      {
        title: "Brief",
        text: "You share the product, target price, volumes and the standards it must meet.",
      },
      {
        title: "Find",
        text: "We shortlist suppliers, collect quotes and audit the strongest candidates on site.",
      },
      {
        title: "Order",
        text: "Samples approved, contract signed, production tracked with regular reports.",
      },
      {
        title: "Inspect",
        text: "Pre-shipment inspection and loading checks, with a full photo report before you release payment.",
      },
    ],
    faqs: [
      {
        question: "Do you take commission from factories?",
        answer:
          "No. We are paid by you and represent only you. Any relationship with a supplier is disclosed upfront.",
      },
      {
        question: "What does an inspection report contain?",
        answer:
          "Quantities checked, defects found by category against the agreed AQL, measurements, photos of the goods and packing, and a clear pass or fail with our notes.",
      },
      {
        question: "Can you start with a small trial order?",
        answer:
          "Yes, and we recommend it. A trial order tests the supplier's quality and communication before you commit volume.",
      },
    ],
  },
  {
    slug: "local-representation",
    name: "Local Representation",
    short: "Local Representation",
    text: "Acting on your behalf, attending meetings, negotiating contracts and overseeing project progress in Vietnam.",
    image: "/AnhSanPham5.png",
    alt: "Representative walking two clients through a production line",
    headline: "Someone in the room when you cannot be.",
    intro: [
      "Many decisions in Vietnam are still made face to face: at the partner's office, on the construction site, in the government department. Being absent slows everything down and leaves you relying on reports from the other side.",
      "We attend in your place, under a clear mandate. We negotiate within the limits you set, follow projects on site and report back in English after every meeting, so you always know where things stand.",
    ],
    audience: [
      "Companies with partners or projects in Vietnam but no local staff",
      "Investors who need independent oversight of a project",
      "Executives who want a trusted counterpart between visits",
    ],
    includes: [
      {
        title: "Meetings on your behalf",
        text: "Partners, suppliers, landlords and authorities. We prepare beforehand, speak for you and send minutes the same day.",
      },
      {
        title: "Contract negotiation",
        text: "Commercial terms negotiated within your mandate, with attention to the clauses that carry risk under Vietnamese law.",
      },
      {
        title: "Bilingual documents",
        text: "Vietnamese and English versions checked side by side, including which language prevails if they differ.",
      },
      {
        title: "Project oversight",
        text: "Site visits, progress against milestones and early warning when timelines or budgets start to slip.",
      },
      {
        title: "Dealing with authorities",
        text: "Submissions, follow-ups and queries handled in person, which is often the fastest route to an answer.",
      },
      {
        title: "Interpreting",
        text: "Business interpreting for your calls and visits, so nothing is lost between the two sides.",
      },
    ],
    facts: [
      {
        label: "Power of attorney",
        text: "A power of attorney signed abroad usually needs notarisation, consular legalisation and a certified Vietnamese translation before it is accepted.",
      },
      {
        label: "Get it right first",
        text: "Vietnamese courts have refused to accept documents that were legalised after the fact, so authority should be in order before you act.",
      },
      {
        label: "Company authority",
        text: "The mandate should match your company charter and be backed by a board resolution where the action is significant.",
      },
      {
        label: "Clear limits",
        text: "We agree in writing what we may say, negotiate and sign, and what must come back to you.",
      },
    ],
    steps: [
      {
        title: "Mandate",
        text: "We agree the scope, your limits and how often you want to hear from us.",
      },
      {
        title: "Authorise",
        text: "If needed, we prepare the power of attorney and guide its legalisation in your country.",
      },
      {
        title: "Represent",
        text: "We attend, negotiate and oversee on the ground, in Vietnamese and in English.",
      },
      {
        title: "Report",
        text: "Written updates after every meeting and a decision log you can share internally.",
      },
    ],
    faqs: [
      {
        question: "Can you sign contracts for us?",
        answer:
          "Only if you grant that authority explicitly and in the proper legal form. Most clients keep signing themselves and ask us to negotiate and review.",
      },
      {
        question: "How do you report back?",
        answer:
          "By email or messaging after each meeting, with minutes, open points and our recommendation. Weekly summaries for longer projects.",
      },
      {
        question: "Is this a one-off or ongoing service?",
        answer:
          "Both. Some clients need us for a single negotiation; others keep us on retainer as their permanent presence in Vietnam.",
      },
    ],
  },
  {
    slug: "relocation-housing",
    name: "Relocation & Housing",
    short: "Relocation & Housing",
    text: "Relocation advice, apartment search and inspection, lease negotiation and move-in handover for expats.",
    image: "/AnhSanPham7.webp",
    alt: "Riverside residences in Ho Chi Minh City at night",
    headline: "A home in Saigon, found and checked for you.",
    intro: [
      "Ho Chi Minh City has a wide choice of apartments, from serviced studios to family homes by the river. Prices, deposits and lease terms vary widely, and listings rarely show the noise, the water pressure or the landlord's attitude to repairs.",
      "We start with how you and your family will live: school, commute, budget, pets. Then we shortlist, inspect, negotiate the lease in both languages and stay through the handover until the keys are in your hand.",
    ],
    audience: [
      "Expats and families moving to Ho Chi Minh City",
      "Companies relocating staff and their families",
      "Executives who need a serviced apartment while they settle",
    ],
    includes: [
      {
        title: "Relocation advice",
        text: "Which district suits your work, school and lifestyle, what things cost and what to arrange before you arrive.",
      },
      {
        title: "Apartment search",
        text: "A shortlist matched to your brief, with viewings in person or by video if you are still abroad.",
      },
      {
        title: "Property inspection",
        text: "Water, electricity, air-conditioning, damp, noise and building management checked before you commit.",
      },
      {
        title: "Lease negotiation",
        text: "Rent, deposit, notice period, repairs and what is included, set out clearly in a bilingual lease.",
      },
      {
        title: "Move-in handover",
        text: "Inventory and photos of the condition on the day, meter readings and utilities transferred to you.",
      },
      {
        title: "Residence registration",
        text: "We make sure your temporary residence is declared with the local police, which the landlord is required to do.",
      },
    ],
    facts: [
      {
        label: "Deposit",
        text: "Typically two to three months' rent, with the first month paid in advance. Budget for at least three months' rent on moving in.",
      },
      {
        label: "Lease term",
        text: "Usually six or twelve months. Shorter stays are possible but tend to cost 10–30% more.",
      },
      {
        label: "Indicative rent",
        text: "A one-bedroom around Thao Dien (former District 2) is roughly US$600–900 a month; the Binh Thanh area is often cheaper. Utilities are usually extra.",
      },
      {
        label: "Registration",
        text: "Landlords must declare foreign tenants to the local police, and Ho Chi Minh City fines those who do not.",
      },
    ],
    steps: [
      {
        title: "Brief",
        text: "Your budget, dates, family needs and the areas you are considering.",
      },
      {
        title: "Shortlist",
        text: "We visit and filter properties so you only see the ones worth seeing.",
      },
      {
        title: "Negotiate",
        text: "We agree price and terms and review the lease line by line.",
      },
      {
        title: "Move in",
        text: "Handover, inventory, utilities and residence registration completed.",
      },
    ],
    faqs: [
      {
        question: "Can you find an apartment before I arrive?",
        answer:
          "Yes. We run video viewings and inspections for you, and can arrange a serviced apartment for your first weeks if you prefer to choose in person.",
      },
      {
        question: "Who pays your fee, me or the landlord?",
        answer:
          "You do, so our advice is on your side. We tell you upfront if a landlord or agent offers us anything.",
      },
      {
        question: "What happens if something breaks after I move in?",
        answer:
          "The lease should say who repairs what. If the landlord is slow to respond, we follow up in Vietnamese on your behalf.",
      },
    ],
  },
  {
    slug: "address-logistics",
    name: "Local Address & Logistics",
    short: "Address & Logistics",
    text: "A local contact address, mail and parcel receiving, storage and shipping coordination.",
    image: "/AnhSanPham9.webp",
    alt: "Receiving and signing for confidential parcels at the office",
    headline: "An address in Vietnam, and someone to answer the door.",
    intro: [
      "Official letters, tax notices, samples and contracts all need somewhere to arrive. Without a reliable local address, important documents go missing and deadlines pass unnoticed.",
      "We receive, sign for and log everything that comes in, scan documents the same day, store parcels securely and coordinate onward shipping, so your business in Vietnam is reachable even when you are not here.",
    ],
    audience: [
      "Foreign companies that need a contact address in Ho Chi Minh City",
      "Buyers receiving samples and documents from Vietnamese suppliers",
      "Individuals abroad who still receive post in Vietnam",
    ],
    includes: [
      {
        title: "Local contact address",
        text: "A real office address on Le Van Tho Street, Go Vap, for correspondence and deliveries.",
      },
      {
        title: "Mail receiving and scanning",
        text: "Letters received, logged and scanned to you the same working day, with originals kept on file.",
      },
      {
        title: "Parcel receiving",
        text: "Couriers and samples signed for, checked for damage and photographed on arrival.",
      },
      {
        title: "Storage",
        text: "Short-term storage of documents, samples and small stock until you need them.",
      },
      {
        title: "Forwarding",
        text: "Onward delivery inside Vietnam or abroad by the courier that suits the item and deadline.",
      },
      {
        title: "Shipping coordination",
        text: "Liaison with freight forwarders and customs brokers for larger shipments, so paperwork is ready when the goods are.",
      },
    ],
    facts: [
      {
        label: "Registered office",
        text: "A company's registered address must be a real, verifiable location. PO boxes and, in general, residential apartments are not accepted.",
      },
      {
        label: "Regulated sectors",
        text: "Banking, insurance, securities, childcare and some manufacturing need a physical office by law and cannot rely on a virtual address.",
      },
      {
        label: "Official mail",
        text: "Tax notices and letters from authorities carry deadlines. Same-day scanning means you see them in time to respond.",
      },
      {
        label: "Larger shipments",
        text: "Import and export goods are cleared through licensed forwarders and customs brokers. We coordinate them for you.",
      },
    ],
    steps: [
      {
        title: "Set up",
        text: "We agree what we receive, how you want to be notified and where items should go.",
      },
      {
        title: "Receive",
        text: "Every letter and parcel is signed for, logged and photographed.",
      },
      {
        title: "Notify",
        text: "Scans and photos sent to you the same day, with anything urgent flagged.",
      },
      {
        title: "Forward",
        text: "Stored, delivered locally or shipped abroad on your instruction.",
      },
    ],
    faqs: [
      {
        question: "Can I use your address to register my company?",
        answer:
          "That depends on your sector and the current rules for registered offices. We check with you first and, where it is not suitable, help you find an office that is.",
      },
      {
        question: "How quickly will I see my mail?",
        answer:
          "Scans of letters are sent the same working day they arrive. Urgent items from authorities are flagged straight away.",
      },
      {
        question: "Do you handle customs clearance?",
        answer:
          "We coordinate it. Clearance itself is done by licensed brokers and forwarders, whom we brief and follow up on your behalf.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
