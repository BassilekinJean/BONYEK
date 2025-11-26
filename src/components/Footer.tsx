import React from 'react';
import { Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-teal-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold">BONYEK</span>
            </div>
            <p className="text-teal-200 max-w-sm leading-relaxed">
              Expertise en travaux publics, hydraulique, bâtiment et énergies renouvelables. 
              Au service des particuliers et des collectivités.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-teal-200">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Légal</h4>
            <ul className="space-y-2 text-teal-200">
              <li><Link to="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-300 text-sm">
            © {new Date().getFullYear()} BONYEK. Tous droits réservés.
          </p>
          <p className="text-teal-300 text-sm">
            Expert agrée ARMP CCCM N°644
          </p>
        </div>
      </div>
    </footer>
  );
}
