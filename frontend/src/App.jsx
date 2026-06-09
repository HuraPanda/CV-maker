import { useEffect, useState } from 'react'
import './App.css'

const translations = {
  ru: {
    localeLabel: 'Язык',
    themeLabel: 'Тема',
    planLabel: 'Тариф',
    languages: {
      ru: 'RU',
      en: 'EN',
    },
    themes: {
      light: 'Light',
      dark: 'Dark',
    },
    plans: {
      free: 'Free',
      premium: 'Premium',
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
        title: 'Premium-расширение',
        text: 'Кастомные промпты для рекрутеров, которым нужен свой формат подачи.',
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
    selectedPrompt: 'Активный режим промпта',
    recruitersGet: 'Что получает рекрутер',
    recruiterSignals: [
      'Сырые заметки, LinkedIn и файл в одном сценарии',
      'Пресеты промптов под разные клиентские запросы',
      'Premium-режим с кастомной инструкцией под конкретного клиента',
    ],
    workspaceEyebrow: 'Рабочая зона MVP',
    workspaceTitle: 'Соберите запрос на генерацию',
    workspaceNote:
      'Сейчас можно работать с готовыми пресетами, а в Premium переключаться на собственный кастомный промпт.',
    planFreeNote:
      'В Free доступны готовые пресеты. Кастомный промпт заблокирован до Premium.',
    planPremiumNote:
      'В Premium можно писать собственный промпт и адаптировать результат под клиента.',
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
    customPromptEyebrow: 'Premium feature',
    customPromptTitle: 'Свой кастомный промпт',
    customPromptFieldLabel: 'Текст кастомного промпта',
    customPromptPlaceholder:
      'Например: сделай CV более executive-style, усили достижения цифрами, выдели международный опыт и адаптируй тон под клиента.',
    customPromptEnabledText:
      'Ваш кастомный промпт будет дополнять или полностью заменять выбранный пресет при генерации.',
    customPromptLockedText:
      'Создание собственного промпта доступно только в Premium-плане.',
    customPromptUpgradeHint:
      'После апгрейда можно хранить и использовать индивидуальные шаблоны под разных клиентов.',
    customPromptActiveLabel: 'Кастомный промпт',
    customPromptSummary: 'Используется собственная инструкция.',
    presetPromptLabel: 'Пресет',
    generate: 'Сгенерировать CV',
    savePromptTemplate: 'Сохранить шаблон',
    unlockPremium: 'Открыть Premium',
    liveSummary: 'Живая сводка',
    requestOverview: 'Обзор текущего запроса',
    currentSetup: 'Текущая конфигурация',
    planCurrentLabel: 'Тариф',
    promptLabel: 'Промпт',
    promptModeLabel: 'Режим',
    customPromptLabel: 'Кастомный промпт',
    candidateTextLabel: 'Текст кандидата',
    attachedFileLabel: 'Файл',
    extraInstructionsLabel: 'Инструкции',
    notAddedYet: 'Пока не добавлено',
    noFileSelected: 'Файл не выбран',
    noneYet: 'Пока нет',
    disabledForFree: 'Недоступно на Free',
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
    localeLabel: 'Language',
    themeLabel: 'Theme',
    planLabel: 'Plan',
    languages: {
      ru: 'RU',
      en: 'EN',
    },
    themes: {
      light: 'Light',
      dark: 'Dark',
    },
    plans: {
      free: 'Free',
      premium: 'Premium',
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
        title: 'Premium expansion',
        text: 'Custom prompts for recruiters who need their own delivery format.',
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
    selectedPrompt: 'Active prompt mode',
    recruitersGet: 'What recruiters get',
    recruiterSignals: [
      'Raw notes, LinkedIn copy, and file upload in one flow',
      'Prompt presets for different client formats',
      'Premium mode with custom instructions for a specific client',
    ],
    workspaceEyebrow: 'MVP workspace',
    workspaceTitle: 'Compose the generation request',
    workspaceNote:
      'You can work with ready-made presets now and switch to your own custom prompt in Premium.',
    planFreeNote:
      'Free includes prompt presets. Custom prompt creation is locked until Premium.',
    planPremiumNote:
      'Premium lets you write your own prompt and adapt the result for each client.',
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
    customPromptEyebrow: 'Premium feature',
    customPromptTitle: 'Custom prompt',
    customPromptFieldLabel: 'Custom prompt text',
    customPromptPlaceholder:
      'For example: make the CV feel more executive, amplify quantified impact, highlight international exposure, and adapt the tone for the client.',
    customPromptEnabledText:
      'Your custom prompt will complement or replace the selected preset during generation.',
    customPromptLockedText:
      'Creating your own prompt is available only on the Premium plan.',
    customPromptUpgradeHint:
      'After upgrading, you can keep tailored templates for different clients and roles.',
    customPromptActiveLabel: 'Custom prompt',
    customPromptSummary: 'A personal instruction is currently active.',
    presetPromptLabel: 'Preset',
    generate: 'Generate CV',
    savePromptTemplate: 'Save template',
    unlockPremium: 'Unlock Premium',
    liveSummary: 'Live summary',
    requestOverview: 'Request overview',
    currentSetup: 'Current setup',
    planCurrentLabel: 'Plan',
    promptLabel: 'Prompt',
    promptModeLabel: 'Mode',
    customPromptLabel: 'Custom prompt',
    candidateTextLabel: 'Candidate text',
    attachedFileLabel: 'Attached file',
    extraInstructionsLabel: 'Instructions',
    notAddedYet: 'Not added yet',
    noFileSelected: 'No file selected',
    noneYet: 'None yet',
    disabledForFree: 'Unavailable on Free',
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

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('cv-maker-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [locale, setLocale] = useState('ru')
  const [theme, setTheme] = useState(getInitialTheme)
  const [plan, setPlan] = useState('free')
  const [selectedPrompt, setSelectedPrompt] = useState('clean')
  const [candidateText, setCandidateText] = useState('')
  const [jobNotes, setJobNotes] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const t = translations[locale]
  const activePreset =
    t.promptPresets.find((prompt) => prompt.id === selectedPrompt) ?? t.promptPresets[0]
  const candidateWords = candidateText.trim()
    ? candidateText.trim().split(/\s+/).length
    : 0
  const extraContextWords = jobNotes.trim() ? jobNotes.trim().split(/\s+/).length : 0
  const customPromptWords = customPrompt.trim() ? customPrompt.trim().split(/\s+/).length : 0
  const isCustomPromptActive = plan === 'premium' && customPromptWords > 0
  const activePromptTitle = isCustomPromptActive
    ? t.customPromptActiveLabel
    : activePreset.label
  const activePromptDescription = isCustomPromptActive
    ? `${t.customPromptSummary} ${formatWords(locale, customPromptWords)}.`
    : activePreset.description

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('cv-maker-theme', theme)
  }, [theme])

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

        <div className="control-cluster">
          <div className="toggle-group" aria-label={t.themeLabel}>
            {Object.entries(t.themes).map(([themeCode, label]) => (
              <button
                key={themeCode}
                type="button"
                className={themeCode === theme ? 'toggle-button active' : 'toggle-button'}
                onClick={() => setTheme(themeCode)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="toggle-group" aria-label={t.localeLabel}>
            {Object.entries(t.languages).map(([langCode, label]) => (
              <button
                key={langCode}
                type="button"
                className={langCode === locale ? 'toggle-button active' : 'toggle-button'}
                onClick={() => setLocale(langCode)}
              >
                {label}
              </button>
            ))}
          </div>
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
              <strong>{activePromptTitle}</strong>
              <p>{activePromptDescription}</p>
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

          <div className="workspace-tools">
            <p className="workspace-note">{t.workspaceNote}</p>
            <div className="plan-card">
              <p className="mini-label">{t.planLabel}</p>
              <div className="toggle-group compact">
                {Object.entries(t.plans).map(([planCode, label]) => (
                  <button
                    key={planCode}
                    type="button"
                    className={planCode === plan ? 'toggle-button active' : 'toggle-button'}
                    onClick={() => setPlan(planCode)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="helper-text">
                {plan === 'premium' ? t.planPremiumNote : t.planFreeNote}
              </p>
            </div>
          </div>
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

            <section
              className={plan === 'premium' ? 'premium-card active' : 'premium-card locked'}
              aria-labelledby="premium-title"
            >
              <div className="premium-header">
                <div>
                  <p className="mini-label">{t.customPromptEyebrow}</p>
                  <h3 id="premium-title">{t.customPromptTitle}</h3>
                </div>
                <span className="premium-badge">{t.plans[plan]}</span>
              </div>

              <p className="premium-text">
                {plan === 'premium'
                  ? t.customPromptEnabledText
                  : t.customPromptLockedText}
              </p>

              {plan === 'premium' ? (
                <label className="field">
                  <span>{t.customPromptFieldLabel}</span>
                  <textarea
                    className="textarea-compact premium-textarea"
                    value={customPrompt}
                    onChange={(event) => setCustomPrompt(event.target.value)}
                    placeholder={t.customPromptPlaceholder}
                  />
                </label>
              ) : (
                <div className="locked-state">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => setPlan('premium')}
                  >
                    {t.unlockPremium}
                  </button>
                  <span className="helper-text">{t.customPromptUpgradeHint}</span>
                </div>
              )}
            </section>

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
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  if (plan !== 'premium') {
                    setPlan('premium')
                  }
                }}
              >
                {plan === 'premium' ? t.savePromptTemplate : t.unlockPremium}
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
                  <dt>{t.planCurrentLabel}</dt>
                  <dd>{t.plans[plan]}</dd>
                </div>
                <div>
                  <dt>{t.promptLabel}</dt>
                  <dd>{activePromptTitle}</dd>
                </div>
                <div>
                  <dt>{t.promptModeLabel}</dt>
                  <dd>{isCustomPromptActive ? t.customPromptActiveLabel : t.presetPromptLabel}</dd>
                </div>
                <div>
                  <dt>{t.customPromptLabel}</dt>
                  <dd>
                    {plan === 'premium'
                      ? customPromptWords > 0
                        ? formatWords(locale, customPromptWords)
                        : t.noneYet
                      : t.disabledForFree}
                  </dd>
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
              <strong>{isCustomPromptActive ? t.customPromptActiveLabel : activePreset.tone}</strong>
              <p>{activePromptDescription}</p>
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
