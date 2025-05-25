"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    name: "LMG610 trifase master Data logger",
    category: "Data Logger",
    price: "€ 0,00",
    image: "https://ext.same-assets.com/2571558118/91770882.jpeg",
    description: "LMG600 alla nuova serie ZG sono logger che..."
  },
  {
    id: 3,
    name: "MESUR MODULATORE DELLA RESISTENZA",
    category: "DY RANG",
    price: "RICHIEDI INFO",
    image: "https://ext.same-assets.com/2571558118/716984253.png",
    description: "Modulatore manuale per misure di controllo..."
  },
  {
    id: 4,
    name: "MISURATORE DELLA RESISTENZA DI TERRA",
    category: "MISURATORI",
    price: "RICHIEDI INFO",
    image: "https://ext.same-assets.com/2571558118/2469103279.png",
    description: "POTENTIALITA PRICIPIALE"
  },
  {
    id: 5,
    name: "Multimetro Digitale DMM-450",
    category: "Multimetri",
    price: "€ 350,00",
    image: "https://ext.same-assets.com/2571558118/4111380161.jpeg",
    description: "Multimetro professionale per misure elettriche"
  },
  {
    id: 6,
    name: "Pinza Amperometrica AC/DC",
    category: "Pinze",
    price: "€ 280,00",
    image: "https://ext.same-assets.com/2571558118/91770882.jpeg",
    description: "Pinza per misure di corrente AC/DC"
  }
];

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white text-[#42b6b7] px-8 py-3 rounded font-semibold hover:bg-gray-100">
          <Search className="w-4 h-4 mr-2" />
          CERCA
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#42b6b7]">
            Trova lo strumento più adatto
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cerca per nome prodotto, categoria o descrizione..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2"
                onClick={() => handleSearch("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="max-h-[50vh] overflow-y-auto">
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                <div className="grid gap-4">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        // Handle product selection
                        console.log("Selected product:", product.name);
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-md object-contain"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#42b6b7]">{product.price}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Dettagli
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-gray-500"
                >
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Nessun prodotto trovato per "{searchQuery}"</p>
                  <p className="text-sm mt-2">Prova con termini di ricerca diversi</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
