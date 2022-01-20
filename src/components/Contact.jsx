import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const resetFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        if (!name || !email || !message) {
            setLoading(false);
            return toast.error("Please Fill all Fields!", {
                position: "top-right",
            });
        }

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                {
                    from_name: name,
                    from_email: email,
                    to_name: "Panayappan",
                    message: message,
                },
                process.env.REACT_APP_EMAILJS_USERID
            );

            toast("Email Sent!");
            resetFields();
        } catch (error) {
            toast.error("Something Went Wrong!", {
                position: "top-right",
            });
        }
        setLoading(false);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div
                    className="section-heading"
                    style={{ marginBottom: "5rem" }}
                >
                    <h1>Contact</h1>
                    <h6>Let's work together</h6>
                </div>

                <form
                    onSubmit={sendEmail}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <label htmlFor="name">Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name."
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email."
                        required
                    />
                    {/* TODO: */}
                    {/* <label htmlFor="service">Service:</label>
                    <select name="service" id="service">
                        <option value="">Web Design</option>
                        <option value="">Web Development</option>
                        <option value="">Web Design/Development</option>
                    </select> */}
                    <label htmlFor="subject">Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="subject"
                        id="subject"
                        cols="10"
                        rows="10"
                    ></textarea>
                    {/* TODO: */}
                    {/* <input type="submit" value="Submit" /> */}
                    <button
                        onClick={sendEmail}
                        type="submit"
                        className="cta-contact"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                        <RiSendPlane2Fill
                            color="#eee"
                            style={{ marginLeft: 8 }}
                        />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
