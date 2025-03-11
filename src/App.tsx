import React, { useState, useEffect } from 'react';
import { ChevronDown, Scale, Users, Lightbulb, Building2, BookOpen, MessageSquare, ArrowRight, Gavel, Shield, BookType, FileText, FileClock, Briefcase, ScrollText, FileCheck, BookOpen as BookOpenIcon, Landmark, Blocks, Zap, FileDigit, Globe, PiggyBank, Network, Lock, LineChart, BarChart3, Workflow, Database, Smartphone, Server, ShieldCheck, KeyRound } from 'lucide-react';

const candidates = [
  {
    name: 'Marián Čuprík',
    image: '/marian-cuprik-new.png', // Using PNG for transparent background
    bio: 'Advokát s dlhoročnou praxou, špecializujúci sa na obchodné právo a digitálne technológie. Aktívne presadzuje modernizáciu právnych služieb a implementáciu nových technológií v advokácii.'
  },
  {
    name: 'Martin Friedrich',
    image: '/martin-friedrich-new.png', // Using PNG for transparent background
    bio: 'Skúsený právnik so zameraním na medzinárodné právo a modernizáciu právnych procesov. Jeho víziou je transformácia SAK na modernú inštitúciu 21. storočia.'
  },
  {
    name: 'Dominik Okenica',
    image: '/dominik-okenica-new.png', // Using PNG for transparent background
    bio: 'Progresívny advokát s víziou pre technologickú transformáciu právneho sektora. Špecializuje sa na digitálne právo a inovácie v právnych službách.'
  }
];

const goals = [
  {
    icon: <Blocks className="w-8 h-8" />,
    title: 'Absolútna Transparentnosť',
    description: 'Všetky finančné toky a rozhodnutia sú verejne dostupné a nemeniteľné vďaka blockchain technológii'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automatizácia Procesov',
    description: 'Zníženie administratívnej záťaže a zrýchlenie spracovania žiadostí'
  },
  {
    icon: <FileDigit className="w-8 h-8" />,
    title: 'Digitálne Dokumenty',
    description: 'Všetky dokumenty a rozhodnutia sú dostupné online s digitálnym podpisom'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Vzdialený Prístup',
    description: 'Plnohodnotný prístup ku všetkým službám SAK pre každého advokáta bez ohľadu na lokalitu'
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: 'Efektívne Hospodárenie',
    description: 'Transparentné a efektívne využívanie finančných prostriedkov komory'
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Decentralizácia Služieb',
    description: 'Rovnaký prístup k službám pre všetkých advokátov bez ohľadu na región'
  }
];

// Timeline data for the roadmap
const timeline = [
  {
    period: 'Q1 2026',
    title: 'Transparentné Riadenie',
    subtitle: 'Nová éra otvorenosti a dôvery',
    description: 'Zavedenie nových procesov pre transparentné riadenie komory',
    icon: <LineChart className="w-10 h-10" />,
    achievements: [
      'Verejný dashboard hospodárenia',
      'Online hlasovací systém',
      'Transparentné výberové konania'
    ],
    color: 'blue'
  },
  {
    period: '2026-2027',
    title: 'Blockchain Integrácia',
    subtitle: 'Kľúčový míľnik pre zabezpečenie transparentnosti',
    description: 'Implementácia blockchain technológie pre finančné operácie a transparentné sledovanie všetkých transakcií',
    icon: <Database className="w-10 h-10" />,
    achievements: [
      'Smart kontrakty pre automatizované procesy',
      'Transparentný systém sledovania platieb',
      'Decentralizovaná databáza operácií'
    ],
    color: 'purple'
  },
  {
    period: '2026-2028',
    title: 'Digitálna Transformácia',
    subtitle: 'Zásadná zmena v efektivite práce',
    description: 'Komplexná modernizácia IT infraštruktúry a digitalizácia procesov',
    icon: <Server className="w-10 h-10" />,
    achievements: [
      'Nový informačný systém',
      'Mobilná aplikácia pre advokátov',
      'Automatizované workflow systémy'
    ],
    color: 'indigo'
  },
  {
    period: '2025-2029',
    title: 'Bezpečnosť a Ochrana',
    subtitle: 'Ochrana citlivých dát na prvom mieste',
    description: 'Implementácia najvyšších štandardov kybernetickej bezpečnosti',
    icon: <ShieldCheck className="w-10 h-10" />,
    achievements: [
      'End-to-end šifrovanie',
      'Dvojfaktorová autentifikácia',
      'Pravidelné bezpečnostné audity'
    ],
    color: 'green'
  }
];

function App() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setHighlightedIndex(prevIndex => (prevIndex + 1) % timeline.length);
    }, 4000);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
    
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Original icons with increased size and opacity */}
          <Gavel className="absolute top-20 right-[20%] w-10 h-10 text-blue-500/40 animate-float animate-pulse-slow" />
          <Shield className="absolute bottom-32 left-[15%] w-12 h-12 text-purple-500/40 animate-float-alt" style={{ animationDelay: '1s' }} />
          <Scale className="absolute top-40 left-[25%] w-10 h-10 text-blue-500/40 animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Additional icons */}
          <BookType className="absolute top-[15%] left-[40%] w-8 h-8 text-purple-500/40 animate-float-alt animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          <FileText className="absolute bottom-[25%] right-[30%] w-12 h-12 text-blue-500/40 animate-float" style={{ animationDelay: '1.5s' }} />
          <FileClock className="absolute top-[60%] right-[15%] w-9 h-9 text-purple-500/40 animate-float-alt" style={{ animationDelay: '2.5s' }} />
          <Briefcase className="absolute top-[30%] right-[40%] w-10 h-10 text-blue-500/40 animate-float animate-pulse-slow" style={{ animationDelay: '3s' }} />
          <ScrollText className="absolute bottom-[15%] left-[35%] w-11 h-11 text-purple-500/40 animate-float-alt" style={{ animationDelay: '1.2s' }} />
          <FileCheck className="absolute top-[70%] left-[20%] w-9 h-9 text-blue-500/40 animate-float" style={{ animationDelay: '0.7s' }} />
          <BookOpenIcon className="absolute bottom-[40%] right-[10%] w-10 h-10 text-purple-500/40 animate-float-alt animate-pulse-slow" style={{ animationDelay: '2.2s' }} />
          <Landmark className="absolute top-[10%] left-[10%] w-11 h-11 text-blue-500/40 animate-float" style={{ animationDelay: '1.8s' }} />
        </div>
    
        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 text-left slide-in-left">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Tím pre modernú
                  <br />
                  Slovenskú advokátsku komoru
                </h1>
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </div>
    
              <p className="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-reveal" style={{ animationDelay: '0.5s' }}>
                Spojili sme sily, aby sme priniesli technológie, transparentnosť a komunitné reformy do SAK
              </p>
              <p className="text-lg text-gray-700 max-w-2xl opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}>
                Traja odhodlaní advokáti, jedna spoločná vízia: Komora, ktorá naplno slúži svojim členom a je pripravená na digitálnu budúcnosť.
              </p>
            </div>
    
            {/* Right Side - Candidate Photos */}
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.name}
                    className="opacity-0 animate-reveal w-full"
                    style={{ animationDelay: `${1 + index * 0.2}s` }}
                  >
                    <div className="relative group overflow-hidden rounded-xl">
                      {/* Enhanced gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 rounded-xl transition-all duration-300" />
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-full max-w-[708px] mx-auto object-contain rounded-xl transform transition-all duration-300 group-hover:scale-105 relative z-10 border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className="text-gray-800 text-xl font-bold">
                        {candidate.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Scroll Indicator */}
          <div className="text-center mt-12 opacity-0 animate-reveal" style={{ animationDelay: '1.5s' }}>
            <div className="inline-block p-4 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-110">
              <ChevronDown className="w-8 h-8 text-blue-600 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>Naši Kandidáti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {candidates.map((candidate, index) => {
              let animationClass = '';
              
              switch (index % 3) {
                case 0:
                  animationClass = 'fly-in-left';
                  break;
                case 1:
                  animationClass = 'fly-in-top';
                  break;
                case 2:
                  animationClass = 'fly-in-right';
                  break;
                default:
                  animationClass = 'fly-in-bottom';
              }
              
              return (
                <div
                  key={candidate.name}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl opacity-0 ${animationClass}`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">{candidate.name}</h3>
                    <p className="text-gray-600">{candidate.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section - Bento Box */}
      <section className="py-20 px-4" id="vision-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0 animate-reveal">Našá vízia pre SAK</h2>
          <div className="bento-grid grid-cols-1 md:grid-cols-6">
            {goals.map((goal, index) => {
              // Determine animation direction based on index
              let animationClass = '';
              let gridClass = '';
              
              // Set different grid spans and animations for each item
              switch (index) {
                case 0: // Transparentnosť
                  gridClass = 'col-span-1 md:col-span-3 row-span-1';
                  animationClass = 'fly-in-left';
                  break;
                case 1: // Komunita
                  gridClass = 'col-span-1 md:col-span-3 row-span-1';
                  animationClass = 'fly-in-right';
                  break;
                case 2: // Inovácie
                  gridClass = 'col-span-1 md:col-span-2 row-span-2';
                  animationClass = 'fly-in-top';
                  break;
                case 3: // Modernizácia
                  gridClass = 'col-span-1 md:col-span-2 row-span-1';
                  animationClass = 'fly-in-bottom';
                  break;
                case 4: // Vzdelávanie
                  gridClass = 'col-span-1 md:col-span-2 row-span-1';
                  animationClass = 'fly-in-left';
                  break;
                case 5: // Komunikácia
                  gridClass = 'col-span-1 md:col-span-4 row-span-1';
                  animationClass = 'fly-in-right';
                  break;
                default:
                  gridClass = 'col-span-1 md:col-span-2 row-span-1';
                  animationClass = 'fly-in-bottom';
              }
              
              return (
                <div
                  key={goal.title}
                  className={`bento-item ${gridClass} ${animationClass} p-6 rounded-xl bg-white shadow-lg`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="text-blue-600 mb-4">{goal.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50" id="plan-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 opacity-0 animate-reveal">Náš Plán</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>
            Strategický plán modernizácie Slovenskej advokátskej komory na roky 2025-2029
          </p>
          
          {/* Desktop Timeline (horizontal) */}
          <div className="hidden lg:block relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transform -translate-y-1/2 rounded-full opacity-0 animate-reveal" style={{ animationDelay: '0.4s' }} />
            
            <div className="grid grid-cols-4 gap-6">
              {timeline.map((item, index) => {
                const isHighlighted = index === highlightedIndex;
                const highlightClass = isHighlighted ? `timeline-item-highlight timeline-highlight-${item.color}` : '';
                
                return (
                  <div 
                    key={item.title}
                    className={`opacity-0 animate-reveal timeline-item ${highlightClass}`}
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    {/* Timeline node */}
                    <div className="flex justify-center mb-8">
                      <div className={`w-16 h-16 rounded-full ${isHighlighted ? `bg-${item.color}-200` : `bg-${item.color}-100`} flex items-center justify-center border-4 border-white shadow-lg transform transition-all duration-500 ${isHighlighted ? 'scale-110' : ''}`}>
                        <div className={`text-${item.color}-600`}>{item.icon}</div>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${isHighlighted ? `border-${item.color}-600` : `border-${item.color}-500`} transform transition-all duration-500 ${isHighlighted ? '-translate-y-3 shadow-xl' : 'hover:-translate-y-2 hover:shadow-xl'} h-full`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${isHighlighted ? `text-${item.color}-800 bg-${item.color}-200` : `text-${item.color}-700 bg-${item.color}-100`} mb-4 transition-all duration-500`}>
                        {item.period}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-3">{item.subtitle}</p>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      {/* Achievements */}
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`w-5 h-5 rounded-full ${isHighlighted ? `bg-${item.color}-200` : `bg-${item.color}-100`} flex-shrink-0 flex items-center justify-center mt-0.5 mr-2 transition-all duration-500`}>
                              <div className={`w-2 h-2 rounded-full ${isHighlighted ? `bg-${item.color}-600` : `bg-${item.color}-500`} transition-all duration-500`}></div>
                            </div>
                            <span className={`${isHighlighted ? 'text-gray-900 font-medium' : 'text-gray-700'} transition-all duration-500`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Timeline (vertical) */}
          <div className="lg:hidden space-y-8">
            {timeline.map((item, index) => {
              const isHighlighted = index === highlightedIndex;
              const highlightClass = isHighlighted ? `timeline-item-highlight timeline-highlight-${item.color}` : '';
              
              return (
                <div 
                  key={item.title}
                  className={`relative opacity-0 animate-reveal timeline-item ${highlightClass}`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute top-16 left-8 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2" />
                  )}
                  
                  <div className="flex">
                    {/* Timeline node */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full ${isHighlighted ? `bg-${item.color}-200` : `bg-${item.color}-100`} flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500 ${isHighlighted ? 'scale-110' : ''}`}>
                        <div className={`text-${item.color}-600`}>{item.icon}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${isHighlighted ? `border-${item.color}-600` : `border-${item.color}-500`} transform transition-all duration-500 ${isHighlighted ? '-translate-y-2 shadow-xl' : 'hover:-translate-y-1 hover:shadow-xl'}`}>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${isHighlighted ? `text-${item.color}-800 bg-${item.color}-200` : `text-${item.color}-700 bg-${item.color}-100`} mb-4 transition-all duration-500`}>
                          {item.period}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 text-${item.color}-600`}>{item.title}</h3>
                        <h4 className="text-lg font-semibold mb-2 text-gray-600">{item.subtitle}</h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-center space-x-2">
                              <ArrowRight className={`w-4 h-4 text-${item.color}-500`} />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white animate-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>Podporte Zmenu v SAK</h2>
          <p className="text-xl mb-8 opacity-0 animate-reveal" style={{ animationDelay: '0.4s' }}>
            Váš hlas je kľúčový pre modernizáciu Slovenskej advokátskej komory. Spoločne môžeme vybudovať silnejšiu a modernejšiu komoru pre všetkých advokátov.
          </p>
          <a href="https://sakeu.sharepoint.com/sites/volby" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-reveal" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center justify-center">
              Nominujte nás
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tím pre modernú SAK</h3>
              <p className="text-gray-400">Spojili sme sily, aby sme priniesli technológie, transparentnosť a komunitné reformy do SAK</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <p className="text-gray-400">Email: info@modernesak.sk</p>
              <p className="text-gray-400">Tel: +421 900 123 456</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sledujte nás</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Tím pre modernú SAK. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;