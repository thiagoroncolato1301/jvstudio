JV STUDIO — Site estático (HTML/CSS/JS)
========================================

Estrutura:
  index.html              → Home (tela dividida)
  unico.html              → Único Barbearia
  jessicamessias.html     → Espaço Jessica Messias
  styles.css              → Todos os estilos
  script.js               → WhatsApp dinâmico
  assets/                 → Imagens

COMO USAR LOCALMENTE
--------------------
Basta abrir o "index.html" no navegador. Ou rodar um servidor simples:
  python3 -m http.server
e acessar http://localhost:8000

COMO EDITAR DADOS REAIS
-----------------------
1) WhatsApp e Instagram:
   - Abra "script.js" e troque os números/mensagens em window.JV.
   - Formato: "55" + DDD + número (ex: 5511999999999).

2) Endereço, horários, serviços, preços, profissionais:
   - Abra "unico.html" e "jessicamessias.html" e edite o texto direto no HTML.

3) Google Maps:
   - No Google Maps → Compartilhar → Incorporar mapa → copie o link do src
     e cole dentro do <iframe src="..."> na seção "localizacao".

4) Instagram (feed real):
   - As 6 imagens são placeholders. Substitua os "src" dos <img> dentro de
     <div class="jv-insta"> pelos links reais das fotos.

5) Imagens hero:
   - Troque "assets/unico-hero.jpg" e "assets/jessica-hero.jpg" pelas fotos
     reais dos espaços (mesmo nome para manter os caminhos).

PUBLICAÇÃO
----------
Pode subir essa pasta inteira em qualquer hospedagem estática:
Netlify, Vercel, GitHub Pages, Hostinger, etc.
