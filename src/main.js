import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div style="width:100%;display:flex;justify-content:center;gap:16px;position:fixed;top:16px;left:0;z-index:10;pointer-events:none;">
      <button id="home-btn" style="pointer-events:auto;">Home</button>
      <button id="contact-btn" style="pointer-events:auto;">Contact Us</button>
    </div>
    <!-- Removed Vite and JavaScript logo clickable images -->
    <h1>PLM Advisor</h1>
    <div style="display:flex;justify-content:center;align-items:center;margin:32px 0;">
      <a href="https://youtube.com/@nxcoder?feature=shared" target="_blank" rel="noopener">
        <img src="/images/Screenshot 2023-11-08 184841.png" alt="Screenshot" class="glow-on-hover" style="max-width:80vw;max-height:60vh;cursor:pointer;transition:filter 0.3s;border-radius:32px;" />
      </a>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
