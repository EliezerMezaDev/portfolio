---
nav:
  projects: "Proyectos"
  cv: "CV"
  contact: "Contacto"
  langSwitch: "EN"
  langSwitchLabel: "Switch to English"
  navLabel: "Navegación principal"
home:
  h1: "Ingeniero Full-Stack"
  welcome: "Hola, soy Eliezer,"
  desc1: "Ingeniero de Software Full Stack con 4+ años de experiencia diseñando arquitecturas escalables, aplicaciones web y móviles (Nuxt/Vue, Next.js, Node.js, Flutter). Especializado en Fintech y sistemas ERP, con experiencia construyendo plataformas para instituciones financieras reguladas, sitios públicos orientados a SEO y aplicativos CRM. Enfocado en llevar soluciones de extremo a extremo hasta producción."
  cta1: "Ver proyectos →"
  cta2: "Curriculum"
  availability: "Disponible para proyectos freelance y roles remotos full-time"
  workTitle: "Proyectos"
  viewProject: "Ver proyecto →"
  viewProjectLabel: "Ver proyecto:"
  howTitle: "Cómo trabajo"
  how1: >-
    **1. Contexto antes que código**. Antes de escribir una sola línea, mapeo el
    contexto del proyecto: las restricciones, las reglas de negocio y las
    limitantes implícitas *(APIs que no pueden modificarse, condiciones de
    trabajo específicas, requisitos de cumplimiento)*. El problema define la
    solución, no al revés.
  how2: >-
    **2. Decisiones de stack coherentes**. Con el contexto en mano, selecciono
    las herramientas que mejor se adaptan a la tarea, no solo frameworks, sino
    también plataformas, librerías y servicios. Mi experiencia con múltiples
    stacks me permite elegir según lo que el problema exige.
  how3: >-
    **3. Desarrollo pragmático**. Tomo decisiones de arquitectura y
    desarrollo que facilitan el proceso sin comprometer la calidad, optimizando 
    la eficiencia en tiempo y forma, no buscando atajos.
  how4: >-
    **4. Entrega medible**. Todo proyecto en el que participo tiene métricas 
    cuantificables que demuestren la mejora alcanzada y la efectividad
    de lo desarrollado. Si no se define el éxito antes de empezar, se está
    construyendo hacia el objetivo equivocado.
  how5: >-
    **5. Auditoría del proceso**. Al cerrar un proyecto, analizo el camino recorrido
    en su totalidad: lo que funcionó, lo que no, y dónde puedo crecer como
    ingeniero de software.
  stackTitle: "Stack"
  stackDesc: >-
    Mi stack principal es Python/FastAPI, Next.js, Flutter y Node.js, con
    experiencia en producción en Vue/Nuxt, Angular y agentes LLM (LangGraph,
    LangChain). No me caso con una herramienta: elijo según el problema, ya
    sean APIs async de alto tráfico, móvil nativo o agentes de IA auditables,
    y la llevo hasta producción. Eso incluye pipelines de CI/CD,
    configuración de entornos y monitoreo una vez que el código está en
    producción, no solo la construcción inicial.
  projectsAnchor: "#projects"
metrics:
  - "5+ años full-stack"
  - "+300 tx cripto/mes en wallets en producción"
  - "−30% tiempo de carga en UI fintech"
  - "+200 pagos C2P diarios integrados en ERP"
contact:
  title: "Contacto"
  desc: >-
    ¿Tienes un proyecto en mente o un rol que cubrir? La forma más rápida es
    por correo. Normalmente respondo en menos de un día y estoy abierto tanto
    a contratos cortos como a roles full-time de largo plazo.
  cta: "Escríbeme →"
footer:
  reach: "La forma más rápida de contactarme es por correo."
  copyright: "© 2026 Eliezer Meza"
notFound:
  text: "Esta página no existe."
  link: "Ir al inicio."
project:
  roleLabel: "Rol:"
  clientLabel: "Cliente:"
  periodLabel: "Periodo:"
  back: "← Volver al inicio"
  typeOwn: "Proyecto propio"
  typeThirdParty: "Empleado"
  typeFreelance: "Freelance"
  sectionContext: "Contexto"
  sectionConditions: "Condiciones"
  sectionSolution: "Solución"
  sectionTools: "Herramientas"
  sectionFeatures: "Funcionalidades clave"
  sectionResults: "Resultados e impacto"
  sectionGallery: "Galería"
cv:
  pageTitle: "CV — Eliezer Meza · Ingeniero de Software Full Stack"
  pageDesc: "Currículum vitae de Eliezer Meza, Ingeniero de Software Full Stack especializado en fintech, sistemas ERP y plataformas web escalables."
  jobTitle: "Ingeniero de Software Full Stack"
  download: "Descargar PDF"
  summary:
    heading: "Resumen"
    text: >-
      Ingeniero de Software Full Stack con 4+ años de experiencia diseñando
      arquitecturas escalables, aplicaciones web y móviles (Nuxt/Vue,
      Next.js, Node.js, Flutter). Especializado en Fintech y sistemas ERP,
      con experiencia construyendo plataformas para instituciones
      financieras reguladas, sitios públicos orientados a SEO y
      aplicativos CRM. Enfocado en llevar soluciones de extremo a extremo
      hasta producción.
  projects:
    heading: "Proyectos Destacados"
    items:
      - title: "Desarrollador Full Stack"
        period: "Jun 2026 – Ago 2026"
        company: "Maximiza Casa de Bolsa"
        companyUrl: "https://eamz.netlify.app/projects/maximiza"
        bullets:
          - "Desarrollo e2e de la plataforma de Maximiza Casa de Bolsa: portal web SSR en Nuxt, SEO reconstruido (sitemap, robots, metadatos estructurados) y PWA, más un backoffice CRM sobre un backend compartido en NestJS"
          - "Aplicativo CRM: ciclo completo de atención de prospectos y registro de usuarios derivados del sitio web, WhatsApp e Instagram, con asignación, seguimiento de estado y RBAC"
          - "Chatbot multicanal implementado como máquina de estados finitos con integración a la Meta API"
          - "Stack: Nuxt, NestJS, TypeScript, PostgreSQL, Tailwind CSS"
      - title: "Desarrollador Full Stack"
        period: "May 2026 – Actualidad"
        company: "Kairos CMS"
        companyUrl: "https://eamz.netlify.app/projects/kairos-cms"
        bullets:
          - "Diseño y construcción de un headless CMS que consolida +10 instancias separadas en una sola plataforma para reducir al menos un 40% el costo mensual de infraestructura"
          - "Arquitectura de 4 capas desacoplada (Nuxt / Express / capa de acceso a datos / PostgreSQL), con jerarquía multiproyecto y aislamiento de datos mediante API keys por proyecto y CORS whitelist"
          - "Constructor visual de campos con esquemas persistidos en JSONB, editables sin migraciones DDL"
          - "Kill switch de endpoints con efecto en menos de 2 segundos, cargas de medios directas a Cloudinary sin que el backend almacene binarios, y respaldos globales en segundo plano sin bloquear el event loop"
          - "Stack: Nuxt, Express, Node.js, TypeScript, PostgreSQL, Cloudinary"
  experience:
    heading: "Experiencia"
    jobs:
      - title: "Consultor Full Stack (Remoto, Freelance)"
        period: "Nov 2024 – presente"
        company: "Novanet Studio C.A."
        companyUrl: "https://novanet.studio/"
        bullets:
          - "Lideré el levantamiento de requerimientos y la planificación de +10 plataformas web, definiendo el stack tecnológico (Nuxt/Astro/Svelte) y reduciendo el tiempo de Time-to-Market (TTM) inicial en un 20%"
          - "Responsable del desarrollo e2e de los proyectos Maximiza Casa de Bolsa y Kairos CMS (ver Proyectos Destacados arriba), abarcando requerimientos, arquitectura, backend, frontend, QA y despliegue"
          - "Desarrollé e integré módulos de pago C2P en sistemas ERP existentes, logrando procesar +200 transacciones diarias y una mejora de eficiencia del 60% en el cierre de facturas"
          - "Realicé mantenimiento y actualización de 5+ plataformas web preexistentes, con una reducción del 20% en tiempos de carga y mejora consistente del performance SEO y Core Web Vitals"
          - "Stack: Nuxt, Vue, Astro, Node.js, NestJS, Strapi, PostgreSQL"
      - title: "Desarrollador Mobile & Frontend (Remoto)"
        period: "May 2025 – Ene 2026"
        company: "Kodea Labs"
        companyUrl: "https://www.kodea.la/"
        bullets:
          - "Arquitecté y desarrollé desde cero wallets de criptomonedas nativas (iOS/Android) utilizando Flutter, implementando flujos de transacciones cifradas vía API RESTful con foco en seguridad y disponibilidad del servicio"
          - "Resolví desafíos de compatibilidad complejos mediante la creación de forks y la personalización de paquetes de pub.dev, asegurando la integración de características avanzadas"
          - "Implementé la interfaz transaccional de una plataforma Fintech utilizando Next.js y React, optimizando el Critical Rendering Path para reducir los tiempos de carga en un 30% y facilitando el intercambio fluido de criptomonedas a divisas fiat"
          - "Stack: Flutter, Next.js, React"
      - title: "Analista de Desarrollo"
        period: "Oct 2021 – Mar 2025"
        company: "Spartan Techs C.A. — Porlamar, Nueva Esparta"
        companyUrl: "https://www.grupospartan.com/"
        bullets:
          - "Diseñé y desarrollé aplicaciones empresariales para más de 200 usuarios activos, integrando funciones avanzadas como el control de inventarios y el análisis de costos"
          - "Contribuí activamente en equipos de desarrollo Frontend y Backend, implementando soluciones full-stack que mejoraron la cohesión del código y redujeron los errores de integración en un 15%"
          - "Stack: Ionic/Angular, React, Next.js"
  education:
    heading: "Educación"
    degree: "Ingeniería en Sistemas"
    university: "Universidad de Margarita"
    universityUrl: "https://www.unimar.edu.ve/"
    period: "Sep 2018 – Nov 2023"
    thesis: "Tesis con mención honorífica: sistema de gestión de procesos internos para un departamento de servicio técnico."
    certs: "Certificaciones (Udemy)"
    certList:
      - name: "Curso completo de React. Desde 0 hasta Desarrollar apps."
        year: "2025"
        url: "https://www.udemy.com/certificate/UC-adc6e328-98a4-41bb-9353-7a833f5b2cec/"
      - name: "Flutter - Móvil: De cero a experto"
        year: "2025"
        url: "https://www.udemy.com/course/flutter-cero-a-experto/"
      - name: "Ionic: Crear aplicaciones IOS, Android con Angular"
        year: "2021"
        url: "https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push"
      - name: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL"
        year: "2020"
        url: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql"
  skills:
    heading: "Habilidades"
    frontend: "Frontend"
    backend: "Backend"
    data: "Datos e infra"
  languages:
    heading: "Idiomas"
    spanish: "Español"
    spanishLevel: "Nativo"
    english: "Inglés"
    englishLevel: "B1 — Competencia profesional para lectura técnica y comunicación por escrito"
---
