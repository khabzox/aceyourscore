import NavBar from "@/components/LandingPage/NavBar";
import FooterPage from "@/components/LandingPage/Footer";

const TermsOfServicePage = () => {
  return (
    <>
      <NavBar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4 pt-32">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl font-bold text-center text-accent mb-8">
            Terms of Service
          </h1>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Introduction
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Welcome to AceYourScore. These Terms of Service ("Terms") govern
              your use of our website and services. By accessing or using our
              services, you agree to be bound by these Terms. If you do not
              agree with these Terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Use of Our Services
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You must not use our services in any
              way that violates any applicable laws or regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              User Responsibilities
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account or any other breach of security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Intellectual Property
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              All content and materials provided through our services, including
              text, graphics, logos, and software, are the property of
              AceYourScore or its licensors and are protected by intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works from such content without our express permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Limitation of Liability
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, AceYourScore shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising out of or in connection with your use of our
              services. Our liability for any direct damages is limited to the
              amount you have paid for our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Indemnification
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless AceYourScore, its
              affiliates, and their respective officers, directors, employees,
              and agents from any claims, liabilities, damages, losses, and
              expenses arising out of or in connection with your use of our
              services or any violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Changes to These Terms
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Any changes will be
              posted on this page, and we will notify you of significant
              changes. Your continued use of our services after such changes
              indicates your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions or concerns about these Terms, please
              contact us at:
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@aceyourscore.com"
                className="text-blue-600 hover:underline"
              >
                info@aceyourscore.com
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+212616139962"
                className="text-blue-600 hover:underline"
              >
                +212 616 139962
              </a>
            </p>
          </section>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default TermsOfServicePage;
