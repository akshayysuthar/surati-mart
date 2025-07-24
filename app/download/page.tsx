"use client";

import { useEffect } from "react";
import { Download } from "lucide-react";

export default function DownloadPage() {
  useEffect(() => {
    const downloadApk = () => {
      const link = document.createElement("a");
      link.href = "/apk/app-release.apk"; // APK file path
      link.download = "SuratiMart.apk"; // App name as file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadApk();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-6 text-center bg-gray-50">
      <Download className="w-12 h-12 text-blue-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Downloading Surati's Mart App...</h1>
      <p className="text-gray-600 mb-4">
        Your download of <strong>SuratiMart.apk</strong> should start
        automatically.
      </p>
      <a
        href="/apk/app-release.apk"
        download="SuratiMart.apk"
        className="text-blue-600 underline"
      >
        Click here if it doesn’t start
      </a>
      <p className="text-sm text-gray-500 mt-6 max-w-md">
        Note: You may need to enable <strong>"Install unknown apps"</strong> on
        your Android device to install SuratiMart.
      </p>
    </div>
  );
}
