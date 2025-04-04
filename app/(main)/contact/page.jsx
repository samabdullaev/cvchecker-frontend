"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendTelegramMessage = async () => {
    const botToken = "7667936936:AAH-cnPnMTlFyFGNMmgbqknxpI6TG91C41g";
    const chatId = 48765022;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `
🚀 Smart Resume Checker!

👤 Name: ${form.name}
📧 Email: ${form.email}
📌 Subject: ${form.subject}
💬 Message: ${form.message}

📅 Received on: ${new Date().toLocaleString()}
    `;

    try {
      await axios.post(telegramUrl, {
        chat_id: chatId,
        text: message,
      });
      toast.success("✨ Message sent successfully via Telegram!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Telegram Error:", error);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendTelegramMessage();
  };

  return (
    <div className="nk-pages ">
      <section className="section section-lg section-bottom-0 has-shape has-mask">
        {/* <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" /> */}
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
        <div className="container">
          <div className="section-head">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9 col-xl-9 px-xxl-5">
                <h2 className="title h1">Contact Us</h2>
                <p className="lead">
                  We love getting feedback, questions, and hearing what you have
                  to say!
                </p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row g-gs justify-content-center justify-content-lg-between">
              <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                <div className="block-text pt-lg-4">
                  <h3 className="title h2">Let’s Connect</h3>
                  <p>
                    We’re here to support your journey with answers, resources,
                    and features that make a difference. Reach out and share
                    your thoughts with us!
                  </p>
                  <ul className="row gy-4 pt-4">
                    <li className="col-12">
                      <h5>Contact</h5>
                      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                        <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-call-alt-fill" />
                        <span>+(44) 07398-752-691</span>
                      </div>
                    </li>
                    <li className="col-12">
                      <h5>Email</h5>
                      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                        <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-mail-fill" />
                        <span>samabdullaev2004@gmail.com</span>
                      </div>
                    </li>
                    <li className="col-12">
                      <h5>Office</h5>
                      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                        <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-map-pin-fill" />
                        <span>Hatfield, UK</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <h3 className="title fw-medium mb-4">
                      Please feel free to contact us using the form below
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Your Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="subject"
                            className="form-control form-control-lg"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            className="form-control form-control-lg"
                            placeholder="Enter your message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? "Sending..." : "Send Message"}
                          </button>
                          <div className="form-result mt-4" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
