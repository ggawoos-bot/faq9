import { FAQ, Category } from './types';

export const mockCategories: Category[] = [
  // FIX: Added missing 'order' property to each category.
  { id: 'getting-started', name: 'Getting Started', order: 1 },
  { id: 'account', name: 'Account', order: 2 },
  { id: 'billing', name: 'Billing', order: 3 },
  { id: 'features', name: 'Features', order: 4 },
];

export const mockFaqs: FAQ[] = [
  {
    id: 'faq-1',
    title: 'How do I create an account?',
    content: 'To create an account, click the "Sign Up" button in the top right corner of the page. You will be prompted to enter your email address and create a password. Once you have filled out the required information, click "Create Account" to complete the process.\n\nYou will receive a confirmation email to verify your account. Please click the link in the email to activate your account.',
    category: 'getting-started',
    tags: ['signup', 'account', 'new user'],
    viewCount: 1254,
    createdAt: '2023-10-26',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
  {
    id: 'faq-2',
    title: 'How can I reset my password?',
    content: 'If you have forgotten your password, you can reset it by clicking the "Forgot Password?" link on the login page. You will be asked to enter the email address associated with your account. We will send you an email with a link to reset your password.\n\nPlease follow the instructions in the email to create a new password. For security reasons, we cannot reset your password for you.',
    category: 'account',
    tags: ['password', 'reset', 'security'],
    viewCount: 876,
    createdAt: '2023-10-25',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
  {
    id: 'faq-3',
    title: 'What payment methods do you accept?',
    content: 'We accept a variety of payment methods for your convenience. You can pay using major credit cards, including Visa, MasterCard, and American Express. We also support payments through PayPal.\n\nAll transactions are processed through a secure payment gateway to ensure your financial information is protected. Your billing information is encrypted and stored securely.',
    category: 'billing',
    tags: ['payment', 'credit card', 'paypal'],
    viewCount: 2341,
    createdAt: '2023-10-24',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
  {
    id: 'faq-4',
    title: 'How do I upgrade my subscription plan?',
    content: 'You can upgrade your subscription plan at any time from your account settings. Navigate to the "Billing" section and you will see an option to "Change Plan".\n\nSelect the plan you wish to upgrade to and follow the on-screen instructions. The upgrade will take effect immediately, and your billing will be prorated for the current cycle.',
    category: 'billing',
    tags: ['subscription', 'upgrade', 'plan'],
    viewCount: 543,
    createdAt: '2023-10-23',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
  {
    id: 'faq-5',
    title: 'Can I use the advanced features on the free plan?',
    content: 'The free plan includes access to our core features, which are designed to give you a great experience. However, some of our more advanced features are reserved for our paid plans.\n\nThese features include advanced analytics, priority support, and team collaboration tools. To access these, you will need to upgrade to one of our premium subscription plans. You can compare all available features on our pricing page.',
    category: 'features',
    tags: ['features', 'free plan', 'premium'],
    viewCount: 1892,
    createdAt: '2023-10-22',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
   {
    id: 'faq-6',
    title: 'Is my data secure?',
    content: 'Yes, security is our top priority. We use industry-standard encryption protocols to protect your data both in transit and at rest. Our infrastructure is hosted on secure, certified data centers. We also conduct regular security audits and penetration testing to ensure the integrity of our systems. For more details, you can view our full security policy on our website.',
    category: 'account',
    tags: ['security', 'data', 'privacy'],
    viewCount: 932,
    createdAt: '2023-10-21',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  },
  {
    id: 'faq-7',
    title: 'How do I install the application?',
    content: 'Our application is web-based, so there is no installation required! You can access it from any modern web browser on your desktop, tablet, or smartphone. Just navigate to our website and log in to your account to get started. This ensures you always have the latest version without needing to download updates.',
    category: 'getting-started',
    tags: ['install', 'setup', 'web app'],
    viewCount: 789,
    createdAt: '2023-10-20',
    // FIX: Added missing 'isPublished' property.
    isPublished: true,
  }
];