import { useEffect, useMemo, useState } from 'react'
import './App.css'
import articlesData from './data/articles'

const content = {
  pt: {
    nav: ['Início', 'Projetos', 'Currículo', 'Pensamentos', 'Contato'],
    hero: {
      greeting: 'Hello Friend',
      name: 'Victor Daniel',
      role: 'Desenvolvedor de Software',
      desc:
        'Sou desenvolvedor de software com foco em .NET, C# e SQL Server, apaixonado por resolver problemas reais especialmente aqueles que começam com “isso sempre funcionou”. Trabalho tanto com sistemas legados quanto com projetos modernos, sempre buscando código limpo, soluções práticas e aprendizado constante. Quando não estou programando, provavelmente estou estudando alguma tecnologia nova, organizando ideias de projetos pessoais ou explicando programação como se fosse simples (mesmo sabendo que não é).',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Baixar Currículo',
      badge: 'Disponível para projetos',
    },
    projects: {
      title: 'Projetos',
      desc:
        'Estou organizando meus projetos para publicar aqui. Em breve, novidades.',
      items: [
        {
          title: 'Em breve',
          tags: ['Portfólio'],
          desc: 'Ainda sem projetos públicos. Assim que subir algo coloco aqui.',
          links: [{ label: 'GitHub', href: 'https://github.com/victordnd' }],
        },
      ],
    },
    resume: {
      title: 'Currículo',
      desc:
        'Resumo rápido das minhas experiências, habilidades e objetivos profissionais.',
      highlightsLabel: 'Destaques',
      stackLabel: 'Stack',
      highlights: [
        'Experiência com .NET, C# e SQL Server em ambientes críticos',
        'Atuação com sistemas legados e projetos modernos',
        'Código limpo, soluções práticas e aprendizado constante',
      ],
      stack: [
        '.NET',
        'C#',
        'SQL Server',
        'Oracle',
        'Python',
        'Azure',
        'React',
        'APIs',
        'Git',
      ],
      downloadLabel: 'Currículo (PDF)',
      downloadHref: '/Cv.pdf',
    },
    articles: {
      title: 'Pensamentos Não Commitados',
      desc:
        'Ideias, aprendizados e textos que guardo por aqui. Leve, direto e sem formalidade.',
      readLabel: 'Ler',
      cta: '',
    },
    contact: {
      title: 'Contato',
      desc: 'Vamos conversar sobre projetos, freelas ou vagas.',
      links: [
        { label: 'Email', href: 'mailto:victorddcl@gmail.com' },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/victor-daniel-da-costa-l-1ab441102',
        },
        { label: 'GitHub', href: 'https://github.com/victordnd' },
      ],
    },
    footer: 'Feito com React e Vite. © 2026',
    photoLabel: 'Foto',
    emptyArticles: 'Sem artigos publicados por enquanto.',
    carouselPrev: 'Anterior',
    carouselNext: 'Próximo',
    backLabel: 'Voltar',
    noticeTitle: 'Aviso',
    noticeText: 'Quer aprender a fazer um site assim? Acesse meu GitHub.',
    noticeClose: 'Fechar',
  },
  en: {
    nav: ['Home', 'Projects', 'Resume', 'Thoughts', 'Contact'],
    hero: {
      greeting: 'Hello Friend',
      name: 'Victor Daniel',
      role: 'Software Developer',
      desc:
        'I am a software developer focused on .NET, C# and SQL Server, passionate about solving real-world problems, especially the ones that start with “this always worked.” I work with both legacy systems and modern projects, always aiming for clean code, practical solutions, and continuous learning. When I am not coding, I am probably studying a new technology, organizing ideas for personal projects, or explaining programming like it is simple (even knowing it is not).',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Download Resume',
      badge: 'Open to projects',
    },
    projects: {
      title: 'Projects',
      desc: 'I am organizing my projects to publish here. Coming soon.',
      items: [
        {
          title: 'Coming soon',
          tags: ['Portfolio'],
          desc: 'No public projects yet. As soon as I publish one will appear here.',
          links: [{ label: 'GitHub', href: 'https://github.com/victordnd' }],
        },
      ],
    },
    resume: {
      title: 'Resume',
      desc: 'Quick snapshot of my experience, skills, and goals.',
      highlightsLabel: 'Highlights',
      stackLabel: 'Stack',
      highlights: [
        'Experience with .NET, C# and SQL Server in critical environments',
        'Work across legacy systems and modern projects',
        'Clean code, practical solutions, and continuous learning',
      ],
      stack: [
        '.NET',
        'C#',
        'SQL Server',
        'Oracle',
        'Python',
        'Azure',
        'React',
        'APIs',
        'Git',
      ],
      downloadLabel: 'Resume (PDF)',
      downloadHref: '/Cv.pdf',
    },
    articles: {
      title: 'Uncommitted Thoughts',
      desc: 'Ideas, learnings, and short texts. Light, direct, and informal.',
      readLabel: 'Read',
      cta: '',
    },
    contact: {
      title: 'Contact',
      desc: 'Let’s talk about projects, freelance work, or roles.',
      links: [
        { label: 'Email', href: 'mailto:victorddcl@gmail.com' },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/victor-daniel-da-costa-l-1ab441102',
        },
        { label: 'GitHub', href: 'https://github.com/victordnd' },
      ],
    },
    footer: 'Built with React and Vite. © 2026',
    photoLabel: 'Photo',
    emptyArticles: 'No articles published yet.',
    carouselPrev: 'Previous',
    carouselNext: 'Next',
    backLabel: 'Back',
    noticeTitle: 'Notice',
    noticeText: 'Want to learn how to build a site like this? Visit my GitHub.',
    noticeClose: 'Close',
  },
}

function App() {
  const [lang, setLang] = useState('pt')
  const [typed, setTyped] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [activeArticleId, setActiveArticleId] = useState(() => {
    if (typeof window === 'undefined') return null
    const params = new URLSearchParams(window.location.search)
    return params.get('article')
  })
  const [showNotice, setShowNotice] = useState(false)

  const t = useMemo(() => content[lang], [lang])
  const articles = useMemo(
    () =>
      articlesData.filter((article) => article.lang === lang && article.published),
    [lang],
  )
  const activeArticle = useMemo(
    () => articlesData.find((article) => article.id === activeArticleId),
    [activeArticleId],
  )

  const visibleCount = useMemo(() => {
    if (articles.length === 0) {
      return 0
    }
    return Math.min(3, articles.length)
  }, [articles.length])

  const visibleArticles = useMemo(() => {
    if (articles.length === 0 || visibleCount === 0) {
      return []
    }
    return Array.from({ length: visibleCount }, (_, index) => {
      const position = (startIndex + index) % articles.length
      return articles[position]
    })
  }, [articles, startIndex, visibleCount])

  useEffect(() => {
    let index = 0
    const greeting = t.hero.greeting
    setTyped('')

    const interval = setInterval(() => {
      index += 1
      setTyped(greeting.slice(0, index))
      if (index >= greeting.length) {
        clearInterval(interval)
      }
    }, 90)

    return () => clearInterval(interval)
  }, [t.hero.greeting])

  useEffect(() => {
    setStartIndex(0)
  }, [lang])

  useEffect(() => {
    if (!activeArticleId) return
    const current = articlesData.find((article) => article.id === activeArticleId)
    if (!current || current.lang === lang) return
    const fallback = articlesData.find(
      (article) => article.groupId === current.groupId && article.lang === lang,
    )
    if (fallback) {
      setActiveArticleId(fallback.id)
      const params = new URLSearchParams(window.location.search)
      params.set('article', fallback.id)
      const next = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState({}, '', next)
    }
  }, [activeArticleId, lang])

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setActiveArticleId(params.get('article'))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const showPopup = () => {
      setShowNotice(true)
    }

    const handleContextMenu = (event) => {
      event.preventDefault()
      showPopup()
    }

    const handleCopy = (event) => {
      event.preventDefault()
      showPopup()
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
    }
  }, [])

  const handlePrev = () => {
    if (articles.length === 0) return
    setStartIndex((current) =>
      (current - 1 + articles.length) % articles.length,
    )
  }

  const handleNext = () => {
    if (articles.length === 0) return
    setStartIndex((current) => (current + 1) % articles.length)
  }

  const renderInline = (text) => {
    if (!text) return null
    const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
    const parts = text.split(pattern).filter(Boolean)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`b-${index}`}>{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={`c-${index}`}>{part.slice(1, -1)}</code>
      }
      if (part.startsWith('[')) {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <a key={`l-${index}`} href={match[2]} target="_blank" rel="noreferrer">
              {match[1]}
            </a>
          )
        }
      }
      return <span key={`t-${index}`}>{part}</span>
    })
  }

  const renderArticleContent = (raw) => {
    if (!raw) return null
    const lines = raw.trim().split('\n')
    const blocks = []
    let inCode = false
    let codeLines = []
    let paragraph = []
    let listItems = []

    const flushParagraph = () => {
      if (paragraph.length === 0) return
      blocks.push({ type: 'p', text: paragraph.join(' ') })
      paragraph = []
    }

    const flushList = () => {
      if (listItems.length === 0) return
      blocks.push({ type: 'ul', items: listItems })
      listItems = []
    }

    lines.forEach((rawLine) => {
      const line = rawLine.trimEnd()
      if (line.trim().startsWith('```')) {
        if (inCode) {
          blocks.push({ type: 'code', text: codeLines.join('\n') })
          codeLines = []
          inCode = false
        } else {
          flushParagraph()
          flushList()
          inCode = true
        }
        return
      }

      if (inCode) {
        codeLines.push(rawLine.replace(/\r$/, ''))
        return
      }

      if (!line.trim()) {
        flushParagraph()
        flushList()
        return
      }

      if (line.startsWith('## ')) {
        flushParagraph()
        flushList()
        blocks.push({ type: 'h2', text: line.slice(3).trim() })
        return
      }

      if (line.startsWith('### ')) {
        flushParagraph()
        flushList()
        blocks.push({ type: 'h3', text: line.slice(4).trim() })
        return
      }

      if (line.startsWith('- ')) {
        flushParagraph()
        listItems.push(line.slice(2).trim())
        return
      }

      paragraph.push(line.trim())
    })

    flushParagraph()
    flushList()
    if (codeLines.length > 0) {
      blocks.push({ type: 'code', text: codeLines.join('\n') })
    }

    return blocks.map((block, index) => {
      if (block.type === 'p') {
        return <p key={`p-${index}`}>{renderInline(block.text)}</p>
      }
      if (block.type === 'h2') {
        return <h3 key={`h2-${index}`}>{renderInline(block.text)}</h3>
      }
      if (block.type === 'h3') {
        return <h4 key={`h3-${index}`}>{renderInline(block.text)}</h4>
      }
      if (block.type === 'ul') {
        return (
          <ul key={`ul-${index}`}>
            {block.items.map((item) => (
              <li key={item}>{renderInline(item)}</li>
            ))}
          </ul>
        )
      }
      if (block.type === 'code') {
        return (
          <pre key={`code-${index}`} className="code-block">
            <code>{block.text}</code>
          </pre>
        )
      }
      return null
    })
  }

  const openArticle = (articleId) => {
    setActiveArticleId(articleId)
    const params = new URLSearchParams(window.location.search)
    params.set('article', articleId)
    const next = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', next)
  }

  const closeArticle = () => {
    setActiveArticleId(null)
    const params = new URLSearchParams(window.location.search)
    params.delete('article')
    const next = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname
    window.history.pushState({}, '', next)
  }

  return (
    <div className="app">
      {showNotice ? (
        <div className="notice-overlay" role="dialog" aria-modal="true">
          <div className="notice-card">
            <h3>{t.noticeTitle}</h3>
            <p>{t.noticeText}</p>
            <a
              className="btn primary"
              href="https://github.com/victordnd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <button
              className="btn ghost"
              type="button"
              onClick={() => setShowNotice(false)}
            >
              {t.noticeClose}
            </button>
          </div>
        </div>
      ) : null}
      <header className="header">
        <div className="logo">RETRO//</div>
        <nav className="nav">
          {t.nav.map((label, index) => (
            <a
              key={label}
              href={`#sec-${index}`}
              onClick={() => {
                if (activeArticleId) closeArticle()
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="lang-toggle">
          <button
            className={lang === 'pt' ? 'active' : ''}
            onClick={() => setLang('pt')}
            type="button"
          >
            PT
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
            type="button"
          >
            EN
          </button>
        </div>
      </header>

      <main>
        {activeArticle ? (
          <section className="section article-page">
            <div className="section-header">
              <h2>{activeArticle.title}</h2>
              <p className="date">{activeArticle.date}</p>
            </div>
            <div className="article-detail">
              {activeArticle.image ? (
                <img src={activeArticle.image} alt={activeArticle.title} />
              ) : (
                <div className="article-placeholder large">{t.photoLabel}</div>
              )}
              <div className="article-content">
                {renderArticleContent(activeArticle.content)}
              </div>
              <button className="btn ghost" type="button" onClick={closeArticle}>
                {t.backLabel}
              </button>
            </div>
          </section>
        ) : (
          <>
            <section className="hero" id="sec-0">
              <div className="hero-content">
                <span className="badge">{t.hero.badge}</span>
                <p className="kicker typewriter">{typed}</p>
                <h1>
                  {t.hero.name}
                  <span>{t.hero.role}</span>
                </h1>
                <p className="description">{t.hero.desc}</p>
                <div className="hero-actions">
                  <a className="btn primary" href="#sec-1">
                    {t.hero.ctaPrimary}
                  </a>
                  <a
                    className="btn ghost"
                    href={t.resume.downloadHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <div className="avatar">
                  <img src="/avatar.jpg" alt={t.hero.name} />
                </div>
                <div className="scanlines" aria-hidden="true" />
              </div>
            </section>

            <section className="section" id="sec-1">
              <div className="section-header">
                <h2>{t.projects.title}</h2>
                <p>{t.projects.desc}</p>
              </div>
              <div className="grid">
                {t.projects.items.map((item) => (
                  <article key={item.title} className="card">
                    <div className="card-title">
                      <h3>{item.title}</h3>
                      <div className="tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p>{item.desc}</p>
                    <div className="links">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section resume" id="sec-2">
              <div className="section-header">
                <h2>{t.resume.title}</h2>
                <p>{t.resume.desc}</p>
              </div>
              <div className="resume-grid">
                <div className="panel">
                  <h3>{t.resume.highlightsLabel}</h3>
                  <ul>
                    {t.resume.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="panel">
                  <h3>{t.resume.stackLabel}</h3>
                  <div className="pill-row">
                    {t.resume.stack.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    className="btn primary"
                    href={t.resume.downloadHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.resume.downloadLabel}
                  </a>
                </div>
              </div>
            </section>

            <section className="section" id="sec-3">
              <div className="section-header">
                <h2>{t.articles.title}</h2>
                <p>{t.articles.desc}</p>
              </div>
              {articles.length === 0 ? (
                <p className="articles-empty">{t.emptyArticles}</p>
              ) : (
                <div className="articles-carousel">
                  <div className="carousel-track">
                    {visibleArticles.map((item) => (
                      <article key={item.id} className="card article-card">
                        <div className="article-media">
                          {item.image ? (
                            <img src={item.image} alt={item.title} />
                          ) : (
                            <div className="article-placeholder">{t.photoLabel}</div>
                          )}
                        </div>
                        <div className="article-body">
                          <span className="date">{item.date}</span>
                          <h3>{item.title}</h3>
                          <p>{item.excerpt}</p>
                          <button
                            className="link-button"
                            type="button"
                            onClick={() => openArticle(item.id)}
                          >
                            {t.articles.readLabel}
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="carousel-controls">
                    <button type="button" onClick={handlePrev}>
                      {t.carouselPrev}
                    </button>
                    <button type="button" onClick={handleNext}>
                      {t.carouselNext}
                    </button>
                  </div>
                </div>
              )}
              <p className="articles-cta">{t.articles.cta}</p>
            </section>

            <section className="section contact" id="sec-4">
              <div className="section-header">
                <h2>{t.contact.title}</h2>
                <p>{t.contact.desc}</p>
              </div>
              <div className="contact-links">
                {t.contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
