// Scale the SVG drawing, never the experiment's physical parameters.
const texts={uk:['Масштаб зображення','Початковий масштаб'],en:['Image scale','Reset scale'],it:['Scala dell’immagine','Ripristina la scala'],es:['Escala de la imagen','Restablecer la escala']};
const lang=new URLSearchParams(location.search).get('lang')||'uk',t=texts[lang]||texts.uk;
const scene=document.getElementById('scene'),wrap=scene.parentElement;
const controls=document.createElement('div');controls.className='mobile-scene-tools';
const label=document.createElement('label');label.textContent=t[0];const slider=document.createElement('input');slider.type='range';slider.min='1';slider.max='3';slider.step='.25';slider.value='1';slider.setAttribute('aria-label',t[0]);const out=document.createElement('output');out.textContent='1×';label.append(slider,out);
const reset=document.createElement('button');reset.type='button';reset.textContent=t[1];controls.append(label,reset);wrap.before(controls);
const viewport=document.createElement('div');viewport.className='energy-scene-viewport';scene.before(viewport);viewport.append(scene);
const draw=()=>{const scale=Number(slider.value);scene.style.width=100*scale+'%';scene.style.maxHeight='none';scene.style.height='auto';out.textContent=scale+'×';};slider.oninput=draw;reset.onclick=()=>{slider.value='1';draw();};
