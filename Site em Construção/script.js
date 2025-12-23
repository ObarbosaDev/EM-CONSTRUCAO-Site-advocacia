// ====================================================
// SCRIPT PINHEIRO BARBOSA ADVOCACIA - ULTRA PREMIUM
// Comentado completamente em Português
// ====================================================

// DADOS DOS SERVIÇOS COM DESCRIÇÕES DETALHADAS
const serviceDetails = {
  "direito-imobiliario": {
    title: "Direito Imobiliário",
    subtitle: "Especialização completa em propriedade e imóveis",
    content: `
      <h4>O que oferecemos:</h4>
      <ul>
        <li>Consultoria em compra e venda de imóveis</li>
        <li>Regularização de propriedades</li>
        <li>Negociações de locação e aluguel</li>
        <li>Resolução de conflitos imobiliários</li>
        <li>Análise de documentação e títulos</li>
      </ul>
      <h4>Nossa Expertise:</h4>
      <ul>
        <li>Mais de 15 anos de experiência</li>
        <li>Taxa de sucesso de 98% em disputas</li>
        <li>Conhecimento profundo das leis imobiliárias</li>
        <li>Atuação em imóveis residenciais e comerciais</li>
      </ul>
    `,
  },
  "direito-familia": {
    title: "Direito de Família",
    subtitle: "Proteção de direitos familiares com sensibilidade",
    content: `
      <h4>Áreas de atuação:</h4>
      <ul>
        <li>Divórcio consensual e litigioso</li>
        <li>Guarda e direito de visitação</li>
        <li>Pensão alimentícia</li>
        <li>Partilha de bens</li>
        <li>Processos sucessórios</li>
      </ul>
      <h4>Nosso Diferencial:</h4>
      <ul>
        <li>Abordagem humanizada e profissional</li>
        <li>Mediação para soluções pacíficas</li>
        <li>Proteção total dos seus direitos</li>
        <li>Acompanhamento completo do processo</li>
      </ul>
    `,
  },
  "direito-contratual": {
    title: "Direito Contratual",
    subtitle: "Proteção total em contratos e negociações",
    content: `
      <h4>Serviços prestados:</h4>
      <ul>
        <li>Elaboração de contratos personalizados</li>
        <li>Revisão e análise de cláusulas</li>
        <li>Renegociação de termos</li>
        <li>Consultoria em acordos comerciais</li>
        <li>Proteção contra fraudes contratuais</li>
      </ul>
      <h4>Experiência:</h4>
      <ul>
        <li>Contratos comerciais complexos</li>
        <li>Acordos nacionais e internacionais</li>
        <li>Proteção de direitos contratualmente</li>
        <li>Validação legal de documentos</li>
      </ul>
    `,
  },
  "responsabilidade-civil": {
    title: "Responsabilidade Civil",
    subtitle: "Indenizações e reparação de danos",
    content: `
      <h4>Áreas de atuação:</h4>
      <ul>
        <li>Indenização por danos materiais</li>
        <li>Reparação de danos morais</li>
        <li>Acidentes e sinistros</li>
        <li>Responsabilidade de terceiros</li>
        <li>Cobranças de indenizações</li>
      </ul>
      <h4>Nossos resultados:</h4>
      <ul>
        <li>Recuperação média de R$ 500 mil por caso</li>
        <li>Taxa de sucesso de 95%</li>
        <li>Processos ágeis e eficientes</li>
        <li>Negociação com seguradoras</li>
      </ul>
    `,
  },
  "direito-consumidor": {
    title: "Direito do Consumidor",
    subtitle: "Defesa completa dos direitos do consumidor",
    content: `
      <h4>Proteção oferecida:</h4>
      <ul>
        <li>Defesa contra práticas abusivas</li>
        <li>Cobranças indevidas</li>
        <li>Produtos e serviços defeituosos</li>
        <li>Publicidade enganosa</li>
        <li>Cobranças judiciais</li>
      </ul>
      <h4>Vantagens:</h4>
      <ul>
        <li>Acesso gratuito a primeira consulta</li>
        <li>Atuação ágil e resultado garantido</li>
        <li>Proteção contra retalições</li>
        <li>Indenizações por dano moral</li>
      </ul>
    `,
  },
  "mediacao-conciliacao": {
    title: "Mediação e Conciliação",
    subtitle: "Resolução alternativa e rápida de conflitos",
    content: `
      <h4>Benefícios da mediação:</h4>
      <ul>
        <li>Solução mais rápida que a justiça tradicional</li>
        <li>Custos significativamente menores</li>
        <li>Preservação de relacionamentos</li>
        <li>Acordos personalizados</li>
        <li>Confidencialidade garantida</li>
      </ul>
      <h4>Processos cobertos:</h4>
      <ul>
        <li>Conflitos comerciais</li>
        <li>Disputas familiares</li>
        <li>Questões imobiliárias</li>
        <li>Negociações contratuais</li>
      </ul>
    `,
  },
}

const abrirWhatsAppConsulta = (nome, email, telefone, servico, mensagem) => {
  const numeroWhatsApp = "5561996123401"
  const texto = `Olá! Tenho interesse em agendar uma consulta.

*DADOS DO CLIENTE:*
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Serviço: ${servico}

*MENSAGEM:*
${mensagem}`
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`
  window.open(urlWhatsApp, "_blank")
}

const abrirWhatsAppCandidatura = (cargo) => {
  const numeroWhatsApp = "5561996123401"
  const texto = `Olá! Gostaria de me candidatar para a vaga de ${cargo} na Pinheiro Barbosa Advocacia.`
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`
  window.open(urlWhatsApp, "_blank")
}

// Inicializa modal de detalhes de serviço com conteúdo dinâmico
const initServiceDetailModal = () => {
  // Seleciona todos os links de serviço
  const serviceLinks = document.querySelectorAll(".service-link")
  const detailModal = new window.bootstrap.Modal(document.getElementById("serviceDetailModal"))

  // Adiciona evento de clique em cada link
  serviceLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const serviceId = link.getAttribute("data-service-id")
      const serviceInfo = serviceDetails[serviceId]

      // Preenche o modal com informações do serviço
      if (serviceInfo) {
        document.getElementById("serviceTitle").textContent = serviceInfo.title
        document.getElementById("serviceSubtitle").textContent = serviceInfo.subtitle
        document.getElementById("serviceContent").innerHTML = serviceInfo.content
        detailModal.show()
      }
    })
  })
}

// Inicializa busca rápida com filtro inteligente
const initQuickSearch = () => {
  // Seleciona elementos de busca
  const searchBtn = document.getElementById("quickSearchBtn")
  const searchModal = new window.bootstrap.Modal(document.getElementById("searchModal"))
  const searchInput = document.getElementById("searchInput")
  const searchResults = document.getElementById("searchResults")

  // Dados disponíveis para busca
  const searchData = [
    { title: "Direito Imobiliário", category: "Serviço", link: "#servicos" },
    { title: "Direito de Família", category: "Serviço", link: "#servicos" },
    {
      title: "Responsabilidade Civil",
      category: "Serviço",
      link: "#servicos",
    },
    { title: "Cases de Sucesso", category: "Cases", link: "#cases" },
    { title: "Depoimentos", category: "Depoimentos", link: "#depoimentos" },
    { title: "Agendar Consulta", category: "Ação", link: "#" },
    { title: "Sobre o Dr. Pinheiro", category: "Informações", link: "#sobre" },
    { title: "Contato", category: "Contato", link: "#contato" },
  ]

  // Abre modal de busca
  searchBtn.addEventListener("click", () => {
    searchModal.show()
    searchInput.focus()
  })

  // Filtra resultados conforme o usuário digita
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase()
    searchResults.innerHTML = ""

    if (query.length === 0) {
      return
    }

    // Busca por título ou categoria
    const results = searchData.filter(
      (item) => item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query),
    )

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="text-muted">Nenhum resultado encontrado</p>'
      return
    }

    // Renderiza resultados encontrados
    results.forEach((result) => {
      const resultItem = document.createElement("div")
      resultItem.className = "search-result-item"
      resultItem.innerHTML = `
        <strong>${result.title}</strong>
        <small class="d-block text-muted">${result.category}</small>
      `
      resultItem.addEventListener("click", () => {
        if (result.link.startsWith("#")) {
          const target = document.querySelector(result.link)
          if (target) {
            target.scrollIntoView({ behavior: "smooth" })
          }
        }
        searchModal.hide()
      })
      searchResults.appendChild(resultItem)
    })
  })
}

// Anima contadores de estatísticas com efeito de contagem
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-number")

  // Observer para animar quando elemento fica visível
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.getAttribute("data-count"))
          let current = 0
          const increment = target / 80
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              counter.textContent = target
              clearInterval(timer)
            } else {
              counter.textContent = Math.floor(current)
            }
          }, 16)
          observer.unobserve(counter)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => observer.observe(counter))
}

const initContactForm = () => {
  const contactForm = document.getElementById("contatoForm")
  if (!contactForm) return

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nome = document.querySelector('input[name="nome"]').value
    const email = document.querySelector('input[name="email"]').value
    const telefone = document.querySelector('input[name="telefone"]').value
    const servico = document.querySelector('select[name="servico"]').value
    const mensagem = document.querySelector('textarea[name="mensagem"]').value

    const modal = window.bootstrap.Modal.getInstance(document.getElementById("contatoModal"))
    if (modal) modal.hide()

    abrirWhatsAppConsulta(nome, email, telefone, servico, mensagem)

    showSuccessMessage("Redirecionando para WhatsApp...")
    contactForm.reset()
  })
}

// Mostra mensagem de sucesso flutuante
const showSuccessMessage = (message) => {
  const alertDiv = document.createElement("div")
  alertDiv.className = "alert alert-success alert-dismissible fade show premium-alert"
  alertDiv.style.cssText =
    "position: fixed; top: 120px; right: 20px; z-index: 10000; min-width: 320px; box-shadow: 0 10px 35px rgba(0,0,0,0.25);"
  alertDiv.innerHTML = `
    <i class="fas fa-check-circle me-2"></i>
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `
  document.body.appendChild(alertDiv)

  setTimeout(() => {
    alertDiv.remove()
  }, 5000)
}

// Mostra mensagem de erro flutuante
const showErrorMessage = (message) => {
  const alertDiv = document.createElement("div")
  alertDiv.className = "alert alert-danger alert-dismissible fade show premium-alert"
  alertDiv.style.cssText =
    "position: fixed; top: 120px; right: 20px; z-index: 10000; min-width: 320px; box-shadow: 0 10px 35px rgba(0,0,0,0.25);"
  alertDiv.innerHTML = `
    <i class="fas fa-exclamation-circle me-2"></i>
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `
  document.body.appendChild(alertDiv)

  setTimeout(() => {
    alertDiv.remove()
  }, 5000)
}

// Smooth scroll para links de âncora internos
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })
}

// Atualiza links da navbar conforme scroll (ativa automaticamente o link correspondente)
const updateNavLinks = () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-premium")
  const navbar = document.getElementById("mainNavbar")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })

    // Adiciona efeito de scroll ao navbar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Observer para animações de scroll em elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Inicializa indicadores de scroll (barra de progresso e botão voltar ao topo)
const initScrollIndicators = () => {
  const scrollIndicator = document.createElement("div")
  scrollIndicator.className = "scroll-indicator"
  scrollIndicator.innerHTML = '<i class="fas fa-arrow-up"></i>'
  document.body.appendChild(scrollIndicator)

  const scrollProgress = document.createElement("div")
  scrollProgress.className = "scroll-progress"
  document.body.appendChild(scrollProgress)

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    scrollProgress.style.width = scrollPercent + "%"

    // Mostra/esconde botão de voltar ao topo
    if (scrollTop > 300) {
      scrollIndicator.classList.add("show")
    } else {
      scrollIndicator.classList.remove("show")
    }
  })

  // Scroll suave ao topo
  scrollIndicator.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// ====================================================
// LOADING SCREEN PREMIUM
// ====================================================
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen")
  setTimeout(() => {
    loadingScreen.classList.add("hidden")
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 800)
  }, 2000)
})

// ====================================================
// CURSOR CUSTOMIZADO PREMIUM
// ====================================================
// const initCustomCursor = () => {
//   const cursor = document.getElementById("customCursor")
//   const cursorDot = document.getElementById("cursorDot")
//
//   let mouseX = 0,
//     mouseY = 0
//   let cursorX = 0,
//     cursorY = 0
//   let dotX = 0,
//     dotY = 0
//
//   document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX
//     mouseY = e.clientY
//   })
//
//   const animateCursor = () => {
//     // Suavização do cursor principal
//     cursorX += (mouseX - cursorX) * 0.15
//     cursorY += (mouseY - cursorY) * 0.15
//
//     // Suavização do ponto central
//     dotX += (mouseX - dotX) * 0.25
//     dotY += (mouseY - dotY) * 0.25
//
//     cursor.style.left = cursorX + "px"
//     cursor.style.top = cursorY + "px"
//     cursorDot.style.left = dotX + "px"
//     cursorDot.style.top = dotY + "px"
//
//     requestAnimationFrame(animateCursor)
//   }
//
//   animateCursor()
//
//   // Efeito hover em elementos interativos
//   const hoverElements = document.querySelectorAll(
//     "a, button, .magnetic-element, .service-card, .contact-box, .media-card",
//   )
//
//   hoverElements.forEach((el) => {
//     el.addEventListener("mouseenter", () => {
//       cursor.classList.add("hovering")
//       cursorDot.classList.add("hovering")
//     })
//
//     el.addEventListener("mouseleave", () => {
//       cursor.classList.remove("hovering")
//       cursorDot.classList.remove("hovering")
//     })
//   })
// }

// ====================================================
// PARTÍCULAS INTERATIVAS NO CANVAS
// ====================================================
const initParticles = () => {
  const canvas = document.getElementById("particleCanvas")
  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = 50
  const mouse = { x: 0, y: 0 }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 3 + 1
      this.speedX = Math.random() * 2 - 1
      this.speedY = Math.random() * 2 - 1
      this.color = `rgba(253, 220, 137, ${Math.random() * 0.5 + 0.2})`
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      // Interação com o mouse
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        this.x -= (dx / distance) * 2
        this.y -= (dy / distance) * 2
      }

      // Wrap around screen
      if (this.x > canvas.width) this.x = 0
      if (this.x < 0) this.x = canvas.width
      if (this.y > canvas.height) this.y = 0
      if (this.y < 0) this.y = canvas.height
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    // Conexões entre partículas próximas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          ctx.strokeStyle = `rgba(253, 220, 137, ${0.2 - distance / 600})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// ====================================================
// EFEITO MAGNÉTICO EM ELEMENTOS
// ====================================================
const initMagneticElements = () => {
  const magneticElements = document.querySelectorAll(".magnetic-element")

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const moveX = x * 0.3
      const moveY = y * 0.3

      el.style.transform = `translate(${moveX}px, ${moveY}px)`
    })

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)"
    })
  })
}

// ====================================================
// EFEITO TILT 3D
// ====================================================
const initTilt3D = () => {
  const tiltElements = document.querySelectorAll(".tilt-3d")

  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    })

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    })
  })
}

// ====================================================
// PARALLAX SCROLL AVANÇADO
// ====================================================
const initParallax = () => {
  const parallaxLayers = document.querySelectorAll(".parallax-layer")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset

    parallaxLayers.forEach((layer, index) => {
      const speed = layer.dataset.speed || 0.5
      const yPos = -(scrolled * speed)
      layer.style.transform = `translate3d(0, ${yPos}px, 0)`
    })
  })
}

// ====================================================
// REVEAL ANIMATION ON SCROLL
// ====================================================
const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal-animation")
  const revealSections = document.querySelectorAll(".reveal-section")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0
          setTimeout(() => {
            entry.target.classList.add("revealed")
          }, delay * 1000)
          revealObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  revealElements.forEach((el) => revealObserver.observe(el))
  revealSections.forEach((el) => revealObserver.observe(el))
}

// ====================================================
// INICIALIZAÇÃO COMPLETA
// ====================================================
document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidades existentes
  animateCounters()
  initContactForm()
  initSmoothScroll()
  updateNavLinks()
  initQuickSearch()
  initScrollIndicators()
  // initCalculator()
  // initCustomCursor()

  initParticles()
  initMagneticElements()
  initTilt3D()
  initParallax()
  initRevealAnimations()

  // Observer de elementos para animações de entrada
  document.querySelectorAll(".service-card, .contact-box, .media-card, .testimonial-card").forEach((el) => {
    observer.observe(el)
  })

  console.log("[v0] ✨ EXPERIÊNCIA PREMIUM COMPLETA ATIVADA!")
})
