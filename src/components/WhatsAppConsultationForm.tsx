"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FormProps {
  initialSubject?: string;
  className?: string;
}

export function WhatsAppConsultationForm({ initialSubject = "Constitutional Petitions & High Court Writs", className = "" }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill in your name, contact phone number, and brief case summary.");
      return;
    }

    const leadText = `🏛️ *NEW LEGAL CONSULTATION INQUIRY*\n` +
      `*Quaid-e-Azam Law Associates*\n` +
      `------------------------------------\n` +
      `👤 *Client Name:* ${name.trim()}\n` +
      `📞 *Phone / WhatsApp:* ${phone.trim()}\n` +
      (email.trim() ? `📧 *Email Address:* ${email.trim()}\n` : "") +
      `⚖️ *Legal Matter:* ${subject}\n\n` +
      `📝 *Case Details & Summary:*\n${message.trim()}\n` +
      `------------------------------------\n` +
      `_Sent via official web consultation portal_`;

    const encodedText = encodeURIComponent(leadText);
    const whatsappUrl = `https://wa.me/923008211981?text=${encodedText}`;

    setSubmitted(true);
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailFallback = () => {
    if (!name.trim() || !message.trim()) {
      alert("Please enter at least your name and brief case message.");
      return;
    }

    const emailSubject = encodeURIComponent(`Legal Inquiry: ${subject} - ${name}`);
    const emailBody = encodeURIComponent(
      `Full Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLegal Subject: ${subject}\n\nCase Summary:\n${message}\n\n- Sent from Quaid-e-Azam Law Associates Website`
    );

    window.location.href = `mailto:raheelanis81@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className={`rounded-sm border border-border bg-card p-6 sm:p-10 shadow-card ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-deep">
        <ShieldCheck className="h-4 w-4 text-gold-deep" />
        Strict Attorney-Client Confidentiality
      </div>
      <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
        Request Private Consultation
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Directly connect with Advocate Raheel Anis. Details submitted here automatically route to our verified WhatsApp line for prompt scheduling.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-sm border border-emerald-200 bg-emerald-50/80 p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h4 className="mt-3 font-display text-2xl font-bold text-emerald-950">Inquiry Prepared for WhatsApp</h4>
          <p className="mt-2 text-sm text-emerald-800">
            If WhatsApp did not open automatically, click the button below to complete sending your query.
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 py-3 font-semibold text-white shadow hover:brightness-105"
          >
            Open WhatsApp Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={80}
                placeholder="e.g. Tariq Mehmood"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                maxLength={20}
                placeholder="0300-1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                maxLength={100}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal Subject
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1.5 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-base text-foreground focus:border-gold focus:outline-none sm:text-sm"
              >
                <option value="Constitutional Petitions & High Court Writs">Constitutional Petitions (Art. 199)</option>
                <option value="Criminal Defense & Bail Advocacy">Criminal Defense & Bail</option>
                <option value="Civil Litigation & Injunctions">Civil Litigation & Injunctions</option>
                <option value="Corporate & Commercial Law">Corporate, Commercial & SECP</option>
                <option value="Banking & Financial Recovery">Banking & Financial Recovery</option>
                <option value="Taxation, FBR & SRB Appeals">Taxation, FBR & SRB Appeals</option>
                <option value="Property Disputes & Land Verification">Property Disputes & Land Documents</option>
                <option value="Family Law, Khula & Child Custody">Family Law, Khula & Child Custody</option>
                <option value="General Legal Advisory & Retainership">General Legal Advisory & Retainership</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Case Summary / Key Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                maxLength={1500}
                placeholder="Briefly describe your legal matter, concerned forum, or urgency (e.g. pending FIR, impending demolition, or contractual breach)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 flex w-full rounded-sm border border-border bg-background p-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 font-semibold text-white shadow transition-all hover:brightness-105 active:scale-[0.99]"
            >
              <Send className="h-4 w-4" />
              <span>Send via WhatsApp (0300-8211981)</span>
            </button>

            <button
              type="button"
              onClick={handleEmailFallback}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border bg-background px-5 font-medium text-foreground transition-colors hover:border-gold hover:bg-secondary active:scale-[0.99]"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>Send by Email</span>
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Emergency or urgent courtroom bail? Call directly:{" "}
            <a href="tel:+923008211981" className="font-semibold text-primary underline hover:text-gold-deep">
              0300-8211981
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
