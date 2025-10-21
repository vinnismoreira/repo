import React, { useEffect, useRef } from 'react'

export default function Login() {
  const containerRef = useRef(null)
  useEffect(() => {
    // Se scripts do site original dependerem do DOM, você pode inicializá-los aqui.
    // Scripts originais foram copiados para /public/static/js (adicione-os em index.html se necessário).
  }, [])

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: `
<!-- Vídeo de fundo -->
<div class="video-background">
<video autoplay="" id="bgVideo" loop="" muted="" playsinline="" preload="metadata">
<source src="../../assets/teste-fundo.mp4" type="video/mp4"/>
            Seu navegador não suporta vídeo HTML5.
        </video>
</div>
<!-- Camada escura sobre o vídeo -->
<div class="dark-overlay"></div>
<!-- Login Background -->
<div class="login-background">
<div class="radar-circles">
<div class="radar-circle radar-circle-1"></div>
<div class="radar-circle radar-circle-2"></div>
<div class="radar-circle radar-circle-3"></div>
</div>
<div class="flying-dots">
<div class="flying-dot flying-dot-1"></div>
<div class="flying-dot flying-dot-2"></div>
<div class="flying-dot flying-dot-3"></div>
<div class="flying-dot flying-dot-4"></div>
<div class="flying-dot flying-dot-5"></div>
</div>
<div class="grid-pattern"></div>
</div>
<!-- Flight Info -->
<div class="flight-info">
<div class="flight-info-card">
<h3>Status</h3>
<div class="flight-info-items">
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<span id="utc-time">UTC: 10:34</span>
</div>
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span id="city-name">São José dos Campos</span>
</div>
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
</svg>
<span id="temperature">24°C</span>
</div>
</div>
<div class="flight-status">
<span class="status-label">Status:</span>
<span class="status-value">Ready for Takeoff</span>
</div>
</div>
</div>
<!-- Main Content -->
<div class="main-content">
<div class="login-container">
<div class="embraer-logo" style="text-align:center; margin-top:8px; margin-left: -40px;">
<div class="logo-icon-container" style="display:inline-block;">
<div class="logo-icon no-bg">
<img alt="Embraer" class="embraer-main-logo" src="../../assets/embraer-logo.svg" style="width:220px; display:block; margin:0 auto;"/>
</div>
<div aria-hidden="true" class="logo-glow"></div>
</div>
<div class="logo-text" style="text-align:center; margin-top:8px; margin-right: -40px;">
<p style="font-size:14px; font-weight:600; letter-spacing:2px; margin:0;">MRO BRASIL</p>
</div>
</div>
<!-- Login Form -->
<div class="login-form-container">
<div class="login-form-card">
<div class="glassmorphism-effect"></div>
<div class="animated-border"></div>
<div class="form-content">
<div class="form-header">
<h2>Faça o seu Login</h2>
<p>Insira suas credenciais para continuar</p>
</div>
<form class="login-form" id="loginForm">
<div class="form-group">
<label for="email">Email</label>
<div class="input-container">
<svg class="input-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
<input id="email" placeholder="usuario@embraer.com.br" required="" type="email"/>
</div>
</div>
<div class="form-group">
<label for="password">Senha</label>
<div class="input-container">
<svg class="input-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<input id="password" placeholder="••••••••" required="" type="password"/>
<button class="password-toggle" id="passwordToggle" type="button">
<svg class="eye-icon" fill="none" id="eyeIcon" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<svg class="eye-off-icon hidden" fill="none" id="eyeOffIcon" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>
<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
<path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>
<line x1="1" x2="23" y1="1" y2="23"></line>
</svg>
</button>
</div>
</div>
<div class="form-options">
<label class="checkbox-label">
<input id="remember" type="checkbox"/>
<span class="checkmark"></span>
                                    Lembrar-me
                                </label>
<a class="forgot-password" href="#">Esqueceu a senha?</a>
</div>
<button class="login-button" id="loginButton" type="submit">
<div class="button-content" id="buttonContent">
<span>Entrar</span>
<svg class="arrow-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12,5 19,12 12,19"></polyline>
</svg>
</div>
<div class="loading-content hidden" id="loadingContent">
<div class="spinner"></div>
<span>Authenticating...</span>
</div>
<div class="button-glow"></div>
</button>
</form>
<div class="form-footer">
<p>
                                Precisa de acesso? Entre em contato com seu 
                                <a href="#">Gerente</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Script Login -->
&lt;!-- script omitido: movido para /public/static/js --&gt;
&lt;!-- script omitido: movido para /public/static/js --&gt;
` }} />
  )
}
