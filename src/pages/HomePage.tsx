import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Trophy, Droplets, Home, Construction, Zap, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../components/ui/carousel';
import { SEO } from '../components/SEO';


// Mock Data
const services = [
  { icon: Droplets, title: "Hydraulique", desc: "Barrages, AEP, Forages" },
  { icon: Home, title: "Bâtiment", desc: "Résidentiel & Industriel" },
  { icon: Construction, title: "Travaux Publics", desc: "Routes & VRD" },
  { icon: Zap, title: "Énergie", desc: "Solaire & Électrification" },
];

const projects = [
  {
    title: "Centrale Solaire",
    location: "Est-Cameroun",
    image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjM2MTcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Immeuble Riviera",
    location: "Yaoundé",
    image: "https://images.unsplash.com/photo-1644411813513-ad77c1b77581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Voirie Urbaine",
    location: "Douala",
    image: "https://images.unsplash.com/photo-1762438441913-cd4ec8da39d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBwdWJsaWMlMjB3b3JrcyUyMHJvYWR8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
   {
    title: "Barrage Hydro",
    location: "Ouest",
    image: "https://images.unsplash.com/photo-1762248322725-e29eedafd516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBkYW0lMjB3YXRlciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2NDU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const team = [
  { name: "Boniface Ekath", role: "Directeur Général", desc: "Expert Agréé ARMP, Ingénieur Géologue LST" },
  { name: "Jean-Marc Etoundi", role: "Chef de Projets BTP", desc: "Ingénieur Civil, 12 ans d'expérience" },
  { name: "Sarah Mbia", role: "Resp. Études Hydrauliques", desc: "Docteur en Hydrologie" }
];

const partners = [
  "SOREPCO S.A", "Wafacash", "COGENI", "Afriland First Bank", "SIC CACAOS", "GUINNESS", "CONGELCAM"
];

// Typing Effect Component
const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < text.length) {
          index++;
          return text.slice(0, index);
        }
        clearInterval(interval);
        return prev;
      });
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Accueil"
        description="BONYEK - Bureau d'Etudes Techniques & d'Ingénierie. Expertise en Hydraulique, Bâtiment, Travaux Publics et Énergie."
      />
      {/* Hero Section */}
      <div className="relative bg-teal-950 h-[85vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1762248322725-e29eedafd516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBkYW0lMjB3YXRlciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2NDU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Hydraulic infrastructure" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-900/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border border-red-500 bg-red-500/10 px-3 py-1 rounded mb-4 backdrop-blur-sm">
                 <span className="text-red-300 font-bold uppercase tracking-wider text-sm">Bureau d'Etudes Techniques & d'Ingénierie</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 min-h-[160px] md:min-h-[200px]">
                Expertise Hydraulique <br/>
                <span className="text-teal-400">
                   <TypingText text="& BTP Durable" />
                </span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed max-w-2xl border-l-4 border-red-500 pl-6">
                BONYEK accompagne particuliers et collectivités dans la réalisation d'ouvrages d'art, l'électrification et les énergies renouvelables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-500 text-white border-none text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    Nos Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-teal-900 text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    Nous Contacter <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Metrics / Features Strip */}
      <div className="bg-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-teal-800/50"
            >
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expertise Reconnue</h3>
              <p className="text-teal-200">Dirigé par un Expert agréé ARMP</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-teal-800/50"
            >
              <ShieldCheck className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité Garantie</h3>
              <p className="text-teal-200">Respect strict des normes BTP</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-teal-800/50"
            >
              <CheckCircle2 className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solutions Durables</h3>
              <p className="text-teal-200">Engagement pour l'environnement</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1644411813513-ad77c1b77581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Construction site" 
                  className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
                />
             </div>
             <div className="md:w-1/2">
                <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Qui sommes-nous ?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Bâtisseur d'avenir, partenaire de confiance.
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Chez BONYEK, nous combinons expertise technique et innovation pour livrer des projets complexes. 
                  De l'hydraulique au bâtiment, notre équipe pluridisciplinaire s'engage à dépasser vos attentes.
                </p>
                <Link to="/about">
                   <Button variant="secondary" className="text-teal-900 bg-teal-100 hover:bg-teal-200">
                     Découvrir notre entreprise
                   </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Ce que nous faisons</h2>
               <h3 className="text-3xl font-bold text-slate-900">Nos Domaines d'Expertise</h3>
             </div>
             <Link to="/services" className="hidden md:block">
               <Button variant="outline" className="text-teal-700 border-teal-200 hover:bg-teal-50">
                 Tous nos services <ArrowRight className="ml-2 h-4 w-4"/>
               </Button>
             </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {services.map((service, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100"
               >
                 <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                   <service.icon className="h-6 w-6" />
                 </div>
                 <h4 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h4>
                 <p className="text-slate-500 text-sm mb-4">{service.desc}</p>
                 <Link to="/services" className="text-teal-600 text-sm font-medium hover:underline inline-flex items-center">
                   En savoir plus <ArrowRight className="ml-1 h-3 w-3"/>
                 </Link>
               </motion.div>
             ))}
           </div>
           <div className="mt-8 text-center md:hidden">
              <Link to="/services">
               <Button variant="outline" className="text-teal-700 border-teal-200 hover:bg-teal-50">
                 Tous nos services
               </Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-teal-300 font-semibold tracking-wide uppercase text-sm mb-2">Nos Références</h2>
               <h3 className="text-3xl font-bold text-white">Projets Récents</h3>
             </div>
             <Link to="/projects" className="hidden md:block">
               <Button className="bg-white text-teal-900 hover:bg-teal-50">
                 Toutes nos réalisations
               </Button>
             </Link>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full border border-slate-100">
                    <div className="h-48 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-0 left-0 bg-teal-900/80 text-white text-xs px-3 py-1 rounded-tr-lg">
                        {project.location}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-lg text-slate-900 mb-1">{project.title}</h4>
                      <Link to="/projects" className="text-teal-600 text-sm hover:underline mt-2 inline-block">
                        Voir le détail
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white/20" />
            <CarouselNext className="text-white border-white hover:bg-white/20" />
          </Carousel>

          <div className="mt-4 text-center md:hidden">
             <Link to="/projects">
               <Button className="bg-white text-teal-900 hover:bg-teal-50">
                 Toutes nos réalisations
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Notre Force</h2>
             <h3 className="text-3xl font-bold text-slate-900">Une Équipe d'Experts</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {team.map((member, i) => (
               <motion.div 
                 key={i} 
                 className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 text-center group"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
               >
                 <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                   <User className="h-10 w-10 text-white" />
                 </div>
                 <h4 className="font-bold text-xl text-slate-900">{member.name}</h4>
                 <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                 <p className="text-slate-600 text-sm">{member.desc}</p>
               </motion.div>
             ))}
           </div>
           <div className="text-center mt-10">
             <Link to="/about">
              <Button variant="outline" className="border-teal-200 text-teal-800 hover:bg-teal-50">
                Rencontrer l'équipe complète
              </Button>
            </Link>
           </div>
        </div>
      </section>

      {/* Clients / Partners Carousel (Footer Section) */}
      <section className="py-12 bg-gradient-to-b from-slate-100 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-8">
              <h4 className="text-teal-600 font-bold uppercase tracking-widest text-sm">Partenaires</h4>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">Nos Clients</h3>
           </div>
           
           <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "center", loop: true }}>
             <CarouselContent className="-ml-4 items-center">
                {partners.map((partner, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                     <div className="px-2 py-4 flex items-center justify-center h-24">
                        <div className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center border border-slate-100 rounded-lg p-4 h-full w-full bg-slate-50">
                           <span className="font-bold text-slate-700 text-center text-sm">{partner}</span>
                        </div>
                     </div>
                  </CarouselItem>
                ))}
             </CarouselContent>
           </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-lg text-teal-100 mb-8">
            Nos équipes sont disponibles pour étudier vos besoins et vous proposer des solutions sur mesure.
          </p>
          <Link to="/contact">
             <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 text-lg h-auto rounded-full shadow-xl">
               Demander un devis gratuit
             </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}