"use client";

import React from "react";

const SuratiMartPrivacy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Surati Mart ("we", "our", "us") operates the Surati Mart mobile
        application (the "App"). This Privacy Policy explains how we collect,
        use, and protect your information when you use our App.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Phone Number – used for login and account verification.</li>
        <li>Location Data – used to detect your delivery address and provide better service.</li>
        <li>Device Information – such as app version, device type, and operating system.</li>
        <li>
          Order Information – including products you purchase, delivery address, and
          payment details (processed securely via third-party gateways).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To create and manage your account.</li>
        <li>To deliver products to your location.</li>
        <li>To send order updates, offers, and important notifications.</li>
        <li>To improve our services and customer support.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or trade your personal information. We may share your
        data only with:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Delivery partners (to complete your order).</li>
        <li>Payment gateways (to process payments securely).</li>
        <li>Service providers (for analytics, notifications, or hosting).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard encryption (HTTPS, secure storage) to protect
        your data. However, no method of transmission over the Internet is 100%
        secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Update your account information anytime.</li>
        <li>
          Request deletion of your account and data by contacting us.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Permissions Used</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Location – to detect your delivery address.</li>
        <li>Phone Number – for login/verification.</li>
        <li>Notifications – to send order updates and offers.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be
        posted here with the “Last Updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, you can contact us
        at:
      </p>
      <p className="mb-1"> Email: akshaysuthar05@gmail.com</p>
      {/* <p className="mb-1">📞 Phone: +91 98765 43210</p> */}

      <p className="text-sm text-gray-500 mt-6">
        Last Updated: August 2025
      </p>
    </div>
  );
};

export default SuratiMartPrivacy;
