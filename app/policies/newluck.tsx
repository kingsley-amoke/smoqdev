import React from "react";
import Contact from "../components/contact";

type Props = {
  appName: string;
  lastUpdated: string;
};

const NewluckPrivacy: React.FC<Props> = ({ appName, lastUpdated }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{appName} Privacy Policy</h1>

      <p className="mb-6">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to {appName}. These Terms and Conditions govern your access to
          and use of our website, products, and services.
        </p>
        <p className="mt-2">
          {appName} provides online services including data bundles, internet
          and mobile browsing services, airtime and recharge cards, classified
          advertisements, forums, email services, and other digital products.
        </p>
        <p className="mt-2">
          By accessing or using our platform, you agree to be bound by these
          Terms and Conditions. If you do not agree with any part of these
          terms, please discontinue using our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By registering, accessing, or using any part of our services, you
          acknowledge that you have read, understood, and agreed to these Terms
          and Conditions.
        </p>
        <p className="mt-2">
          You also agree to comply with any additional guidelines, policies, or
          requirements that may apply to specific services offered by {appName}.
        </p>
        <p className="mt-2">
          If you disagree with these terms or any subsequent modifications, your
          only recourse is to discontinue using {appName}.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Modifications to this Agreement
        </h2>
        <p>
          {appName} reserves the right to change, modify, or update these Terms
          and Conditions at any time at its sole discretion.
        </p>
        <p className="mt-2">
          Changes become effective immediately upon publication on our website.
          Users are responsible for reviewing this agreement periodically to
          stay informed of any modifications.
        </p>
        <p className="mt-2">
          Continued use of our services after changes have been published
          constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
        <p className="mb-3">
          You agree to use {appName} responsibly and not engage in any activity
          that violates applicable laws or interferes with the operation of our
          platform.
        </p>

        <p className="font-semibold mb-2">
          The following activities are prohibited:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Creating multiple accounts or violating account restrictions.
            Violations may result in account termination and forfeiture of
            account funds.
          </li>
          <li>
            Sending unsolicited commercial messages or contacting users who have
            requested not to be contacted.
          </li>
          <li>
            Stalking, harassing, threatening, or intimidating other users.
          </li>
          <li>
            Collecting personal information about other users for commercial or
            unlawful purposes.
          </li>
          <li>
            Using automated tools, bots, crawlers, or data-mining software
            without authorization.
          </li>
          <li>
            Publishing irrelevant, duplicate, misleading, or excessive content
            that negatively affects the platform.
          </li>
          <li>
            Posting the same advertisement or service in multiple categories or
            locations in violation of our guidelines.
          </li>
          <li>
            Attempting unauthorized access to our systems or interfering with
            the performance and security of our services.
          </li>
          <li>
            Using automated posting or flagging tools to manipulate content or
            community moderation.
          </li>
          <li>
            Publishing unlawful, harmful, abusive, defamatory, or
            privacy-infringing material.
          </li>
          <li>
            Publishing sexually explicit content or content that exploits or
            harms minors.
          </li>
          <li>
            Publishing hateful or discriminatory content based on religion,
            gender, sexual orientation, race, ethnicity, age, or disability.
          </li>
          <li>
            Publishing discriminatory housing or employment advertisements.
          </li>
          <li>
            Impersonating another person or organization, including {appName}{" "}
            employees.
          </li>
          <li>
            Sharing another person's identifying information without appropriate
            consent.
          </li>
          <li>
            Publishing false, deceptive, misleading, or fraudulent content.
          </li>
          <li>
            Violating patents, trademarks, copyrights, or other intellectual
            property rights.
          </li>
          <li>
            Publishing spam, pyramid schemes, referral spam, or unsolicited
            advertisements.
          </li>
          <li>
            Advertising in areas of the platform not designated for promotional
            content.
          </li>
          <li>
            Advertising illegal services or restricted items in violation of
            applicable laws.
          </li>
          <li>
            Uploading malicious software, viruses, or code designed to damage
            computer systems or telecommunications equipment.
          </li>
          <li>
            Disrupting normal platform operations through flooding or excessive
            content submissions.
          </li>
          <li>
            Using misleading email addresses, forged headers, or manipulated
            identifiers to conceal the origin of communications.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. No Spam Policy</h2>
        <p>
          Sending unsolicited email advertisements to
          {` ${appName}`} email addresses or through our computer systems is
          strictly prohibited.
        </p>
        <p className="mt-2">
          Unauthorized use of our computer systems, infrastructure, or
          communication channels for spam-related activities is not permitted.
        </p>
        <p className="mt-2">
          We reserve the right to restrict or terminate accounts involved in
          spam activities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Account Registration and Security
        </h2>
        <p>
          Some services offered by {appName} may require you to create an
          account.
        </p>
        <p className="mt-2">You agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and complete registration information.</li>
          <li>Keep your account credentials confidential.</li>
          <li>
            Take responsibility for activities carried out through your account.
          </li>
          <li>
            Notify us promptly if you suspect unauthorized account access.
          </li>
          <li>Not share or transfer your account without authorization.</li>
        </ul>
        <p className="mt-2">
          {appName} reserves the right to suspend or terminate accounts that
          violate these requirements or pose a security risk to our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Products and Services
        </h2>
        <p>
          {appName} offers various digital products and services, which may
          include airtime, data subscriptions, recharge services,
          internet-related services, classified advertisements, and other
          products.
        </p>
        <p className="mt-2">
          Product availability, pricing, descriptions, and delivery conditions
          may change without prior notice.
        </p>
        <p className="mt-2">
          We make reasonable efforts to ensure that information displayed on our
          platform is accurate. However, we cannot guarantee that all product
          descriptions, prices, or availability information will always be
          error-free.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Payments and Transactions
        </h2>
        <p>
          Payments for products and services must be made using the payment
          methods supported on our platform.
        </p>
        <p className="mt-2">
          You are responsible for ensuring that transaction details, including
          phone numbers, network selections, and service details, are correct
          before confirming a transaction.
        </p>
        <p className="mt-2">
          {appName} is not responsible for losses resulting from incorrect
          information supplied by users.
        </p>
        <p className="mt-2">
          Transactions may be delayed or temporarily unavailable due to payment
          provider issues, network interruptions, maintenance, or other
          circumstances beyond our reasonable control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          8. Refunds and Cancellations
        </h2>
        <p>
          Refund requests are handled in accordance with our applicable refund
          and cancellation policies.
        </p>
        <p className="mt-2">
          Users should contact our support team with relevant transaction
          details when reporting failed, duplicate, or incorrect transactions.
        </p>
        <p className="mt-2">
          Completed digital transactions may not be reversible once successfully
          delivered to the intended recipient or service provider.
        </p>
        <p className="mt-2">
          Refund eligibility will be assessed based on the transaction status
          and circumstances of the request.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Third-Party Services</h2>
        <p>
          Our platform may integrate with or provide access to third-party
          services, payment providers, telecommunications operators, and
          external websites.
        </p>
        <p className="mt-2">
          These third-party services operate independently and may have their
          own terms, conditions, and privacy policies.
        </p>
        <p className="mt-2">
          {appName} is not responsible for the availability, content, policies,
          or actions of third-party services beyond our reasonable control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          10. Intellectual Property
        </h2>
        <p>
          All content, branding, logos, designs, software, graphics, and
          materials made available through
          {` ${appName}`} are protected by applicable intellectual property
          laws.
        </p>
        <p className="mt-2">
          You may not reproduce, distribute, modify, copy, or commercially
          exploit any part of our platform without prior written permission,
          except where permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          11. Disclaimer of Warranties
        </h2>
        <p>
          Our services are provided on an "as available" and "as is" basis, to
          the extent permitted by applicable law.
        </p>
        <p className="mt-2">
          While we make reasonable efforts to maintain reliable services, we do
          not guarantee uninterrupted access, error-free operation, or that
          every service will always be available.
        </p>
        <p className="mt-2">
          We do not warrant that the platform will meet every user's specific
          requirements or that all technical errors will be corrected
          immediately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          12. Limitation of Liability
        </h2>
        <p>
          To the extent permitted by applicable law,
          {` ${appName}`} shall not be liable for indirect, incidental, special,
          or consequential damages arising from your use of our platform.
        </p>
        <p className="mt-2">
          This includes losses resulting from service interruptions,
          unauthorized access, third-party service failures, or inaccurate
          information supplied by users.
        </p>
        <p className="mt-2">
          Nothing in these terms excludes liability that cannot legally be
          excluded under applicable law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          13. Suspension and Termination
        </h2>
        <p>
          {appName} reserves the right to restrict, suspend, or terminate access
          to its services where a user:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Violates these Terms and Conditions.</li>
          <li>Engages in fraudulent or unlawful activities.</li>
          <li>Attempts to compromise platform security.</li>
          <li>Abuses other users or our support services.</li>
          <li>
            Uses the platform in a way that may cause harm to the company or
            other users.
          </li>
        </ul>
        <p className="mt-2">
          Where appropriate, we may take action without prior notice to protect
          our platform, users, and business operations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">14. Privacy</h2>
        <p>
          Your use of {appName} is also subject to our Privacy Policy, which
          explains how we collect, use, store, and protect personal information.
        </p>
        <p className="mt-2">
          By using our services, you acknowledge that you have had the
          opportunity to review our Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">15. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and interpreted in
          accordance with the laws of the Federal Republic of Nigeria, subject
          to applicable consumer protection and other mandatory legal
          requirements.
        </p>
        <p className="mt-2">
          Any disputes arising from the use of our services shall be handled by
          the appropriate courts with jurisdiction in Nigeria.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          16. Changes to Our Services
        </h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          our services temporarily or permanently, with or without prior notice.
        </p>
        <p className="mt-2">
          We will make reasonable efforts to communicate significant service
          changes where appropriate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">17. Contact Information</h2>
        <p>
          If you have questions, complaints, or concerns regarding these Terms
          and Conditions, please contact our support team.
        </p>
        {/* <div className="mt-4">
          <Contact />
        </div> */}
      </section>

      <footer className="mt-8 text-center text-gray-600">
        <p>
          Thank you for choosing <strong>{appName}</strong>.
        </p>
        <p className="mt-2 text-sm">
          We appreciate your trust and look forward to serving you.
        </p>
      </footer>
    </div>
  );
};

export default NewluckPrivacy;
