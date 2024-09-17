const $ = el => document.querySelector(el);

const body = $('body');
const btnChangeTheme = $('#btn-theme');
const iconTheme = $('#icon-theme');

// Función para establecer las variables CSS activas según el tema
const setThemeVariables = (theme) => {
    if (theme === 'dark') {
        body.style.setProperty('--theme-active-color', getComputedStyle(body).getPropertyValue('--theme-dark-color'));
        body.style.setProperty('--theme-active-background', getComputedStyle(body).getPropertyValue('--theme-dark-background'));
        body.style.setProperty('--theme-active-color-hover', getComputedStyle(body).getPropertyValue('--theme-dark-color-hover'));
    } else {
        body.style.setProperty('--theme-active-color', getComputedStyle(body).getPropertyValue('--theme-light-color'));
        body.style.setProperty('--theme-active-background', getComputedStyle(body).getPropertyValue('--theme-light-background'));
        body.style.setProperty('--theme-active-color-hover', getComputedStyle(body).getPropertyValue('--theme-light-color-hover'));
    }
};

// Función para aplicar el tema inicial basado en las preferencias del sistema
const applySystemThemePreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
        setThemeVariables('dark'); // Aplicar las variables para el tema oscuro
        iconTheme.classList.add('ri-sun-fill');
    } else {
        body.classList.add('light');
        setThemeVariables('light'); // Aplicar las variables para el tema claro
        iconTheme.classList.add('ri-moon-fill');
    }
};

// Llamar a la función para aplicar el tema inicial al cargar la página
applySystemThemePreference();

// Escuchar cambios en las preferencias de color del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        body.classList.remove('light');
        body.classList.add('dark');
        setThemeVariables('dark'); // Aplicar las variables para el tema oscuro
        iconTheme.classList.remove('ri-moon-fill');
        iconTheme.classList.add('ri-sun-fill');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        setThemeVariables('light'); // Aplicar las variables para el tema claro
        iconTheme.classList.remove('ri-sun-fill');
        iconTheme.classList.add('ri-moon-fill');
    }
});

// Función para alternar entre los temas manualmente
const toggleTheme = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        setThemeVariables('light'); // Cambia las variables al tema claro
        iconTheme.classList.remove('ri-sun-fill');
        iconTheme.classList.add('ri-moon-fill');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        setThemeVariables('dark'); // Cambia las variables al tema oscuro
        iconTheme.classList.remove('ri-moon-fill');
        iconTheme.classList.add('ri-sun-fill');
    }
};

// Agrega el evento al botón de cambio de tema
btnChangeTheme.addEventListener('click', toggleTheme);
