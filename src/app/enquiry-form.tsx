"use client";

import { useState } from "react";

const ZALO_URL = "https://zalo.me/0334095326";

export function EnquiryForm({
  services,
  defaultService,
}: {
  services: string[];
  defaultService?: string;
}) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enquiry = [
      "Enquiry for ALICE & CO.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    // Opened before the clipboard await so the browser still treats it as a user action
    window.open(ZALO_URL, "_blank", "noopener");
    try {
      await navigator.clipboard.writeText(enquiry);
      setStatus("Enquiry copied. Paste it into the Zalo chat that just opened.");
    } catch {
      setStatus(
        "Your browser blocked copying. Type your enquiry into the Zalo chat, or call 033 409 5326.",
      );
    }
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit} data-reveal>
      <h3 className="enquiry__title">Send an enquiry</h3>
      <div className="enquiry__pair">
        <label className="field">
          Full name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label className="field">
        Service of interest
        <select name="service" defaultValue={defaultService}>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="field">
        How can we help?
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit" className="btn btn--navy">
        Send via Zalo
      </button>
      <p className="enquiry__status" role="status">
        {status}
      </p>
    </form>
  );
}
