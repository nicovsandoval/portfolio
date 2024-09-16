const $ = el => document.querySelector(el);

const body = $('body');
const btnChangeTheme = $('#btn-theme');
const iconTheme = $('#icon-theme');

// Función para alternar entre los temas
const toggleTheme = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        // Cambia al icono de luna para el tema claro
        iconTheme.classList.remove('ri-sun-fill');
        iconTheme.classList.add('ri-moon-fill');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        // Cambia al icono de sol para el tema oscuro
        iconTheme.classList.remove('ri-moon-fill');
        iconTheme.classList.add('ri-sun-fill');
    }
};

// Agrega el evento al botón de cambio de tema
btnChangeTheme.addEventListener('click', toggleTheme);
