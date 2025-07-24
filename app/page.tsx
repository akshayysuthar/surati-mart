"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Shield,
  MapPin,
  Smartphone,
  ShoppingCart,
  Truck,
  Clock,
  Languages,
  CheckCircle,
  Heart,
} from "lucide-react";

export default function SuratiMartLanding() {
  const [language, setLanguage] = useState<"en" | "gu">("en");

  const content = {
    en: {
      title: "Surati's Mart",
      subtitle: "Your Trusted Local E-Commerce Partner",
      tagline: "Made in Surat, Made for Surat",
      heroDescription:
        "Experience the best online shopping with Surati's Mart - your local e-commerce solution built with love in Surat. Download our free app and enjoy seamless shopping experience.",
      downloadTitle: "Download Our Free App",
      downloadDescription:
        "Get the Surati's Mart app absolutely free! No hidden charges, no scams - just pure shopping convenience.",
      trustTitle: "Why Trust Surati's Mart?",
      trustItems: [
        "100% Made in Surat by local developers",
        "Completely free to download and use",
        "No hidden fees or subscription charges",
        "Secure and safe shopping experience",
        "Local business supporting local community",
      ],
      features: [
        {
          icon: ShoppingCart,
          title: "Easy Shopping",
          description: "Browse and shop with just a few taps",
        },
        {
          icon: Truck,
          title: "Fast Delivery",
          description: "Quick delivery across Surat",
        },
        {
          icon: Shield,
          title: "100% Secure",
          description: "Your data and payments are safe",
        },
        {
          icon: Clock,
          title: "24/7 Support",
          description: "We're here to help anytime",
        },
      ],
      missionTitle: "Our Mission",
      missionText:
        "To provide the best e-commerce experience in Surat by connecting local businesses with customers through our innovative platform. We believe in supporting our local community while delivering exceptional service.",
      downloadButton: "Download APK",
      learnMore: "Learn More",
      madeWith: "Made with",
      inSurat: "in Surat",
    },
    gu: {
      title: "સુરતી'સ માર્ટ",
      subtitle: "તમારો વિશ્વસનીય સ્થાનિક ઈ-કોમર્સ પાર્ટનર",
      tagline: "સુરતમાં બનેલું, સુરત માટે બનેલું",
      heroDescription:
        "સુરતી'સ માર્ટ સાથે શ્રેષ્ઠ ઓનલાઈન શોપિંગનો અનુભવ કરો - સુરતમાં પ્રેમથી બનાવેલ તમારું સ્થાનિક ઈ-કોમર્સ સોલ્યુશન. અમારી મફત એપ ડાઉનલોડ કરો અને સરળ શોપિંગનો આનંદ લો.",
      downloadTitle: "અમારી મફત એપ ડાઉનલોડ કરો",
      downloadDescription:
        "સુરતી'સ માર્ટ એપ સંપૂર્ણ મફત મેળવો! કોઈ છુપાયેલા ચાર્જ નહીં, કોઈ છેતરપિંડી નહીં - ફક્ત શુદ્ધ શોપિંગ સુવિધા.",
      trustTitle: "સુરતી'સ માર્ટ પર કેમ વિશ્વાસ કરવો?",
      trustItems: [
        "100% સુરતમાં સ્થાનિક ડેવલપર્સ દ્વારા બનાવેલ",
        "ડાઉનલોડ અને ઉપયોગ માટે સંપૂર્ણ મફત",
        "કોઈ છુપાયેલી ફી અથવા સબ્સ્ક્રિપ્શન ચાર્જ નહીં",
        "સુરક્ષિત અને સલામત શોપિંગ અનુભવ",
        "સ્થાનિક સમુદાયને ટેકો આપતો સ્થાનિક વ્યવસાય",
      ],
      features: [
        {
          icon: ShoppingCart,
          title: "સરળ શોપિંગ",
          description: "માત્ર થોડા ટેપ સાથે બ્રાઉઝ અને શોપ કરો",
        },
        {
          icon: Truck,
          title: "ઝડપી ડિલિવરી",
          description: "સુરતભરમાં ઝડપી ડિલિવરી",
        },
        {
          icon: Shield,
          title: "100% સુરક્ષિત",
          description: "તમારો ડેટા અને પેમેન્ટ સુરક્ષિત છે",
        },
        {
          icon: Clock,
          title: "24/7 સપોર્ટ",
          description: "અમે કોઈપણ સમયે મદદ માટે અહીં છીએ",
        },
      ],
      missionTitle: "અમારું મિશન",
      missionText:
        "અમારા નવીન પ્લેટફોર્મ દ્વારા સ્થાનિક વ્યવસાયોને ગ્રાહકો સાથે જોડીને સુરતમાં શ્રેષ્ઠ ઈ-કોમર્સ અનુભવ પ્રદાન કરવો. અમે અસાધારણ સેવા પ્રદાન કરતી વખતે અમારા સ્થાનિક સમુદાયને ટેકો આપવામાં વિશ્વાસ રાખીએ છીએ.",
      downloadButton: "APK ડાઉનલોડ કરો",
      learnMore: "વધુ જાણો",
      madeWith: "બનાવેલ",
      inSurat: "સુરતમાં",
    },
  };

  const currentContent = content[language];
  // Function to trigger APK download
  const handleDownloadApk = () => {
    const apkUrl = "/apk/app-release.apk";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "SuratiMart.apk"; // forces download with this file name
    link.style.display = "none"; // hide the anchor
    document.body.appendChild(link);
    link.click(); // trigger the click
    document.body.removeChild(link); // cleanup
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f6fb" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b"
        style={{ borderColor: "#d0d4dc" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* <img
              src="/placeholder.svg?height=40&width=40&text=SM"
              alt="Surati's Mart Logo"
              className="w-10 h-10 rounded-lg"
            /> */}
            <span className="text-2xl font-bold" style={{ color: "#363636" }}>
              {currentContent.title}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "gu" : "en")}
            className="flex items-center gap-2"
            style={{ borderColor: "#d0d4dc", color: "#363636" }}
          >
            <Languages className="w-4 h-4" />
            {language === "en" ? "ગુજરાતી" : "English"}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            className="mb-6"
            style={{ backgroundColor: "#ffe141", color: "#363636" }}
          >
            <MapPin className="w-4 h-4 mr-1" />
            {currentContent.tagline}
          </Badge>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#363636" }}
          >
            {currentContent.title}
          </h1>

          <p className="text-xl mb-4" style={{ color: "#1f1a92" }}>
            {currentContent.subtitle}
          </p>

          <p
            className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#363636" }}
          >
            {currentContent.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg hover:opacity-90"
              style={{ backgroundColor: "#1f1a92" }}
              onClick={handleDownloadApk}
            >
              <Download className="w-5 h-5 mr-2" />
              {currentContent.downloadButton}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg bg-transparent"
              style={{ borderColor: "#1f1a92", color: "#1f1a92" }}
            >
              {currentContent.learnMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#363636" }}
            >
              {currentContent.trustTitle}
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: "#ffe141" }}
            ></div>
          </div>

          <Card
            className="p-8 shadow-lg border-0"
            style={{ backgroundColor: "#f5f6fb" }}
          >
            <CardContent className="p-0">
              <div className="grid gap-4">
                {currentContent.trustItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: "#28a745" }}
                    />
                    <span className="text-lg" style={{ color: "#363636" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1f1a92" }}>
        <div className="container mx-auto text-center max-w-3xl">
          <Smartphone className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentContent.downloadTitle}
          </h2>
          <p className="text-xl mb-8" style={{ color: "#3874ba" }}>
            {currentContent.downloadDescription}
          </p>

          <Button
            size="lg"
            className="px-12 py-4 text-lg font-semibold hover:opacity-90"
            style={{ backgroundColor: "#ffe141", color: "#363636" }}
          >
            <Download className="w-6 h-6 mr-3" />
            {currentContent.downloadButton}
          </Button>

          <div
            className="mt-8 flex items-center justify-center gap-2"
            style={{ color: "#3874ba" }}
          >
            <Shield className="w-5 h-5" />
            <span>100% Safe & Secure Download</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#f5f6fb" }}
                  >
                    <feature.icon
                      className="w-8 h-8"
                      style={{ color: "#1f1a92" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#363636" }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#9197a6" }}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#363636" }}>
            {currentContent.missionTitle}
          </h2>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#363636" }}
          >
            {currentContent.missionText}
          </p>

          <div
            className="flex items-center justify-center gap-2"
            style={{ color: "#9197a6" }}
          >
            <span>{currentContent.madeWith}</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>{currentContent.inSurat}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: "#390099" }}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/placeholder.svg?height=32&width=32&text=SM"
              alt="Surati's Mart Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold text-white">
              {currentContent.title}
            </span>
          </div>

          <p className="mb-6" style={{ color: "#490D83" }}>
            {currentContent.subtitle}
          </p>

          <div
            className="flex items-center justify-center gap-1 text-sm"
            style={{ color: "#490D83" }}
          >
            <MapPin className="w-4 h-4" />
            <span>Proudly serving Surat since 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
