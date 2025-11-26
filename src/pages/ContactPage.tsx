import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';


export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message. Nous vous contacterons bientôt.");
  };

  return (
    <PageTransition>
      <SEO
        title="Contacts"
        description="Contactez BONYEK votre Bureau d'Etudes Techniques & d'Ingénierie."
      />
      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="bg-teal-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-teal-200 max-w-2xl mx-auto">
              Vous avez un projet ? Une question ? Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-3rem]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="shadow-md border-none h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Par Téléphone</h4>
                      <p className="text-slate-600 font-medium">+237 699 00 00 00</p>
                      <p className="text-slate-500 text-sm mt-1">Dispo 8h - 18h</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="shadow-md border-none h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Par Email</h4>
                      <p className="text-slate-600 font-medium break-all">contact@bonyek.com</p>
                      <p className="text-slate-500 text-sm mt-1">Réponse sous 24h</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="shadow-md border-none h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Nos Bureaux</h4>
                      <p className="text-slate-600 font-medium">Quartier Omnisports</p>
                      <p className="text-slate-500 text-sm mt-1">Yaoundé, Cameroun</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form with Image (Like in reference) */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-xl border-none overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative hidden md:block">
                     <img 
                        src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBoZWxtZXR8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Support team" 
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-teal-900/40"></div>
                     <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-lg">Besoin d'assistance ?</p>
                        <p className="text-sm opacity-90">Nos ingénieurs sont là pour répondre à toutes vos questions techniques.</p>
                     </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom complet</label>
                          <Input id="name" placeholder="Votre nom" required className="bg-slate-50" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                          <Input id="email" type="email" placeholder="votre@email.com" required className="bg-slate-50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-700">Sujet</label>
                        <Input id="subject" placeholder="Demande de devis, Renseignements..." required className="bg-slate-50" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                        <Textarea id="message" placeholder="Décrivez votre projet..." className="min-h-[120px] bg-slate-50" required />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-500 text-white">
                        Envoyer le message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Map Section Placeholder */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Rendez-nous visite</h3>
            <div className="h-[400px] bg-slate-200 rounded-xl w-full flex items-center justify-center overflow-hidden shadow-inner border border-slate-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127427.34454141998!2d11.453910578703444!3d3.8603781223554424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
