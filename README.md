# 🌟 Buscador de CEP - Interface Dourada

Um buscador de CEP moderno e elegante com design dourado premium, desenvolvido em React com Vite e Styled Components.

![Buscador de CEP](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.1.0-646CFF?style=for-the-badge&logo=vite)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.19-pink?style=for-the-badge&logo=styled-components)

## ✨ Características

- 🎨 **Design Dourado Premium** - Interface luxuosa com gradientes dourados e efeitos visuais
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Desenvolvido com Vite para carregamento rápido
- 🎭 **Animações Suaves** - Efeitos visuais elegantes e transições fluidas
- 🔍 **Validação Inteligente** - Verificação automática de CEP com 8 dígitos
- 🌟 **UX Moderna** - Interface intuitiva com feedback visual em tempo real

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca principal para interface
- **Vite 4.1.0** - Build tool moderno e rápido
- **Styled Components 6.1.19** - CSS-in-JS para estilização
- **React Icons 5.5.0** - Ícones modernos e consistentes
- **Axios 1.11.0** - Cliente HTTP para requisições à API

## 🎯 Funcionalidades

### 🔍 Busca de CEP
- Digite qualquer CEP brasileiro (8 dígitos)
- Validação automática de formato
- Busca em tempo real via API ViaCEP
- Formatação automática do resultado

### 🎨 Interface Premium
- **Gradientes Dourados**: Tons de ouro (#FFD700, #FFA500, #FF8C00)
- **Animações Elegantes**: Efeitos de shimmer, glow e rotação
- **Partículas Visuais**: Estrelas douradas flutuantes no fundo
- **Efeitos de Hover**: Interações suaves e responsivas

### 📊 Informações Exibidas
- **CEP Formatado**: Exibição com máscara (00000-000)
- **Endereço Completo**: Logradouro, bairro, cidade e estado
- **DDD**: Código de área quando disponível
- **Ícones Temáticos**: Cada informação com ícone dourado específico

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/buscador-cep.git
cd buscador-cep
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
buscador-cep/
├── public/
├── src/
│   ├── assets/
│   │   └── api.js          # Configuração da API ViaCEP
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada
│   ├── global.js           # Estilos globais
│   └── styles.js           # Componentes estilizados
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Componentes Principais

### `Conteiner`
- Container principal com gradiente animado
- Efeitos de partículas estreladas
- Background responsivo com múltiplas camadas

### `Title_One`
- Título principal com gradiente dourado
- Animações de shimmer e sparkle
- Ícones decorativos animados

### `SingleInput`
- Campo de entrada com bordas douradas
- Efeitos de hover e focus removidos (conforme solicitado)
- Validação em tempo real

### `ButtonOne`
- Botão de busca com gradiente dourado
- Animações de rotação e escala
- Efeitos de brilho no hover

### `Main`
- Card de resultados com layout em grid
- Informações organizadas e estilizadas
- Ícones temáticos para cada tipo de dado

## 🔧 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `styles.js`:

```javascript
// Cores douradas principais
#FFD700  // Dourado principal
#FFA500  // Laranja dourado
#FF8C00  // Laranja escuro
```

### Animações
Todas as animações estão definidas no início do arquivo `styles.js` e podem ser facilmente modificadas.

### API
A configuração da API está em `src/assets/api.js` e usa a ViaCEP gratuita.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints otimizados:

- **Desktop**: Layout completo com todos os efeitos
- **Tablet**: Adaptação de tamanhos e espaçamentos
- **Mobile**: Layout compacto mantendo a elegância

## 🌐 API Utilizada

- **ViaCEP**: API gratuita para consulta de CEPs brasileiros
- **Endpoint**: `https://viacep.com.br/ws/{cep}/json/`
- **Formato**: JSON com informações completas do endereço

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Faça upload da pasta dist/ para a Vercel
```

### Netlify
```bash
npm run build
# Conecte o repositório ao Netlify
```

### GitHub Pages
```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Desenvolvedor**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [ViaCEP](https://viacep.com.br/) pela API gratuita
- [React Icons](https://react-icons.github.io/react-icons/) pelos ícones
- [Styled Components](https://styled-components.com/) pela estilização
- Comunidade React pela inspiração

---

⭐ **Se este projeto te ajudou, não esqueça de dar uma estrela!** ⭐
