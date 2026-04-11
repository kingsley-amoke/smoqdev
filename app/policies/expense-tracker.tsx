import React from "react";
import Contact from "../components/contact";

type Props = {
  appName: string;
  lastUpdated: string;
};

const PaycheckCalculatorPrivacyPolicy: React.FC<Props> = ({
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
          {appName} ("the App") is a simple and offline-first paycheck and tax
          calculator designed to help users estimate their take-home pay after
          tax deductions.
        </p>
        <p className="mt-2">
          We value your privacy. This Privacy Policy explains how we handle
          information when you use the App.
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
          <li>Salary inputs (gross income, tax values, deductions)</li>
          <li>User-selected settings (currency, region, preferences)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-1">
          1.2 Automatically Collected Information
        </h3>
        <ul className="list-disc pl-6 mb-2">
          <li>App usage events (e.g., calculations performed)</li>
          <li>Device information (model, OS version, app version)</li>
          <li>Crash reports and performance diagnostics (if enabled)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-1">
          1.3 Information We Do <strong>Not</strong> Collect
        </h3>
        <ul className="list-disc pl-6">
          <li>Your name, email address, or phone number</li>
          <li>Bank account or financial account details</li>
          <li>Contacts, photos, or files</li>
          <li>Precise location data</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Offline Usage</h2>
        <p>
          The App is designed to work fully offline. All calculations are
          performed locally on your device and no personal salary data is sent
          to external servers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Subscription and Payments
        </h2>
        <p>
          The App offers a subscription with a free trial period. All payments
          and subscription management are handled securely by Google Play
          through <strong>Google Play Billing</strong>. We do not store or
          process your payment information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>Perform paycheck and tax calculations</li>
          <li>Save user preferences for a better experience</li>
          <li>Improve app performance and stability</li>
          <li>Manage subscription access and features</li>
        </ul>
        <p className="mt-2">
          Your salary and financial inputs are never used for advertising or
          profiling.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Data Storage and Security
        </h2>
        <ul className="list-disc pl-6">
          <li>All calculation data remains stored locally on your device</li>
          <li>No cloud storage of salary or tax inputs</li>
          <li>Basic analytics may be used to improve stability</li>
          <li>You can clear all app data by uninstalling the App</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Third-Party Services</h2>
        <ul className="list-disc pl-6">
          <li>Google Play Billing (for subscriptions)</li>
          <li>Crash reporting tools (for app stability)</li>
        </ul>
        <p className="mt-2">
          These services only process data necessary for their function. We do
          not sell or share personal data with third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Ads</h2>
        <p>
          The App does not currently display ads. If ads are introduced in the
          future, this Privacy Policy will be updated accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p>
          {appName} is not intended for children under 13. We do not knowingly
          collect personal data from children.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Data Deletion</h2>
        <ul className="list-disc pl-6">
          <li>All data is stored locally and can be removed by uninstalling</li>
          <li>No account is required, so no server-side deletion is needed</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a new “Last Updated” date. Continued use of
          the App means you accept the changes.
        </p>
      </section>

      <section className="mb-6">
        <Contact />
      </section>

      <footer className="mt-8 text-center text-gray-600">
        <p>
          Thank you for using <strong>{appName}</strong>.
        </p>
      </footer>
    </div>
  );
};

export default PaycheckCalculatorPrivacyPolicy;
