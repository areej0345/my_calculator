// Grab the two display elements
const screen = document.getElementById('screen');
const expr   = document.getElementById('expr');

// This function updates what's shown on screen
function updateDisplay(value, expression) {
  screen.textContent = value;
  expr.textContent   = expression || '';
}

// The calculator's memory — 4 variables
const state = {
  current: '0',
  prev:    null,
  op:      null,
  evaled:  false
};

// A number button was pressed
function handleNum(val) {
  if (state.evaled) {
    state.current = val;
    state.evaled  = false;
  } else if (state.current === '0') {
    state.current = val;
  } else {
    state.current += val;
  }
  updateDisplay(state.current, state.prev && state.op ? state.prev + ' ' + state.op : '');
}

// An operator was pressed
function handleOp(op) {
  state.prev   = state.current;
  state.op     = op;
  state.evaled = true;
  updateDisplay(state.current, state.prev + ' ' + op);
}

// The = button was pressed
function compute() {
  const a = parseFloat(state.prev);
  const b = parseFloat(state.current);
  let result;

  if (state.op === '+') result = a + b;
  if (state.op === '−') result = a - b;
  if (state.op === '×') result = a * b;
  if (state.op === '÷') result = b === 0 ? 'Error' : a / b;

  expr.textContent = state.prev + ' ' + state.op + ' ' + state.current + ' =';
  state.current    = String(parseFloat(result.toPrecision(10)));
  state.prev       = null;
  state.op         = null;
  state.evaled     = true;
  updateDisplay(state.current);
  addToHistory(expr.textContent, state.current);
}

// AC button
function handleClear() {
  state.current = '0';
  state.prev    = null;
  state.op      = null;
  state.evaled  = false;
  updateDisplay('0', '');
}

// . button
function handleDecimal() {
  if (!state.current.includes('.')) {
    state.current += '.';
    updateDisplay(state.current);
  }
}

// +/− button
function handleSign() {
  state.current = state.current.startsWith('-')
    ? state.current.slice(1)
    : '-' + state.current;
  updateDisplay(state.current);
}

// % button
function handlePercent() {
  state.current = String(parseFloat(state.current) / 100);
  updateDisplay(state.current);
}

// Scientific calculations
function handleSci(fn) {
  const n = parseFloat(state.current);
  let result;
  const expression = fn + '(' + state.current + ')';

  if (fn === 'sin')  result = Math.sin(n * Math.PI / 180);
  if (fn === 'cos')  result = Math.cos(n * Math.PI / 180);
  if (fn === 'tan')  result = Math.tan(n * Math.PI / 180);
  if (fn === 'log')  result = Math.log10(n);
  if (fn === 'ln')   result = Math.log(n);
  if (fn === 'sqrt') result = Math.sqrt(n);
  if (fn === 'sq')   result = n * n;
  if (fn === 'cube') result = n * n * n;
  if (fn === 'inv')  result = 1 / n;
  if (fn === 'pi')   {
    state.current = String(Math.PI);
    state.evaled  = true;
    updateDisplay(state.current);
    return;
  }

  if (isNaN(result) || !isFinite(result)) {
    state.current = 'Error';
    updateDisplay('Error');
    return;
  }

  state.current = String(parseFloat(result.toPrecision(10)));
  state.evaled  = true;
  expr.textContent = expression + ' =';
  updateDisplay(state.current);
  addToHistory(expression + ' =', state.current);
}

// ALL button clicks — one listener
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const value  = btn.dataset.value;

  if (action === 'num')     handleNum(value);
  if (action === 'op')      handleOp(value);
  if (action === 'equals')  compute();
  if (action === 'clear')   handleClear();
  if (action === 'decimal') handleDecimal();
  if (action === 'sign')    handleSign();
  if (action === 'percent') handlePercent();
  if (action === 'sci')     handleSci(value);

  if (action === 'backspace') {
    if (state.current.length > 1) {
      state.current = state.current.slice(0, -1);
    } else {
      state.current = '0';
    }
    updateDisplay(state.current);
  }

  if (action === 'mc')    handleMemory('mc');
  if (action === 'mr')    handleMemory('mr');
  if (action === 'mplus') handleMemory('mplus');
  if (action === 'ms')    handleMemory('ms');
});

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key >= '0' && e.key <= '9') handleNum(e.key);
  if (e.key === '.')                 handleDecimal();
  if (e.key === '+')                 handleOp('+');
  if (e.key === '-')                 handleOp('−');
  if (e.key === '*')                 handleOp('×');
  if (e.key === '/') { e.preventDefault(); handleOp('÷'); }
  if (e.key === 'Enter' || e.key === '=') compute();
  if (e.key === 'Escape') handleClear();
  if (e.key === 'Backspace') {
    if (state.current.length > 1) {
      state.current = state.current.slice(0, -1);
    } else {
      state.current = '0';
    }
    updateDisplay(state.current);
  }
});

// History
let history = [];

function addToHistory(expression, result) {
  history.unshift({ expression, result });
  if (history.length > 20) history.pop();
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  if (history.length === 0) {
    list.innerHTML = '<li class="hist-empty">No calculations yet</li>';
    return;
  }

  history.forEach(function(item) {
    const li = document.createElement('li');
    li.className = 'hist-item';
    li.innerHTML = `
      <div class="hist-expr">${item.expression}</div>
      <div class="hist-result">= ${item.result}</div>
    `;
    li.addEventListener('click', function() {
      state.current = item.result;
      state.evaled  = true;
      updateDisplay(state.current);
    });
    list.appendChild(li);
  });
}

document.getElementById('clear-hist').addEventListener('click', function() {
  history = [];
  renderHistory();
});

// Memory
let memory = null;

function handleMemory(action) {
  const current = parseFloat(state.current);

  if (action === 'mc') {
    memory = null;
  }
  if (action === 'mr') {
    if (memory !== null) {
      state.current = String(memory);
      state.evaled  = true;
      updateDisplay(state.current);
    }
  }
  if (action === 'mplus') {
    memory = (memory || 0) + current;
    flashMemory();
  }
  if (action === 'ms') {
    memory = current;
    flashMemory();
  }
}

function flashMemory() {
  const btns = document.querySelectorAll('.memory-row button');
  btns.forEach(b => b.style.color = '#f39c12');
  setTimeout(() => {
    btns.forEach(b => b.style.color = '');
  }, 400);
}

// Tab switching
document.getElementById('tab-basic').addEventListener('click', function() {
  document.getElementById('sci-buttons').classList.remove('visible');
  document.getElementById('tab-basic').classList.add('active');
  document.getElementById('tab-sci').classList.remove('active');
});

document.getElementById('tab-sci').addEventListener('click', function() {
  document.getElementById('sci-buttons').classList.add('visible');
  document.getElementById('tab-sci').classList.add('active');
  document.getElementById('tab-basic').classList.remove('active');
});

// Page load par Basic mode default on
document.getElementById('sci-buttons').classList.remove('visible');
document.getElementById('tab-basic').classList.add('active');
document.getElementById('tab-sci').classList.remove('active');