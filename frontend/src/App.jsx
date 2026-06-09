import { useEffect, useState } from 'react'
import './App.css'

const translations = {
  ru: {
    localeLabel: 'Русский',
    languages: {
      ru: 'RU',
      en: 'EN',
    },
    topbarTag: 'AI-инструмент для рекрутеров',
    heroEyebrow: 'CV-maker для рекрутеров',
    heroTitle: 'Превращайте заметки о кандидате в аккуратное CV за минуты.',
    heroText:
      'Узко сфокусированный MVP, который помогает быстро собрать структурированное CV из сырого текста, файла и дополнительных инструкций.',
    heroAria: 'Ключевые преимущества продукта',
    heroMetrics: [
      {
        title: '1 понятный сценарий',
        text: 'Вставить текст, приложить файл, выбрать промпт и запустить генерацию.',
      },
      {
        title: 'MVP без лишнего',
        text: 'Без CRM и сложной HR-логики, только быстрая сборка CV.',
      },
      {
        title: 'Готов к росту',
        text: 'Подходит для web-версии и будущей desktop-сборки на Electron.',
      },
    ],
    outputPreviewAria: 'Предпросмотр результата',
    draftCanvas: 'Черновик AI-результата',
    generatedOutline: 'Структура итогового CV',
    ready: 'Готово',
    outputSections: [
      'Саммари',
      'Ключевые навыки',
      'Опыт работы',
      'Достижения',
      'Образование',
      'Языки',
    ],
    selectedPrompt: 'Выбранный промпт',
    recruitersGet: 'Что получает рекрутер',
    recruiterSignals: [
      'Сырые заметки, LinkedIn и файл в одном сценарии',
      'Пресеты промптов под разные клиентские запросы',
      'Структурированный результат без ручной чистки',
    ],
    workspaceEyebrow: 'Рабочая зона MVP',
    workspaceTitle: 'Соберите запрос на генерацию',
    workspaceNote:
      'Сейчас можно выбирать пресет, а позже заменить его на вашу собственную библиотеку промптов.',
    inputLabel: 'Ввод',
    candidateSourceTitle: 'Исходные данные кандидата',
    candidateInformation: 'Информация о кандидате',
    candidatePlaceholder:
      'Вставьте LinkedIn, заметки рекрутера, результаты интервью, прошлое CV или любой сырой текст о кандидате.',
    optionalFile: 'Необязательный файл',
    filePlaceholder: 'Загрузите CV, PDF, DOCX или TXT',
    fileHelp:
      'Можно использовать только файл или сочетать его с вставленным текстом для более точного результата.',
    extraContext: 'Дополнительный контекст',
    extraContextHelp:
      'Описание вакансии и инструкции по формату считаются отдельно.',
    promptPreset: 'Пресет промпта',
    vacancyInstructions: 'Описание вакансии или инструкции',
    vacancyPlaceholder:
      'Добавьте описание вакансии, ожидания клиента, желаемый тон или правила оформления CV.',
    generate: 'Сгенерировать CV',
    createPrompt: 'Создать свой промпт',
    liveSummary: 'Живая сводка',
    requestOverview: 'Обзор текущего запроса',
    currentSetup: 'Текущая конфигурация',
    promptLabel: 'Промпт',
    candidateTextLabel: 'Текст кандидата',
    attachedFileLabel: 'Файл',
    extraInstructionsLabel: 'Инструкции',
    notAddedYet: 'Пока не добавлено',
    noFileSelected: 'Файл не выбран',
    noneYet: 'Пока нет',
    promptBehavior: 'Поведение промпта',
    idealOutput: 'Каким должен быть результат',
    idealOutputSteps: [
      'Короткое recruiter-friendly саммари в начале.',
      'Аккуратные блоки опыта с измеримыми результатами.',
      'Чистая структура, которую можно сразу отправлять клиенту.',
    ],
    promptPresets: [
      {
        id: 'clean',
        label: 'Чистое CV',
        tone: 'Универсальный',
        description: 'Фокус на ясности, структуре и быстрой отправке клиенту.',
      },
      {
        id: 'executive',
        label: 'Executive',
        tone: 'Премиальный',
        description:
          'Подчёркивает лидерство, бизнес-влияние и стратегический масштаб роли.',
      },
      {
        id: 'tech',
        label: 'Tech Match',
        tone: 'Точный',
        description:
          'Выделяет стек, архитектурный контекст и соответствие технической вакансии.',
      },
    ],
  },
  en: {
    localeLabel: 'English',
    languages: {
      ru: 'RU',
      en: 'EN',
    },
    topbarTag: 'AI tool for recruiters',
    heroEyebrow: 'CV-maker for recruiters',
    heroTitle: 'Turn candidate notes into a polished CV in minutes.',
    heroText:
      'A focused MVP that helps recruiters build a structured CV from raw text, uploaded files, and extra instructions.',
    heroAria: 'Product highlights',
    heroMetrics: [
      {
        title: '1 simple flow',
        text: 'Paste text, attach a file, choose a prompt, and generate.',
      },
      {
        title: 'MVP without clutter',
        text: 'No CRM complexity, just fast CV creation for recruiters.',
      },
      {
        title: 'Ready to scale',
        text: 'Works for the web now and can later be packaged in Electron.',
      },
    ],
    outputPreviewAria: 'Output preview',
    draftCanvas: 'AI draft canvas',
    generatedOutline: 'Generated CV outline',
    ready: 'Ready',
    outputSections: [
      'Summary',
      'Core skills',
      'Experience',
      'Key achievements',
      'Education',
      'Languages',
    ],
    selectedPrompt: 'Selected prompt',
    recruitersGet: 'What recruiters get',
    recruiterSignals: [
      'Raw notes, LinkedIn copy, and file upload in one flow',
      'Prompt presets for different client formats',
      'Structured output ready to send without manual cleanup',
    ],
    workspaceEyebrow: 'MVP workspace',
    workspaceTitle: 'Compose the generation request',
    workspaceNote:
      'You can choose a preset now and replace it later with your own prompt library.',
    inputLabel: 'Input',
    candidateSourceTitle: 'Candidate source data',
    candidateInformation: 'Candidate information',
    candidatePlaceholder:
      'Paste LinkedIn profile, recruiter notes, interview summary, previous CV text, or any raw candidate information here.',
    optionalFile: 'Optional file',
    filePlaceholder: 'Upload CV, PDF, DOCX, or TXT',
    fileHelp:
      'Use file upload alone or combine it with pasted text for richer context.',
    extraContext: 'Extra context',
    extraContextHelp:
      'Vacancy notes and formatting instructions are counted separately.',
    promptPreset: 'Prompt preset',
    vacancyInstructions: 'Vacancy description or instructions',
    vacancyPlaceholder:
      'Add job description, client expectations, desired tone, or formatting rules for this CV.',
    generate: 'Generate CV',
    createPrompt: 'Create custom prompt',
    liveSummary: 'Live summary',
    requestOverview: 'Request overview',
    currentSetup: 'Current setup',
    promptLabel: 'Prompt',
    candidateTextLabel: 'Candidate text',
    attachedFileLabel: 'Attached file',
    extraInstructionsLabel: 'Instructions',
    notAddedYet: 'Not added yet',
    noFileSelected: 'No file selected',
    noneYet: 'None yet',
    promptBehavior: 'Prompt behavior',
    idealOutput: 'Ideal output',
    idealOutputSteps: [
      'A compact recruiter-friendly summary at the top.',
      'Clean experience blocks with measurable impact.',
      'A polished structure ready for client review or export.',
    ],
    promptPresets: [
      {
        id: 'clean',
        label: 'Clean CV',
        tone: 'Universal',
        description: 'Focused on clarity, structure, and fast delivery to clients.',
      },
      {
        id: 'executive',
        label: 'Executive',
        tone: 'Premium',
        description: 'Emphasizes leadership, business impact, and strategic scope.',
      },
      {
        id: 'tech',
        label: 'Tech Match',
        tone: 'Precise',
        description: 'Highlights stack, architecture, and role-fit for tech hiring.',
      },
    ],
  },
}

function getRussianPlural(count, one, few, many) {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return one
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return few
  }

  return many
}

function formatWords(locale, count) {
  if (locale === 'ru') {
    return `${count} ${getRussianPlural(count, 'слово', 'слова', 'слов')}`
  }

  return `${count} ${count === 1 ? 'word' : 'words'}`
}

function App() {
  const [locale, setLocale] = useState('ru')
  const [selectedPrompt, setSelectedPrompt] = useState('clean')
  const [candidateText, setCandidateText] = useState('')
  const [jobNotes, setJobNotes] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const t = translations[locale]
  const activePrompt =
    t.promptPresets.find((prompt) => prompt.id === selectedPrompt) ?? t.promptPresets[0]
  const candidateWords = candidateText.trim()
    ? candidateText.trim().split(/\s+/).length
    : 0
  const extraContextWords = jobNotes.trim() ? jobNotes.trim().split(/\s+/).length : 0

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">CV</span>
          <div>
            <strong>CV-maker</strong>
            <p>{t.topbarTag}</p>
          </div>
        </div>

        <div className="locale-switch" aria-label={t.localeLabel}>
          {Object.entries(t.languages).map(([langCode, label]) => (
            <button
              key={langCode}
              type="button"
              className={langCode === locale ? 'locale-button active' : 'locale-button'}
              onClick={() => setLocale(langCode)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-metrics" aria-label={t.heroAria}>
            {t.heroMetrics.map((metric) => (
              <article key={metric.title}>
                <strong>{metric.title}</strong>
                <span>{metric.text}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-preview" aria-label={t.outputPreviewAria}>
          <div className="preview-card preview-card-primary">
            <div className="preview-card-header">
              <span className="status-dot" aria-hidden="true"></span>
              {t.draftCanvas}
            </div>
            <h2>{t.generatedOutline}</h2>
            <ul className="section-list">
              {t.outputSections.map((section) => (
                <li key={section}>
                  <span>{section}</span>
                  <strong>{t.ready}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="preview-stack">
            <div className="preview-card">
              <p className="mini-label">{t.selectedPrompt}</p>
              <strong>{activePrompt.label}</strong>
              <p>{activePrompt.description}</p>
            </div>
            <div className="preview-card">
              <p className="mini-label">{t.recruitersGet}</p>
              <ul className="signal-list">
                {t.recruiterSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="workspace">
        <div className="workspace-header">
          <div>
            <p className="eyebrow">{t.workspaceEyebrow}</p>
            <h2>{t.workspaceTitle}</h2>
          </div>
          <p className="workspace-note">{t.workspaceNote}</p>
        </div>

        <div className="workspace-grid">
          <section className="panel panel-form" aria-labelledby="input-title">
            <div className="panel-heading">
              <div>
                <p className="mini-label">{t.inputLabel}</p>
                <h3 id="input-title">{t.candidateSourceTitle}</h3>
              </div>
              <span className="panel-pill">{formatWords(locale, candidateWords)}</span>
            </div>

            <label className="field">
              <span>{t.candidateInformation}</span>
              <textarea
                value={candidateText}
                onChange={(event) => setCandidateText(event.target.value)}
                placeholder={t.candidatePlaceholder}
              />
            </label>

            <div className="upload-grid">
              <label className="upload-card">
                <input
                  type="file"
                  onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
                />
                <span className="upload-kicker">{t.optionalFile}</span>
                <strong>{selectedFile ? selectedFile.name : t.filePlaceholder}</strong>
                <p>{t.fileHelp}</p>
              </label>

              <div className="context-card">
                <p className="mini-label">{t.extraContext}</p>
                <strong>{formatWords(locale, extraContextWords)}</strong>
                <p>{t.extraContextHelp}</p>
              </div>
            </div>

            <div className="field">
              <span>{t.promptPreset}</span>
              <div className="prompt-grid">
                {t.promptPresets.map((prompt) => (
                  <button
                    key={prompt.id}
                    type="button"
                    className={prompt.id === selectedPrompt ? 'prompt-chip active' : 'prompt-chip'}
                    onClick={() => setSelectedPrompt(prompt.id)}
                  >
                    <strong>{prompt.label}</strong>
                    <small>{prompt.tone}</small>
                  </button>
                ))}
              </div>
            </div>

            <label className="field">
              <span>{t.vacancyInstructions}</span>
              <textarea
                className="textarea-compact"
                value={jobNotes}
                onChange={(event) => setJobNotes(event.target.value)}
                placeholder={t.vacancyPlaceholder}
              />
            </label>

            <div className="action-row">
              <button type="button" className="primary-button">
                {t.generate}
              </button>
              <button type="button" className="secondary-button">
                {t.createPrompt}
              </button>
            </div>
          </section>

          <aside className="panel panel-sidebar" aria-labelledby="summary-title">
            <div className="panel-heading">
              <div>
                <p className="mini-label">{t.liveSummary}</p>
                <h3 id="summary-title">{t.requestOverview}</h3>
              </div>
            </div>

            <div className="summary-card">
              <p className="mini-label">{t.currentSetup}</p>
              <dl className="summary-list">
                <div>
                  <dt>{t.promptLabel}</dt>
                  <dd>{activePrompt.label}</dd>
                </div>
                <div>
                  <dt>{t.candidateTextLabel}</dt>
                  <dd>
                    {candidateWords > 0
                      ? formatWords(locale, candidateWords)
                      : t.notAddedYet}
                  </dd>
                </div>
                <div>
                  <dt>{t.attachedFileLabel}</dt>
                  <dd>{selectedFile ? selectedFile.name : t.noFileSelected}</dd>
                </div>
                <div>
                  <dt>{t.extraInstructionsLabel}</dt>
                  <dd>
                    {extraContextWords > 0
                      ? formatWords(locale, extraContextWords)
                      : t.noneYet}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="summary-card accent-card">
              <p className="mini-label">{t.promptBehavior}</p>
              <strong>{activePrompt.tone}</strong>
              <p>{activePrompt.description}</p>
            </div>

            <div className="summary-card">
              <p className="mini-label">{t.idealOutput}</p>
              <ol className="flow-list">
                {t.idealOutputSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
