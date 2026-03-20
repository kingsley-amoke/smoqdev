import React from "react";
import Contact from "../components/contact";

type Props = {
  appName: string;
  lastUpdated: string;
};
const ImgifyPolicy: React.FC<Props> = ({ appName, lastUpdated }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{appName} Privacy Policy</h1>
      <p className="mb-6">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to {appName} (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our mobile
          application {appName} (the &quot;App&quot;). Please read this privacy
          policy carefully. If you do not agree with the terms, please do not
          access the application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>

        <h3 className="text-xl font-semibold mb-1">Personal Information</h3>
        <p>
          {appName} does not collect, store, or share any personally
          identifiable information (PII) from users. We do not require user
          accounts, email addresses, names, or any other personal data to use
          the App.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-1">Image Data</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Temporary Processing:</strong> Images are temporarily
            uploaded to secure servers for processing.
          </li>
          <li>
            <strong>No Permanent Storage:</strong> Images are immediately
            deleted after processing is complete.
          </li>
          <li>
            <strong>Processing Duration:</strong> Images remain on servers only
            for the duration of processing (typically 1-5 seconds).
          </li>
          <li>
            <strong>No Backups:</strong> Processed images are not archived or
            retained in any form.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-1">Device Information</h3>
        <p>
          We may automatically collect technical information from your device
          for improving functionality:
        </p>
        <ul className="list-disc pl-6">
          <li>Device type and model</li>
          <li>Operating system version</li>
          <li>App version</li>
          <li>Crash logs and error reports (debugging only)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-1">
          Permissions Required
        </h3>

        <h4 className="font-semibold mt-2">Storage/Photo Library Access</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Purpose:</strong> Select images from device gallery for
            processing and saving.
          </li>
          <li>
            <strong>Scope:</strong> Only images explicitly selected via system
            picker.
          </li>
          <li>
            <strong>Control:</strong> Permission can be revoked anytime in
            device settings.
          </li>
        </ul>

        <h4 className="font-semibold mt-2">Internet Access</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Purpose:</strong> Communicate with servers for image
            processing.
          </li>
          <li>
            <strong>Scope:</strong> Data transmitted only when initiating
            processing operations.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <ol className="list-decimal pl-6">
          <li>
            Image Processing: Perform format conversion, resizing, and
            compression.
          </li>
          <li>
            App Functionality: Deliver processed images back to your device.
          </li>
          <li>
            Performance Monitoring: Identify and fix bugs, crashes, and
            performance issues.
          </li>
          <li>
            App Improvement: Understand user interaction to improve features.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Encryption in Transit:</strong> HTTPS/TLS encryption used
            for all data.
          </li>
          <li>
            <strong>Secure Servers:</strong> Hosted on industry-standard cloud
            infrastructure.
          </li>
          <li>
            <strong>Automatic Deletion:</strong> Images deleted immediately
            after processing.
          </li>
          <li>
            <strong>No Third-Party Access:</strong> Images are never shared with
            third parties.
          </li>
          <li>
            <strong>Limited Access:</strong> Only authorized personnel access
            infrastructure, without viewing images.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
        <ul className="list-disc pl-6">
          <li>Images: Deleted immediately after processing.</li>
          <li>
            Technical Data: Crash logs retained for up to 90 days for debugging.
          </li>
          <li>
            Analytics Data: Anonymous statistics retained for up to 12 months.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p>
          Our app may use third-party services for hosting and crash reporting.
          These services cannot access your images, which are deleted
          immediately after processing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Children's Privacy</h2>
        <p>
          {appName} does not knowingly collect personal information from
          children under 13. The App is suitable for all ages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights and Choices</h2>
        <ul className="list-disc pl-6">
          <li>Control which images are processed.</li>
          <li>Revoke permissions anytime via device settings.</li>
          <li>Automatic deletion of images after processing.</li>
          <li>Manual deletion by uninstalling the App.</li>
          <li>Opt-out by stopping usage or uninstalling.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          International Data Transfers
        </h2>
        <p>
          Images may be processed on servers in different countries. Use of the
          App indicates consent to such transfers in compliance with data
          protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>We may update this policy occasionally and notify users via:</p>
        <ul className="list-disc pl-6">
          <li>Updating the "Last Updated" date</li>
          <li>In-app notifications for major changes</li>
          <li>Posting updates in the App and on our website</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Data Breach Notification
        </h2>
        <p>In case of a breach:</p>
        <ol className="list-decimal pl-6">
          <li>Investigate immediately</li>
          <li>Mitigate potential harm</li>
          <li>Notify affected users within 72 hours</li>
          <li>Report to authorities as required</li>
        </ol>
        <p>
          Risk is extremely low as we do not store images permanently or collect
          personal info.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Compliance with Laws</h2>
        <p>
          We comply with GDPR, CCPA, and other applicable data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <Contact />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <ul className="list-disc pl-6">
          <li>✅ Images processed only on request</li>
          <li>✅ Images deleted immediately</li>
          <li>✅ No personal information collected</li>
          <li>✅ Encryption used for data transmission</li>
          <li>❌ No user accounts or tracking</li>
          <li>❌ No permanent image storage</li>
          <li>❌ No advertising or third-party analytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Consent</h2>
        <p>
          By using {appName}, you consent to this Privacy Policy and agree to
          its terms.
        </p>
      </section>

      <footer className="mt-8 text-center text-gray-600">
        <p>{appName} - Simple, Fast, Private Image Processing</p>
        <p>
          Your privacy is our priority. Contact us with any questions or
          concerns.
        </p>
      </footer>
    </div>
  );
};

export default ImgifyPolicy;
