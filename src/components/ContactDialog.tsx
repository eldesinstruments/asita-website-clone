"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    category: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Messaggio inviato con successo!",
      description: "Ti contatteremo presto per fornirti assistenza.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      category: ""
    });
    setLoading(false);
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#42b6b7] flex items-center">
            <Phone className="w-6 h-6 mr-2" />
            Contattaci Subito
          </DialogTitle>
        </DialogHeader>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Telefono</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="company">Azienda</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="category">Categoria di appartenenza</Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Seleziona la tua categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="installatore">Installatore</SelectItem>
                <SelectItem value="manutentore">Manutentore</SelectItem>
                <SelectItem value="verificatore">Verificatore</SelectItem>
                <SelectItem value="energy-manager">Energy Manager</SelectItem>
                <SelectItem value="tecnico-rs">Tecnico R&S</SelectItem>
                <SelectItem value="altro">Altro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="subject">Oggetto *</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
              className="mt-1"
              placeholder="Riparazione, Assistenza, Informazioni prodotto..."
            />
          </div>

          <div>
            <Label htmlFor="message">Messaggio *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              className="mt-1 min-h-[120px]"
              placeholder="Descrivi la tua richiesta..."
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2 text-[#42b6b7]" />
              <span className="font-semibold">Contatti diretti:</span>
            </div>
            <p className="text-sm text-gray-600">
              Email: info@asita.com<br />
              Tel: +39 035 59 50 54<br />
              Via Marconi 1, 24040 Stezzano (BG)
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#42b6b7] hover:bg-[#1c617e] text-white py-3"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Invia Messaggio
              </>
            )}
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
