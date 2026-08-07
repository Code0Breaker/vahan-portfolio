export type Language = "en" | "ru" | "am";

/**
 * All human-readable prose lives here. `src/data/*` holds only language-neutral
 * structure — ids, urls, dates, technology names, icons — so that switching
 * language translates the content and not just the labels.
 */
const en = {
  nav: {
    about: "About",
    work: "Work",
    projects: "Projects",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    resume: "Resume",
  },

  ui: {
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
    search: "Search",
    searchPlaceholder: "Search sections, links and actions",
    searchEmpty: "Nothing matches that.",
    groupSections: "Sections",
    groupLinks: "Links",
    groupActions: "Actions",
    hintOpen: "open",
    hintNavigate: "navigate",
    hintClose: "close",
    available: "Available",
    position: "Position in document",
    localTime: "Abu Dhabi",
    backToTop: "Back to top",
    language: "Language",
    openSite: "Open site",
    visit: "Visit",
    loadingPreview: "Loading preview",
    previewBlocked: "This site blocks embedding. Open it in a new tab.",
    reloadPreview: "Reload preview",
    expand: "Show details",
    collapse: "Hide details",
    team: "Team",
    role: "Role",
    stack: "Stack",
    year: "Year",
    copyEmail: "Copy email address",
    copied: "Copied",
  },

  hero: {
    status: "Available for work",
    line1: "Systems people",
    line2: "run every",
    line3: "day.",
    lead: "I'm Vahan Muradyan, a software engineer at G42 in Abu Dhabi. Five years on the systems companies actually depend on: torrent-backed build delivery for a game studio, RSA-encrypted payroll, procurement analytics.",
    ctaContact: "Get in touch",
    ctaWork: "See the work",
    ctaResume: "Resume",
    nowLabel: "Now",
    nowRole: "Software Engineer",
    nowOrg: "G42 — Abu Dhabi",
    nowFocus: "MediaAI, AI Magazine",
    statYears: "years shipping",
    statSystems: "systems live",
    statCompanies: "companies",
  },

  about: {
    eyebrow: "About",
    heading: "I like the parts that are hard to fake.",
    bio1: "I'm a full-stack engineer, currently at G42 in Abu Dhabi working on MediaAI and AI Magazine. Before that, two years at Saber Interactive — the studio behind World War Z and SnowRunner — and four at ItHire in Yerevan.",
    bio2: "Most of what I've built is infrastructure people never see: a WebTorrent build-delivery client in Electron that had to move gigabytes reliably, a payroll system where salary data never leaves RSA encryption, a procurement platform whose analytics the finance team reads every week.",
    bio3: "I work in React, Vue, Next.js, Nuxt, Node and NestJS, and I test with Playwright because I'd rather find the bug than hear about it. I read and write English, Russian and Armenian.",
    photoCaption: "Abu Dhabi, 2025",
    principlesLabel: "How I work",
  },

  work: {
    eyebrow: "Work — by order",
    heading: "Built for clients",
    description:
      "Sites I designed and shipped for paying clients in Armenia. The previews below are live: what you see is the running site.",
  },

  projects: {
    eyebrow: "Work — in-house",
    heading: "Built at companies",
    description:
      "Systems built inside G42, Saber Interactive and ItHire. Descriptions are deliberately thin — most of this is under NDA.",
    colProject: "Project",
    colCompany: "Company",
    colStack: "Stack",
    colStatus: "Status",
    filterLabel: "Filter by technology",
    filterAll: "All",
    filterClear: "Clear filter",
    countSuffix: "of",
    statusCurrent: "Active",
    statusShipped: "Shipped",
    empty: "No projects use that technology.",
    note: "More detail available on request.",
  },

  experience: {
    eyebrow: "Experience",
    heading: "Where the work happened",
    present: "Present",
    current: "Current",
    projectsLabel: "Projects",
  },

  stack: {
    eyebrow: "Stack",
    heading: "What I reach for",
    description:
      "Grouped by where it sits in the system. Everything listed here I've used in production, not in a tutorial.",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Start a conversation",
    description:
      "Open to full-time roles and freelance builds. The fastest route is email — I answer within a day.",
    cta: "Email me",
    ctaNote: "vahan0muradyan@gmail.com",
  },

  footer: {
    builtBy: "Designed and built by Vahan Muradyan",
    builtWith: "Next.js and Tailwind CSS",
  },

  notFound: {
    code: "404",
    heading: "That page isn't here",
    body: "The link may be out of date, or the page may have been renamed. Everything on the site is reachable from the home page.",
    home: "Back to home",
  },

  cv: {
    saveAsPdf: "Save as PDF",
    print: "Print",
    backToSite: "Back to site",
    summary: "Summary",
    experience: "Experience",
    skills: "Skills",
    projects: "Notable projects",
    contact: "Contact",
    present: "Present",
  },

  content: {
    principles: {
      finish: {
        title: "Finish it",
        body: "A feature is done when it's tested, documented, and someone else can change it without asking me.",
      },
      measure: {
        title: "Measure first",
        body: "Performance work starts with a profile, not a guess. The WebTorrent rewrite came out of a flame graph.",
      },
      inherit: {
        title: "Write for the next person",
        body: "Code is read far more often than it's written. I optimise for whoever inherits it.",
      },
      ask: {
        title: "Ask early",
        body: "The cheapest bug is the requirement question asked before the sprint starts.",
      },
    },

    skillGroups: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Data",
      desktop: "Desktop and real-time",
      tooling: "Tooling and delivery",
      quality: "Testing and security",
    },

    contactLabels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      location: "Location",
    },

    roles: {
      fullstack: "Full-stack developer",
      pm: "Project manager",
      designer: "UI/UX designer",
      markup: "HTML/CSS developer",
    },

    showcase: {
      "1": {
        title: "Aikikai Armenia",
        description:
          "The official site of the Aikido Federation of Armenia. Event calendar, dojo directory and a bilingual content model.",
      },
      "2": {
        title: "Terlemezyan Art School",
        description:
          "Site for one of Yerevan's oldest art schools, built around a student-work gallery and an admissions flow.",
      },
      "3": {
        title: "DCP Armenia",
        description:
          "Political party site with a PayloadCMS backend so the press team can publish without a developer.",
      },
      "4": {
        title: "AnimeHub",
        description:
          "Anime streaming platform with a NestJS API, catalogue management and real-time watch state.",
      },
    },

    projects: {
      "0": {
        title: "MediaAI and AI Magazine",
        description:
          "Media platform and digital magazine covering AI research and industry news. Content delivery, editorial tooling and the reader-facing front end.",
      },
      "1": {
        title: "Build delivery client",
        description:
          "Desktop client that distributes multi-gigabyte game builds over WebTorrent. Splitting the UI process from the torrent process removed the stalls that made the first version unusable.",
      },
      "2": {
        title: "Procurement and analytics",
        description:
          "Internal procurement system with a reporting layer the finance team uses weekly. GraphQL API, TeamCity pipelines.",
      },
      "3": {
        title: "Payroll management",
        description:
          "Payroll system built on asymmetric encryption: salary figures are sealed with the recipient's public key and never exist in plaintext on the server.",
      },
      "4": {
        title: "Educa Space",
        description:
          "Education platform with course management and progress tracking. Rebuilt the API layer and untangled the PostgreSQL relations behind it.",
      },
      "5": {
        title: "Flight and hotel booking",
        description:
          "Travel booking application built from scratch — search, reservation management and Google sign-in.",
      },
      "6": {
        title: "Freelance marketplace",
        description:
          "Marketplace connecting clients and developers, with in-browser video calls over WebRTC and Socket.io.",
      },
    },

    experience: {
      g42: {
        role: "Software Engineer",
        description:
          "G42 is an AI and cloud company headquartered in Abu Dhabi, working on digital transformation across healthcare, energy and government.",
        projects: [
          {
            title: "MediaAI and AI Magazine",
            details: [
              "Building the reader-facing front end and editorial tooling for an AI-focused media platform",
              "Next.js and TypeScript, with model-backed features in the content pipeline",
            ],
          },
        ],
      },
      saber: {
        role: "Software Engineer",
        description:
          "Saber Interactive develops games including World War Z and SnowRunner, with studios worldwide and work for major publishers.",
        projects: [
          {
            title: "Build delivery client — WebTorrent, Electron, Vue",
            details: [
              "Rebuilt a Vue 2 build-download client whose transfers stalled under load",
              "Split UI and torrent work into separate processes, then moved the app to Vue 3, TypeScript, Vite and Electron",
              "Handled local state with Better-SQLite and TypeORM, background work with Workers, and releases with electron-updater",
              "Covered the download flows with Playwright so regressions surfaced before release",
              "Integrated a Python torrent service built on libtorrent",
            ],
          },
          {
            title: "Procurement system with analytics",
            details: [
              "Built an internal procurement and reporting tool in Vue and TypeScript",
              "PrimeVue for the interface, vee-validate for form rules",
              "GraphQL for querying, with CI/CD pipelines in TeamCity",
            ],
          },
          {
            title: "Payroll management system",
            details: [
              "Built payroll handling on RSA asymmetric encryption",
              "Salary data is sealed with public/private key pairs and never stored in plaintext",
              "Vue 3 and Electron front end in TypeScript with PrimeVue",
            ],
          },
        ],
      },
      ithire: {
        role: "Full-stack Developer",
        description:
          "ItHire is a Yerevan outsourcing company building custom web applications on modern JavaScript frameworks.",
        projects: [
          {
            title: "Educa Space — education platform",
            details: [
              "Cleared a long-standing backlog of Nuxt.js defects and stabilised the platform",
              "Built and tuned APIs with TypeORM on NestJS",
              "Resolved the PostgreSQL relationship problems behind the reporting bugs",
            ],
          },
          {
            title: "One X Player",
            details: [
              "Electron and React application that aggregates a user's installed games",
              "Added per-game time tracking",
              "Implemented cross-device game downloads over shared links",
            ],
          },
          {
            title: "Flight and hotel booking",
            details: [
              "Built the application from scratch in Vue and TypeScript",
              "Configured the build pipeline with Webpack",
              "Added Google sign-in to shorten the booking flow",
            ],
          },
          {
            title: "Aikido Federation website",
            details: [
              "Vue 3 and TypeScript front end with Three.js for data visualisation",
              "Custom admin panel on PayloadCMS and GraphQL",
            ],
          },
          {
            title: "Japan Radio Community",
            details: [
              "Community platform in Vue focused on member interaction",
              "Shipped as a PWA for offline access and faster repeat visits",
              "GraphQL for data access",
            ],
          },
          {
            title: "Freelance marketplace",
            details: [
              "Built in Next.js with SCSS on BEM conventions",
              "Added in-browser video calls using WebRTC and Socket.io",
            ],
          },
        ],
      },
    },
  },
};

export type Translations = typeof en;

const ru: Translations = {
  nav: {
    about: "Обо мне",
    work: "Клиенты",
    projects: "Проекты",
    experience: "Опыт",
    stack: "Стек",
    contact: "Контакты",
    resume: "Резюме",
  },

  ui: {
    skipToContent: "Перейти к содержимому",
    menu: "Меню",
    close: "Закрыть",
    search: "Поиск",
    searchPlaceholder: "Поиск по разделам, ссылкам и действиям",
    searchEmpty: "Ничего не найдено.",
    groupSections: "Разделы",
    groupLinks: "Ссылки",
    groupActions: "Действия",
    hintOpen: "открыть",
    hintNavigate: "навигация",
    hintClose: "закрыть",
    available: "Доступен",
    position: "Позиция в документе",
    localTime: "Абу-Даби",
    backToTop: "Наверх",
    language: "Язык",
    openSite: "Открыть сайт",
    visit: "Открыть",
    loadingPreview: "Загрузка превью",
    previewBlocked: "Сайт запрещает встраивание. Откройте его в новой вкладке.",
    reloadPreview: "Обновить превью",
    expand: "Показать детали",
    collapse: "Скрыть детали",
    team: "Команда",
    role: "Роль",
    stack: "Стек",
    year: "Год",
    copyEmail: "Скопировать адрес почты",
    copied: "Скопировано",
  },

  hero: {
    status: "Открыт к работе",
    line1: "Системы,",
    line2: "которыми пользуются",
    line3: "каждый день.",
    lead: "Меня зовут Ваган Мурадян, я инженер-программист в G42 в Абу-Даби. Пять лет работаю над системами, на которые компании реально опираются: доставка сборок через торрент для игровой студии, зарплатная система на RSA, закупочная аналитика.",
    ctaContact: "Связаться",
    ctaWork: "Смотреть работы",
    ctaResume: "Резюме",
    nowLabel: "Сейчас",
    nowRole: "Инженер-программист",
    nowOrg: "G42 — Абу-Даби",
    nowFocus: "MediaAI, AI Magazine",
    statYears: "лет в разработке",
    statSystems: "систем в работе",
    statCompanies: "компании",
  },

  about: {
    eyebrow: "Обо мне",
    heading: "Мне интересно то, что нельзя сымитировать.",
    bio1: "Я full-stack инженер, сейчас в G42 в Абу-Даби — работаю над MediaAI и AI Magazine. До этого два года в Saber Interactive, студии World War Z и SnowRunner, и четыре года в ItHire в Ереване.",
    bio2: "Большая часть сделанного мной — инфраструктура, которую пользователь не видит: клиент доставки сборок на WebTorrent и Electron, которому нужно было стабильно передавать гигабайты; зарплатная система, где данные не покидают RSA-шифрование; закупочная платформа, аналитику которой финансовый отдел смотрит каждую неделю.",
    bio3: "Работаю с React, Vue, Next.js, Nuxt, Node и NestJS, пишу тесты на Playwright — предпочитаю находить баг сам, а не узнавать о нём. Читаю и пишу на английском, русском и армянском.",
    photoCaption: "Абу-Даби, 2025",
    principlesLabel: "Как я работаю",
  },

  work: {
    eyebrow: "Работы — на заказ",
    heading: "Сделано для клиентов",
    description:
      "Сайты, которые я спроектировал и запустил для клиентов в Армении. Превью ниже живые: вы видите работающий сайт.",
  },

  projects: {
    eyebrow: "Работы — в компаниях",
    heading: "Сделано внутри компаний",
    description:
      "Системы, построенные в G42, Saber Interactive и ItHire. Описания намеренно короткие — большая часть под NDA.",
    colProject: "Проект",
    colCompany: "Компания",
    colStack: "Стек",
    colStatus: "Статус",
    filterLabel: "Фильтр по технологии",
    filterAll: "Все",
    filterClear: "Сбросить фильтр",
    countSuffix: "из",
    statusCurrent: "Активен",
    statusShipped: "Завершён",
    empty: "Проектов с этой технологией нет.",
    note: "Подробности — по запросу.",
  },

  experience: {
    eyebrow: "Опыт",
    heading: "Где всё это происходило",
    present: "н. в.",
    current: "Сейчас",
    projectsLabel: "Проекты",
  },

  stack: {
    eyebrow: "Стек",
    heading: "Чем я работаю",
    description:
      "Сгруппировано по месту в системе. Всё перечисленное я использовал в продакшене, а не в туториале.",
  },

  contact: {
    eyebrow: "Контакты",
    heading: "Давайте обсудим",
    description:
      "Открыт к постоянной работе и заказным проектам. Быстрее всего — почтой, отвечаю в течение дня.",
    cta: "Написать письмо",
    ctaNote: "vahan0muradyan@gmail.com",
  },

  footer: {
    builtBy: "Спроектировано и собрано Ваганом Мурадяном",
    builtWith: "Next.js и Tailwind CSS",
  },

  notFound: {
    code: "404",
    heading: "Такой страницы здесь нет",
    body: "Ссылка могла устареть или страницу переименовали. Всё содержимое сайта доступно с главной страницы.",
    home: "На главную",
  },

  cv: {
    saveAsPdf: "Сохранить в PDF",
    print: "Печать",
    backToSite: "На сайт",
    summary: "Кратко",
    experience: "Опыт работы",
    skills: "Навыки",
    projects: "Ключевые проекты",
    contact: "Контакты",
    present: "н. в.",
  },

  content: {
    principles: {
      finish: {
        title: "Доводить до конца",
        body: "Задача закрыта, когда она покрыта тестами, описана и другой человек может её изменить, не спрашивая меня.",
      },
      measure: {
        title: "Сначала измерить",
        body: "Работа над производительностью начинается с профиля, а не с догадки. Переписывание WebTorrent выросло из flame graph.",
      },
      inherit: {
        title: "Писать для следующего",
        body: "Код читают гораздо чаще, чем пишут. Я оптимизирую под того, кто его унаследует.",
      },
      ask: {
        title: "Спрашивать заранее",
        body: "Самый дешёвый баг — это вопрос о требованиях, заданный до начала спринта.",
      },
    },

    skillGroups: {
      frontend: "Фронтенд",
      backend: "Бэкенд",
      database: "Данные",
      desktop: "Десктоп и real-time",
      tooling: "Инструменты и доставка",
      quality: "Тестирование и безопасность",
    },

    contactLabels: {
      email: "Почта",
      phone: "Телефон",
      linkedin: "LinkedIn",
      location: "Локация",
    },

    roles: {
      fullstack: "Full-stack разработчик",
      pm: "Менеджер проекта",
      designer: "UI/UX дизайнер",
      markup: "HTML/CSS разработчик",
    },

    showcase: {
      "1": {
        title: "Aikikai Armenia",
        description:
          "Официальный сайт Федерации айкидо Армении. Календарь событий, каталог додзё и двуязычная модель контента.",
      },
      "2": {
        title: "Terlemezyan Art School",
        description:
          "Сайт одного из старейших художественных училищ Еревана — вокруг галереи студенческих работ и процесса поступления.",
      },
      "3": {
        title: "DCP Armenia",
        description:
          "Сайт политической партии с бэкендом на PayloadCMS, чтобы пресс-служба публиковала материалы без разработчика.",
      },
      "4": {
        title: "AnimeHub",
        description:
          "Платформа стриминга аниме с API на NestJS, управлением каталогом и состоянием просмотра в реальном времени.",
      },
    },

    projects: {
      "0": {
        title: "MediaAI и AI Magazine",
        description:
          "Медиаплатформа и цифровой журнал об исследованиях и новостях в области ИИ. Доставка контента, редакционные инструменты и читательский интерфейс.",
      },
      "1": {
        title: "Клиент доставки сборок",
        description:
          "Десктопный клиент, раздающий многогигабайтные игровые сборки через WebTorrent. Разделение UI и торрент-процесса убрало зависания, из-за которых первая версия была непригодна.",
      },
      "2": {
        title: "Закупки и аналитика",
        description:
          "Внутренняя система закупок с отчётностью, которую финансовый отдел смотрит еженедельно. GraphQL API, пайплайны в TeamCity.",
      },
      "3": {
        title: "Управление зарплатами",
        description:
          "Зарплатная система на асимметричном шифровании: суммы запечатаны публичным ключом получателя и никогда не хранятся на сервере в открытом виде.",
      },
      "4": {
        title: "Educa Space",
        description:
          "Образовательная платформа с управлением курсами и отслеживанием прогресса. Пересобрал слой API и распутал связи в PostgreSQL.",
      },
      "5": {
        title: "Бронирование билетов и отелей",
        description:
          "Сервис бронирования с нуля — поиск, управление бронями и вход через Google.",
      },
      "6": {
        title: "Фриланс-маркетплейс",
        description:
          "Площадка, соединяющая заказчиков и разработчиков, с видеозвонками в браузере на WebRTC и Socket.io.",
      },
    },

    experience: {
      g42: {
        role: "Инженер-программист",
        description:
          "G42 — компания в области ИИ и облачных вычислений со штаб-квартирой в Абу-Даби, работает над цифровой трансформацией в здравоохранении, энергетике и госсекторе.",
        projects: [
          {
            title: "MediaAI и AI Magazine",
            details: [
              "Разрабатываю читательский интерфейс и редакционные инструменты медиаплатформы об ИИ",
              "Next.js и TypeScript, с функциями на базе моделей в контент-пайплайне",
            ],
          },
        ],
      },
      saber: {
        role: "Инженер-программист",
        description:
          "Saber Interactive разрабатывает игры, включая World War Z и SnowRunner, имеет студии по всему миру и работает с крупными издателями.",
        projects: [
          {
            title: "Клиент доставки сборок — WebTorrent, Electron, Vue",
            details: [
              "Переработал клиент загрузки сборок на Vue 2, у которого передача зависала под нагрузкой",
              "Разделил UI и торрент-логику на отдельные процессы, затем перевёл приложение на Vue 3, TypeScript, Vite и Electron",
              "Локальное состояние — Better-SQLite и TypeORM, фоновые задачи — Workers, обновления — electron-updater",
              "Покрыл сценарии загрузки тестами Playwright, чтобы регрессии всплывали до релиза",
              "Интегрировал торрент-сервис на Python поверх libtorrent",
            ],
          },
          {
            title: "Система закупок с аналитикой",
            details: [
              "Собрал внутренний инструмент закупок и отчётности на Vue и TypeScript",
              "PrimeVue для интерфейса, vee-validate для правил форм",
              "GraphQL для запросов, CI/CD пайплайны в TeamCity",
            ],
          },
          {
            title: "Система управления зарплатами",
            details: [
              "Построил обработку зарплат на асимметричном шифровании RSA",
              "Данные запечатаны парами публичный/приватный ключ и не хранятся в открытом виде",
              "Фронтенд на Vue 3 и Electron с TypeScript и PrimeVue",
            ],
          },
        ],
      },
      ithire: {
        role: "Full-stack разработчик",
        description:
          "ItHire — ереванская аутсорс-компания, создающая заказные веб-приложения на современных JavaScript-фреймворках.",
        projects: [
          {
            title: "Educa Space — образовательная платформа",
            details: [
              "Разобрал накопившийся бэклог дефектов Nuxt.js и стабилизировал платформу",
              "Построил и настроил API на TypeORM поверх NestJS",
              "Устранил проблемы связей в PostgreSQL, из-за которых ломались отчёты",
            ],
          },
          {
            title: "One X Player",
            details: [
              "Приложение на Electron и React, собирающее установленные игры пользователя",
              "Добавил учёт времени по каждой игре",
              "Реализовал загрузку игр между устройствами по общей ссылке",
            ],
          },
          {
            title: "Бронирование билетов и отелей",
            details: [
              "Собрал приложение с нуля на Vue и TypeScript",
              "Настроил сборку через Webpack",
              "Добавил вход через Google, чтобы сократить путь до брони",
            ],
          },
          {
            title: "Сайт федерации айкидо",
            details: [
              "Фронтенд на Vue 3 и TypeScript с Three.js для визуализации данных",
              "Собственная админка на PayloadCMS и GraphQL",
            ],
          },
          {
            title: "Japan Radio Community",
            details: [
              "Платформа сообщества на Vue с упором на взаимодействие участников",
              "Выпущена как PWA — офлайн-доступ и быстрые повторные визиты",
              "GraphQL для работы с данными",
            ],
          },
          {
            title: "Фриланс-маркетплейс",
            details: [
              "Собран на Next.js со SCSS по методологии BEM",
              "Добавил видеозвонки в браузере на WebRTC и Socket.io",
            ],
          },
        ],
      },
    },
  },
};

const am: Translations = {
  nav: {
    about: "Իմ մասին",
    work: "Պատվերով",
    projects: "Նախագծեր",
    experience: "Փորձ",
    stack: "Տեխնոլոգիաներ",
    contact: "Կապ",
    resume: "Ռեզյումե",
  },

  ui: {
    skipToContent: "Անցնել բովանդակությանը",
    menu: "Ընտրացանկ",
    close: "Փակել",
    search: "Որոնում",
    searchPlaceholder: "Որոնել բաժիններ, հղումներ և գործողություններ",
    searchEmpty: "Համընկնում չկա։",
    groupSections: "Բաժիններ",
    groupLinks: "Հղումներ",
    groupActions: "Գործողություններ",
    hintOpen: "բացել",
    hintNavigate: "տեղաշարժ",
    hintClose: "փակել",
    available: "Հասանելի",
    position: "Դիրքը փաստաթղթում",
    localTime: "Աբու Դաբի",
    backToTop: "Դեպի վեր",
    language: "Լեզու",
    openSite: "Բացել կայքը",
    visit: "Այցելել",
    loadingPreview: "Նախադիտումը բեռնվում է",
    previewBlocked:
      "Կայքը արգելում է ներդրումը։ Բացեք այն նոր ներդիրում։",
    reloadPreview: "Թարմացնել նախադիտումը",
    expand: "Ցույց տալ մանրամասները",
    collapse: "Թաքցնել մանրամասները",
    team: "Թիմ",
    role: "Դեր",
    stack: "Տեխնոլոգիաներ",
    year: "Տարի",
    copyEmail: "Պատճենել էլ. հասցեն",
    copied: "Պատճենվեց",
  },

  hero: {
    status: "Բաց եմ առաջարկների համար",
    line1: "Համակարգեր,",
    line2: "որոնցով աշխատում են",
    line3: "ամեն օր։",
    lead: "Ես Վահան Մուրադյանն եմ՝ ծրագրային ապահովման ինժեներ G42-ում, Աբու Դաբի։ Հինգ տարի աշխատում եմ այն համակարգերի վրա, որոնց վրա ընկերությունները իրականում հենվում են՝ խաղային ստուդիայի համար torrent-ով բիլդերի առաքում, RSA-ով պաշտպանված աշխատավարձի համակարգ, գնումների վերլուծություն։",
    ctaContact: "Կապվել",
    ctaWork: "Տեսնել աշխատանքները",
    ctaResume: "Ռեզյումե",
    nowLabel: "Այժմ",
    nowRole: "Ծրագրային ինժեներ",
    nowOrg: "G42 — Աբու Դաբի",
    nowFocus: "MediaAI, AI Magazine",
    statYears: "տարի աշխատանք",
    statSystems: "գործող համակարգ",
    statCompanies: "ընկերություն",
  },

  about: {
    eyebrow: "Իմ մասին",
    heading: "Ինձ հետաքրքրում է այն, ինչը հնարավոր չէ կեղծել։",
    bio1: "Ես full-stack ինժեներ եմ, ներկայում G42-ում՝ Աբու Դաբիում, աշխատում եմ MediaAI և AI Magazine նախագծերի վրա։ Մինչ այդ երկու տարի Saber Interactive-ում՝ World War Z-ի և SnowRunner-ի ստուդիայում, և չորս տարի ItHire-ում՝ Երևանում։",
    bio2: "Իմ արածի մեծ մասը այն ենթակառուցվածքն է, որը օգտատերը չի տեսնում՝ WebTorrent-ի և Electron-ի վրա կառուցված բիլդերի առաքման հաճախորդ, որը պետք է կայուն փոխանցեր գիգաբայթեր. աշխատավարձի համակարգ, որտեղ տվյալները երբեք դուրս չեն գալիս RSA գաղտնագրումից. գնումների հարթակ, որի վերլուծությունը ֆինանսական բաժինը կարդում է ամեն շաբաթ։",
    bio3: "Աշխատում եմ React-ով, Vue-ով, Next.js-ով, Nuxt-ով, Node-ով և NestJS-ով, թեստերը գրում եմ Playwright-ով, որովհետև նախընտրում եմ ինքս գտնել սխալը, քան լսել դրա մասին։ Կարդում և գրում եմ անգլերեն, ռուսերեն և հայերեն։",
    photoCaption: "Աբու Դաբի, 2025",
    principlesLabel: "Ինչպես եմ աշխատում",
  },

  work: {
    eyebrow: "Աշխատանք — պատվերով",
    heading: "Ստեղծված հաճախորդների համար",
    description:
      "Կայքեր, որոնք նախագծել և գործարկել եմ Հայաստանում հաճախորդների համար։ Ստորև նախադիտումները կենդանի են՝ տեսնում եք աշխատող կայքը։",
  },

  projects: {
    eyebrow: "Աշխատանք — ընկերություններում",
    heading: "Ստեղծված ընկերությունների ներսում",
    description:
      "Համակարգեր, որոնք կառուցվել են G42-ում, Saber Interactive-ում և ItHire-ում։ Նկարագրությունները միտումնավոր հակիրճ են՝ մեծ մասը NDA-ի տակ է։",
    colProject: "Նախագիծ",
    colCompany: "Ընկերություն",
    colStack: "Տեխնոլոգիաներ",
    colStatus: "Կարգավիճակ",
    filterLabel: "Զտել ըստ տեխնոլոգիայի",
    filterAll: "Բոլորը",
    filterClear: "Մաքրել զտիչը",
    countSuffix: "-ից",
    statusCurrent: "Ընթացիկ",
    statusShipped: "Ավարտված",
    empty: "Այդ տեխնոլոգիայով նախագիծ չկա։",
    note: "Լրացուցիչ մանրամասներ՝ ըստ հարցման։",
  },

  experience: {
    eyebrow: "Փորձ",
    heading: "Որտեղ է կատարվել աշխատանքը",
    present: "Ներկա",
    current: "Ընթացիկ",
    projectsLabel: "Նախագծեր",
  },

  stack: {
    eyebrow: "Տեխնոլոգիաներ",
    heading: "Ինչով եմ աշխատում",
    description:
      "Խմբավորված ըստ համակարգում զբաղեցրած տեղի։ Այստեղ նշված ամեն ինչ օգտագործել եմ արտադրության մեջ, ոչ թե ձեռնարկում։",
  },

  contact: {
    eyebrow: "Կապ",
    heading: "Սկսենք զրույցը",
    description:
      "Բաց եմ մշտական աշխատանքի և պատվերով նախագծերի համար։ Ամենաարագ ճանապարհը էլ. փոստն է՝ պատասխանում եմ մեկ օրվա ընթացքում։",
    cta: "Գրել նամակ",
    ctaNote: "vahan0muradyan@gmail.com",
  },

  footer: {
    builtBy: "Նախագծել և կառուցել է Վահան Մուրադյանը",
    builtWith: "Next.js և Tailwind CSS",
  },

  notFound: {
    code: "404",
    heading: "Այս էջը այստեղ չէ",
    body: "Հղումը կարող է հնացած լինել, կամ էջը վերանվանվել է։ Կայքի ամբողջ բովանդակությունը հասանելի է գլխավոր էջից։",
    home: "Դեպի գլխավոր",
  },

  cv: {
    saveAsPdf: "Պահպանել PDF",
    print: "Տպել",
    backToSite: "Վերադառնալ կայք",
    summary: "Ամփոփում",
    experience: "Աշխատանքային փորձ",
    skills: "Հմտություններ",
    projects: "Կարևոր նախագծեր",
    contact: "Կապ",
    present: "Ներկա",
  },

  content: {
    principles: {
      finish: {
        title: "Հասցնել ավարտին",
        body: "Խնդիրը փակ է, երբ այն թեստավորված է, փաստաթղթավորված, և ուրիշը կարող է փոխել այն՝ առանց ինձ հարցնելու։",
      },
      measure: {
        title: "Նախ չափել",
        body: "Արագագործության աշխատանքը սկսվում է չափումից, ոչ թե ենթադրությունից։ WebTorrent-ի վերաշարադրումը ծնվեց flame graph-ից։",
      },
      inherit: {
        title: "Գրել հաջորդի համար",
        body: "Կոդը կարդում են շատ ավելի հաճախ, քան գրում։ Ես օպտիմալացնում եմ նրա համար, ով այն կժառանգի։",
      },
      ask: {
        title: "Հարցնել վաղ",
        body: "Ամենաէժան սխալը այն հարցն է պահանջների մասին, որը տրվել է մինչև սպրինտի մեկնարկը։",
      },
    },

    skillGroups: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Տվյալներ",
      desktop: "Դեսքթոփ և իրական ժամանակ",
      tooling: "Գործիքներ և առաքում",
      quality: "Թեստավորում և անվտանգություն",
    },

    contactLabels: {
      email: "Էլ. փոստ",
      phone: "Հեռախոս",
      linkedin: "LinkedIn",
      location: "Տեղակայում",
    },

    roles: {
      fullstack: "Full-stack ծրագրավորող",
      pm: "Նախագծի ղեկավար",
      designer: "UI/UX դիզայներ",
      markup: "HTML/CSS ծրագրավորող",
    },

    showcase: {
      "1": {
        title: "Aikikai Armenia",
        description:
          "Հայաստանի Այկիդոյի ֆեդերացիայի պաշտոնական կայքը։ Միջոցառումների օրացույց, դոջոների ցանկ և երկլեզու բովանդակության մոդել։",
      },
      "2": {
        title: "Terlemezyan Art School",
        description:
          "Երևանի հնագույն արվեստի ուսումնարաններից մեկի կայքը՝ կառուցված ուսանողական աշխատանքների պատկերասրահի և ընդունելության շուրջ։",
      },
      "3": {
        title: "DCP Armenia",
        description:
          "Կուսակցության կայք PayloadCMS backend-ով, որպեսզի մամուլի բաժինը հրապարակի առանց ծրագրավորողի։",
      },
      "4": {
        title: "AnimeHub",
        description:
          "Անիմե հեռարձակման հարթակ NestJS API-ով, կատալոգի կառավարմամբ և իրական ժամանակի դիտման վիճակով։",
      },
    },

    projects: {
      "0": {
        title: "MediaAI և AI Magazine",
        description:
          "Մեդիա հարթակ և թվային ամսագիր՝ ԱԲ-ի հետազոտությունների և նորությունների մասին։ Բովանդակության առաքում, խմբագրական գործիքներ և ընթերցողի ինտերֆեյս։",
      },
      "1": {
        title: "Բիլդերի առաքման հաճախորդ",
        description:
          "Դեսքթոփ հաճախորդ, որը WebTorrent-ով բաշխում է բազմագիգաբայթ խաղային բիլդեր։ UI-ի և torrent գործընթացի բաժանումը վերացրեց այն կախումները, որոնց պատճառով առաջին տարբերակը անօգտագործելի էր։",
      },
      "2": {
        title: "Գնումներ և վերլուծություն",
        description:
          "Ներքին գնումների համակարգ հաշվետվության շերտով, որը ֆինանսական բաժինը օգտագործում է ամեն շաբաթ։ GraphQL API, TeamCity pipeline-ներ։",
      },
      "3": {
        title: "Աշխատավարձի կառավարում",
        description:
          "Աշխատավարձի համակարգ ասիմետրիկ գաղտնագրման վրա. գումարները կնքվում են ստացողի բաց բանալիով և երբեք բաց տեսքով չեն պահվում սերվերում։",
      },
      "4": {
        title: "Educa Space",
        description:
          "Կրթական հարթակ դասընթացների կառավարմամբ և առաջընթացի հետևմամբ։ Վերակառուցեցի API շերտը և կարգավորեցի PostgreSQL-ի կապերը։",
      },
      "5": {
        title: "Չվերթների և հյուրանոցների ամրագրում",
        description:
          "Ճամփորդական ամրագրման հավելված զրոյից՝ որոնում, ամրագրումների կառավարում և Google-ով մուտք։",
      },
      "6": {
        title: "Ֆրիլանս հարթակ",
        description:
          "Հարթակ, որը կապում է հաճախորդներին և ծրագրավորողներին՝ բրաուզերում վիդեոզանգերով WebRTC-ի և Socket.io-ի վրա։",
      },
    },

    experience: {
      g42: {
        role: "Ծրագրային ինժեներ",
        description:
          "G42-ը ԱԲ-ի և ամպային հաշվարկների ընկերություն է Աբու Դաբիում՝ աշխատում է թվային փոխակերպման ուղղությամբ առողջապահության, էներգետիկայի և պետական ոլորտներում։",
        projects: [
          {
            title: "MediaAI և AI Magazine",
            details: [
              "Կառուցում եմ ԱԲ-ի մասին մեդիա հարթակի ընթերցողի ինտերֆեյսը և խմբագրական գործիքները",
              "Next.js և TypeScript՝ բովանդակության հոսքում մոդելների վրա հիմնված հնարավորություններով",
            ],
          },
        ],
      },
      saber: {
        role: "Ծրագրային ինժեներ",
        description:
          "Saber Interactive-ը մշակում է խաղեր, այդ թվում World War Z և SnowRunner, ունի ստուդիաներ ամբողջ աշխարհում և աշխատում է խոշոր հրատարակիչների հետ։",
        projects: [
          {
            title: "Բիլդերի առաքման հաճախորդ — WebTorrent, Electron, Vue",
            details: [
              "Վերակառուցեցի Vue 2-ի վրա գրված բիլդերի ներբեռնման հաճախորդը, որի փոխանցումները կախվում էին բեռնվածության տակ",
              "Բաժանեցի UI-ն և torrent տրամաբանությունը առանձին գործընթացների, ապա տեղափոխեցի հավելվածը Vue 3, TypeScript, Vite և Electron",
              "Տեղական վիճակը՝ Better-SQLite և TypeORM, ֆոնային աշխատանքը՝ Workers, թողարկումները՝ electron-updater",
              "Ներբեռնման հոսքերը ծածկեցի Playwright թեստերով, որպեսզի ռեգրեսիաները հայտնվեն մինչև թողարկումը",
              "Ինտեգրեցի libtorrent-ի վրա կառուցված Python torrent ծառայությունը",
            ],
          },
          {
            title: "Գնումների համակարգ վերլուծությամբ",
            details: [
              "Կառուցեցի ներքին գնումների և հաշվետվության գործիք Vue-ով և TypeScript-ով",
              "PrimeVue՝ ինտերֆեյսի, vee-validate՝ ձևերի կանոնների համար",
              "GraphQL՝ հարցումների, CI/CD pipeline-ներ՝ TeamCity-ում",
            ],
          },
          {
            title: "Աշխատավարձի կառավարման համակարգ",
            details: [
              "Կառուցեցի աշխատավարձի մշակումը RSA ասիմետրիկ գաղտնագրման վրա",
              "Տվյալները կնքվում են բաց/փակ բանալիների զույգով և բաց տեսքով չեն պահվում",
              "Vue 3 և Electron ինտերֆեյս TypeScript-ով և PrimeVue-ով",
            ],
          },
        ],
      },
      ithire: {
        role: "Full-stack ծրագրավորող",
        description:
          "ItHire-ը երևանյան աութսորսինգ ընկերություն է, որը ստեղծում է պատվերով վեբ հավելվածներ ժամանակակից JavaScript ֆրեյմվորքերով։",
        projects: [
          {
            title: "Educa Space — կրթական հարթակ",
            details: [
              "Մաքրեցի Nuxt.js-ի կուտակված թերությունների ցանկը և կայունացրեցի հարթակը",
              "Կառուցեցի և կարգավորեցի API-ները TypeORM-ով NestJS-ի վրա",
              "Լուծեցի PostgreSQL-ի կապերի խնդիրները, որոնց պատճառով խափանվում էին հաշվետվությունները",
            ],
          },
          {
            title: "One X Player",
            details: [
              "Electron և React հավելված, որը հավաքում է օգտատիրոջ տեղադրված խաղերը",
              "Ավելացրեցի յուրաքանչյուր խաղի վրա ծախսված ժամանակի հաշվառումը",
              "Իրականացրեցի սարքերի միջև խաղերի ներբեռնումը ընդհանուր հղումով",
            ],
          },
          {
            title: "Չվերթների և հյուրանոցների ամրագրում",
            details: [
              "Կառուցեցի հավելվածը զրոյից Vue-ով և TypeScript-ով",
              "Կարգավորեցի հավաքման գործընթացը Webpack-ով",
              "Ավելացրեցի Google-ով մուտքը՝ ամրագրման ճանապարհը կարճացնելու համար",
            ],
          },
          {
            title: "Այկիդոյի ֆեդերացիայի կայք",
            details: [
              "Vue 3 և TypeScript ինտերֆեյս՝ Three.js-ով տվյալների վիզուալիզացիայի համար",
              "Սեփական ադմին վահանակ PayloadCMS-ի և GraphQL-ի վրա",
            ],
          },
          {
            title: "Japan Radio Community",
            details: [
              "Համայնքային հարթակ Vue-ով՝ մասնակիցների փոխազդեցության շուրջ",
              "Թողարկվեց որպես PWA՝ օֆլայն հասանելիության և արագ կրկնակի այցերի համար",
              "GraphQL՝ տվյալների հետ աշխատանքի համար",
            ],
          },
          {
            title: "Ֆրիլանս հարթակ",
            details: [
              "Կառուցված է Next.js-ով՝ SCSS-ով BEM մեթոդաբանությամբ",
              "Ավելացրեցի բրաուզերում վիդեոզանգեր WebRTC-ի և Socket.io-ի վրա",
            ],
          },
        ],
      },
    },
  },
};

export const translations: Record<Language, Translations> = { en, ru, am };

export const languageNames: Record<Language, string> = {
  en: "EN",
  ru: "RU",
  am: "ՀՅ",
};
