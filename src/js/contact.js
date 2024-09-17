export function openMailClient() {
    const email = 'juannico0508@gmail.com';
    const subject = 'Interest in Your Profile and Services';
    const body = 'Hello Nicolás, I came across your profile and am interested in learning more about your services. I would like to discuss potential collaboration opportunities and possibly schedule a call or meeting at your convenience.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Asignar la función al objeto window para que sea accesible desde el HTML
window.openMailClient = openMailClient;
