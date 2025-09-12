import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Terms of Service - Digizinc</title>
        <meta name="description" content="Digizinc's Terms of Service outlining the rules for using our website." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 sm:mb-12">
          Terms of Service
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 leading-relaxed">
            By accessing or using the Digizinc website (<a href="https://www.digizinc.com" className="text-blue-600 hover:underline">Digizinc.com</a>), you agree to be bound by these **Terms of Service**. If you don't agree with any part of these terms, please do not use the Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of the Site</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility:</h3>
          <p className="mb-4 leading-relaxed">
            To use our Site, you must be at least 13 years of age or the applicable legal age in your jurisdiction.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Prohibited Actions:</h3>
          <p className="mb-4 leading-relaxed">
            You agree not to engage in any activity that could interfere with the proper operation of the Site or violate any applicable laws or regulations. This includes, but isn't limited to, unauthorized access, transmitting harmful code, or engaging in spamming.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
          <p className="mb-4 leading-relaxed">
            All content on this Site, including text, graphics, logos, images, and software, is the exclusive property of **Digizinc** or its content suppliers. This content is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimers and Limitation of Liability</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Disclaimer:</h3>
          <p className="mb-4 leading-relaxed">
            The Site and its content are provided &ldquo;**as is**&rdquo; and &ldquo;**as available**&rdquo; without warranties of any kind, either express or implied. Digizinc doesn't guarantee that the Site will be error-free or uninterrupted.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Limitation of Liability:</h3>
          <p className="mb-4 leading-relaxed">
            To the maximum extent permitted by law, Digizinc shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Indemnification</h2>
          <p className="mb-4 leading-relaxed">
            You agree to indemnify, defend, and hold harmless Digizinc and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Site or your violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
          <p className="mb-4 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the **Indian Jurisdiction**, without regard to its conflict of laws principles. Any legal action or proceeding relating to your access to or use of the Site shall be instituted in a state or federal court in India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications to the Terms</h2>
          <p className="mb-4 leading-relaxed">
            Digizinc reserves the right to change or update these Terms at any time. We will post any modifications on this page, and the &ldquo;Last updated&rdquo; date will be revised accordingly. Your continued use of the Site following any modifications constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions regarding these Terms of Service, please contact us at:
          </p>
          <p className="mb-2 leading-relaxed">
            Email: <a href="mailto:digizinc.studio@gmail.com" className="text-blue-600 hover:underline">contact@digizinc.com</a>
          </p>
          <p className="mb-4 leading-relaxed">
            Phone: <a href="tel:+919701563362" className="text-blue-600 hover:underline">‪+91 97015 63362</a>
          </p>
          {/* <p className="mb-4 leading-relaxed">
            Address: [Your Company Address]
          </p> */}
          {/* Remember to replace [your-email@yourdomain.com] and [Your Company Address] with your actual contact details. */}
        </section>

        <div className="text-sm text-gray-500 mt-12 text-center">
          <p>Last updated: May 27, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;