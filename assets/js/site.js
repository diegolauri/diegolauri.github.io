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
  'hero.desc': 'Bilingual AI and technology professional with hands-on experience in AI evaluation, data analytics, IT support, networking, and cybersecurity. CompTIA A+, Network+, and Security+ certified, with experience evaluating 2,000+ AI outputs and contributing to real-world AI data analytics projects.',
'es.hero.desc': 'Profesional bilingüe de IA y tecnología con experiencia práctica en evaluación de IA, análisis de datos, soporte de TI, redes y ciberseguridad. Certificado en CompTIA A+, Network+ y Security+, con experiencia evaluando más de 2,000 resultados de IA y contribuyendo a proyectos reales de análisis de datos con IA.',
  'hero.view': 'View portfolio',
  'es.hero.view': 'Ver portafolio',
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
  'card.business.title': 'Business Administration',
  'es.card.business.title': 'Administración de empresas',
  'card.business.desc': 'Administrative coordination, record management, process support, CRM workflows, and operational organization.',
  'es.card.business.desc': 'Coordinación administrativa, gestión de registros, apoyo de procesos, flujos de trabajo CRM y organización operativa.',
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
  'contact.copy': 'For professional opportunities, projects, training, or community collaboration.',
  'es.contact.copy': 'Para oportunidades de empleo, solicitudes de proyectos, y colaboración comunitaria.',
  'contact.ctaHeading': 'Professional inquiries',
  'es.contact.ctaHeading': 'Consultas profesionales',
  'contact.form.heading': 'Send a message',
  'es.contact.form.heading': 'Enviar un mensaje',
  'contact.pro.intro': 'For project proposals, professional collaborations, or training requests.',
  'es.contact.pro.intro': 'Para propuestas de proyecto, colaboraciones profesionales o solicitudes de formación.',
  'contact.pro.contactHeading': 'Contact',
  'es.contact.pro.contactHeading': 'Contacto',
  'contact.responseTime': 'Typical response: within 24 business hours.',
  'es.contact.responseTime': 'Respuesta típica: dentro de 24 horas hábiles.',
  'contact.pro.note': 'Do not send confidential or sensitive information here; use an NDA or an approved secure channel if needed.',
  'es.contact.pro.note': 'No envíes información confidencial o sensible aquí; utiliza un NDA o un canal seguro aprobado si es necesario.',
  'contact.resume': 'Resume and references available upon request.',
  'es.contact.resume': 'Currículum y referencias disponibles a pedido.',
    'availability.banner': 'Resume, references, and credentials are available upon request.',
  'es.availability.banner': 'Currículum, referencias y credenciales disponibles a solicitud.',
  'contact.attachment': 'Attach files (optional)',
  'es.contact.attachment': 'Adjuntar archivos (opcional)',
  'contact.attachmentHint': 'Up to 3 files, 5 MB each, 10 MB total.',
  'es.contact.attachmentHint': 'Hasta 3 archivos, 5 MB cada uno, 10 MB en total.',
  'contact.form.not_configured': 'Message sending is not configured.',
  'es.contact.form.not_configured': 'El envío de mensajes no está configurado.',
  'attachment.error.size': 'One or more files exceed the 5 MB limit.',
  'es.attachment.error.size': 'Uno o más archivos superan el límite de 5 MB.',
  'attachment.error.type': 'One or more files have an unsupported type.',
  'es.attachment.error.type': 'Uno o más archivos tienen un formato no compatible.',
  'attachment.error.count': 'You can only attach up to 3 files.',
  'es.attachment.error.count': 'Solo puedes adjuntar hasta 3 archivos.',
  'attachment.error.totalSize': 'Total size of attachments exceeds the 10 MB limit.',
  'es.attachment.error.totalSize': 'El tamaño total de los archivos adjuntos supera el límite de 10 MB.',
  'attachment.success': '{count} files selected',
  'es.attachment.success': '{count} archivos seleccionados',
  'contact.name': 'Name',
  'es.contact.name': 'Nombre',
  'contact.email': 'Email address',
  'es.contact.email': 'Dirección de correo electrónico',
  'contact.subject': 'Subject',
  'es.contact.subject': 'Asunto',
  'contact.message': 'Message',
  'es.contact.message': 'Mensaje',
  'contact.privacy': 'Please do not include confidential, personal, financial, or sensitive information in this form.',
  'es.contact.privacy': 'No incluyas información confidencial, personal, financiera ni sensible en este formulario.',
  'contact.send': 'Send message',
  'es.contact.send': 'Enviar mensaje',
  'contact.form.status': 'Form UI only — no message sent (pending activation).',
  'es.contact.form.status': 'Formulario sólo de interfaz — ningún mensaje enviado (pendiente de activación).',
  'contact.form.sending': 'Sending message…',
  'es.contact.form.sending': 'Enviando mensaje…',
  'contact.form.success': 'Message sent — thank you!',
  'es.contact.form.success': 'Mensaje enviado — ¡gracias!',
  'contact.form.error': 'Unable to send message — please try again later.',
  'es.contact.form.error': 'No se pudo enviar el mensaje — inténtalo de nuevo más tarde.',
  /* removed visible WhatsApp/Snapchat mention to comply with requirements */
  'contact.primary': 'Email me',
  'es.contact.primary': 'Enviar correo',
  'contact.secondary': 'Send a message',
  'es.contact.secondary': 'Enviar un mensaje',
  'booking.link': 'Contact Diego Lauri →',
  'es.booking.link': 'Contactar a Diego Lauri →',
  'platforms.label': 'Professional Platforms',
  'es.platforms.label': 'Plataformas profesionales',
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
    if (value === undefined) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.dataset.i18nPlaceholder !== undefined) {
        el.placeholder = value;
      } else if (el.type === 'submit' || el.type === 'button') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    } else {
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

const contactForm = document.getElementById('contact-form');
const contactFormStatus = document.getElementById('contact-form-status');
const messageInput = document.getElementById('contact-message');
const messageCounter = document.getElementById('message-counter');
const attachmentInput = document.getElementById('contact-attachment');
const attachmentStatus = document.getElementById('attachment-status');

const allowedExtensions = ['.pdf', '.docx', '.xlsx', '.png', '.jpg', '.jpeg'];
const allowedMimes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'image/png',
  'image/jpeg'
];

function setContactStatus(key) {
  if (!contactFormStatus) return;
  const isEs = document.documentElement.lang === 'es';
  contactFormStatus.textContent = translations[isEs ? `es.${key}` : key] || '';
}

function updateMessageCounter() {
  if (!messageInput || !messageCounter) return;
  const isEs = document.documentElement.lang === 'es';

  messageCounter.textContent = isEs
    ? `${messageInput.value.length} / 2000 caracteres`
    : `${messageInput.value.length} / 2000 characters`;
}

function validateAttachments() {
  if (!attachmentInput || !attachmentStatus) return;

  const files = Array.from(attachmentInput.files);
  const isEs = document.documentElement.lang === 'es';

  if (files.length === 0) {
    attachmentStatus.textContent = '';
    return;
  }

  if (files.length > 3) {
    attachmentInput.value = '';
    attachmentStatus.textContent = translations[isEs ? 'es.attachment.error.count' : 'attachment.error.count'];
    return;
  }

  let totalSize = 0;

  for (const file of files) {
    totalSize += file.size;

    if (file.size > 5 * 1024 * 1024) {
      attachmentInput.value = '';
      attachmentStatus.textContent = translations[isEs ? 'es.attachment.error.size' : 'attachment.error.size'];
      return;
    }

    const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

    if (!allowedExtensions.includes(extension) || (file.type && !allowedMimes.includes(file.type))) {
      attachmentInput.value = '';
      attachmentStatus.textContent = translations[isEs ? 'es.attachment.error.type' : 'attachment.error.type'];
      return;
    }
  }

  if (totalSize > 10 * 1024 * 1024) {
    attachmentInput.value = '';
    attachmentStatus.textContent = translations[isEs ? 'es.attachment.error.totalSize' : 'attachment.error.totalSize'];
    return;
  }

  const message = translations[isEs ? 'es.attachment.success' : 'attachment.success'];
  attachmentStatus.textContent = message.replace('{count}', files.length);
}

if (messageInput) {
  messageInput.addEventListener('input', updateMessageCounter);
}

if (attachmentInput) {
  attachmentInput.addEventListener('change', validateAttachments);
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    if (!contactForm.checkValidity()) {
      return;
    }

    event.preventDefault();

    const honeypot = contactForm.querySelector('input[name="website"]');

    if (honeypot && honeypot.value.trim() !== '') {
      contactForm.reset();
      updateMessageCounter();

      if (attachmentStatus) {
        attachmentStatus.textContent = '';
      }

      return;
    }

    setContactStatus('contact.form.not_configured');
  });

  contactForm.addEventListener('input', (event) => {
    const field = event.target;

    if (
      (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) &&
      field.checkValidity()
    ) {
      field.classList.remove('invalid');
    }
  });
}

applyLanguage(getPreferredLanguage());
