export const G = 9.81;
export const DT = 1 / 240;
export const definitions = {
  pendulum: {name:'Маятник',subtitle:'Висота стає рухом',icon:'pendulum',system:'Тягарець + Земля + повітря',formula:'Eₚ + Eₖ + ΔU = E₀',description:'Під час спуску потенціальна енергія переходить у кінетичну. Опір повітря поступово збільшує внутрішню енергію тягарця й довкілля.',params:[['mass','Маса тягарця','кг',0.2,3,0.1,1],['length','Довжина нитки','м',0.5,3,0.1,2],['angle','Початковий кут','°',10,80,1,45],['damping','Коефіцієнт опору γ','с⁻¹',0.02,0.8,0.02,0.18]],keys:['potential','kinetic','thermal'],limit:90},
  track: {name:'Візок на схилі',subtitle:'Енергія на американських гірках',icon:'track',system:'Візок + Земля + колія + повітря',formula:'Eₚ + Eₖ + ΔU = E₀',description:'Візок розганяється вниз і сповільнюється вгору. За наявності опору частина механічної енергії переходить у внутрішню.',params:[['mass','Маса візка','кг',0.5,5,0.1,2],['height','Початкова висота','м',0.5,4,0.1,3],['damping','Коефіцієнт опору γ','с⁻¹',0.02,0.6,0.02,0.12]],keys:['potential','kinetic','thermal'],limit:90},
  spring: {name:'Пружина',subtitle:'Деформація стає рухом',icon:'spring',system:'Вантаж + пружина + поверхня',formula:'Eпруж + Eₖ + ΔU = E₀',description:'Стиснута або розтягнута пружина запасає енергію. Без опору вантаж рухається найшвидше в положенні рівноваги; опір перетворює механічну енергію у внутрішню.',params:[['mass','Маса вантажу','кг',0.5,3,0.1,1],['stiffness','Жорсткість пружини','Н/м',10,100,5,30],['amplitude','Початкове розтягнення','м',0.1,1,0.05,0.65],['damping','Коефіцієнт опору γ','с⁻¹',0.02,1,0.02,0.2]],keys:['elastic','kinetic','thermal'],limit:90},
  collision: {name:'Зіткнення',subtitle:'Куди поділася енергія руху?',icon:'collision',system:'Два візки та їхня внутрішня енергія',formula:'Eₖ₁ + Eₖ₂ + ΔU = E₀',description:'Імпульс двох візків зберігається. За непружного зіткнення частина кінетичної енергії переходить у внутрішню: нагрівання, коливання й деформацію.',params:[['mass','Маса першого візка','кг',0.5,4,0.1,1],['mass2','Маса другого візка','кг',0.5,4,0.1,1.5],['velocity','Швидкість першого','м/с',0.5,5,0.1,3],['velocity2','Швидкість другого','м/с',-3,0,0.1,-1],['restitution','Коефіцієнт відновлення e','',0,1,0.05,0.5]],keys:['kinetic1','kinetic2','thermal'],limit:10},
  lamp: {name:'Батарея й лампа',subtitle:'Від хімічної енергії до світла',icon:'lamp',system:'Батарея + лампа; світло й тепло передаються довкіллю',formula:'Eхім + Eсвітло + Q = E₀',description:'Батарея живить лампу. Запас хімічної енергії зменшується, а передані довкіллю енергія світла й теплота накопичуються в балансі.',params:[['capacity','Початковий запас енергії','Дж',500,5000,100,1000],['power','Електрична потужність','Вт',10,100,5,40],['efficiency','Частка енергії у видимому світлі','%',5,90,5,35]],keys:['chemical','light','thermal'],limit:500}
};
export const energyInfo={potential:['Потенціальна','#6a56bf','Eₚ'],elastic:['Пружна','#6a56bf','Eпруж'],kinetic:['Кінетична','#8303DC','Eₖ'],kinetic1:['Рух візка 1','#8303DC','Eₖ₁'],kinetic2:['Рух візка 2','#6a56bf','Eₖ₂'],thermal:['Внутрішня / тепло','#e36b39','ΔU'],chemical:['Хімічна','#6a56bf','Eхім'],light:['Видиме світло','#ca9a18','Eсвітло']};
export function defaults(id){return Object.fromEntries(definitions[id].params.map(p=>[p[0],p[6]]));}
function rk4(y,dt,f){const a=f(y),b=f(y.map((v,i)=>v+dt*a[i]/2)),c=f(y.map((v,i)=>v+dt*b[i]/2)),d=f(y.map((v,i)=>v+dt*c[i]));return y.map((v,i)=>v+dt*(a[i]+2*b[i]+2*c[i]+d[i])/6);}
export class Experiment {
  constructor(id,params={},losses=false){
    if(!definitions[id])throw new Error('Unknown experiment');
    this.id=id;this.p={...defaults(id),...params};
    for(const [key,, ,min,max] of definitions[id].params){if(!Number.isFinite(this.p[key])||this.p[key]<min||this.p[key]>max)throw new Error('Invalid parameter: '+key);}
    this.losses=losses;this.t=0;this.q=0;this.done=false;
    const p=this.p;
    this.y=id==='pendulum'?[p.angle*Math.PI/180,0,0]:id==='spring'?[p.amplitude,0,0]:id==='track'?[-Math.sqrt(5*p.height),0,0]:[0,0,0];
    if(id==='collision'){
      const m=p.mass,n=p.mass2,u=p.velocity,w=p.velocity2,e=losses?p.restitution:1;
      this.contactTime=3.5/(u-w);this.post=[(m*u+n*w-n*e*(u-w))/(m+n),(m*u+n*w+m*e*(u-w))/(m+n)];
      this.collisionHeat=0.5*m*n/(m+n)*(1-e*e)*(u-w)**2;
    }
    this.initial=this.snapshot().total;
  }
  derivative(y){const [x,v]=y,p=this.p,d=this.losses?p.damping:0;
    if(this.id==='pendulum')return [v,-G/p.length*Math.sin(x)-d*v,p.mass*p.length**2*d*v*v];
    if(this.id==='spring')return [v,-p.stiffness/p.mass*x-d*v,p.mass*d*v*v];
    if(this.id==='track'){const R=2.5,a=1+x*x/(R*R);return[v,-(x/(R*R)*v*v+G*x/R)/a-d*v,p.mass*a*d*v*v];}
    return[0,0,0];
  }
  step(dt=DT){
    if(this.done)return;
    const maxTime=this.id==='lamp'?this.p.capacity/this.p.power:this.id==='collision'?this.contactTime+3:definitions[this.id].limit;
    dt=Math.min(dt,maxTime-this.t);
    if(['pendulum','spring','track'].includes(this.id)){this.y=rk4(this.y,dt,y=>this.derivative(y));this.q=this.y[2];}
    this.t+=dt;this.done=this.t>=maxTime-1e-9;
  }
  snapshot(){const p=this.p,[x,v]=this.y;let e={},state={};
    if(this.id==='pendulum'){const h=p.length*(1-Math.cos(x));e={potential:p.mass*G*h,kinetic:0.5*p.mass*(p.length*v)**2,thermal:this.q};state={angle:x,height:h,speed:Math.abs(v*p.length),position:p.length*Math.sin(x)};}
    if(this.id==='spring'){e={elastic:0.5*p.stiffness*x*x,kinetic:0.5*p.mass*v*v,thermal:this.q};state={position:x,speed:Math.abs(v),velocity:v};}
    if(this.id==='track'){const h=x*x/5,speed=Math.abs(v)*Math.sqrt(1+x*x/6.25);e={potential:p.mass*G*h,kinetic:0.5*p.mass*speed*speed,thermal:this.q};state={position:x,height:h,speed,velocity:v};}
    if(this.id==='collision'){
      const hit=this.t>=this.contactTime;const [v1,v2]=hit?this.post:[p.velocity,p.velocity2];const pre=Math.min(this.t,this.contactTime),post=Math.max(0,this.t-this.contactTime);
      state={x1:-2+p.velocity*pre+this.post[0]*post,x2:2+p.velocity2*pre+this.post[1]*post,v1,v2,hit,momentum:p.mass*v1+p.mass2*v2,speed:Math.abs(v1)};
      e={kinetic1:0.5*p.mass*v1*v1,kinetic2:0.5*p.mass2*v2*v2,thermal:hit?this.collisionHeat:0};
    }
    if(this.id==='lamp'){const used=Math.min(p.capacity,p.power*this.t),eta=p.efficiency/100;e={chemical:p.capacity-used,light:used*eta,thermal:used*(1-eta)};state={remaining:1-used/p.capacity,power:used<p.capacity?p.power:0,eta,speed:0};}
    const total=Object.values(e).reduce((a,b)=>a+b,0);return {t:this.t,e,state,total,error:this.initial?(total-this.initial)/this.initial:0,initial:this.initial??total};
  }
}
