import React from 'react';
import { CheckCircle, UserCheck, Award, Users, Globe, Building } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';


export function AboutPage() {
  const stats = [
    { label: "Années d'expérience", value: "15+" },
    { label: "Projets Réalisés", value: "50+" },
    { label: "Experts Qualifiés", value: "20+" },
    { label: "Régions Couvertes", value: "10" },
  ];

  return (
    <PageTransition>
      <SEO
        title="À Propos"
        description="Découvrez BONYEK, dirigé par Boniface Ekath, Expert agréé ARMP. Plus de 15 ans d'expérience en BTP et Hydraulique."
        url="/about"
      />
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-teal-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              À Propos de BONYEK
            </motion.h1>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto">
              Une expertise fondée sur la rigueur scientifique et l'engagement terrain.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-3rem]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Le Mot du Directeur</h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Boniface Ekath
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  "En créant BONYEK, j'ai voulu mettre mon expertise d'Ingénieur Géologue LST au service du développement des infrastructures au Cameroun et en Afrique."
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  En tant qu'Expert agréé ARMP CCCM N°644, je m'engage personnellement sur la qualité et la conformité de chaque ouvrage que nous livrons. Notre mission est de bâtir durablement pour les générations futures.
                </p>
                
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Award className="h-6 w-6 text-orange-500 mb-1" />
                    <span className="text-xs font-bold text-slate-700">Certifié ARMP</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Users className="h-6 w-6 text-teal-500 mb-1" />
                    <span className="text-xs font-bold text-slate-700">Équipe Expert</span>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBoZWxtZXR8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Directeur BONYEK" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-4xl font-extrabold text-teal-600 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-t-teal-600 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Vision Globale</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nous approchons chaque projet avec une vision d'ensemble, intégrant les contraintes géologiques, techniques et environnementales.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-green-600 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Excellence Opérationnelle</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nos processus sont optimisés pour garantir la livraison des chantiers dans les délais et les budgets impartis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-600 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">Polyvalence</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Du génie civil à l'hydraulique, notre polyvalence nous permet d'être l'interlocuteur unique pour vos grands projets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
