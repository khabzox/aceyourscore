import FooterPage from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4 pt-32">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Privacy Policy
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-base text-gray-700">
              Welcome to AceYourScore. Your privacy is important to us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services. Please read
              this policy carefully.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="text-base text-gray-700">
              We may collect personal information that you provide to us
              directly, such as your name, email address, phone number, and
              payment information. We also collect information about your use of
              our services, including IP addresses and usage data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base text-gray-700">
              We use your information to provide, maintain, and improve our
              services, to communicate with you, to process transactions, and to
              comply with legal obligations. We may also use your information
              for marketing purposes with your consent.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Share Your Information
            </h2>
            <p className="text-base text-gray-700">
              We do not sell your personal information. We may share your
              information with third-party service providers who assist us in
              operating our services, or as required by law. We ensure that
              these third parties adhere to appropriate data protection
              standards.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-base text-gray-700">
              We implement reasonable security measures to protect your
              information from unauthorized access, disclosure, alteration, or
              destruction. However, no method of transmission over the internet
              or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-base text-gray-700">
              You have the right to access, correct, or delete your personal
              information. You may also object to or restrict certain processing
              of your data. To exercise these rights, please contact us using
              the information provided below.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base text-gray-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and we will notify you of significant
              changes. Your continued use of our services after such changes
              indicates your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-base text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-base text-gray-700">
              Email: info@aceyourscore.com
              <br />
              Phone: +212 616 139962
            </p>
          </section>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default PrivacyPolicyPage;
