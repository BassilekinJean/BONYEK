import React from 'react';
import { Droplets, Zap, HardHat, Construction, Home, Lightbulb, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';


const services = [
  {
    id: "hydraulique",
    title: "Hydraulique",
    description: "Notre cœur de métier. Nous réalisons des ouvrages d'art hydraulique, des barrages, des systèmes d'adduction d'eau potable, des forages industriels et domestiques, ainsi que des réseaux d'assainissement complets.",
    features: ["Barrages & Retenues d'eau", "Adduction d'eau potable (AEP)", "Forages & Pompage", "Assainissement & Drainage"],
    icon: Droplets,
    color: "text-teal-600",
    bg: "bg-teal-50",
    image: "https://images.unsplash.com/photo-1762248322725-e29eedafd516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBkYW0lMjB3YXRlciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2NDU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "btp",
    title: "Bâtiment (BTP)",
    description: "De la conception à la réalisation, nous construisons des bâtiments résidentiels, commerciaux et industriels robustes et esthétiques, en respectant les normes de construction les plus strictes.",
    features: ["Gros œuvre & Maçonnerie", "Finitions & Second œuvre", "Bâtiments industriels", "Rénovation immobilière"],
    icon: Home,
    color: "text-orange-600",
    bg: "bg-orange-50",
    image: "https://images.unsplash.com/photo-1644411813513-ad77c1b77581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "tp",
    title: "Travaux Publics",
    description: "Nous aménageons le territoire à travers la construction de routes, le terrassement de grande envergure et les aménagements urbains pour améliorer le cadre de vie des populations.",
    features: ["Voiries & Réseaux Divers (VRD)", "Terrassements généraux", "Ouvrages d'art (Ponts, Dalots)", "Aménagements urbains"],
    icon: Construction,
    color: "text-slate-600",
    bg: "bg-slate-50",
    image: "https://images.unsplash.com/photo-1762438441913-cd4ec8da39d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBwdWJsaWMlMjB3b3JrcyUyMHJvYWR8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "elec",
    title: "Électrification & Énergie",
    description: "Nous apportons l'énergie là où elle est nécessaire. Spécialistes de l'électrification rurale et des énergies renouvelables (solaire), nous œuvrons pour l'autonomie énergétique.",
    features: ["Extension de réseaux MT/BT", "Postes de transformation", "Centrales solaires photovoltaïques", "Éclairage public"],
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjM2MTcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ServicesPage() {
  return (
    <PageTransition>
      <SEO
        title="Services"
        description="Explorez nos services."
      />
      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="bg-teal-950 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
            <p className="text-teal-200 max-w-2xl mx-auto">
              Une offre multisectorielle intégrée pour répondre à tous vos besoins en infrastructures.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
          {services.map((service, index) => (
            <motion.div 
              id={service.id}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${service.bg} w-fit`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="h-2 w-2 bg-teal-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="group bg-teal-900 hover:bg-teal-800 text-white">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Besoin d'une expertise spécifique ?</h3>
                <p className="text-slate-600 mb-6">
                    Nous réalisons également des études géologiques et assurons le suivi technique de projets.
                </p>
                <Link to="/contact">
                    <Button variant="outline" className="border-teal-900 text-teal-900 hover:bg-teal-50">
                        Contactez notre bureau d'études
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </PageTransition>
  );
}
