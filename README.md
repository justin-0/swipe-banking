# Swipe

Financial dashboard that lets you connect to your bank account via Plaid

Idea has come from <www.fey.com> who have a really nice looking financial saas

## Frontend - Next.js

- [x] Switzer Font, Next/Local/Fonts
- [x] Prettier, Tailwind Prettier, Trivago Import Order
- [x] Metadata template to update dynamically
- [x] Simple Landing Page
- [x] Clerk Auth
- [x] Protect Dashboard / Platform route - Using Middleware
- [x] Public - Landing, Sign-in & Sign-up
- [x] Style auth layout - consider mobile and larger screens - look at other apps sign up flows
- [x] Create loader skeleton for auth components using clerk loading and loaded wrappers

### Header - Dashboard Layout

- [x] Logo
- [] Navigation
- [x] Create config for nav routes - overview, transactions, accounts, categories, settings
- [] use pathname hook in navigation and pass as a prop to item when href and path are equal
- [] Navigation Item - rendered from routes config - styled based on current pathname
- [] use cn from libs to style based on active prop
- [] shadcn sheet to create mobile lib - beware of hydration error
- [] sheet will not close when we click on a link, we need to control this for better ux
- [] add clerk user button to header so users can logout, there will be a delay so use loading like auth pages
- [] welcome message component to greet users, useUser hook from clerk

## Server - Hono

- [x] Install Hono
- [x] Vercel Getting Started in Docs
- [x] Hono RPC with Zod Validator
- [x] Clerk middleare for auth protection
