const status=document.getElementById('bootStatus');
const messages={
 uk:['Завантажуємо досліди…','Не вдалося завантажити досліди. Перевір з’єднання та спробуй ще раз.','Повторити'],
 en:['Loading experiments…','Experiments could not load. Check your connection and try again.','Retry'],
 it:['Caricamento degli esperimenti…','Impossibile caricare gli esperimenti. Controlla la connessione e riprova.','Riprova'],
 es:['Cargando los experimentos…','No se han podido cargar los experimentos. Comprueba la conexión e inténtalo de nuevo.','Reintentar']
};
const lang=new URLSearchParams(location.search).get('lang');
const [loading,failure,retryLabel]=Object.hasOwn(messages,lang)?messages[lang]:messages.uk;
status.textContent=loading;
try {
 await import('./app.js?v=energy-visuals1');
 await import('./mobile-scene.js?v=mobile1');
 status.remove();
} catch(error) {
 console.error('Energy Lab startup failed',error);
 status.textContent=failure;
 const retry=document.createElement('button');
 retry.textContent=retryLabel;
 retry.onclick=()=>location.reload();
 status.append(document.createElement('br'),retry);
 document.querySelector('main').prepend(status);
}
