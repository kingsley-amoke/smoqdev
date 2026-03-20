import React from "react";
import Contact from "../components/contact";

type Props = {
  appName: string;
  lastUpdated: string;
};

const ExpenseTrackerPrivacyPolicy: React.FC<Props> = ({
  appName,
  lastUpdated,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{appName} Privacy Policy</h1>
      <p className="mb-6">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          {appName} (&quot;the App&quot;) is designed to help users track
          expenses easily by scanning receipts and manually adding expenses.
          Your privacy is important to us, and this Privacy Policy explains how
          we collect, use, store, and protect your information.
        </p>
        <p className="mt-2">
          By using the App, you agree to the practices described in this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>

        <h3 className="text-xl font-semibold mb-1">
          1.1 Information You Provide
        </h3>
        <ul className="list-disc pl-6 mb-2">
          <li>Expense details entered manually (amounts, categories, notes)</li>
          <li>Receipt images you choose to scan</li>
          <li>Store names, dates, and totals extracted from receipts</li>
          <li>Optional corrections made to scanned data</li>
        </ul>

        <h3 className="text-xl font-semibold mb-1">
          1.2 Automatically Collected Information
        </h3>
        <ul className="list-disc pl-6 mb-2">
          <li>App usage events (e.g., receipt scanned, expense saved)</li>
          <li>Achievement and gamification progress</li>
          <li>
            Device type, app version, and operating system (for crash reporting
            and stability)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-1">
          1.3 Information We Do <strong>Not</strong> Collect
        </h3>
        <ul className="list-disc pl-6">
          <li>Your name, email address, or phone number</li>
          <li>Bank account or credit card numbers</li>
          <li>Contacts or call logs</li>
          <li>Precise location data</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Camera and Media Access
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Camera:</strong> to scan receipts
          </li>
          <li>
            <strong>Media/Gallery:</strong> to select existing receipt images
          </li>
        </ul>
        <p className="mt-2">
          These permissions are only used when you initiate an action and are
          never accessed in the background.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>Scan and extract data from receipts</li>
          <li>Save and organize your expenses</li>
          <li>Provide spending summaries and insights</li>
          <li>Power achievements, streaks, and rewards</li>
          <li>Improve app performance and reliability</li>
        </ul>
        <p className="mt-2">
          Your data is <strong>never used for advertising profiling</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Data Storage and Security
        </h2>
        <ul className="list-disc pl-6">
          <li>
            Expense data and achievements are stored{" "}
            <strong>locally on your device</strong> by default
          </li>
          <li>If cloud features are introduced, this policy will be updated</li>
          <li>Reasonable technical measures are used to protect stored data</li>
          <li>You remain in control of your data at all times</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <ul className="list-disc pl-6">
          <li>OCR (receipt text recognition)</li>
          <li>Crash reporting and diagnostics</li>
        </ul>
        <p className="mt-2">
          These services process data only to perform their intended function
          and must comply with applicable privacy laws. We do not sell or share
          your personal data with third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Ads and Monetization</h2>
        <ul className="list-disc pl-6">
          <li>The App may display ads in the future</li>
          <li>Ads will not use sensitive personal or financial data</li>
          <li>
            No receipt images or expense details are shared with advertisers
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Children’s Privacy</h2>
        <p>
          {appName} is <strong>not intended for children under 13</strong>. We
          do not knowingly collect personal data from children. If a child has
          provided data, contact us and we will remove it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Data Deletion</h2>
        <ul className="list-disc pl-6">
          <li>Delete individual expenses at any time</li>
          <li>Clear app data by uninstalling the App</li>
        </ul>
        <p className="mt-2">
          If cloud features are introduced, in-app data deletion options will be
          provided.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with an updated date. Continued use of the
          App after changes indicates acceptance of the updated policy.
        </p>
      </section>

      <section className="mb-6">
        <Contact />
      </section>

      <footer className="mt-8 text-center text-gray-600">
        <p>
          Thank you for trusting <strong>{appName}</strong>.
        </p>
      </footer>
    </div>
  );
};

export default ExpenseTrackerPrivacyPolicy;
