# Guia de Alterações - Site Pinheiro Barbosa Advocacia

## Alterações Solicitadas:
1. ✅ Remover cursor personalizado
2. ✅ Remover botão flutuante do WhatsApp
3. ✅ Remover calculadora flutuante
4. ✅ Remover tooltip do botão "Agendar"
5. ✅ Remover linha branca do footer
6. ✅ Melhorar dramaticamente a tela de loading

---

## 📄 ARQUIVO: index.html

### Remoção 1: Cursor Personalizado (Linhas ~27-28)
**REMOVER:**
\`\`\`html
<div class="custom-cursor" id="customCursor"></div>
<parameter name="custom-cursor-dot" id="cursorDot"></div>
\`\`\`

### Remoção 2: Canvas de Partículas (Linha ~30)
**REMOVER:**
\`\`\`html
<canvas id="particleCanvas" class="particle-canvas"></canvas>
\`\`\`

### Remoção 3: Tooltip do Botão Agendar (Linha ~69)
**ALTERAR:**
\`\`\`html
<!-- DE: -->
<button class="btn btn-sm btn-premium-nav" data-bs-toggle="modal" data-bs-target="#contatoModal" data-tooltip="Reserve Sua Consulta">

<!-- PARA: -->
<button class="btn btn-sm btn-premium-nav" data-bs-toggle="modal" data-bs-target="#contatoModal">
\`\`\`

### Remoção 4: Linha Branca do Footer (Linha ~837)
**REMOVER:**
\`\`\`html
<hr style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #fddc89, transparent); margin: 40px 0; opacity: 0.5;">
\`\`\`

### Remoção 5: Botão Flutuante WhatsApp (Linhas ~853-859)
**REMOVER TODO O BLOCO:**
\`\`\`html
<a href="https://wa.me/5561996123401" class="whatsapp-button magnetic-element" title="Fale conosco no WhatsApp" data-tooltip="Chat Direto no WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
\`\`\`

### Remoção 6: Botão Flutuante Calculadora (Linhas ~861-863)
**REMOVER TODO O BLOCO:**
\`\`\`html
<button class="floating-calculator-btn magnetic-element" id="floatingCalcBtn" title="Calcular Consulta" data-tooltip="Calcule o Valor da Consulta">
    <i class="fas fa-calculator"></i>
</button>
\`\`\`

---

## 🎨 ARQUIVO: styles.css

### Remoção 1: Estilos do Cursor (Linhas ~2254-2289)
**REMOVER:**
\`\`\`css
.custom-cursor {
  width: 40px;
  height: 40px;
  /* ... todo o bloco ... */
}

.custom-cursor-dot {
  width: 8px;
  height: 8px;
  /* ... todo o bloco ... */
}

.custom-cursor.hovering { /* ... */ }
.custom-cursor-dot.hovering { /* ... */ }
\`\`\`

### Remoção 2: Canvas de Partículas
**REMOVER:**
\`\`\`css
.particle-canvas {
  position: fixed;
  /* ... todo o bloco ... */
}
\`\`\`

### Remoção 3: Botão WhatsApp Flutuante (Linhas ~1808-1842)
**REMOVER:**
\`\`\`css
.whatsapp-button {
  position: fixed;
  /* ... todo o bloco ... */
}

.whatsapp-button:hover { /* ... */ }
@keyframes whatsappPulse { /* ... */ }
\`\`\`

### Remoção 4: Botão Calculadora Flutuante (Linhas ~1844-1900)
**REMOVER:**
\`\`\`css
.floating-calculator-btn {
  position: fixed;
  /* ... todo o bloco ... */
}

.floating-calculator-btn:hover { /* ... */ }
@keyframes calcPulse { /* ... */ }
.floating-calculator-btn::after { /* ... */ }
\`\`\`

### Remoção 5: Tooltips (Linhas ~2311-2357)
**REMOVER:**
\`\`\`css
[data-tooltip] {
  position: relative;
}

[data-tooltip]::before { /* ... */ }
[data-tooltip]::after { /* ... */ }
[data-tooltip]:hover::before,
[data-tooltip]:hover::after { /* ... */ }
\`\`\`

### Melhoria 1: Tela de Loading ULTRA PREMIUM (Linhas ~2171-2244)
**SUBSTITUIR POR:**
\`\`\`css
/* Loading Screen Ultra Premium - Muito Mais Bonito e Especial */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0f23 0%, #131842 50%, #1a2859 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 1s ease, visibility 1s ease;
  overflow: hidden;
}

/* Animação de fundo rotativo */
.loading-screen::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(253, 220, 137, 0.15) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-screen.hidden {
  opacity: 0;
  visibility: hidden;
}

.loading-content {
  text-align: center;
  animation: fadeInUp 1.2s ease-out;
  position: relative;
  z-index: 2;
}

.loading-logo {
  width: 280px;
  height: auto;
  margin-bottom: 50px;
  animation: logoFloat 3s ease-in-out infinite, logoPulse 2s ease-in-out infinite;
  filter: drop-shadow(0 0 40px rgba(253, 220, 137, 0.6)) 
          drop-shadow(0 0 80px rgba(253, 220, 137, 0.4));
}

@keyframes logoFloat {
  0%, 100% { 
    transform: translateY(0) scale(1); 
  }
  50% { 
    transform: translateY(-20px) scale(1.05); 
  }
}

@keyframes logoPulse {
  0%, 100% { 
    opacity: 1; 
    filter: drop-shadow(0 0 40px rgba(253, 220, 137, 0.6)); 
  }
  50% { 
    opacity: 0.85; 
    filter: drop-shadow(0 0 60px rgba(253, 220, 137, 0.8)); 
  }
}

.loading-bar {
  width: 400px;
  height: 6px;
  background: rgba(253, 220, 137, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto 30px;
  box-shadow: 0 0 20px rgba(253, 220, 137, 0.3), 
              inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #fddc89, #fce5a8, #fddc89);
  background-size: 200% 100%;
  border-radius: 10px;
  animation: loadingProgress 2s ease-in-out infinite, 
             shimmer 1.5s linear infinite;
  box-shadow: 0 0 30px rgba(253, 220, 137, 0.8), 
              0 0 60px rgba(253, 220, 137, 0.5);
}

@keyframes loadingProgress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.loading-text {
  color: #fddc89;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  animation: textPulse 2s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(253, 220, 137, 0.8), 
               0 0 40px rgba(253, 220, 137, 0.5);
}

@keyframes textPulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.05); 
  }
}
\`\`\`

### Remover também na seção responsiva (Linhas ~2549-2554)
**REMOVER:**
\`\`\`css
@media (max-width: 768px) {
  .custom-cursor,
  .custom-cursor-dot {
    display: none;
  }
}
\`\`\`

---

## ⚙️ ARQUIVO: script.js

### Remoção 1: Função initCustomCursor (Linhas ~523-564)
**REMOVER TODO O BLOCO:**
\`\`\`javascript
const initCustomCursor = () => {
  const cursor = document.getElementById("customCursor")
  const cursorDot = document.getElementById("cursorDot")
  // ... todo o conteúdo da função ...
}
\`\`\`

### Remoção 2: Função initParticles (Linhas ~566-660)
**REMOVER TODO O BLOCO:**
\`\`\`javascript
const initParticles = () => {
  const canvas = document.getElementById("particleCanvas")
  const ctx = canvas.getContext("2d")
  // ... todo o conteúdo da função ...
}
\`\`\`

### Remoção 3: Função initCalculator (Linhas ~120-158)
**REMOVER TODO O BLOCO:**
\`\`\`javascript
const initCalculator = () => {
  const floatingCalcBtn = document.getElementById("floatingCalcBtn")
  const calcModal = new window.bootstrap.Modal(document.getElementById("calculatorModal"))
  // ... todo o conteúdo da função ...
}
\`\`\`

### Remoção 4: Chamadas das Funções no DOMContentLoaded (Linhas ~753-761)
**REMOVER ESTAS LINHAS:**
\`\`\`javascript
document.addEventListener("DOMContentLoaded", () => {
  // ... outras funções ...
  initCalculator()  // <-- REMOVER ESTA LINHA
  initCustomCursor()  // <-- REMOVER ESTA LINHA
  initParticles()  // <-- REMOVER ESTA LINHA
  // ... outras funções ...
})
\`\`\`

---

## ✅ RESUMO DAS ALTERAÇÕES

### HTML (6 mudanças):
1. ❌ Remover `<div class="custom-cursor">`
2. ❌ Remover `<div class="custom-cursor-dot">`
3. ❌ Remover `<canvas id="particleCanvas">`
4. ❌ Remover `data-tooltip` do botão Agendar
5. ❌ Remover `<hr>` do footer
6. ❌ Remover `<a class="whatsapp-button">`
7. ❌ Remover `<button class="floating-calculator-btn">`

### CSS (6 mudanças):
1. ❌ Remover `.custom-cursor` e `.custom-cursor-dot`
2. ❌ Remover `.particle-canvas`
3. ❌ Remover `.whatsapp-button`
4. ❌ Remover `.floating-calculator-btn`
5. ❌ Remover `[data-tooltip]`
6. ✨ Melhorar `.loading-screen` (substituir completamente)

### JavaScript (4 mudanças):
1. ❌ Remover função `initCustomCursor()`
2. ❌ Remover função `initParticles()`
3. ❌ Remover função `initCalculator()`
4. ❌ Remover chamadas dessas funções no `DOMContentLoaded`

---

## 🎯 RESULTADO FINAL

Após essas alterações, você terá:
- ✅ Sem cursor personalizado
- ✅ Sem botão flutuante do WhatsApp
- ✅ Sem calculadora flutuante  
- ✅ Sem tooltip no botão Agendar
- ✅ Sem linha branca no footer
- ✅ Tela de loading MUITO MAIS BONITA E ESPECIAL com:
  - Fundo animado rotativo
  - Logo flutuante com pulse
  - Barra de progresso com shimmer effect
  - Texto pulsante com glow
  - Animações suaves e profissionais

---

**Desenvolvido por v0 - Vercel AI**
