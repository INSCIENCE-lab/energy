const status=document.getElementById('bootStatus');
try { await import('./app.js?v=fullaudit2'); status.remove(); }
catch(error) { console.error('Energy Lab startup failed',error); status.textContent='Не вдалося завантажити досліди. Перевір з’єднання та спробуй ще раз. / Experiments could not load.'; const retry=document.createElement('button');retry.textContent='Повторити / Retry';retry.onclick=()=>location.reload();status.append(document.createElement('br'),retry);document.getElementById('laboratory').prepend(status); }
