import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { settings } from "@/data/settings";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  eventType: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const EVENT_TYPE_LABELS: Record<string, string> = {
  wedding: "Wedding",
  date_prestige: "Date Prestige",
  party: "Private Party",
  picnic: "Luxury Picnic",
  other: "Other",
};

export default function Contact() {
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", eventType: "", message: "" },
  });

  const onSubmit = (data: InquiryFormValues) => {
    const eventLabel = data.eventType ? (EVENT_TYPE_LABELS[data.eventType] || data.eventType) : "Not specified";
    const message = [
      `Hello Mazini Events! 👋`,
      ``,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone || "N/A"}`,
      `*Event Type:* ${eventLabel}`,
      ``,
      `*Message:*`,
      data.message,
    ].join("\n");

    window.open(generateWhatsAppLink(settings.whatsappNumber, message), "_blank");
    form.reset();
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's discuss how we can transform your vision into an unforgettable reality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 uppercase tracking-widest text-sm">Our Studio</h4>
                  <p className="text-muted-foreground">{settings.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 uppercase tracking-widest text-sm">Phone / WhatsApp</h4>
                  <a
                    href={`https://wa.me/${settings.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 uppercase tracking-widest text-sm">Email</h4>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-6">Follow Us</h2>
            <div className="flex gap-4">
              {settings.instagramUrl && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 w-12 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {settings.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 w-12 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="border border-border p-8 bg-secondary/20">
            <h3 className="font-serif text-xl mb-3">Prefer WhatsApp?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Reach us directly for the fastest response.
            </p>
            <Button asChild className="w-full rounded-none bg-[#25D366] hover:bg-[#20bd5a] text-white uppercase tracking-widest">
              <a
                href={generateWhatsAppLink(settings.whatsappNumber, "Hello Mazini Events, I would like to discuss my event.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border p-8 md:p-10"
        >
          <h2 className="text-2xl font-serif mb-2 text-foreground">Send an Inquiry</h2>
          <p className="text-muted-foreground text-sm mb-8">Fill in the details and we'll open WhatsApp with your message pre-filled.</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="rounded-none h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest">Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" className="rounded-none h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+212 XXX XX XX XX" className="rounded-none h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-none h-12 bg-background">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="date_prestige">Date Prestige</SelectItem>
                          <SelectItem value="party">Private Party</SelectItem>
                          <SelectItem value="picnic">Luxury Picnic</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest">Event Details *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your event date, location, and vision..."
                        className="rounded-none min-h-[150px] resize-none bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest font-medium"
              >
                Send via WhatsApp
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
