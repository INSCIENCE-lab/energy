const topics = [
 ['transformations', {
  uk: ['Як енергія переходить з одного виду в інший', 'Піднімаючи тягарець маятника, ти виконуєш роботу й збільшуєш гравітаційну потенціальну енергію системи «тягарець + Земля». Під час спуску вона переходить у кінетичну, а під час підйому — назад у потенціальну. Так само стиснута або розтягнута пружина надає вантажу швидкості. За наявності опору частина механічної енергії переходить у внутрішню енергію тіл і довкілля.', 'Наприклад, якщо система мала 10 Дж механічної енергії, а згодом має 7 Дж, то за відсутності обміну енергією з довкіллям приріст внутрішньої енергії становить 3 Дж. Результат залежить від меж системи: якщо повітря поза ними, енергію, передану йому, треба внести до балансу як відтік.'],
  en: ['How energy changes form', 'Lifting a pendulum bob does work and increases the gravitational potential energy of the bob–Earth system. On the way down it becomes kinetic energy and on the way back up it becomes potential energy again. A compressed or stretched spring likewise speeds up its load. Resistance transfers some mechanical energy into the internal energy of the bodies and surroundings.', 'If mechanical energy falls from 10 J to 7 J in an isolated system, its internal energy rises by 3 J. The system boundary matters. If the air lies outside it, energy passed to the air is an outflow.'],
  it: ['Come cambia forma l’energia', 'Sollevare la massa del pendolo richiede lavoro e aumenta l’energia potenziale gravitazionale del sistema massa–Terra. Nella discesa diventa energia cinetica, nella risalita torna potenziale. Anche una molla compressa o allungata accelera la massa. La resistenza trasforma parte dell’energia meccanica in energia interna dei corpi e dell’ambiente.', 'Se l’energia meccanica scende da 10 J a 7 J in un sistema isolato, l’energia interna aumenta di 3 J. Se l’aria è esterna al sistema, l’energia che riceve va registrata come uscita.'],
  es: ['Cómo cambia de forma la energía', 'Al levantar la masa del péndulo se realiza trabajo y aumenta la energía potencial gravitatoria del sistema masa–Tierra. Durante la bajada se transforma en energía cinética y durante la subida vuelve a ser potencial. Un muelle comprimido o estirado también acelera su carga. La resistencia convierte parte de la energía mecánica en energía interna de los cuerpos y del entorno.', 'Si la energía mecánica baja de 10 J a 7 J en un sistema aislado, su energía interna aumenta 3 J. Si el aire queda fuera del sistema, la energía transferida al aire cuenta como salida.'],
 }],
 ['damping', {
  uk: ['Опір і коефіцієнт γ', 'У симуляціях сила опору напрямлена проти руху й пропорційна швидкості. У записі Fоп = −mγv величина γ — коефіцієнт опору на одиницю маси, у с⁻¹. Якщо швидкість подвоїти, модуль сили опору подвоїться, а потужність перетворення механічної енергії у внутрішню зросте вчетверо, бо потужність цього перетворення дорівнює mγv².', 'За більшого γ коливання маятника й вантажу на пружині згасають швидше. Графік дає змогу зіставити спад механічної енергії зі зростанням внутрішньої.'],
  en: ['Resistance and the damping rate γ', 'The simulations use a resistive force opposite to the motion and proportional to velocity. In F = −mγv, γ is the drag coefficient per unit mass, in s⁻¹. Doubling speed doubles the force magnitude and quadruples the rate of mechanical energy conversion, mγv².', 'A larger γ damps the pendulum and spring oscillations faster. Compare the decline of mechanical energy with the rise in internal energy on the graph.'],
  it: ['Resistenza e tasso di smorzamento γ', 'Nelle simulazioni la forza resistente è opposta al moto e proporzionale alla velocità. In F = −mγv, γ è il coefficiente di resistenza per unità di massa, in s⁻¹. Raddoppiare la velocità raddoppia la forza e quadruplica il tasso di conversione dell’energia meccanica, mγv².', 'Con γ maggiore le oscillazioni si smorzano più rapidamente. Confronta nel grafico la diminuzione dell’energia meccanica con l’aumento di quella interna.'],
  es: ['Resistencia y tasa de amortiguamiento γ', 'En las simulaciones la fuerza de resistencia se opone al movimiento y es proporcional a la velocidad. En F = −mγv, γ es el coeficiente de resistencia por unidad de masa, en s⁻¹. Duplicar la rapidez duplica la fuerza y cuadruplica la tasa de conversión de energía mecánica, mγv².', 'Con un γ mayor las oscilaciones se amortiguan antes. Compara en el gráfico el descenso de la energía mecánica con el aumento de la interna.'],
 }],
 ['friction', {
  uk: ['Тертя між поверхнями', 'Тертя спокою протидіє початку ковзання й може зростати до μₛN. Під час ковзання модуль сили сухого тертя в простій моделі дорівнює μₖN, де N — сила реакції опори. Коефіцієнти μₛ і μₖ безрозмірні та залежать від пари поверхонь. Під час ковзання тіла нагріваються, а механічна енергія зменшується.', 'У досліді з візком повзунок задає лінійний опір γ. Сухе тертя μₖN і втрати через кочення коліс потребують окремих моделей.'],
  en: ['Friction between surfaces', 'Static friction resists the onset of sliding and can rise to μₛN. In a simple model the magnitude of sliding friction is μₖN, where N is the normal force. The dimensionless coefficients μₛ and μₖ depend on the pair of surfaces. Sliding warms the bodies and reduces mechanical energy.', 'The cart experiment uses linear damping γ. Dry friction μₖN and losses from rolling wheels require separate models.'],
  it: ['Attrito tra superfici', 'L’attrito statico contrasta l’inizio dello scorrimento e può arrivare a μₛN. In un modello semplice l’attrito dinamico ha modulo μₖN, dove N è la reazione normale. I coefficienti adimensionali μₛ e μₖ dipendono dalle superfici. Lo scorrimento può scaldare i corpi e riduce l’energia meccanica.', 'L’esperimento del carrello usa lo smorzamento lineare γ. L’attrito secco μₖN e le perdite di rotolamento richiedono modelli distinti.'],
  es: ['Rozamiento entre superficies', 'El rozamiento estático se opone al inicio del deslizamiento y puede llegar a μₛN. En un modelo sencillo el módulo del rozamiento cinético es μₖN, donde N es la fuerza normal. Los coeficientes adimensionales μₛ y μₖ dependen del par de superficies. El deslizamiento calienta los cuerpos y reduce la energía mecánica.', 'El experimento del carrito usa amortiguamiento lineal γ. El rozamiento seco μₖN y las pérdidas por rodadura requieren modelos distintos.'],
 }],
 ['collisions', {
  uk: ['Пружні й непружні зіткнення', 'Якщо зовнішній імпульс під час удару знехтовно малий, сумарний імпульс двох візків зберігається. За пружного зіткнення зберігається також сумарна кінетична енергія. За непружного частина кінетичної енергії переходить у деформацію, коливання й нагрівання. У повному балансі симуляція обліковує цей приріст як ΔU.', 'Коефіцієнт відновлення e — відношення відносної швидкості розходження після удару до відносної швидкості зближення перед ним. У моделі e = 1 відповідає пружному удару, 0 < e < 1 — непружному, а при e = 0 візки одразу після удару мають спільну швидкість. Знак швидкості кожного візка задає напрям його руху.'],
  en: ['Elastic and inelastic collisions', 'When the external impulse during impact is negligible, total momentum of the two carts is conserved. An elastic collision also conserves total kinetic energy. An inelastic collision converts some kinetic energy into deformation, vibration and heating. The model books that gain as ΔU.', 'The coefficient of restitution e is the relative speed of separation divided by the relative speed of approach. Here e = 1 is elastic, 0 < e < 1 is inelastic, and e = 0 gives the carts the same velocity immediately after impact. The sign of each cart’s velocity indicates its direction.'],
  it: ['Urti elastici e anelastici', 'Se l’impulso esterno durante l’urto è trascurabile, la quantità di moto totale dei due carrelli si conserva. In un urto elastico si conserva anche l’energia cinetica totale. In un urto anelastico parte dell’energia cinetica diventa deformazione, vibrazioni e riscaldamento. Il modello la registra come ΔU.', 'Il coefficiente di restituzione e è il rapporto tra velocità relativa di separazione e di avvicinamento. Qui e = 1 indica un urto elastico, 0 < e < 1 uno anelastico, ed e = 0 dà ai carrelli la stessa velocità subito dopo l’urto. Il segno della velocità indica il verso del moto.'],
  es: ['Choques elásticos e inelásticos', 'Si el impulso externo durante el choque es despreciable, se conserva la cantidad de movimiento total de los dos carritos. En un choque elástico también se conserva la energía cinética total. En uno inelástico, parte pasa a deformación, vibración y calentamiento. El modelo registra ese incremento como ΔU.', 'El coeficiente de restitución e es el cociente entre la rapidez relativa de separación después del choque y la de aproximación antes del choque. Aquí e = 1 es elástico, 0 < e < 1 es inelástico y e = 0 deja a los carritos con la misma velocidad inmediatamente después del choque. El signo indica el sentido del movimiento.'],
 }],
 ['power', {
  uk: ['Потужність і частка видимого світла', 'Потужність P показує, скільки енергії перетворюється за одиницю часу. Один ват дорівнює одному джоулю за секунду. У моделі лампи хімічна енергія батареї зменшується на Pt, видиме світло отримує частку ηPt, а решта енергії передається довкіллю як теплота.', 'За однакового запасу батареї більша потужність скорочує час роботи. Збільшення η за сталої потужності збільшує частку енергії, що припадає на світло.'],
  en: ['Power and the visible-light fraction', 'Power P is energy converted per unit time. One watt is one joule per second. In the lamp model the battery’s chemical energy falls by Pt, visible light receives ηPt, and the remainder goes to the surroundings as heat.', 'At the same battery capacity, higher power shortens run time. Raising η at fixed power increases the fraction emitted as visible light.'],
  it: ['Potenza e frazione di luce visibile', 'La potenza P è l’energia convertita nell’unità di tempo. Un watt equivale a un joule al secondo. Nel modello l’energia chimica della batteria diminuisce di Pt, la luce visibile riceve ηPt e il resto passa all’ambiente come calore.', 'A parità di capacità, una potenza maggiore riduce l’autonomia. Aumentare η a potenza costante aumenta la frazione emessa in luce visibile.'],
  es: ['Potencia y fracción de luz visible', 'La potencia P es la energía transformada por unidad de tiempo. Un vatio equivale a un julio por segundo. En el modelo la energía química de la batería baja en Pt, la luz visible recibe ηPt y el resto se transfiere al entorno como calor.', 'Con la misma capacidad, una potencia mayor reduce la autonomía. Aumentar η a potencia constante eleva la fracción emitida como luz visible.'],
 }],
];

const topicFigures = {
 transformations:{
  experiment:'pendulum',
  equations:['E<sub>{p}</sub> = mgh','E<sub>{k}</sub> = ½ mv²','E<sub>{spring}</sub> = ½ kx²','E<sub>{mech}</sub> = E<sub>{p}</sub> + E<sub>{k}</sub> + E<sub>{spring}</sub>'],
  symbols:['m','g','h','v','k','x'],
  values:[[[10,'mechanical']],[[7,'mechanical'],[3,'internal']]],
  names:[['Спочатку','Після дії опору'],['Initially','After damping'],['All’inizio','Dopo lo smorzamento'],['Al principio','Después del amortiguamiento']],
  captions:['В ізольованій системі 10 Дж залишаються 10 Дж. Змінюється розподіл енергії.','In an isolated system, the total stays at 10 J. The distribution of energy changes.','In un sistema isolato il totale resta pari a 10 J. Cambia la distribuzione dell’energia.','En un sistema aislado, el total sigue siendo 10 J. Cambia cómo se reparte la energía.'],
 },
 damping:{
  experiment:'spring',
  equations:['F<sub>{drag}</sub> = −mγv','P<sub>{drag}</sub> = mγv²','dE<sub>{mech}</sub>/dt = −P<sub>{drag}</sub>'],
  symbols:['m','γ','v','Pdrag'],
  values:[[[1,'rate']],[[4,'rate']]],
  names:[['Швидкість v','Швидкість 2v'],['Speed v','Speed 2v'],['Velocità v','Velocità 2v'],['Rapidez v','Rapidez 2v']],
  captions:['За сталої маси й γ подвоєння швидкості збільшує потужність розсіювання вчетверо. Смуги показують відношення 1 до 4.','At the same mass and γ, twice the speed dissipates energy four times as fast. The bars show the ratio 1 to 4.','A parità di massa e γ, raddoppiando la velocità la potenza dissipata quadruplica. Le barre mostrano il rapporto 1 a 4.','Con la misma masa y el mismo γ, duplicar la rapidez cuadruplica la potencia disipada. Las barras muestran la relación de 1 a 4.'],
 },
 friction:{
  experiment:'track',
  equations:['|F<sub>s</sub>| ≤ μ<sub>s</sub>N','|F<sub>k</sub>| = μ<sub>k</sub>N','ΔU = μ<sub>k</sub>Nℓ'],
  symbols:['μs','μk','N','ℓ','ΔU'],
  values:[[[12,'mechanical']],[[6,'mechanical'],[6,'internal']]],
  names:[['Перед ковзанням','Через 2 м'],['Before sliding','After 2 m'],['Prima di scivolare','Dopo 2 m'],['Antes de deslizar','Tras 2 m']],
  captions:['Уяви книжку, що ковзає по столу. Стала сила тертя 3 Н на шляху 2 м перетворює 6 Дж механічної енергії на внутрішню.','Imagine a book sliding across a table. A constant friction force of 3 N over 2 m converts 6 J of mechanical energy into internal energy.','Immagina un libro che scivola su un tavolo. Una forza d’attrito costante di 3 N su 2 m trasforma 6 J di energia meccanica in energia interna.','Imagina un libro que se desliza por una mesa. Una fuerza de rozamiento constante de 3 N en 2 m transforma 6 J de energía mecánica en energía interna.'],
 },
 collisions:{
  experiment:'collision',
  equations:['p = m₁v₁ + m₂v₂','p<sub>{before}</sub> = p<sub>{after}</sub>','e = |v₂′ − v₁′| / |v₁ − v₂|','ΔU = E<sub>{k},{before}</sub> − E<sub>{k},{after}</sub>'],
  symbols:['p','m₁,m₂','v₁,v₂','v₁′,v₂′','e','ΔU'],
  values:[[[10,'kinetic']],[[2.5,'kinetic'],[7.5,'internal']]],
  names:[['Пружне, e = 1','Непружне, e = 0,5'],['Elastic, e = 1','Inelastic, e = 0.5'],['Elastico, e = 1','Anelastico, e = 0,5'],['Elástico, e = 1','Inelástico, e = 0,5']],
  captions:['У прикладі два однакові візки зближуються з однаковими за модулем швидкостями й разом мають 10 Дж. Після непружного удару з e = 0,5 кінетична енергія становить 2,5 Дж.','Two identical carts approach at equal speeds with 10 J of kinetic energy in total. After an inelastic collision with e = 0.5, 2.5 J remain as kinetic energy.','Due carrelli identici si avvicinano con velocità di uguale modulo e hanno in totale 10 J di energia cinetica. Dopo un urto anelastico con e = 0,5 restano 2,5 J di energia cinetica.','Dos carritos idénticos se acercan con la misma rapidez y tienen en total 10 J de energía cinética. Tras un choque inelástico con e = 0,5 quedan 2,5 J de energía cinética.'],
 },
 power:{
  experiment:'lamp',
  equations:['P = ΔE/Δt','ΔE = Pt','E<sub>{light}</sub> = ηPt','Q = (1 − η)Pt','t<sub>{run}</sub> = E₀/P'],
  symbols:['P','t','η','Q','E₀'],
  values:[[[35,'light'],[65,'heat']]],
  names:[['З батареї надійшло 100 Дж'],['100 J from the battery'],['100 J dalla batteria'],['100 J procedentes de la pila']],
  captions:['За η = 35 % із 100 Дж енергії батареї 35 Дж припадає на видиме світло, а 65 Дж передається як теплота.','At η = 35 %, 35 J of the battery’s 100 J go into visible light and 65 J are transferred as heat.','Con η = 35 %, dei 100 J della batteria 35 J diventano luce visibile e 65 J vengono ceduti come calore.','Con η = 35 %, de los 100 J de la pila, 35 J se transforman en luz visible y 65 J se transfieren como calor.'],
 },
};

const parameterLabels = {
 m:['маса','mass','massa','masa'], g:['прискорення вільного падіння','gravitational acceleration','accelerazione di gravità','aceleración de la gravedad'],
 h:['висота над вибраним рівнем','height above the chosen reference','altezza rispetto al livello di riferimento','altura sobre el nivel de referencia'],
 v:['швидкість','velocity','velocità','velocidad'], k:['жорсткість пружини','spring stiffness','costante elastica','constante elástica'],
 x:['видовження або стиснення пружини','spring extension or compression','allungamento o compressione della molla','alargamiento o compresión del muelle'],
 γ:['коефіцієнт затухання','damping rate','tasso di smorzamento','tasa de amortiguamiento'],
 Pdrag:['потужність, з якою механічна енергія переходить у внутрішню','rate at which mechanical energy becomes internal energy','potenza con cui l’energia meccanica si trasforma in energia interna','potencia con la que la energía mecánica se transforma en energía interna'],
 μs:['коефіцієнт тертя спокою','coefficient of static friction','coefficiente di attrito statico','coeficiente de rozamiento estático'],
 μk:['коефіцієнт тертя ковзання','coefficient of kinetic friction','coefficiente di attrito dinamico','coeficiente de rozamiento cinético'],
 N:['модуль сили реакції опори','magnitude of the normal force','modulo della reazione normale','módulo de la fuerza normal'],
 ℓ:['відстань ковзання за сталої сили тертя','sliding distance at constant friction','distanza percorsa con attrito costante','distancia de deslizamiento con rozamiento constante'],
 ΔU:['приріст внутрішньої енергії в моделі','increase in internal energy in the model','aumento di energia interna nel modello','aumento de energía interna en el modelo'],
 p:['сумарний імпульс двох візків','total momentum of both carts','quantità di moto totale dei due carrelli','cantidad de movimiento total de los dos carritos'],
 'm₁,m₂':['маси візків','cart masses','masse dei carrelli','masas de los carritos'],
 'v₁,v₂':['швидкості перед зіткненням','velocities before impact','velocità prima dell’urto','velocidades antes del choque'],
 'v₁′,v₂′':['швидкості після зіткнення','velocities after impact','velocità dopo l’urto','velocidades después del choque'],
 e:['коефіцієнт відновлення','coefficient of restitution','coefficiente di restituzione','coeficiente de restitución'],
 P:['електрична потужність','electrical power','potenza elettrica','potencia eléctrica'],
 t:['час роботи лампи','lamp running time','tempo di funzionamento della lampada','tiempo de funcionamiento de la lámpara'],
 η:['частка енергії, що переходить у видиме світло','fraction of energy converted to visible light','frazione di energia convertita in luce visibile','fracción de energía transformada en luz visible'],
 Q:['теплота, передана довкіллю','heat transferred to the surroundings','calore ceduto all’ambiente','calor cedido al entorno'],
 'E₀':['початковий запас енергії батареї','initial stored energy of the battery','energia iniziale immagazzinata nella batteria','energía almacenada inicialmente en la pila'],
};
const parameterUnits = {m:'kg',g:'m/s²',h:'m',v:'m/s',k:'N/m',x:'m',γ:'s⁻¹',Pdrag:'W',N:'N',ℓ:'m',ΔU:'J',p:'kg·m/s','m₁,m₂':'kg','v₁,v₂':'m/s','v₁′,v₂′':'m/s',P:'W',t:'s',Q:'J','E₀':'J'};
const ukrainianUnits = {'kg':'кг','m/s²':'м/с²','m':'м','m/s':'м/с','N/m':'Н/м','s⁻¹':'с⁻¹','W':'Вт','N':'Н','J':'Дж','kg·m/s':'кг·м/с','s':'с'};
const subs = [
 {p:'п',k:'к',spring:'пруж',mech:'мех',drag:'оп',before:'до',after:'після',light:'світло',run:'роботи'},
 {p:'p',k:'k',spring:'el',mech:'mech',drag:'drag',before:'before',after:'after',light:'light',run:'run'},
 {p:'p',k:'c',spring:'el',mech:'mecc',drag:'res',before:'prima',after:'dopo',light:'luce',run:'funz'},
 {p:'p',k:'c',spring:'el',mech:'mec',drag:'res',before:'antes',after:'después',light:'luz',run:'func'},
];
const legend = {
 mechanical:['механічна','mechanical','meccanica','mecánica'],kinetic:['кінетична','kinetic','cinetica','cinética'],
 internal:['приріст внутрішньої','internal energy gained','aumento di energia interna','aumento de energía interna'],
 light:['видиме світло','visible light','luce visibile','luz visible'],heat:['передана теплота','heat transferred','calore ceduto','calor cedido'],
 rate:['відносна потужність','relative power','potenza relativa','potencia relativa'],
};
const topicIntros = {
 transformations:['Підніми гойдалку й відпусти. Поки вона спускається, енергія висоти переходить в енергію руху.','Lift a swing and let it go. As it moves down, energy stored by lifting it becomes energy of motion.','Solleva un’altalena e lasciala andare. Mentre scende, l’energia accumulata sollevandola diventa energia di movimento.','Levanta un columpio y suéltalo. Al bajar, la energía almacenada al subir se convierte en energía de movimiento.'],
 damping:['Гойдалка без поштовхів розгойдується дедалі менше. Опір відбирає енергію її руху, особливо коли вона рухається швидко.','A swing goes less high if nobody pushes it. Resistance takes energy from its motion, especially when it moves fast.','Senza nuove spinte un’altalena sale sempre meno. La resistenza sottrae energia al suo moto, soprattutto quando va veloce.','Sin nuevos empujones, un columpio sube cada vez menos. La resistencia resta energía a su movimiento, sobre todo cuando va rápido.'],
 friction:['Штовхни книжку по столу. Її гальмує тертя, а книжка й стіл можуть трохи нагрітися.','Push a book across a table. Friction slows it down, and the book and table can warm up slightly.','Spingi un libro sul tavolo. L’attrito lo rallenta e il libro e il tavolo possono scaldarsi appena.','Empuja un libro por una mesa. El rozamiento lo frena y el libro y la mesa pueden calentarse un poco.'],
 collisions:['Кульки можуть відскочити після удару, а грудочки пластиліну — злипнутися. Від цього залежить, скільки енергії залишиться в русі.','Marbles can bounce apart after impact, while pieces of modelling clay can stick together. This changes how much energy remains in motion.','Due biglie possono rimbalzare dopo l’urto, mentre due pezzi di plastilina possono attaccarsi. Cambia così l’energia che resta nel moto.','Dos canicas pueden rebotar tras chocar y dos trozos de plastilina pueden quedarse pegados. De ello depende cuánta energía queda en el movimiento.'],
 power:['Ліхтарик витрачає запас батареї. Частина енергії стає видимим світлом, а частина нагріває ліхтарик і довкілля.','A torch uses energy stored in its battery. Some becomes visible light and some warms the torch and its surroundings.','Una torcia usa l’energia della batteria. Una parte diventa luce visibile e una parte scalda la torcia e l’ambiente.','Una linterna usa la energía de la pila. Parte se convierte en luz visible y parte calienta la linterna y su entorno.'],
};
const escapeText = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;');

export function energyTopics(language, experimentURL){
 const i=['uk','en','it','es'].indexOf(language);
 const locale=['uk-UA','en-GB','it-IT','es-ES'][i];
 const open=['Перевір у досліді','Try it in the experiment','Prova nell’esperimento','Pruébalo en el experimento'][i];
 const detailHeading=['Докладніше про модель','More about the model','Per approfondire il modello','Más sobre el modelo'][i];
 const legendHeading=['Що означають символи','What the symbols mean','Significato dei simboli','Qué significan los símbolos'][i];
 const notation=equation=>equation.replace(/\{(\w+)\}/g,(_,key)=>subs[i][key]);
 return topics.map(([id,copies])=>{
  const [title,explanation,details]=copies[language];
  const figure=topicFigures[id], unit=id==='damping'?'':(i===0?' Дж':' J');
  const max=Math.max(...figure.values.map(row=>row.reduce((total,[n])=>total+n,0)));
  const bars=figure.values.map((row,index)=>{
   const segments=row.map(([n,key])=>`<span class="energy-bar-${key}" style="width:${100*n/max}%"></span>`).join('');
   const values=row.map(([n,key])=>`<span><i class="energy-bar-${key}" aria-hidden="true"></i> ${n.toLocaleString(locale)}${unit} · ${legend[key][i]}</span>`).join('');
   return `<div class="topic-chart-row"><strong>${figure.names[i][index]}</strong><div class="topic-chart-bar" aria-hidden="true">${segments}</div><div class="topic-chart-key">${values}</div></div>`;
  }).join('');
  const equations=figure.equations.map(e=>`<span class="topic-equation">${notation(e)}</span>`).join('');
  const symbols=figure.symbols.map(symbol=>{
   const rawUnit=parameterUnits[symbol];
   const unit=rawUnit?(i===0?ukrainianUnits[rawUnit]:rawUnit):null;
   const display={μs:'μ<sub>s</sub>',μk:'μ<sub>k</sub>',Pdrag:notation('P<sub>{drag}</sub>')}[symbol]??symbol;
   return `<div><dt>${display}</dt><dd>${parameterLabels[symbol][i]}${unit?', '+unit:''}</dd></div>`;
  }).join('');
  return `<section id="energy-${id}" class="energy-topic">
   <h3>${title}</h3>
   <div class="topic-layout"><div><p>${topicIntros[id][i]}</p><div class="topic-equations">${equations}</div>
   <h4>${legendHeading}</h4><dl class="topic-symbols">${symbols}</dl></div>
   <figure class="topic-figure">${bars}<figcaption>${figure.captions[i]}</figcaption></figure></div>
   <details class="topic-details"><summary>${detailHeading}</summary><p>${escapeText(explanation)}</p><p>${escapeText(details)}</p></details><a href="${experimentURL(figure.experiment)}" class="topic-link">${open}</a>
  </section>`;
 }).join('');
}
