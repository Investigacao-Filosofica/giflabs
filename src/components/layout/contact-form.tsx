"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  title: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simular envio - em produção, aqui seria a chamada real da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", title: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-900/20 border border-green-600/30 rounded-lg flex items-center gap-2">
          <CheckCircle className="text-green-400" size={16} />
          <span className="text-green-300 text-sm">
            {t("footer.contact.form.success")}
          </span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-600/30 rounded-lg flex items-center gap-2">
          <AlertCircle className="text-red-400" size={16} />
          <span className="text-red-300 text-sm">
            {t("footer.contact.form.error")}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("footer.contact.form.name_placeholder")}
              className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-white rounded-none"
              required
            />
          </div>
          <div>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder={t("footer.contact.form.title_placeholder")}
              className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-white rounded-none"
            />
          </div>
        </div>

        <div>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t("footer.contact.form.email_placeholder")}
            className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-white rounded-none"
            required
          />
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("footer.contact.form.message_placeholder")}
            className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-white min-h-[100px] rounded-none"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-neutral-900 hover:bg-black hover:text-white font-medium rounded-none transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-neutral-900 mr-2" />
              {t("footer.contact.form.sending")}
            </>
          ) : (
            t("footer.contact.form.submit")
          )}
        </Button>
      </form>
    </div>
  );
} 