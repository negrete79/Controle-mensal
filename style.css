/* Reset e Variáveis */
:root {
  --primary: #2E7D32;
  --primary-dark: #1B5E20;
  --secondary: #8D6E63;
  --danger: #D32F2F;
  --success: #388E3C;
  --bg: #F5F7FA;
  --card-bg: #FFFFFF;
  --text-dark: #333333;
  --text-light: #757575;
  --border-radius: 12px;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: var(--bg);
  color: var(--text-dark);
  padding-top: 60px;
  padding-bottom: 80px;
  height: 100vh;
  overflow-y: auto;
}

/* Header */
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 100;
}

.app-header h1 {
  font-size: 1.2rem;
  font-weight: 600;
}

/* Navegação Inferior */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--card-bg);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  z-index: 100;
  padding-bottom: env(safe-area-inset-bottom); /* Para iPhones com notch */
}

.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-light);
  cursor: pointer;
  transition: color 0.2s;
}

.nav-item.active {
  color: var(--primary);
  font-weight: bold;
}

.nav-icon { font-size: 1.5rem; }
.nav-label { font-size: 0.75rem; margin-top: 4px; }

/* Telas */
.screen {
  display: none;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

.screen.active { display: block; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* Dashboard */
.cards-resumo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

.card {
  background: var(--card-bg);
  padding: 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid transparent;
}

.fin-gasto { border-left-color: var(--danger); }
.fin-vendido { border-left-color: var(--success); }
.fin-lucro { border-left-color: var(--primary); }

.card-label { font-size: 0.9rem; color: var(--text-light); font-weight: 500; }
.card-valor { font-size: 1.3rem; font-weight: bold; color: var(--text-dark); }

.forms-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.form-box {
  background: var(--card-bg);
  padding: 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.form-box h3 {
  margin-bottom: 12px;
  font-size: 1rem;
  color: var(--primary-dark);
}

.form-box form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input[type="text"], input[type="number"], input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafafa;
}

input:focus {
  outline: none;
  border-color: var(--primary);
  background: #fff;
}

/* Botões */
.btn {
  padding: 12px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;
}

.btn:active { filter: brightness(0.9); }
.btn-danger { background-color: var(--danger); }
.btn-success { background-color: var(--success); }
.w-100 { width: 100%; }

/* Guia Técnico */
.guia-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.guia-card {
  background: var(--card-bg);
  padding: 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
  transition: transform 0.2s;
}

.guia-card:active { transform: scale(0.98); }
.guia-icon { font-size: 2rem; display: block; margin-bottom: 8px; }
.guia-card h3 { font-size: 0.9rem; margin-bottom: 6px; color: var(--primary-dark); }
.guia-card p { font-size: 0.75rem; color: var(--text-light); line-height: 1.4; }

/* Chat */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}

.modal-content {
  background: var(--card-bg);
  padding: 24px;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.modal-content h3 { margin-bottom: 10px; }
.modal-content p { font-size: 0.9rem; color: var(--text-light); margin-bottom: 16px; }
.modal-content form { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;}

.api-help-link {
  display: block;
  text-align: center;
  font-size: 0.85rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.chat-hidden { display: none; }

#chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px); /* Header + Nav */
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

#chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.msg {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 0.9rem;
  line-height: 1.4;
  word-wrap: break-word;
}

.msg-user {
  background-color: var(--primary);
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}

.msg-bot {
  background-color: #e8f5e9;
  color: var(--text-dark);
  align-self: flex-start;
  border-bottom-left-radius: 4px;
}

.chat-input-area {
  display: flex;
  padding: 12px;
  border-top: 1px solid #eee;
  gap: 8px;
}

.chat-input-area input { flex: 1; }
.chat-input-area button { padding: 12px 20px; }
