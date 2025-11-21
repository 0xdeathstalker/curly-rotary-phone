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
- **Google Sheets:** Follow the integration steps below

### Google Sheets Integration

This application uses Google Sheets API to capture and store lead data. Follow these steps to set up the integration:

#### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

#### 2. Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details and click "Create"
4. Skip the optional permissions and click "Done"
5. Click on the newly created service account
6. Go to the "Keys" tab
7. Click "Add Key" > "Create new key"
8. Select "JSON" and click "Create"
9. Save the downloaded JSON file securely

#### 3. Set Up Your Google Sheet

1. Create a new Google Sheet or use an existing one
2. Set up the following columns in "Sheet1" (in this exact order):
   - Column A: Phone
   - Column B: Name
   - Column C: Email
   - Column D: State
   - Column E: Payment Status
   - Column F: Payment Amount
   - Column G: Payment ID
   - Column H: Order ID
   - Column I: Payment Date
   - Column J: Last Updated
3. Copy the Spreadsheet ID from the URL:
   - The ID is the long string between `/d/` and `/edit` in the URL
   - Example: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
4. Share the spreadsheet with the service account email:
   - Click "Share" in the top right
   - Paste the service account email (found in the JSON file as `client_email`)
   - Give it "Editor" access

#### 4. Configure Environment Variables

Add the following to your `.env` file:

```bash
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"..."}
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
```

**Important Notes:**

- `GOOGLE_SERVICE_ACCOUNT_KEY`: Paste the entire contents of the downloaded JSON file as a single-line string
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Found in the JSON file as `client_email`
- `GOOGLE_SHEETS_SPREADSHEET_ID`: The ID from your spreadsheet URL
