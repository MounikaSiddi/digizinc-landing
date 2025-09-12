import Head from 'next/head';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Cookie Policy - Digizinc</title>
        <meta name="description" content="Digizinc's Cookie Policy explaining how we use cookies and your choices." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 sm:mb-12">
          Cookie Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="mb-4 leading-relaxed">
            Cookies are small text files placed on your device when you visit a website. They're widely used to make websites work efficiently and to provide information to website owners. Think of them as tiny memory aids for websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
          <p className="mb-4 leading-relaxed">
            We use different types of cookies for various purposes to enhance your experience on Digizinc.com:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong className="text-xl font-semibold text-gray-800">Essential Cookies:</strong> These cookies are crucial for our Site to function properly. Without them, some parts of our website wouldn't work, so you can't switch them off in our systems.
            </li>
            <li>
              <strong className="text-xl font-semibold text-gray-800">Performance Cookies:</strong> These cookies help us understand how you and other visitors interact with our Site. They collect anonymous information about which pages are visited most often, helping us improve our website's performance and design.
            </li>
            <li>
              <strong className="text-xl font-semibold text-gray-800">Functionality Cookies:</strong> These cookies allow our Site to remember choices you make, like your username or language preferences. This means we can offer you a more personalized and convenient experience.
            </li>
            <li>
              <strong className="text-xl font-semibold text-gray-800">Targeting Cookies:</strong> We use these cookies to deliver advertisements that are more relevant to you and your interests, based on your Browse habits.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
          <p className="mb-4 leading-relaxed">
            Sometimes, we work with third-party service providers (like analytics companies or advertisers) who might place their own cookies on your device. They use these cookies to perform services on our behalf, such as analyzing website traffic or showing you personalized ads.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookies</h2>
          <p className="mb-4 leading-relaxed">
            You're in control of your cookie settings. You can set your web browser to refuse all cookies or to notify you when a cookie is being sent. Keep in mind, though, that if you disable cookies entirely, some parts of our Site might not function as smoothly.
          </p>
          <p className="mb-4 leading-relaxed">
            For more detailed instructions on managing cookies in popular browsers, you can typically find options in your browser's "Help," "Settings," or "Preferences" menu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to reach out to us:
          </p>
          <p className="mb-2 leading-relaxed">
            Email: <a href="mailto:digizinc.studio@gmail.com" className="text-blue-600 hover:underline">privacy@digizinc.com</a>
          </p>
          <p className="mb-4 leading-relaxed">
            Phone: <a href="tel:+919701563362" className="text-blue-600 hover:underline">‪+91 97015 63362</a>
          </p>
          {/* <p className="mb-4 leading-relaxed">
            Address: [Your Company Address]
          </p> */}
          {/* Remember to replace [your-email@yourdomain.com] and [Your Company Address] with your actual contact details. */}
        </section>

      
      </div>
    </div>
  );
};

export default CookiePolicy;