# ASITA Website Clone

A complete clone of the ASITA.com website built with modern web technologies. This project recreates the original ASITA website with enhanced interactive features, smooth animations, and responsive design.

## 🚀 Features

- **Complete Website Clone**: Faithful recreation of ASITA.com's design and content
- **Interactive Components**: Working contact forms, newsletter subscription, and product search
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Responsive Design**: Optimized for all device sizes
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Accessibility**: Following web accessibility best practices
- **Performance Optimized**: Fast loading and smooth user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Font**: Roboto (Google Fonts)
- **Package Manager**: Bun

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/eldesinstruments/asita-website-clone.git
cd asita-website-clone
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Key Components

### Interactive Features
- **Search Dialog**: Real-time product search with filtering
- **Contact Form**: Working contact form with validation and toast notifications
- **Newsletter Subscription**: Email subscription with animated feedback
- **Product Cards**: Animated product cards with hover effects

### Sections Included
- Header with navigation and search
- Hero section with main call-to-action
- Product categories showcase
- Featured products section
- Services overview
- Color selection tools
- Latest news and updates
- Partner logos
- Newsletter footer

## 🎨 Design Features

- **Brand Colors**: Authentic ASITA color scheme
- **Typography**: Roboto font family for consistency
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design
- **Interactive**: Engaging user interactions throughout

## 🚀 Deployment

This project can be deployed on various platforms:

### Vercel (Recommended)
```bash
bun run build
```
Then connect your GitHub repository to Vercel for automatic deployments.

### Netlify
```bash
bun run build
```
Deploy the `out` folder to Netlify.

### GitHub Pages
Enable GitHub Pages in repository settings and deploy the built files.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── AnimatedProductCard.tsx
│   ├── ContactDialog.tsx
│   ├── NewsletterForm.tsx
│   └── SearchDialog.tsx
├── hooks/
│   └── use-toast.ts
└── lib/
    └── utils.ts
```

## 🎮 Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linting and type checking
- `bun format` - Format code with Biome

## 📸 Screenshots

The website includes all sections from the original ASITA.com:
- Professional header with navigation
- Compelling hero section
- Product showcase and categories
- Service offerings
- News and updates
- Partner network
- Newsletter subscription

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for demonstration purposes only. All content and branding belong to their respective owners.

## 🙏 Acknowledgments

- Original design and content from [ASITA.com](https://asita.com)
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you found this project helpful, please give it a star!