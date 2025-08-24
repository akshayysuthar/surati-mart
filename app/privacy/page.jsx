"use client";

import React from "react";

const SuratiMartPrivacy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Surati Mart ("we", "our", "us") respects your privacy. This Privacy
        Policy explains how we collect, use, and protect your information when
        you use our mobile application ("App").
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Phone Number:</strong> Used for login and account
          verification.
        </li>
        <li>
          <strong>Location Data:</strong> Used to detect delivery address and
          provide location-based services.
        </li>
        <li>
          <strong>Device Information:</strong> Such as app version, device type,
          and operating system, to improve app performance.
        </li>
        <li>
          <strong>Order Information:</strong> Products purchased, delivery
          address, and payment details (handled securely by third-party payment
          gateways).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To create and manage your account.</li>
        <li>To deliver products to your chosen address.</li>
        <li>To send order updates, offers, and notifications.</li>
        <li>To improve our services and provide customer support.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell your personal information. We only share it with:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Delivery partners, to complete your orders.</li>
        <li>Payment gateways, to process payments securely.</li>
        <li>Service providers (e.g., analytics, hosting, notifications).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We use encryption and secure servers to protect your data. While we take
        precautions, no system is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can update or correct your account information anytime.</li>
        <li>
          You can request deletion of your account and personal data by
          contacting us.
        </li>
        <li>
          You can control app permissions (location, notifications) from your
          device settings.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Children’s Privacy</h2>
      <p className="mb-4">
        Our App is not directed to children under the age of 13. We do not
        knowingly collect personal information from children. If you believe we
        may have collected such data, please contact us and we will delete it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be
        posted here with the “Last Updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <p className="mb-1"> Email: akshaysuthar05@gmail.com</p>
      {/* <p className="mb-1">📞 Phone: +91 98765 43210</p> */}

      <p className="text-sm text-gray-500 mt-6">Last Updated: August 2025</p>
    </div>
  );
};

export default SuratiMartPrivacy;
