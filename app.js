// Registro do Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW Registrado:', reg.scope))
      .catch(err => console.log('Erro no SW:', err));
  });
}

// --- 1. SISTEMA DE NAVEGAÇÃO ---
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetScreen = item.getAttribute('data-screen');
    
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${targetScreen}`).classList.add('active');
  });
});

// --- 2. DASHBOARD FINANCEIRO ---
const formCompra = document.getElementById('form-compra');
const formVenda = document.getElementById('form-venda');

const formatCurrency = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const updateDashboard = () => {
  const gastos = JSON.parse(localStorage.getItem('agro_gastos') || '[]');
  const vendas = JSON.parse(localStorage.getItem('agro_vendas') || '[]');
  
  const totalGasto = gastos.reduce((acc, cur) => acc + cur.valor, 0);
  const totalVendido = vendas.reduce((acc, cur) => acc + cur.valor, 0);
  const lucroLiquido = totalVendido - totalGasto;

  document.getElementById('total-gasto').textContent = formatCurrency(totalGasto);
  document.getElementById('total-vendido').textContent = formatCurrency(totalVendido);
  document.getElementById('lucro-liquido').textContent = formatCurrency(lucroLiquido);
};

formCompra.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const novoGasto = { item: inputs[0].value, valor: parseFloat(inputs[1].value) };
  const gastos = JSON.parse(localStorage.getItem('agro_gastos') || '[]');
  gastos.push(novoGasto);
  localStorage.setItem('agro_gastos', JSON.stringify(gastos));
  e.target.reset();
  updateDashboard();
});

formVenda.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const novaVenda = { item: inputs[0].value, valor: parseFloat(inputs[1].value) };
  const vendas = JSON.parse(localStorage.getItem('agro_vendas') || '[]');
  vendas.push(novaVenda);
  localStorage.setItem('agro_vendas', JSON.stringify(vendas));
  e.target.reset();
  updateDashboard();
});

updateDashboard();

// --- 3. CHAT COM IA (GROQ API) ---
const apiKeyModal = document.getElementById('api-key-modal');
const chatContainer = document.getElementById('chat-container');
const formApiKey = document.getElementById('form-api-key');
const inputApiKey = document.getElementById('input-api-key');
const chatMessages = document.getElementById('chat-messages');
const formChat = document.getElementById('form-chat');
const inputChatMsg = document.getElementById('input-chat-msg');

const SYSTEM_PROMPT = `Você é um Especialista Técnico em Agricultura Familiar. Seu foco estrito é ajudar pequenos produtores rurais com as seguintes temáticas: galinhas poedeiras, codornas, peixes (piscicultura), horta orgânica, adubos orgânicos e ração de postura. Forneça respostas claras, práticas, acessíveis e focadas no baixo custo e sustentabilidade. Não responda perguntas fora desse escopo.`;

const checkApiKey = () => {
  const key = localStorage.getItem('agro_groq_key');
  if (key) {
    apiKeyModal.style.display = 'none';
    chatContainer.classList.remove('chat-hidden');
  } else {
    apiKeyModal.style.display = 'flex';
    chatContainer.classList.add('chat-hidden');
  }
};

formApiKey.addEventListener('submit', (e) => {
  e.preventDefault();
  const key = inputApiKey.value.trim();
  if (key) {
    localStorage.setItem('agro_groq_key', key);
    inputApiKey.value = '******************************';
    inputApiKey.disabled = true;
    checkApiKey();
  }
});

const addMessage = (text, sender) => {
  const div = document.createElement('div');
  div.classList.add(`msg`, `msg-${sender}`);
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

formChat.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMsg = inputChatMsg.value.trim();
  if (!userMsg) return;

  addMessage(userMsg, 'user');
  inputChatMsg.value = '';
  
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('msg', 'msg-bot');
  typingDiv.textContent = 'Pensando...';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const apiKey = localStorage.getItem('agro_groq_key');
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMsg }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    chatMessages.removeChild(typingDiv);

    if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

    const data = await response.json();
    addMessage(data.choices[0].message.content, 'bot');

  } catch (error) {
    chatMessages.removeChild(typingDiv);
    addMessage('Erro ao conectar. Verifique sua chave de API ou conexão.', 'bot');
    console.error(error);
  }
});

checkApiKey();
