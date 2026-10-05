import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Server,
  Code2,
  Copy,
  Check,
  Lock,
  Layers,
  Camera,
  Barcode,
  CheckCircle2,
  Mail,
  Building2,
  Cpu
} from 'lucide-react';

export default function App() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>('https://vendikwiat.github.io/packshot-studio/');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.href) {
      setCurrentUrl(window.location.href.split('#')[0]);
    }
  }, []);

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(identifier);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const userAgentWithActualUrl = `PackshotStudio/1.0.0 (+${currentUrl})`;
  const userAgentTemplate = `PackshotStudio/1.0.0 (+ADRES_TEJ_STRONY)`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-200/50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Document Card */}
        <article className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Allegro orange accent header line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

          {/* Header */}
          <header className="border-b border-slate-200 pb-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Packshot Studio
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Strona informacyjna aplikacji korzystającej z Allegro REST API · wersja 1.0.0
            </p>
          </header>

          <div className="space-y-10">
            {/* Section 1: Do czego służy */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-100 text-orange-700">
                  <Camera className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Do czego służy
                </h2>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-slate-700 text-base sm:text-lg leading-relaxed shadow-2xs">
                Wewnętrzne narzędzie firmy <strong className="font-semibold text-slate-900">Vendi Kwiat Sp. z o.o.</strong> do przygotowywania ofert jej własnych produktów na Allegro. Pracownik fotografuje produkt i skanuje kod EAN; aplikacja przygotowuje zdjęcia, opis i tytuł oferty, które pracownik sprawdza i zatwierdza.
              </div>

              {/* Visual Workflow Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Barcode className="w-3.5 h-3.5 text-slate-500" />
                      Stanowisko pracownika
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Fotografowanie produktu i skanowanie fizycznego kodu EAN.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 bg-white border border-slate-200 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      Packshot Studio
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Weryfikacja parametrów i przygotowanie zdjęć, opisu oraz tytułu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 bg-white border border-slate-200 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                      Autoryzacja
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Pracownik ręcznie sprawdza i zatwierdza gotową ofertę.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Jak korzysta z Allegro REST API */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Jak korzysta z Allegro REST API
                </h2>
              </div>

              <p className="text-slate-700 text-base font-medium">
                API wykorzystywane będzie do sprawdzania i parsowania informacji na temat tabel i formatów ofert.
              </p>

              <div className="space-y-3 pt-1">
                {/* Point 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="mt-0.5 p-1 rounded-md bg-blue-50 text-blue-600">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    Wyszukuje produkt w katalogu Allegro po kodzie EAN (
                    <code className="px-1.5 py-0.5 mx-1 rounded bg-slate-200/80 font-mono text-xs sm:text-sm font-semibold text-blue-700">
                      GET /sale/products
                    </code>
                    ).
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="mt-0.5 p-1 rounded-md bg-blue-50 text-blue-600">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    Pobiera listę parametrów kategorii (
                    <code className="px-1.5 py-0.5 mx-1 rounded bg-slate-200/80 font-mono text-xs sm:text-sm font-semibold text-blue-700">
                      GET /sale/categories/{'{id}'}/parameters
                    </code>
                    ) i propozycję kategorii (
                    <code className="px-1.5 py-0.5 mx-1 rounded bg-slate-200/80 font-mono text-xs sm:text-sm font-semibold text-blue-700">
                      GET /sale/matching-categories
                    </code>
                    ).
                  </div>
                </div>

                {/* Point 3 - Privacy / Read-only */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 hover:border-emerald-300 transition-colors">
                  <div className="mt-0.5 p-1 rounded-md bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    <strong className="font-semibold text-emerald-900">Tylko odczyt</strong> (
                    <code className="px-1.5 py-0.5 mx-1 rounded bg-emerald-100 font-mono text-xs sm:text-sm font-semibold text-emerald-800">
                      allegro:api:sale:offers:read
                    </code>
                    ). Aplikacja nie odczytuje zamówień, płatności, wiadomości ani danych osobowych kupujących.
                  </div>
                </div>

                {/* Point 4 - Tenant boundary */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="mt-0.5 p-1 rounded-md bg-purple-50 text-purple-600">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    Działa wyłącznie na koncie sprzedawcy <strong>Vendi Kwiat Sp. z o.o.</strong>; nie jest udostępniana innym sprzedawcom.
                  </div>
                </div>

                {/* Point 5 - Manual rate limiting */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="mt-0.5 p-1 rounded-md bg-amber-50 text-amber-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    Zapytania wysyłane są ręcznie przez pracownika przy przygotowaniu oferty — pojedyncze zapytania na produkt, bez masowego pobierania danych.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Dane techniczne */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Dane techniczne
                </h2>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <div className="divide-y divide-slate-200">
                  {/* User-Agent */}
                  <div className="p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Nagłówek User-Agent
                      </span>
                      <span className="text-xs text-slate-400">Identyfikator klienta HTTP</span>
                    </div>
                    <div className="sm:w-2/3 space-y-2">
                      <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-100 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 break-all">
                        <span>{userAgentTemplate}</span>
                        <button
                          onClick={() => handleCopy(userAgentTemplate, 'ua-template')}
                          className="flex-shrink-0 p-1.5 text-slate-500 hover:text-slate-900 bg-white rounded-lg border border-slate-200 shadow-2xs cursor-pointer hover:bg-slate-50 transition-colors"
                          title="Kopiuj wzorzec szablonu"
                        >
                          {copiedField === 'ua-template' ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Dynamic actual User-Agent helper */}
                      <div className="flex items-center justify-between gap-2 p-2.5 bg-amber-50/80 rounded-xl border border-amber-200/70 font-mono text-xs sm:text-sm text-amber-900 break-all">
                        <div>
                          <span className="block text-[10px] font-sans font-bold uppercase text-amber-700">
                            Z adresem tej strony:
                          </span>
                          <span>{userAgentWithActualUrl}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(userAgentWithActualUrl, 'ua-actual')}
                          className="flex-shrink-0 p-1.5 text-amber-800 hover:text-amber-950 bg-white rounded-lg border border-amber-200 shadow-2xs cursor-pointer hover:bg-amber-100 transition-colors"
                          title="Kopiuj z aktualnym adresem URL"
                        >
                          {copiedField === 'ua-actual' ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Autoryzacja */}
                  <div className="p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Autoryzacja
                      </span>
                    </div>
                    <div className="sm:w-2/3">
                      <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-800">
                        OAuth 2.0 device flow <span className="font-normal text-slate-600">(aplikacja lokalna, bez przeglądarki)</span>
                      </span>
                    </div>
                  </div>

                  {/* Środowisko */}
                  <div className="p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Środowisko
                      </span>
                    </div>
                    <div className="sm:w-2/3">
                      <span className="text-sm sm:text-base text-slate-800">
                        Aplikacja desktopowa uruchamiana lokalnie na stanowisku pracownika
                      </span>
                    </div>
                  </div>

                  {/* Operator */}
                  <div className="p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Operator
                      </span>
                    </div>
                    <div className="sm:w-2/3 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span className="text-sm sm:text-base font-semibold text-slate-800">
                        Vendi Kwiat Sp. z o.o., Radomsko
                      </span>
                    </div>
                  </div>

                  {/* Kontakt techniczny */}
                  <div className="p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Kontakt techniczny
                      </span>
                    </div>
                    <div className="sm:w-2/3 flex items-center justify-between gap-2">
                      <a
                        href="mailto:20mincode@gmail.com"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-orange-600 hover:text-orange-700 hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        20mincode@gmail.com
                      </a>
                      <button
                        onClick={() => handleCopy('20mincode@gmail.com', 'email')}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Kopiuj adres e-mail"
                      >
                        {copiedField === 'email' ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © Vendi Kwiat Sp. z o.o. · Wszelkie prawa zastrzeżone
            </div>
            <div className="flex items-center gap-4">
              <span>Status API: Produkcja</span>
              <span>•</span>
              <span>Weryfikacja: Allegro REST API</span>
            </div>
          </footer>
        </article>

      </div>
    </div>
  );
}
