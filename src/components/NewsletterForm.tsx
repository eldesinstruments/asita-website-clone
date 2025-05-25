"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Iscrizione completata!",
      description: "Riceverai le nostre ultime novità e offerte speciali.",
    });

    setSubscribed(true);
    setLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="flex flex-col space-y-4">
      <AnimatePresence mode="wait">
        {!subscribed ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email..."
                required
                className="pl-10 py-3 text-black bg-white border-gray-300 rounded"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !email}
              className="bg-white text-[#42b6b7] hover:bg-gray-100 py-3 font-semibold"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-4 h-4 border-2 border-[#42b6b7] border-t-transparent rounded-full"
                />
              ) : (
                "ISCRIVITI"
              )}
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center py-8 text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="bg-green-500 rounded-full p-3 mr-3"
            >
              <Check className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="font-semibold">Iscrizione completata!</p>
              <p className="text-sm text-gray-200">Grazie per aver sottoscritto la newsletter</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
