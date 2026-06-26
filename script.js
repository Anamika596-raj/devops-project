:root {
  --white:       #FFFFFF;
  --navy:        #0A0F2E;
  --blue:        #2563EB;
  --cyan:        #06B6D4;
  --blue-mid:    #1D4ED8;
  --lavender:    #EEF2FF;
  --muted:       #64748B;
  --border:      rgba(37, 99, 235, 0.12);
  --glass-bg:    rgba(255, 255, 255, 0.72);
  --glass-blur:  18px;
  --shadow-soft: 0 4px 32px rgba(10, 15, 46, 0.08);
  --shadow-card: 0 8px 48px rgba(37, 99, 235, 0.10);
  --radius-card: 20px;
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--navy);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* ORBS */
.bg-orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.28;
  will-change: transform;
}

.orb-1 {
  width: 620px; height: 620px;
  background: radial-gradient(circle, #2563EB 0%, transparent 70%);
  top: -180px; left: -160px;
  animation: drift1 14s ease-in-out infinite alternate;
}

.orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #06B6D4 0%, transparent 70%);
  bottom: -140px; right: -120px;
  animation: drift2 18s ease-in-out infinite alternate;
}

.orb-3 {
  width: 360px; height: 360px;
  background: radial-gradient(circle, #818CF8 0%, transparent 70%);
  top: 45%; left: 55%;
  opacity: 0.15;
  animation: drift3 22s ease-in-out infinite alternate;
}

@keyframes drift1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(60px, 80px) scale(1.08); }
}
@keyframes drift2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-50px, -70px) scale(1.12); }
}
@keyframes drift3 {
  from { transform: translate(0, 0); }
  to   { transform: translate(-80px, 40px); }
}

/* CANVAS */
#pipeline-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.45;
}

/* HERO */
.hero {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
}

.hero-inner {
  max-width: 860px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* BADGE */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--lavender);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 16px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--blue);
  margin-bottom: 36px;
  animation: fadeSlideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 6px var(--cyan);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 6px var(--cyan); opacity: 1; }
  50%       { box-shadow: 0 0 14px var(--cyan); opacity: 0.7; }
}

/* HEADING */
.heading {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 7vw, 5.4rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 28px;
}

.heading-line {
  display: block;
  animation: fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.heading-line:nth-child(1) { animation-delay: 0.1s; }
.heading-line:nth-child(2) { animation-delay: 0.2s; }
.heading-line:nth-child(3) { animation-delay: 0.3s; }

.accent-gradient {
  background: linear-gradient(100deg, var(--blue) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* SUBLINES */
.sublines {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 620px;
  margin-bottom: 48px;
  animation: fadeSlideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
}

.subline {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 400;
  color: var(--muted);
  line-height: 1.65;
}

/* DIVIDER */
.divider {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  animation: fadeIn 1s ease 0.5s both;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}

.divider-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* TEAM LABEL */
.team-label {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 28px;
  animation: fadeIn 1s ease 0.55s both;
}

/* TEAM GRID */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  animation: fadeSlideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
}

/* CARDS */
.card {
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-card);
  padding: 28px 22px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-card), inset 0 1px 0 rgba(255,255,255,0.9);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
  animation: floatCard 6s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
  overflow: hidden;
  cursor: default;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 24px 64px rgba(37, 99, 235, 0.18), inset 0 1px 0 rgba(255,255,255,0.9);
}

.card--featured {
  border-color: rgba(37, 99, 235, 0.25);
  background: rgba(238, 242, 255, 0.82);
}

.card--featured::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  border-radius: var(--radius-card) var(--radius-card) 0 0;
}

.card-glow {
  position: absolute;
  inset: -60px;
  background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 65%);
  pointer-events: none;
}

/* AVATAR */
.card-avatar {
  position: relative;
  width: 64px; height: 64px;
  flex-shrink: 0;
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  padding: 2px;
  animation: spin-ring 8s linear infinite;
}

.avatar-ring::after {
  content: '';
  display: block;
  width: 100%; height: 100%;
  border-radius: 50%;
  background: var(--white);
}

@keyframes spin-ring {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.avatar-inner {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue) 0%, var(--cyan) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.02em;
  z-index: 1;
}

/* CARD BODY */
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.card-name {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--navy);
  letter-spacing: -0.01em;
}

.card-role {
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--muted);
  line-height: 1.4;
}

/* TAGS */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-top: 6px;
}

.tag {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--blue);
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.15);
  padding: 3px 10px;
  border-radius: 999px;
}

/* STATUS */
.card-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #10B981;
  font-weight: 500;
}

.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #10B981;
  animation: pulse-status 2s ease-in-out infinite;
}

@keyframes pulse-status {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
  50%       { box-shadow: 0 0 0 5px rgba(16, 185, 129, 0); }
}

/* FLOAT */
@keyframes floatCard {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

.card:hover { animation-play-state: paused; }

/* ENTRANCE ANIMATIONS */
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* REDUCED MOTION */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* RESPONSIVE */
@media (max-width: 700px) {
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
  .heading { font-size: clamp(2.2rem, 10vw, 3rem); }
  .card { animation-name: none; }
}

@media (max-width: 480px) {
  .hero { padding: 40px 18px; }
  .heading { font-size: 2rem; }
  .badge { font-size: 0.74rem; }
}
