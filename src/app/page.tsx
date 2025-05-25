"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SearchDialog from "@/components/SearchDialog";
import ContactDialog from "@/components/ContactDialog";
import NewsletterForm from "@/components/NewsletterForm";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "PYE951 Analizzatore di Potenza-8CAN",
    category: "8ch Power",
    price: "€ 6.000,00",
    image: "https://ext.same-assets.com/2571558118/4111380161.jpeg",
    description: "All'list dei terminali esterni..."
  },
  {
    id: 2,
    name: "LMG610 trifase master Data logger con 3 canali di misura PPV",
    category: "Data Logger",
    price: "€ 0,00",
    image: "https://ext.same-assets.com/2571558118/91770882.jpeg",
    description: "LMG600 alla nuova serie ZG sono logger che..."
  },
  {
    id: 3,
    name: "MESUR MODULATORE DELLA RESISTENZA DI RETE DY 70 DY (HCV)",
    category: "DY RANG",
    price: "RICHIEDI INFO",
    image: "https://ext.same-assets.com/2571558118/716984253.png",
    description: "Modulatore manuale per misure di controllo..."
  },
  {
    id: 4,
    name: "MISURATORE DELLA RESISTENZA DI TERRA MT MINZ",
    category: "MISURATORI",
    price: "RICHIEDI INFO",
    image: "https://ext.same-assets.com/2571558118/2469103279.png",
    description: "POTENTIALITA PRICIPIALE"
  }
];

const categories = [
  {
    name: "INSTALLATORE",
    icon: "https://ext.same-assets.com/2571558118/2038679399.png"
  },
  {
    name: "MANUTENTORE",
    icon: "https://ext.same-assets.com/2571558118/579293615.png"
  },
  {
    name: "VERIFICATORE",
    icon: "https://ext.same-assets.com/2571558118/2307918088.png"
  },
  {
    name: "ENERGY MANAGER",
    icon: "https://ext.same-assets.com/2571558118/909343233.png"
  },
  {
    name: "TECNICO R&S",
    icon: "https://ext.same-assets.com/2571558118/4219531223.png"
  }
];

const newsArticles = [
  {
    id: 1,
    title: "I più preoccupanti in MAX-MINI",
    date: "La riabilitazione - Richiesta 1 giorni 2024",
    content: "Richieste - Richiesta 1 giorni 2024 - Richiesta totale di 30€ - Ma tutte richieste",
    image: "https://ext.same-assets.com/2571558118/941687363.jpeg"
  },
  {
    id: 2,
    title: "LE SOLUZIONI Strumenti e Gestore 2024",
    date: "A tre e inoltre servizio",
    content: "Il mondo elettrico e dei dispositivi in Questione e sequenza sono presenti azioni 2024: per informare e",
    image: "https://ext.same-assets.com/2571558118/1197422927.jpeg"
  },
  {
    id: 3,
    title: "La avventura di OMISI",
    date: "Dai primi fondi fino alla moderna scienza del potere",
    content: "Dal progetto fondi alle al moderne scienza del nuovo stato di poter essere",
    image: "https://ext.same-assets.com/2571558118/2450015975.png"
  },
  {
    id: 4,
    title: "Auto e Effetti a SPE Italia 2024",
    date: "Luglio 2024",
    content: "La richiesta di Asiatici membri della per la sostenibilità nella di e il 14-16 Luglio 2024 con una gamma più",
    image: "https://ext.same-assets.com/2571558118/1973484233.jpeg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-4 border-b"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Questo sito web utilizza i cookie. I cookie tecnici e quelli assimilabili a questi, come i cookie di funzionalità, sono sempre presenti.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              Usa solo cookie tecnici
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              Accetta informazioni
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm bg-[#42b6b7] text-white rounded hover:bg-[#1c617e]"
            >
              Accetta tutti i cookie
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white shadow-sm mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://ext.same-assets.com/2571558118/1608962318.png"
                alt="ASITA Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Azienda", "Servizi", "Latest news", "E-commerce"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-[#42b6b7] transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#"
                className="bg-[#42b6b7] text-white px-4 py-2 rounded hover:bg-[#1c617e] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Area Download
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-gradient-to-r from-[#42b6b7] to-[#1c617e] text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="flex-1">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Trova lo strumento più adatto<br />
              alle tue esigenze
            </motion.h1>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Scopri nella griglia e nome del prodotto,oppure<br />
              il colore oppure Leggendità e più pratico varie<br />
              la tua attività quando si ricerca immediata
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <SearchDialog />
            </motion.div>
          </div>
          <motion.div
            className="flex-1 text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src="https://ext.same-assets.com/2571558118/5755887.png"
              alt="Measurement Device"
              width={400}
              height={300}
              className="ml-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            LA NOSTRA OFFERTA DI <span className="text-[#42b6b7]">STRUMENTI PER MISURE ELETTRICHE</span>
          </motion.h2>

          {/* Navigation tabs */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <motion.button
                className="bg-[#42b6b7] text-white px-6 py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                STRUMENTI PORTATILI
              </motion.button>
              <motion.button
                className="text-gray-700 px-6 py-2 hover:bg-white rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                STRUMENTI DA LABORATORIO
              </motion.button>
              <motion.button
                className="text-gray-700 px-6 py-2 hover:bg-white rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                STRUMENTI DA QUADRO
              </motion.button>
            </div>
          </motion.div>

          {/* Categories List */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-4">STRUMENTI PORTATILI</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Multimetri", "Pinze amperometriche", "Misuratori di terra", "Misuratori di isolamento",
                  "Contatori", "Strumenti per sicurezza apparati", "Analizzatori di rete", "Fonometri",
                  "Luxmetri", "Calibratori di processo e temperatura", "Misuratori di potenza elettrica e di energia/wattmetri",
                  "Oscilloscopi", "PROVE GESTIONE E SICUREZZA ELETTRICA", "SONDE E MANUTENZIONE", "SERVIZI"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="hover:text-[#42b6b7] cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            PRODOTTI IN <span className="text-[#42b6b7]">EVIDENZA</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {products.map((product, index) => (
              <AnimatedProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MOSTRA TUTTI
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A QUALE <span className="text-[#42b6b7]">CATEGORIA</span> APPARTIENI?
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Scopri come i nostri strumenti ti aiutano nel tuo lavoro di tutti i giorni
          </motion.p>

          <div className="grid md:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="category-icon bg-[#42b6b7] text-white group-hover:bg-[#1c617e] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={32}
                    height={32}
                  />
                </motion.div>
                <h3 className="font-bold text-sm group-hover:text-[#42b6b7] transition-colors">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="bg-gradient-to-r from-[#42b6b7] to-[#1c617e] text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mr-6"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://ext.same-assets.com/2571558118/1911765420.png"
                  alt="Phone Icon"
                  width={80}
                  height={80}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  HAI BISOGNO<br />
                  DI ASSISTENZA<br />
                  SU UNA<br />
                  RIPARAZIONE?
                </h3>
                <ContactDialog>
                  <Button className="bg-white text-[#42b6b7] px-6 py-2 rounded font-semibold hover:bg-gray-100">
                    CONTATTACI SUBITO!
                  </Button>
                </ContactDialog>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="mr-6"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://ext.same-assets.com/2571558118/3070367422.png"
                  alt="Tools Icon"
                  width={80}
                  height={80}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  L'IMPORTANZA DI<br />
                  LAVORARE IN<br />
                  STRUMENTI<br />
                  TARATI
                </h3>
                <motion.button
                  className="bg-white text-[#42b6b7] px-6 py-2 rounded font-semibold hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SCOPRI LA NOSTRA<br />
                  OFFERTA
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Color Selection Section */}
      <motion.section
        className="bg-[#bce692] py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SCEGLI SOLO<br />
              IL <span className="text-[#42b6b7]">COLORE GIUSTO</span><br />
              PER OGNI <span className="text-[#42b6b7]">UTILIZZO</span>
            </h2>
            <motion.button
              className="bg-white text-gray-700 px-6 py-3 rounded border hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SCOPRI LE DIFFERENZE
            </motion.button>
          </motion.div>
          <motion.div
            className="flex-1 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full bg-black mx-auto relative"
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360 }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-8 rounded-full bg-[#bce692]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            NEWS
          </motion.h2>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex border-b">
              <motion.button
                className="px-6 py-2 border-b-2 border-[#42b6b7] text-[#42b6b7]"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                TUTTE
              </motion.button>
              <motion.button
                className="px-6 py-2 text-gray-500 hover:text-[#42b6b7]"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                NEWS
              </motion.button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </motion.div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 group-hover:text-[#42b6b7] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                  <p className="text-xs text-gray-600">{article.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GUARDA TUTTE
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="bg-gray-200 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I NOSTRI <span className="text-[#42b6b7]">PARTNER</span>
          </motion.h2>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://ext.same-assets.com/2571558118/1335389000.png"
                alt="Partner Logo"
                width={60}
                height={60}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Footer */}
      <motion.footer
        className="bg-[#42b6b7] text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://ext.same-assets.com/2571558118/1608962318.png"
                  alt="ASITA Logo"
                  width={100}
                  height={30}
                  className="h-8 w-auto"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">ISCRIVITI ALLA NEWSLETTER</h3>
                <p className="text-sm">
                  Asita s.r.l<br />
                  Via Marconi 1 | 24040 Stezzano (BG)<br />
                  Tel: +39 035 59 50 54
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <NewsletterForm />
              <div className="text-xs text-gray-200 mt-4 text-center md:text-right">
                PI: IT02995910160 | C.F: 02995910160
              </div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
