import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const services = [
  "Roads Construction & Civil Works",
  "Construction Materials Procurement & Supply",
  "Architectural, Structural & MEP Design",
  "LPG Sales & Distribution",
  "General Contracting",
  "Engineering Consultancy",
  "Other"
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: services[0],
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...form
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setSent(true);
    } catch {
      toast.error("Unable to send your message. Please call or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="grid min-h-[420px] place-items-center rounded border border-tway-line bg-white p-8 text-center shadow-premium">
        <div>
          <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-tway-blue" />
          <h3 className="text-2xl font-black text-tway-ink">Message received</h3>
          <p className="mx-auto mt-3 max-w-md text-tway-slate">Thank you for contacting TwAy Engineering Limited. Our team will review your inquiry and respond shortly.</p>
          <button type="button" onClick={() => { setForm(initialForm); setSent(false); }} className="mt-7 font-bold text-tway-red hover:text-tway-red-700">
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="rounded border border-tway-line bg-white p-5 shadow-premium sm:p-8">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-tway-ink">
          Name
          <input name="name" required minLength={2} maxLength={120} value={form.name} onChange={(event) => update("name", event.target.value)} className="rounded border border-tway-line px-4 py-3 font-normal text-tway-ink" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-tway-ink">
          Email
          <input name="email" required type="email" maxLength={200} value={form.email} onChange={(event) => update("email", event.target.value)} className="rounded border border-tway-line px-4 py-3 font-normal text-tway-ink" placeholder="name@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-tway-ink">
          Phone
          <input name="phone" required minLength={5} maxLength={40} value={form.phone} onChange={(event) => update("phone", event.target.value)} className="rounded border border-tway-line px-4 py-3 font-normal text-tway-ink" placeholder="07061699903" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-tway-ink">
          Service
          <select name="service" required value={form.service} onChange={(event) => update("service", event.target.value)} className="rounded border border-tway-line px-4 py-3 font-normal text-tway-ink">
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-tway-ink">
        Project Details
        <textarea name="message" required minLength={5} maxLength={2000} rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} className="resize-y rounded border border-tway-line px-4 py-3 font-normal text-tway-ink" placeholder="Tell us about your project, location, timeline, and service needs." />
      </label>
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-tway-red px-6 py-4 font-bold text-white transition hover:bg-tway-red-700 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
