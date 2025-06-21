# CloudQuill

CloudQuill is a collaborative, cloud-based document editor built with [Next.js](https://nextjs.org). It features real-time editing, rich text formatting, and seamless document management.

## Features

- Real-time collaborative editing
- Rich text formatting (fonts, colors, highlights, etc.)
- Image upload and URL pasting
- Document organization and sharing
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/cloudquill.git
cd cloudquill
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use CloudQuill.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Main Next.js app directory
- `src/` - Source code for components, utilities, and features
- `public/` - Static assets

## Customization

- Fonts are optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
- The editor supports extensible formatting and plugin support.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

## License

MIT
