# Macpet - Indústria de Embalagens PET

Website moderno e inovador para a Macpet, uma indústria de embalagens PET de alta qualidade com compromisso com a sustentabilidade.

## 🚀 Características

- **Design Responsivo**: Site totalmente responsivo para todos os dispositivos
- **Animações Suaves**: Microinterações e animações com Framer Motion
- **Seções Principais**:
  - Home com hero section impactante
  - Produtos (Preformas, Frascos PET, Tampas, Desenvolvimento)
  - Qualidade e Certificações
  - Sustentabilidade e Compromisso Ambiental
  - Contato e Footer

## 🛠️ Tecnologias Utilizadas

- **React** - Framework JavaScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Biblioteca de animações
- **Lucide Icons** - Ícones modernos
- **shadcn/ui** - Componentes UI reutilizáveis

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/Macpet-Site.git
cd Macpet-Site

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Fazer build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🌐 Deploy

O site é automaticamente deployado no GitHub Pages através do GitHub Actions. Qualquer push para a branch `main` ou `master` acionará o build e o deploy automático.

### Configurar GitHub Pages

1. Vá para **Settings** do repositório
2. Clique em **Pages** no menu lateral
3. Em "Build and deployment", selecione:
   - Source: **GitHub Actions**
4. O site será publicado em: `https://seu-usuario.github.io/Macpet-Site/`

## 📝 Estrutura do Projeto

```
├── src/
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos da aplicação
│   ├── assets/           # Imagens e recursos
│   ├── components/       # Componentes React
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos estáticos
├── dist/                 # Build de produção
├── package.json          # Dependências do projeto
├── vite.config.js        # Configuração do Vite
└── .github/workflows/    # GitHub Actions workflows
```

## 🎨 Personalização

### Alterar Título do Site
Edite `index.html` e mude o `<title>`:
```html
<title>MACPET | Embalagens PET Inovadoras e Sustentáveis</title>
```

### Alterar Logo
Substitua a imagem em `src/assets/macpet_logo_transparent.png` e atualize a importação em `src/App.jsx`.

### Alterar Cores
As cores principais estão definidas em `src/App.css` e `src/App.jsx`. Procure por:
- `bg-red-600` - Cor vermelha principal
- `text-gray-900` - Cor de texto principal

## 📞 Contato

Para mais informações sobre a Macpet, visite o site ou entre em contato através dos dados fornecidos no rodapé.

## 📄 Licença

Este projeto é propriedade da Macpet Indústria de Embalagens LTDA.

---

**Desenvolvido com ❤️ para a Macpet**

