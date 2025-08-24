"use client";

import React from "react";

const SupportDeleteAccount = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Account Deletion Request</h1>
      <p className="mb-4">
        At <strong>Surati Mart</strong>, we respect your privacy. If you wish to
        permanently delete your account and personal data (including phone
        number, address, and order history), you can request deletion by
        contacting our support team.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How to Request Account Deletion
      </h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>
          Send us an email with the subject line:{" "}
          <strong>“Delete My Surati Mart Account”</strong>.
        </li>
        <li>
          Include your registered <strong>phone number</strong> and{" "}
          <strong>email ID</strong> in the request.
        </li>
        <li>
          Our support team will verify your request and delete your account
          within <strong>7 business days</strong>.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Support Contact</h2>
      <p className="mb-2">
        Email:{" "}
        <a
          href="mailto:support@suratimart.com?subject=Delete My Surati Mart Account"
          className="text-blue-600 underline"
        >
          akshaysuthar05@gmail.com
        </a>
      </p>
      {/* <p className="mb-2">📞 Phone: +91 98765 43210</p> */}

      <p className="text-sm text-gray-500 mt-6">
        Note: Once your account is deleted, all associated data including order
        history will be removed permanently and cannot be restored.
      </p>
    </div>
  );
};

export default SupportDeleteAccount;
