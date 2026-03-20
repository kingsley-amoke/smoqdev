export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy & Legal Policies
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparent, simple, and accessible privacy policies for all our apps.
          Your data matters — and we make sure you understand how it’s handled.
        </p>
      </section>

      {/* Apps List */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available Policies
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/imgify/privacy"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">Imgify</h3>
            <p className="text-sm text-gray-600">
              Image compressor, resizer, and converter privacy policy.
            </p>
          </a>

          <a
            href="/expense/privacy"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">Expense Tracker</h3>
            <p className="text-sm text-gray-600">
              Personal finance and expense tracking app privacy policy.
            </p>
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-12 px-6 border-t">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-600">
            We prioritize transparency and security across all our applications.
            Most of our apps are designed with minimal data collection, no
            unnecessary tracking, and strong encryption standards.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </footer>
    </main>
  );
}