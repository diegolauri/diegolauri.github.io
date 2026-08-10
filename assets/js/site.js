const storageKey = 'preferred-language';
const translations = {
  'skip.link': 'Skip to main content',
  'es.skip.link': 'Saltar al contenido principal',
  'header.subtitle': 'Professional Portfolio',
  'es.header.subtitle': 'Portafolio profesional',
  'nav.ariaLabel': 'Primary navigation',
  'es.nav.ariaLabel': 'Navegación principal',
  'nav.home': 'Home',
  'es.nav.home': 'Inicio',
  'nav.portfolio': 'Portfolio',
  'es.nav.portfolio': 'Portafolio',
  'nav.connect': 'Connect',
  'es.nav.connect': 'Contacto',
  'nav.platforms': 'Platforms',
  'es.nav.platforms': 'Plataformas',
  'hero.eyebrow': '15+ YEARS OF WORK EXPERIENCE',
  'es.hero.eyebrow': 'MÁS DE 15 AÑOS DE EXPERIENCIA PROFESIONAL',
  'hero.title.before': 'Technology, Data',
  'es.hero.title.before': 'Tecnología, Datos',
  'hero.title.after': '& Operations',
  'es.hero.title.after': 'y Operaciones',
  'hero.desc': 'Bilingual English-Spanish professional with experience in technology, data, technical support, business operations, cybersecurity, project coordination, and process improvement.',
  'es.hero.desc': 'Profesional bilingüe inglés-español con experiencia en tecnología, datos, soporte técnico, operaciones de negocio, ciberseguridad, coordinación de proyectos y mejora de procesos.',
  'hero.view': 'View portfolio',
  'es.hero.view': 'Ver portafolio',
  'hero.connect': 'Connect: EN / ES',
  'es.hero.connect': 'Conectar: EN / ES',
  'portfolio.label': 'Portfolio areas',
  'es.portfolio.label': 'Áreas de portafolio',
  'portfolio.title': 'Portfolios and practical experience',
  'es.portfolio.title': 'Portafolios y experiencia práctica',
  'portfolio.intro': 'Explore focused portfolio areas with work samples, methods, and evidence presented clearly and responsibly.',
  'es.portfolio.intro': 'Explora áreas de portafolio enfocadas, con muestras de trabajo, métodos y evidencia presentados de forma clara y responsable.',
  'card.explore': 'Explore area →',
  'es.card.explore': 'Explorar área →',
  'card.cyber.title': 'Cybersecurity',
  'es.card.cyber.title': 'Ciberseguridad',
  'card.cyber.desc': 'Defensive security documentation, risk awareness, and safer digital-work practices.',
  'es.card.cyber.desc': 'Documentación de seguridad defensiva, conciencia de riesgo y prácticas digitales más seguras.',
  'card.it.title': 'IT Support',
  'es.card.it.title': 'Soporte técnico',
  'card.it.desc': 'User troubleshooting, device and software support, and clear knowledge-base documentation.',
  'es.card.it.desc': 'Resolución de problemas de usuarios, soporte de dispositivos y software, y documentación clara de base de conocimientos.',
  'card.pm.title': 'Project Management',
  'es.card.pm.title': 'Gestión de proyectos',
  'card.pm.desc': 'Project planning, coordination, timelines, status reporting, and delivery follow-through.',
  'es.card.pm.desc': 'Planificación de proyectos, coordinación, cronogramas, informes de estado y seguimiento de entregas.',
  'card.data.title': 'Data Analysis',
  'es.card.data.title': 'Análisis de datos',
  'card.data.desc': 'Data preparation, analysis, reporting, dashboards, and clear visual communication.',
  'es.card.data.desc': 'Preparación de datos, análisis, informes, dashboards y comunicación visual clara.',
  'card.marketing.title': 'Digital Marketing',
  'es.card.marketing.title': 'Marketing digital',
  'card.marketing.desc': 'Audience research, content planning, campaign support, and performance reporting.',
  'es.card.marketing.desc': 'Investigación de audiencia, planificación de contenido, apoyo de campañas e informes de rendimiento.',
  'card.accounting.title': 'Accounting',
  'es.card.accounting.title': 'Contabilidad',
  'card.accounting.desc': 'Financial record support, invoice workflows, reconciliation preparation, and administrative reporting.',
  'es.card.accounting.desc': 'Apoyo de registros financieros, flujos de trabajo de facturación, preparación de conciliaciones e informes administrativos.',
  'card.business.title': 'Business Support',
  'es.card.business.title': 'Soporte empresarial',
  'card.business.desc': 'Research, documentation, coordination, CRM support, and operational workflow improvement.',
  'es.card.business.desc': 'Investigación, documentación, coordinación, soporte CRM y mejora de flujos operativos.',
  'card.ai.title': 'AI Data Quality',
  'es.card.ai.title': 'Calidad de datos de IA',
  'card.ai.desc': 'Bilingual model-output review, labeling consistency, quality evaluation, and documented rationale.',
  'es.card.ai.desc': 'Revisión bilingüe de salidas de modelos, consistencia de etiquetado, evaluación de calidad y justificación documentada.',
  'card.training.title': 'Training, Webinars & Workshops',
  'es.card.training.title': 'Capacitación, Seminarios Web y Talleres',
  'card.training.desc': 'Learning materials, practical workshops, team learning resources, and instructional documentation.',
  'es.card.training.desc': 'Materiales de aprendizaje, talleres prácticos, recursos de aprendizaje en equipo y documentación instructiva.',
  'card.civic.title': 'Civic Leadership',
  'es.card.civic.title': 'Liderazgo cívico',
  'card.civic.desc': 'Community coordination, stakeholder communication, civic participation, and responsible follow-through.',
  'es.card.civic.desc': 'Coordinación comunitaria, comunicación con interesados, participación cívica y seguimiento responsable.',
  'card.volunteer.title': 'Volunteer Work',
  'es.card.volunteer.title': 'Trabajo voluntario',
  'card.volunteer.desc': 'Service contributions, activity support, collaboration, and community engagement.',
  'es.card.volunteer.desc': 'Contribuciones de servicio, apoyo de actividades, colaboración y participación comunitaria.',
  'card.networking.title': 'Networking',
  'es.card.networking.title': 'Redes',
  'card.networking.desc': 'Connectivity troubleshooting, network documentation, foundational administration, and support practices.',
  'es.card.networking.desc': 'Resolución de conectividad, documentación de redes, administración básica y prácticas de soporte.',
  'standards.label': 'PROFESSIONAL PRACTICE',
  'es.standards.label': 'PRÁCTICA PROFESIONAL',
  'standards.title': 'Work presented with clarity and care.',
  'es.standards.title': 'Trabajo presentado con claridad y cuidado.',
  'standards.one.heading': 'Context and scope',
  'es.standards.one.heading': 'Contexto y alcance',
  'standards.one.copy': 'Published work may be independent, academic, volunteer-based, or authorized. Each item identifies its purpose, scope, and the material that can be shared responsibly.',
  'es.standards.one.copy': 'El trabajo publicado puede ser independiente, académico, voluntario o autorizado. Cada elemento identifica su propósito, alcance y los materiales que pueden compartirse de forma responsable.',
  'standards.two.heading': 'Privacy and confidentiality',
  'es.standards.two.heading': 'Privacidad y confidencialidad',
  'standards.two.copy': 'Portfolio examples use authorized, fictional, anonymized, generalized, modified, synthetic, or open information. Confidential, personal, client-specific, proprietary, and sensitive materials are not published.',
  'es.standards.two.copy': 'Los ejemplos del portafolio utilizan información autorizada, ficticia, anonimizada, generalizada, modificada, sintética o abierta. No se publican materiales confidenciales, personales, específicos de clientes, propietarios ni sensibles.',
  'standards.portfolio.label': 'PORTFOLIO STANDARDS',
  'es.standards.portfolio.label': 'ESTÁNDARES DE PORTAFOLIO',
  'standards.portfolio.heading': 'Practical work, responsibly presented.',
  'es.standards.portfolio.heading': 'Trabajo práctico presentado de forma responsable.',
  'standards.portfolio.copy': 'Work shown here reflects practical experience, independent projects, and authorized learning. Descriptions focus on scope, methods, and outcomes; confidential, personal, and client-specific information is not included.',
  'es.standards.portfolio.copy': 'El trabajo mostrado aquí refleja experiencia práctica, proyectos independientes y aprendizaje autorizado. Las descripciones se centran en el alcance, los métodos y los resultados; no se incluye información confidencial, personal o específica de clientes.',
  'standards.professional.label': 'PROFESSIONAL STANDARDS',
  'es.standards.professional.label': 'ESTÁNDARES PROFESIONALES',
  'standards.professional.heading': 'Privacy and confidentiality come first.',
  'es.standards.professional.heading': 'La privacidad y la confidencialidad son lo primero.',
  'standards.professional.copy': 'I never use employer, client, or organizational data without explicit authorization. Portfolio examples contain anonymized, fictional, generalized, or modified information and never include passwords, personal data, private screenshots, proprietary materials, or sensitive information.',
  'es.standards.professional.copy': 'Nunca utilizo datos de empleadores, clientes u organizaciones sin autorización expresa. Los ejemplos del portafolio contienen información anonimizada, ficticia, generalizada o modificada y nunca incluyen contraseñas, datos personales, capturas de pantalla privadas, materiales propietarios ni información sensible.',
  'contact.label': 'CONNECT',
  'es.contact.label': 'CONTACTO',
  'contact.title': 'Contact me',
  'es.contact.title': 'Contáctame',
  'contact.copy': 'For employment opportunities, independent professional engagements, and contract-based work.',
  'es.contact.copy': 'Para oportunidades de empleo, colaboraciones profesionales independientes y trabajo por contrato.',
  'contact.ctaHeading': 'Professional inquiries',
  'es.contact.ctaHeading': 'Consultas profesionales',
  'contact.note': 'WhatsApp and Snapchat are available upon request.',
  'es.contact.note': 'WhatsApp y Snapchat están disponibles a pedido.',
  'contact.primary': 'Email me',
  'es.contact.primary': 'Enviar correo',
  'contact.secondary': 'Send a message',
  'es.contact.secondary': 'Enviar un mensaje',
  'booking.link': 'Contact Diego Lauri →',
  'es.booking.link': 'Contactar a Diego Lauri →',
  'platforms.label': 'PORTFOLIO PLATFORMS',
  'es.platforms.label': 'PLATAFORMAS DE PORTAFOLIO',
  'platforms.title': 'Professional platforms',
  'es.platforms.title': 'Plataformas profesionales',
  'platforms.copy': 'Public profiles and selected portfolio resources.',
  'es.platforms.copy': 'Perfiles públicos y recursos seleccionados del portafolio.',
  'footer.copy': '© Diego Lauri',
  'es.footer.copy': '© Diego Lauri',
  'footer.back': 'Back to top ↑',
  'es.footer.back': 'Volver arriba ↑',
  'language.toggle': 'Spanish',
  'es.language.toggle': 'English',
  'language.toggle.ariaSpanish': 'Switch site language to Spanish',
  'es.language.toggle.ariaEnglish': 'Cambiar el idioma del sitio a inglés'
};

const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));
const bilingualElements = Array.from(document.querySelectorAll('[data-en]'));
const langToggle = document.getElementById('lang-toggle');

function getPreferredLanguage() {
  try {
    return localStorage.getItem(storageKey) || 'en';
  } catch (error) {
    return 'en';
  }
}

function setPreferredLanguage(lang) {
  try {
    localStorage.setItem(storageKey, lang);
  } catch (error) {
    // ignore storage errors
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  i18nElements.forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const translation = lang === 'es' ? translations[`es.${key}`] : translations[key];
    if (translation === undefined) return;
    if (el.dataset.i18nAttr === 'aria-label') {
      el.setAttribute('aria-label', translation);
    } else {
      el.textContent = translation;
    }
  });

  bilingualElements.forEach((el) => {
    const value = el.dataset[lang];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === 'es' ? translations['es.language.toggle'] : translations['language.toggle'];
    langToggle.setAttribute('aria-label', lang === 'es' ? translations['es.language.toggle.ariaEnglish'] : translations['language.toggle.ariaSpanish']);
    langToggle.setAttribute('aria-pressed', lang === 'es');
  }
}

if (langToggle) {
  langToggle.addEventListener('click', (event) => {
    event.preventDefault();
    const nextLang = document.documentElement.lang === 'es' ? 'en' : 'es';
    applyLanguage(nextLang);
    setPreferredLanguage(nextLang);
  });
}

applyLanguage(getPreferredLanguage());
