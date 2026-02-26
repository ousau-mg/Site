# 🚀 Instalação e Configuração

Para a instalação e o funcionamento do site via **Docusaurus**, serão necessários os seguintes pré-requisitos:

1.  **Git**: [Download e Instalação](https://git-scm.com/install/windows)
2.  **Node.js**: [Download e Instalação](https://nodejs.org/pt-br/download) (Recomendado: Versão LTS)

### Passo a passo para clonar e replicar este projeto

3. instalação da versão corrente:
```bash
npm install --legacy-peer-deps
```

4. instalação do módulo de ícones do Docusaurus
````bash
npm install @iconify/react --legacy-peer-deps
```

## 🛠️ Funcionalidades
O site apresenta as seguintes integrações e componentes:

📊 Apresentação de BI (Power BI)
O dashboard é exibido através de um componente de iframe integrado:

```
<iframe 
    src="https://app.powerbi.com/view?r=eyJrIjoiYWU1MTU5NWEtZTY0MS00MzQyLWI3Y2YtNGY4YzhmNTAzMTMyIiwidCI6IjUzMzU2OTg2LTY4OGMtNGNiOS1hZTNhLWU4ZGJmNjkxMWE0MyJ9&pageName=a1b82749ce7d052c043e" 
    width="100%" 
    height="900" 
    title="OGE - Observatório" 
    style={{ border: 0 }}
    allowFullScreen={true}>
  </iframe>
```
🎥 Player de Vídeo
Componente para exibição de vídeos externos (Ex: YouTube):

```
<div className="container">
        <VideoPlayer url="https://www.youtube.com/watch?v=7PBGVKmX2NQ" />
        </VideoPlayer>
  <div>

```
💬 Sistema de Comentários (Giscus)
Utilizamos o Giscus para gestão de comentários via GitHub Discussions.

Requisito: O repositório deve ser público.

Configuração de IDs: Para que os comentários funcionem, o componente em src/components/GisusComments deve estar configurado com os IDs corretos do repositório atual:

data-repo-id: ID único do seu repositório no GitHub.

data-category-id: ID da categoria de Discussions onde as mensagens serão salvas.

Login: O usuário precisa estar logado no GitHub para comentar.

Localização do Código: \src\components\GisusComments.

✨ Ícones (Iconify)
Utilizamos a dependência Iconify para a renderização de ícones.

Importante: Certifique-se de que o comando npm install --legacy-peer-deps foi executado com sucesso. O parâmetro --legacy-peer-deps é essencial para evitar conflitos de versões de dependências do React e garantir que os ícones carreguem corretamente no ambiente local.


