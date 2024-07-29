import { useState } from "react";
import emailjs from "emailjs-com";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                userId
            );
            console.log("SUCCESS!", response.status, response.text);
            setSuccess(true);
        } catch (err) {
            console.error("FAILED...", err);
            setError(true);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Contactez-nous</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-black">
                        Nom / Prénom
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-black">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-black">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-black rounded hover:bg-gradientStart hover:text-white"
                    >
                        Envoyer
                    </button>
                </div>
                {success && (
                    <p className="mt-4 text-green-500 text-center">
                        Votre message a été envoyé avec succès.
                    </p>
                )}
                {error && (
                    <p className="mt-4 text-red-500 text-center">
                        Une erreur s'est produite. Veuillez réessayer.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
