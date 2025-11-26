import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const projects = [
  {
    title: "Centrale Solaire Rurale",
    location: "Région de l'Est",
    category: "Énergie",
    year: "2024",
    description: "Installation d'une centrale hybride solaire pour alimenter 3 villages isolés. Capacité de 500kWc avec stockage.",
    image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjM2MTcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Complexe Résidentiel Riviera",
    location: "Yaoundé",
    category: "Bâtiment",
    year: "2023",
    description: "Construction d'un immeuble R+4 haut standing avec finitions modernes et parking souterrain.",
    image: "https://images.unsplash.com/photo-1644411813513-ad77c1b77581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Réhabilitation Voirie Urbaine",
    location: "Douala",
    category: "Travaux Publics",
    year: "2023",
    description: "Réfection de 5km de voirie urbaine, incluant le drainage pluvial et l'éclairage public.",
    image: "https://images.unsplash.com/photo-1762438441913-cd4ec8da39d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBwdWJsaWMlMjB3b3JrcyUyMHJvYWR8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Barrage de Retenue",
    location: "Région de l'Ouest",
    category: "Hydraulique",
    year: "2022",
    description: "Ouvrage hydraulique majeur pour l'irrigation agricole, capacité de retenue de 150 000 m3.",
    image: "https://images.unsplash.com/photo-1762248322725-e29eedafd516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBkYW0lMjB3YXRlciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2NDU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

import { SEO } from '../components/SEO';

export function ProjectsPage() {
  return (
    <PageTransition>
      <SEO
        title="Réalisations"
        description="Découvrez les dernières réalisations de BONYEK."
      />
      <div className="bg-white min-h-screen pb-20">
        <div className="bg-teal-950 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Nos Réalisations</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez la qualité de notre travail à travers une sélection de projets récents.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-600 hover:bg-teal-700 text-white border-none px-3 py-1 text-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                    <p className="text-white font-medium flex items-center gap-2">
                      <span className="text-teal-300">{project.location}</span> • {project.year}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="pt-6 mt-auto">
                    <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-700">
                      Voir les détails
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Simple stats or trust indicators could go here */}
          <div className="mt-20 text-center border-t pt-12">
             <p className="text-slate-500 mb-6">Plus de 50 projets livrés avec succès à travers le pays.</p>
             <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for partner logos like in the reference image */}
                 <div className="h-12 w-24 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PARTNER 1</div>
                 <div className="h-12 w-24 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PARTNER 2</div>
                 <div className="h-12 w-24 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PARTNER 3</div>
                 <div className="h-12 w-24 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PARTNER 4</div>
             </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
