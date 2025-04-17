import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tillverkning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Tillbakaknapp */}
          <Link 
            to="/tjanster" 
            className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Våra Tjänster
          </Link>
          
          {/* Bildgalleri */}
          <div className="glass p-8 rounded-xl mb-16 text-center">
            <h2 className="heading-lg mb-6">Tillverkning</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-white/70">
              Ett bildgalleri med bilder från "bildspel Tillverkningsmetoder" kommer läggas till här när mappen finns tillgänglig.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tillverkning; 