# Valor Contadores — Contexto do Projeto

## Sobre a Empresa

**Valor Contadores** é uma empresa de contabilidade empresarial. Site construído
a partir da base técnica de `C:\dev\hardworksolutions` (mesmo sistema de
componentes HTML/CSS/JS), com paleta recolorida para azul e branco e conteúdo
voltado a transmitir credibilidade para um escritório de contabilidade.

**Status:** logo oficial e dados reais de contato já recebidos do cliente
(2026-07-24) e aplicados ao site.

## Dados reais da empresa (2026-07-24)

| Campo | Valor |
|-------|-------|
| E-mail | contato@valorcontadores.com.br |
| Instagram | @valor.contadores → https://instagram.com/valor.contadores |
| LinkedIn | Não tem (removido do site) |
| Telefone/WhatsApp | (84) 98134-8943 → wa.me/5584981348943 |
| Endereço | Rua Aníbal Brandão, 2, Sala 101, Nova Parnamirim, Parnamirim/RN — CEP 59151-800 |
| Horário | Segunda a sexta, 8h às 17h (equipe também responde fora desse horário quando possível) |
| CRC | Cliente optou por **não exibir** número de CRC no site por enquanto — todas as menções a CRC foram removidas (ver seção abaixo) |
| Nome fantasia/CNPJ | Só "Valor Contadores" por enquanto, sem CNPJ formalizado ainda |

**IMPORTANTE — empresa em fase inicial (2026-07-24):** a Valor Contadores
está começando agora. Por isso o site **não** deve apresentar números de
anos de experiência, quantidade de clientes atendidos, taxa de retenção ou
depoimentos — tudo isso foi removido por ser fictício/prematuro. O
posicionamento adotado é o de uma contabilidade nova, usando isso como
vantagem (atenção próxima, estrutura digital desde o início, sem carteira
engessada) em vez de esconder ou inventar histórico. Ver seção "Como
trabalhamos desde o início" em `sobre.html`. Se no futuro a empresa acumular
números reais (anos, clientes, depoimentos verídicos), aí sim vale reintroduzir
uma barra de estatísticas / seção de depoimentos — com dados reais.

---

## ✅ Logo oficial aplicado

Arquivos originais do cliente ficam salvos em `imagens/` com os nomes:
- `logo-valor-contadores-preto.png` — lockup completo (ícone + VALOR + CONTADORES) em preto, fundo transparente
- `logo-valor-contadores-branco.png` — mesmo lockup em branco, fundo transparente
- `logo-valor-contadores-navy-preview.jpg` — arte de apresentação em fundo navy (usada só para referência de cor)

A partir deles foram gerados os recortes usados no site (ícone + "VALOR",
sem o subtítulo "CONTADORES", que fica ilegível em tamanho de menu):
- `logo-valor-contadores-header.png` — versão preta (não usada mais no header, mantida como base)
- `logo-valor-contadores-header-azul.png` — mesma versão recolorida para o azul de destaque (`#2f74d8`, via ColorMatrix preservando o alpha) — **é a usada no header** (2026-07-24, pedido do cliente)
- `logo-valor-contadores-footer.png` — versão branca, usada no footer (fundo navy)
- `favicon.png` — só o ícone (o "V"/check), recortado e centralizado em fundo navy arredondado

A cor navy oficial da marca (`#222558`) foi extraída por amostragem de pixel
do preview e already aplicada em `--navy` no CSS; o azul de destaque
(`--accent`) foi ajustado para o mesmo tom de indigo/azul da marca.

Se o cliente preferir o lockup completo (com "CONTADORES") no header/footer
em vez do recorte compacto, é só trocar `-header.png`/`-footer.png` pelos
arquivos `-preto.png`/`-branco.png` originais e aumentar a altura no CSS
(`.nav__logo img`, `.footer-logo img`) — mas o subtítulo tende a ficar
ilegível abaixo de ~120px de altura.

---

## ⚠️ Ainda pendente

| Campo | Situação | Onde aparece |
|-------|----------|---------------|
| Envio do formulário | `mailto:` (abre cliente de e-mail do usuário) | `Scripts/main.js` — trocar por backend real (Formspree, EmailJS, PHP mailer) quando a hospedagem for definida |
| CNPJ / nome fantasia oficial | ainda não formalizado — usando só "Valor Contadores" | — |

**Removido intencionalmente (não são placeholders a preencher, foram tirados
do site):** barra de estatísticas (anos/clientes/retenção), badge flutuante
"+300 empresas" no hero, seção de depoimentos, ícone de LinkedIn, seção
"Trajetória"/marcos históricos, todas as menções a número/registro de CRC —
tudo isso implicava histórico ou credencial que a empresa ainda não tem ou
não quer expor agora. Ver nota "IMPORTANTE" no topo deste arquivo.

Buscar/substituir a string `5584981348943` cobre todos os links de
WhatsApp/telefone de uma vez, se o número mudar.

---

## Stack Tecnológico

| Camada | Tecnologia |
|--------|------------|
| Markup | HTML5 semântico, sem framework |
| Estilo | CSS3 customizado — arquivo único `Styles/main.css` |
| Scripts | JavaScript Vanilla — arquivo único `Scripts/main.js` |
| Fontes | Poppins (Google Fonts — preconnect + display=swap) |
| Formulários | Vanilla JS → `mailto:` (placeholder, ver tabela acima) |

---

## Identidade Visual

```css
--accent:      #2f74d8;   /* azul de destaque (CTAs, ícones, links) */
--accent-dark: #1e5bb8;   /* hover / dark state */
--navy:        #1b3250;   /* navy p/ seções escuras (footer, CTA) — ver nota abaixo */
--text:        #191d3d;   /* texto principal */
--text-muted:  #5c6089;   /* subtextos */
--bg-subtle:   #f4f7fb;   /* fundos alternados */
--gold:        #c9a227;   /* estrelas de avaliação (único acento não-azul) */
```

**Histórico do ajuste de cor (2026-07-24):** a cor navy amostrada por pixel
direto do logo oficial é `#222558` (matiz ~237°, quase o azul "puro"
`#0000FF` = matiz 240°). Em pequenas áreas (o ícone da logo) isso lê como
azul normalmente, mas em áreas grandes (rodapé, seção de CTA) o cliente
percebeu como roxo — um efeito real de telas/percepção com azuis próximos
dessa matiz. Corrigido para `--navy: #1b3250` (mesma família, matiz ~215°,
igual à do `--accent`) especificamente para uso em CSS/superfícies grandes.
Os arquivos de logo (`logo-valor-contadores-*.png`) continuam com a cor
original exata do cliente — a mudança foi só na paleta CSS.

- **Fonte:** Poppins 300/400/500/600/700/800
- **Estilo:** muito whitespace, cantos arredondados, sombras suaves, SVGs
  inline para ícones — foco em transmitir solidez e confiança (azul/navy
  predominante em vez de preto puro nas seções escuras)

---

## Estrutura de Arquivos

```
VALOR_PAGE/
├── index.html          # Home (hero + serviços + sobre + processo + diferenciais + CTA)
├── sobre.html           # História, missão/visão/valores, compromisso desde o início
├── servicos.html        # 6 serviços detalhados + FAQ (accordion)
├── contato.html         # Formulário + informações + mapa
├── favicon.png
├── Styles/main.css       # CSS único
├── Scripts/main.js       # JS único (menu, reveal, contador de stats, FAQ accordion, form)
├── imagens/
│   ├── logo-valor-contadores-preto.png         # lockup oficial completo, preto (arquivo do cliente)
│   ├── logo-valor-contadores-branco.png        # lockup oficial completo, branco (arquivo do cliente)
│   ├── logo-valor-contadores-navy-preview.jpg  # arte de apresentação em navy (só referência)
│   ├── logo-valor-contadores-header.png        # recorte ícone+VALOR, preto — usado no header
│   ├── logo-valor-contadores-footer.png        # recorte ícone+VALOR, branco — usado no footer
│   └── foto-equipe.jpg                         # foto de estoque (reunião analisando relatório financeiro), fornecida pelo cliente 2026-07-24
└── .claude/launch.json   # Servidor de preview: npx serve -l 3457
```

---

## Navegação

```
Home | Sobre | Serviços ▾ | Contato
              ├── Contabilidade Empresarial  → servicos.html#contabilidade-empresarial
              ├── Abertura de Empresa        → servicos.html#abertura-de-empresa
              ├── Departamento Pessoal       → servicos.html#departamento-pessoal
              ├── Consultoria Tributária     → servicos.html#consultoria-tributaria
              ├── MEI e Simples Nacional     → servicos.html#mei-e-simples
              └── Regularização Previdenciária de Obras → servicos.html#regularizacao-de-obras
```

---

## Componentes Reutilizados em Todas as Páginas

- **Header** fixo com dropdown de Serviços e menu mobile (hamburguer)
- **Footer** navy: logo + Serviços + Contato + social + copyright dinâmico
- **WhatsApp float**
- **Scroll reveal** via IntersectionObserver (`.reveal`)

## Componentes Específicos de Credibilidade

- `.trust-badge` / `.trust-badges` — selos visuais de certificação (círculo com gradiente + ícone), substituem os antigos `.credential-chip` de texto puro. Usado em `index.html` (Sobre) e `sobre.html` (História)
- `.useful-link-card` / `.useful-links-grid` — seção "Links Úteis" (`servicos.html#links-uteis`) com atalhos para Receita Federal, e-CAC, Simples Nacional, NF-e, eSocial e CFC — inspirado nos concorrentes Master Contadores e Aditivo Contabilidade
- `.faq-item` — accordion de perguntas frequentes (`servicos.html`)
- `.service-detail` / `.check-grid` — blocos detalhados de cada serviço

**Classes ainda no CSS mas sem uso atual** (mantidas para reaproveitar quando
houver dados reais): `.stats-bar`/`.stat-item` (números), `.testimonial-card`
(depoimentos), `.hero-float` (badge flutuante de número no hero).

### Benchmark de concorrentes (2026-07-24)

Analisados: mastercontadores.com.br, ruicadete.com.br, aditivo.srv.br. Padrões
identificados e não implementados ainda (o cliente priorizou "Links Úteis" e
"selos visuais" nesta rodada):
- Botão "Área do Cliente" / portal do contador (Onvio, etc.) no header
- Depoimentos com nome de empresa real (Rui Cadete tem ~20) — **não aplicável agora**: a Valor ainda não tem clientes/depoimentos reais (empresa em fase inicial, ver nota no topo). Reintroduzir só quando houver depoimentos verídicos.
- Foto real do escritório/prédio no hero (em vez do card ilustrado)
- Banner de cookies/LGPD
- Nuvem de logos de clientes — mesma ressalva dos depoimentos
- Segmentação de público (profissional liberal / PME / indústria)

---

## Preview local

```
npx serve -l 3457 .
```
(configurado em `.claude/launch.json`)

---

## Próximos passos combinados com o cliente

1. ~~Cliente envia logo oficial~~ — feito em 2026-07-24, aplicado ao header,
   footer, favicon e paleta de cores (navy oficial).
2. ~~Remover números/depoimentos fictícios~~ — feito em 2026-07-24 (empresa
   em fase inicial, ver nota "IMPORTANTE" no topo).
3. ~~Cliente fornece dados reais de contato~~ — feito em 2026-07-24 (e-mail,
   Instagram, endereço, telefone/WhatsApp, horário — ver tabela acima).
4. ~~Ajustar tom do azul de destaque~~ — feito em 2026-07-24, cliente achou o
   primeiro tom parecido com roxo.
5. Definir hospedagem/backend para o formulário de contato (hoje é `mailto:`).
6. ~~Substituir foto placeholder~~ — feito em 2026-07-24, cliente enviou foto
   de estoque (`imagens/foto-equipe.jpg`), usada em `index.html` e `sobre.html`.
7. Quando houver clientes reais: considerar reintroduzir `.stats-bar` e
   `.testimonial-card` com dados verídicos.
