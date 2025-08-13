"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  MapPin,
  ShoppingCart,
  Languages,
  Star,
  Zap,
  DollarSign,
  HeadphonesIcon,
  Play,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Facebook,
} from "lucide-react";

export default function SuratiMartLanding() {
  const [language, setLanguage] = useState<"en" | "gu">("en");

  const content = {
    en: {
      // Hero Section
      heroTitle: "Surat's Fastest Grocery Delivery",
      heroSubtitle: "Right to Your Doorstep",
      heroTagline: "Wide range. Best prices. Unmatched service. Only in Surat.",
      downloadAPK: "Download APK Now",
      comingSoon: "Coming Soon on Play Store",

      // About Section
      aboutTitle: "About Surati Mart",
      aboutText:
        "We're Surat's own quick commerce platform, delivering groceries and daily essentials right to your doorstep. Built exclusively for Surat residents, we understand your needs and are committed to providing better service and better prices than anyone else.",

      // USP Section
      uspTitle: "Why Choose Surati Mart?",
      uspItems: [
        {
          icon: Zap,
          title: "Ultra-Fast Delivery",
          description: "Get your groceries delivered in minutes, not hours",
        },
        {
          icon: ShoppingCart,
          title: "Wide Range of Products",
          description:
            "From fresh vegetables to daily essentials - 1000+ products",
        },
        {
          icon: DollarSign,
          title: "Great Prices Everyday",
          description: "Unbeatable prices and offers you'll absolutely love",
        },
        {
          icon: HeadphonesIcon,
          title: "Customer-First Experience",
          description: "24/7 chat support and hassle-free returns",
        },
      ],

      // How It Works
      howItWorksTitle: "How It Works",
      steps: [
        {
          step: "1",
          title: "Download the App",
          description: "Get our free APK and install in seconds",
        },
        {
          step: "2",
          title: "Shop from 1000+ Products",
          description: "Browse fresh groceries and daily essentials",
        },
        {
          step: "3",
          title: "Get Delivery in Minutes",
          description: "Enjoy ultra-fast delivery to your doorstep",
        },
      ],

      // Trust Section
      trustTitle: "Join Thousands of Happy Customers",
      deliveryStats: "Already delivering happiness in 50+ Surat neighborhoods",
      testimonials: [
        {
          name: "Priya Patel",
          area: "Adajan",
          text: "Amazing service! Got my groceries in just 15 minutes. Surati Mart is a game-changer for Surat!",
          rating: 5,
        },
        {
          name: "Rahul Shah",
          area: "Vesu",
          text: "Best prices in the city and super fast delivery. Love supporting our local Surat business!",
          rating: 5,
        },
        {
          name: "Meera Joshi",
          area: "Citylight",
          text: "Fresh vegetables and great customer service. Highly recommend to all Surat residents!",
          rating: 5,
        },
      ],

      // Footer
      footerTagline: "Surati Mart – Surat's Own Quick Commerce",
      contactTitle: "Contact Us",
      address: "Surati Mart HQ, Ring Road, Surat, Gujarat 395002",
      followUs: "Follow Us",
    },
    gu: {
      // Hero Section
      heroTitle: "સુરતની સૌથી ઝડપી ગ્રોસરી ડિલિવરી",
      heroSubtitle: "સીધી તમારા ઘરના દરવાજે",
      heroTagline: "વિશાળ રેન્જ. શ્રેષ્ઠ કિંમતો. અજોડ સેવા. ફક્ત સુરતમાં.",
      downloadAPK: "📥 APK હમણાં ડાઉનલોડ કરો",
      comingSoon: "પ્લે સ્ટોર પર જલ્દી આવી રહ્યું છે",

      // About Section
      aboutTitle: "સુરતી માર્ટ વિશે",
      aboutText:
        "અમે સુરતનું પોતાનું ક્વિક કોમર્સ પ્લેટફોર્મ છીએ, જે ગ્રોસરી અને દૈનિક જરૂરિયાતો સીધી તમારા ઘરના દરવાજે પહોંચાડે છે. ફક્ત સુરતના રહેવાસીઓ માટે બનાવેલ, અમે તમારી જરૂરિયાતો સમજીએ છીએ અને બીજા કોઈ કરતાં વધુ સારી સેવા અને સારી કિંમતો આપવા માટે પ્રતિબદ્ધ છીએ.",

      // USP Section
      uspTitle: "સુરતી માર્ટ કેમ પસંદ કરવું?",
      uspItems: [
        {
          icon: Zap,
          title: "અતિ-ઝડપી ડિલિવરી",
          description: "તમારી ગ્રોસરી મિનિટોમાં મેળવો, કલાકોમાં નહીં",
        },
        {
          icon: ShoppingCart,
          title: "ઉત્પાદનોની વિશાળ શ્રેણી",
          description: "તાજા શાકભાજીથી લઈને દૈનિક જરૂરિયાતો - 1000+ ઉત્પાદનો",
        },
        {
          icon: DollarSign,
          title: "દરરોજ શ્રેષ્ઠ કિંમતો",
          description: "અજેય કિંમતો અને ઓફર જે તમને ખરેખર ગમશે",
        },
        {
          icon: HeadphonesIcon,
          title: "ગ્રાહક-પ્રથમ અનુભવ",
          description: "24/7 ચેટ સપોર્ટ અને હેરાન-મુક્ત રિટર્ન",
        },
      ],

      // How It Works
      howItWorksTitle: "તે કેવી રીતે કામ કરે છે",
      steps: [
        {
          step: "1",
          title: "એપ ડાઉનલોડ કરો",
          description: "અમારી મફત APK મેળવો અને સેકન્ડોમાં ઇન્સ્ટોલ કરો",
        },
        {
          step: "2",
          title: "1000+ ઉત્પાદનોમાંથી ખરીદી કરો",
          description: "તાજી ગ્રોસરી અને દૈનિક જરૂરિયાતો બ્રાઉઝ કરો",
        },
        {
          step: "3",
          title: "મિનિટોમાં ડિલિવરી મેળવો",
          description: "તમારા ઘરના દરવાજે અતિ-ઝડપી ડિલિવરીનો આનંદ લો",
        },
      ],

      // Trust Section
      trustTitle: "હજારો ખુશ ગ્રાહકો સાથે જોડાઓ",
      deliveryStats: "સુરતના 50+ વિસ્તારોમાં પહેલેથી જ ખુશી પહોંચાડી રહ્યા છીએ",
      testimonials: [
        {
          name: "પ્રિયા પટેલ",
          area: "અદાજણ",
          text: "અદ્ભુત સેવા! માત્ર 15 મિનિટમાં મારી ગ્રોસરી મળી. સુરતી માર્ટ સુરત માટે ગેમ-ચેન્જર છે!",
          rating: 5,
        },
        {
          name: "રાહુલ શાહ",
          area: "વેસુ",
          text: "શહેરમાં શ્રેષ્ઠ કિંમતો અને સુપર ફાસ્ટ ડિલિવરી. અમારા સ્થાનિક સુરત બિઝનેસને સપોર્ટ કરવાનું ગમે છે!",
          rating: 5,
        },
        {
          name: "મીરા જોશી",
          area: "સિટીલાઇટ",
          text: "તાજા શાકભાજી અને શ્રેષ્ઠ ગ્રાહક સેવા. બધા સુરત રહેવાસીઓને ખૂબ ભલામણ!",
          rating: 5,
        },
      ],

      // Footer
      footerTagline: "સુરતી માર્ટ – સુરતનું પોતાનું ક્વિક કોમર્સ",
      contactTitle: "અમારો સંપર્ક કરો",
      address: "સુરતી માર્ટ HQ, રિંગ રોડ, સુરત, ગુજરાત 395002",
      followUs: "અમને ફોલો કરો",
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
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* <img
              src="/surati-mart-logo.png"
              alt="Surati Mart Logo"
              className="w-10 h-10 rounded-lg"
            /> */}
            <span className="text-xl font-bold text-gray-800">Surati Mart</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-[#27AE60] hover:bg-[#219A52] text-white px-4 py-2"
              onClick={handleDownloadApk}
            >
              <Download className="w-4 h-4 mr-1" />
              APK
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "gu" : "en")}
              className="flex items-center gap-1"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "ગુ" : "En"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 bg-[#F2C94C] text-gray-800 hover:bg-[#F2C94C] px-4 py-2">
            <MapPin className="w-4 h-4 mr-1" />
            Only in Surat
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {currentContent.heroTitle}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#27AE60] mb-6">
            {currentContent.heroSubtitle}
          </h2>

          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            {currentContent.heroTagline}
          </p>

          {/* Hero Image */}
          <div className="mb-12">
            {/* <img
              src="/surati-mart-delivery.png"
              alt="Surati Mart Delivery"
              className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto"
            /> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-4 text-lg font-semibold shadow-lg"
              onClick={handleDownloadApk}
            >
              {currentContent.downloadAPK}
            </Button>

            <Button
              variant="outline"
              size="lg"
              disabled
              className="px-8 py-4 text-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            >
              <Play className="w-5 h-5 mr-2" />
              {currentContent.comingSoon}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.aboutTitle}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {currentContent.aboutText}
          </p>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {currentContent.uspTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.uspItems.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow bg-white border-0"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {currentContent.howItWorksTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-800">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Repeat */}
      <section className="py-16 px-4 bg-[#27AE60]">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Grocery Shopping?
          </h2>

          <Button
            size="lg"
            className="bg-[#F2C94C] hover:bg-[#E6B800] text-gray-800 px-12 py-4 text-lg font-semibold shadow-lg mb-4"
          >
            <Download className="w-6 h-6 mr-3" />
            {currentContent.downloadAPK}
          </Button>

          <p className="text-green-100 text-lg">{currentContent.comingSoon}</p>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.trustTitle}
            </h2>
            <p className="text-xl text-[#27AE60] font-semibold">
              {currentContent.deliveryStats}
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentContent.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#F2C94C] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.area}, Surat</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Partners */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">Secure payments powered by</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <img
                src="/placeholder.svg?height=40&width=80&text=UPI"
                alt="UPI"
                className="h-10 opacity-70"
              />
              <img
                src="/placeholder.svg?height=40&width=80&text=Paytm"
                alt="Paytm"
                className="h-10 opacity-70"
              />
              <img
                src="/placeholder.svg?height=40&width=80&text=GPay"
                alt="Google Pay"
                className="h-10 opacity-70"
              />
              <img
                src="/placeholder.svg?height=40&width=80&text=PhonePe"
                alt="PhonePe"
                className="h-10 opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* <img
                  src="/surati-mart-logo.png"
                  alt="Surati Mart Logo"
                  className="w-8 h-8 rounded-lg"
                /> */}
                <span className="text-xl font-bold">Surati Mart</span>
              </div>
              <p className="text-gray-400 mb-4">
                {currentContent.footerTagline}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {currentContent.contactTitle}
              </h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@suratimart.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>{currentContent.address}</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {currentContent.followUs}
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-400 hover:text-white"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-400 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-400 hover:text-white"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Surati Mart. All rights reserved. Made with ❤️ in
              Surat.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
