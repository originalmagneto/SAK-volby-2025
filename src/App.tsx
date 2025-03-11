import { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  
  // Enhanced background floating icons with more variety and movement
  const floatingIcons = [
    { icon: <Gavel className="w-8 h-8 text-blue-200" />, position: 'top-[10%] left-[5%]', animation: 'animate-float-slow' },
    { icon: <Scale className="w-10 h-10 text-purple-200" />, position: 'top-[20%] right-[10%]', animation: 'animate-float-medium' },
    { icon: <Shield className="w-6 h-6 text-blue-300" />, position: 'bottom-[30%] left-[15%]', animation: 'animate-float-fast' },
    { icon: <BookOpen className="w-12 h-12 text-purple-100" />, position: 'bottom-[10%] right-[5%]', animation: 'animate-float-slow' },
    { icon: <Landmark className="w-8 h-8 text-blue-100" />, position: 'top-[40%] left-[80%]', animation: 'animate-float-medium' },
    { icon: <FileText className="w-6 h-6 text-purple-200" />, position: 'top-[60%] left-[25%]', animation: 'animate-float-fast' },
    // Additional icons with more movement
    { icon: <Users className="w-9 h-9 text-blue-100" />, position: 'top-[15%] left-[35%]', animation: 'animate-float-bounce' },
    { icon: <Lightbulb className="w-7 h-7 text-purple-100" />, position: 'top-[50%] right-[20%]', animation: 'animate-float-zigzag' },
    { icon: <Building2 className="w-10 h-10 text-blue-200/40" />, position: 'bottom-[20%] right-[25%]', animation: 'animate-float-circle' },
    { icon: <MessageSquare className="w-5 h-5 text-purple-200" />, position: 'top-[35%] left-[55%]', animation: 'animate-float-wave' },
    { icon: <BookType className="w-8 h-8 text-blue-200/30" />, position: 'bottom-[40%] left-[30%]', animation: 'animate-float-pulse' },
    { icon: <FileClock className="w-7 h-7 text-purple-100/40" />, position: 'top-[70%] right-[40%]', animation: 'animate-float-twist' }
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setHighlightedIndex(prevIndex => (prevIndex + 1) % timeline.length);
    }, 4000);

    // Set visibility for the goal boxes animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearInterval(rotationInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Enlarged Hero Section */}
      <section className="relative pt-28 pb-32 md:pt-36 md:pb-48 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
        {/* Floating Background Icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute opacity-30 ${item.position} ${item.animation} z-0`}
          >
            {item.icon}
          </div>
        ))}
        
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-full md:w-2/5 text-left slide-in-left mb-12 md:mb-0">
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Tím pre modernú
                <br />
                Slovenskú advokátsku komoru
              </h1>
              <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>
            <p className="text-xl md:text-3xl text-gray-600 mb-10 opacity-0 animate-reveal" style={{ animationDelay: '0.5s' }}>
              Spojili sme sily, aby sme priniesli technológie, transparentnosť a komunitné reformy do SAK
            </p>
            <p className="text-xl text-gray-700 max-w-2xl opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}>
              Traja odhodlaní advokáti, jedna spoločná vízia: Komora, ktorá naplno slúži svojim členom a je pripravená na digitálnu budúcnosť.
            </p>
          </div>

          {/* Much bigger photos with description on hover */}
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-3 gap-6">
              {candidates.map((candidate, index) => (
                <div
                  key={candidate.name}
                  className="opacity-0 animate-reveal"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <div className="relative group overflow-hidden rounded-xl h-[220px] md:h-[320px] shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105">
                    {/* Enhanced gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-purple-500/70 opacity-0 group-hover:opacity-90 transition-all duration-500 rounded-xl" />
                    
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-full h-full object-cover rounded-xl transform transition-all duration-500 group-hover:scale-110 relative z-10"
                    />
                    
                    {/* Description overlay on hover */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-md">
                        {candidate.name}
                      </h3>
                      <p className="text-white text-sm md:text-lg line-clamp-4 drop-shadow-md">
                        {candidate.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20 opacity-0 animate-reveal" style={{ animationDelay: '1.5s' }}>
          <div className="inline-block p-4 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-110">
            <ChevronDown className="w-10 h-10 text-blue-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Goals Section with Bento Box Design */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50/80 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Naše ciele pre modernú komoru</h2>
            <p className="text-lg text-gray-600">
              Máme jasnú víziu a konkrétne ciele, ako transformovať SAK na modernú inštitúciu, ktorá efektívne slúži advokátom v digitálnej dobe
            </p>
          </div>

          {/* Bento Box Layout with fly-in animation */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
            {goals.map((goal, index) => {
              // Define different starting positions for each card
              const directions = ['translate-x-[-100vw]', 'translate-y-[-100vh]', 'translate-x-[100vw]', 'translate-y-[100vh]', 'translate-x-[-100vw]', 'translate-y-[100vh]'];
              // Set column spans to create visual interest
              const colSpans = ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4'];
              
              return (
                <div 
                  key={goal.title}
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-1000 ${colSpans[index]} ${isVisible ? 'translate-x-0 translate-y-0' : directions[index]}`}
                  style={{ transitionDelay: `${0.2 * index}s`, transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Náš plán transformácie na 5 rokov</h2>
            <p className="text-lg text-gray-600">
              Jasný a transparentný plán krokov, ktoré podnikneme pre modernizáciu SAK
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[50%] h-full w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-16 relative">
              {timeline.map((item, index) => {
                const isHighlighted = index === highlightedIndex;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.title} className={`relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className={`md:w-[45%] p-6 rounded-xl shadow-md ${isHighlighted ? 'shadow-lg scale-105 bg-gradient-to-br from-white to-blue-50' : 'bg-white'} transition-all duration-300`}>
                      <div className="inline-block p-3 rounded-full mb-4 bg-blue-50">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-blue-500 mb-1 block">{item.period}</span>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-500 mb-3">{item.subtitle}</p>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <p className="text-gray-700">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex-shrink-0 hidden md:block">
                      <div className={`h-12 w-12 rounded-full border-4 ${isHighlighted ? 'border-blue-500 bg-white scale-110' : 'border-gray-300 bg-white'} transition-all duration-300 flex items-center justify-center`}>
                        <div className={`h-4 w-4 rounded-full ${isHighlighted ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                      </div>
                    </div>
                    
                    <div className="md:w-[45%] hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Naše hodnoty</h2>
            <p className="text-lg text-gray-600">
              Hodnoty, ktorými sa riadime a ktoré chceme presadzovať v Slovenskej advokátskej komore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4">
                <Gavel className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Profesionalita a etika</h3>
              <p className="text-gray-600">
                Presadzujeme najvyššie štandardy profesionality a etického správania v advokácii. Veríme, že dôvera verejnosti v advokátov je základom fungujúceho právneho štátu.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nezávislosť a odvaha</h3>
              <p className="text-gray-600">
                Podporujeme nezávislé postavenie advokátov a ich odvahu zastávať sa práv a záujmov klientov bez ohľadu na vonkajšie tlaky.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vzdelávanie a rast</h3>
              <p className="text-gray-600">
                Presadzujeme kontinuálne vzdelávanie a odborný rast advokátov, aby mohli poskytovať kvalitné právne služby v rýchlo sa meniacom svete.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Komunikácia a otvorenosť</h3>
              <p className="text-gray-600">
                Podporujeme otvorenú a transparentnú komunikáciu v rámci komory aj smerom k verejnosti, pretože len tak môžeme budovať dôveryhodnú inštitúciu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pridajte sa k nám na ceste k modernej komore</h2>
          <p className="text-lg text-gray-600 mb-8">
            Voľby do orgánov SAK sú príležitosťou pre zmenu. Spoločne môžeme vybudovať modernú, transparentnú a efektívnu komoru, ktorá bude skutočne slúžiť záujmom advokátov a právneho štátu.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]">
              Podporiť našu kandidatúru
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300">
              Dozvedieť sa viac
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SAK Voľby 2025
              </div>
              <p className="mt-1 text-sm text-gray-400">
                © 2024 Všetky práva vyhradené
              </p>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Ochrana súkromia</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
