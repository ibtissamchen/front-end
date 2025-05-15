import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-10 text-center space-y-10 transition-all duration-300">

        {/* Header / Logo */}
        <div className="flex items-center justify-center gap-6">
          <ShieldCheck className="w-20 h-20 text-blue-600 animate-pulse" />
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
            SafeShare
          </h1>
        </div>

        {/* Slogan + Feature Message */}
        <div className="space-y-4">
          <p className="text-xl italic text-gray-700">
            “Partager en toute confiance : sécurité maximale, simplicité absolue.”
          </p>

          <p className="text-lg text-blue-800 font-medium leading-relaxed">
            Avec <span className="font-bold">SafeShare</span>, vous pouvez stocker, partager et collaborer
            sur vos fichiers dans des <span className="font-bold">espaces de travail sécurisés</span>, le tout grâce à une solution
            <span className="text-blue-500 font-semibold"> open-source chiffrée</span> de bout en bout.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
          >
            S’inscrire
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="bg-white border border-blue-600 text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Se connecter
          </button>
        </div>

        {/* Testimonials/Imagery (Optional future section) */}

        {/* Footer */}
        <footer className="text-xs text-gray-500 mt-8">
          © 2025 SafeShare. Une initiative sécurisée pour la communauté UNIT.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
