import {Experiment,defaults,energyInfo,DT} from './physics.js?v=energy-visuals1';
import {energyScene} from './energy-scene.js';

const copy={
 uk:{actions:['Відкрити дослід','Показати рух','Призупинити'],cards:[
 ['Маятник','Коли гойдалка рухається найшвидше?','Порівняй висоту й швидкість у різних точках.'],
 ['Візок на схилі','Чи повернеться візок так само високо?','Увімкни опір і простеж, куди переходить енергія руху.'],
 ['Пружина','Що, як відтягнути вантаж далі?','Порівняй два розтягнення й перевір, як змінюється запас енергії.'],
 ['Зіткнення','Чи можуть два візки обмінятися швидкостями?','Зміни маси й коефіцієнт відновлення. Порівняй рух до й після зіткнення.'],
 ['Батарея й лампа','Чому одна лампа світить довше за іншу?','Зміни потужність і частку видимого світла. Простеж за запасом енергії.']]},
 en:{actions:['Open experiment','Show motion','Pause'],cards:[
 ['Pendulum','When does a swing move fastest?','Compare its height and speed at different points.'],
 ['Cart on a track','Will the cart climb as high as it started?','Turn on resistance and follow the energy of motion.'],
 ['Spring','What if you pull the load farther?','Compare two stretches and check how much energy is stored.'],
 ['Collisions','Can the carts swap speeds?','Change the masses and coefficient of restitution. Compare motion before and after impact.'],
 ['Battery and lamp','Why does one lamp run longer?','Change power and the visible-light fraction. Follow the battery’s energy.']]},
 it:{actions:['Apri l’esperimento','Mostra il movimento','Metti in pausa'],cards:[
 ['Pendolo','Quando l’altalena va più veloce?','Confronta altezza e velocità in punti diversi.'],
 ['Carrello in pista','Il carrello tornerà alla quota di partenza?','Attiva la resistenza e osserva come cambia l’energia del moto.'],
 ['Molla','Che cosa cambia se allunghi di più la molla?','Confronta due allungamenti e verifica quanta energia si accumula.'],
 ['Urti','I carrelli possono scambiarsi le velocità?','Cambia le masse e il coefficiente di restituzione. Confronta il moto prima e dopo l’urto.'],
 ['Batteria e lampada','Perché una lampada dura più a lungo?','Cambia la potenza e la frazione di luce visibile. Segui l’energia della batteria.']]},
 es:{actions:['Abrir experimento','Mostrar movimiento','Pausar'],cards:[
 ['Péndulo','¿Cuándo se mueve más rápido un columpio?','Compara su altura y su rapidez en distintos puntos.'],
 ['Carrito en una pista','¿Volverá el carrito a la altura inicial?','Activa la resistencia y observa qué pasa con la energía del movimiento.'],
 ['Muelle','¿Qué cambia si estiras más el muelle?','Compara dos estiramientos y comprueba cuánta energía se almacena.'],
 ['Choques','¿Pueden intercambiar velocidades los carritos?','Cambia las masas y el coeficiente de restitución. Compara el movimiento antes y después del choque.'],
 ['Batería y lámpara','¿Por qué una lámpara dura más?','Cambia la potencia y la fracción de luz visible. Sigue la energía de la batería.']]},
};
const demos=[
 ['pendulum',3.4,1,{},false],
 ['track',5.7,1.4,{},true],
 ['spring',3.5,1,{stiffness:14},true],
 ['collision',2.6,.8,{restitution:.25},true],
 ['lamp',5.5,5,{power:40,capacity:1000},false],
];
const scenes=new WeakMap();

export function mountEnergyPreviews(root,language,href){
 scenes.get(root)?.();
 const {actions,cards}=copy[language]??copy.uk;
 const [open,show,pause]=actions;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 root.innerHTML=demos.map(([id],i)=>{
  const [title,question,detail]=cards[i];
  return `<article class="energy-preview"><div class="preview-window">
  <svg viewBox="65 32 675 320" role="img" aria-label="${title}" data-scene="${id}"></svg><div class="preview-balance" aria-hidden="true"></div></div>
  <div class="preview-copy"><h3>${title}</h3><p><strong>${question}</strong></p><p>${detail}</p>
  <div class="preview-actions"><a href="${href(id)}">${open}</a><button type="button" aria-pressed="false" aria-label="${show} · ${title}">${show}</button></div></div></article>`;
 }).join('');
 const views=[...root.querySelectorAll('.energy-preview')].map((article,i)=>{
  const [id,end,rate,overrides,losses]=demos[i], params={...defaults(id),...overrides};
  const make=()=>new Experiment(id,params,losses);
  return {id,end,rate,article,make,model:make(),motion:!reduced,seen:false,carry:0,svg:article.querySelector('svg'),bar:article.querySelector('.preview-balance'),button:article.querySelector('button')};
 });
 function draw(view){
  const snap=view.model.snapshot();
  view.svg.innerHTML=energyScene(view.id,view.model,(n,d=2)=>Number(n).toFixed(d),{prefix:'preview-'+view.id+'-',labels:false}).svg;
  view.bar.innerHTML=Object.entries(snap.e).map(([key,value])=>`<span style="width:${100*value/view.model.initial}%;background:${energyInfo[key][1]}"></span>`).join('');
 }
 let frame=0,last=0;
 function tick(now){
  frame=0;
  const dt=last?Math.min((now-last)/1000,.08):0;
  if(dt<.045&&last){resume();return;}
  last=now;
  for(const v of views){
   if(!v.motion||!v.seen)continue;
   v.carry+=dt*v.rate;
   while(v.carry>=DT&&!v.model.done&&v.model.t<v.end){v.model.step();v.carry-=DT;}
   if(v.model.done||v.model.t>=v.end){v.model=v.make();v.carry=0;}
   draw(v);
  }
  resume();
 }
 function resume(){
  if(!frame&&views.some(v=>v.motion&&v.seen))frame=requestAnimationFrame(tick);
 }
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries)views.find(v=>v.article===entry.target).seen=entry.isIntersecting;
  resume();
 },{threshold:.12});
 function buttonLabel(v){
  v.button.textContent=v.motion?pause:show;
  v.button.setAttribute('aria-label',v.button.textContent+' · '+cards[views.indexOf(v)][0]);
  v.button.setAttribute('aria-pressed',String(v.motion));
 }
 for(const v of views){
  draw(v);buttonLabel(v);observer.observe(v.article);
  v.button.onclick=()=>{v.motion=!v.motion;buttonLabel(v);resume();};
 }
 scenes.set(root,()=>{observer.disconnect();cancelAnimationFrame(frame);});
}
