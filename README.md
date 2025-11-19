## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd taxocity
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory (see `.env.example` below)

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

### Getting API Keys

- **Razorpay:** Sign up at [razorpay.com](https://razorpay.com) and get test/live keys
- **Resend:** Get API key from [resend.com](https://resend.com)
- **TeleCRM:** Contact your TeleCRM provider for API credentials

## License

MIT
