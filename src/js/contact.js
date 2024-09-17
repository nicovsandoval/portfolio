export function openMailClient() {
    const email = 'tuemail@example.com';
    const subject = 'Contact from Your Website';
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Asignar la función al objeto window para que sea accesible desde el HTML
window.openMailClient = openMailClient;
