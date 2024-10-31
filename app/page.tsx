import React from 'react';
import { Code2, Terminal, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#18181b_0%,_#09090b_50%,_#000000_100%)] text-white flex items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
              10xdevs
            </h1>
            <p className="text-zinc-300 text-sm md:text-base tracking-wide font-semibold">
              because 100x is too much
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <TeamCard 
              icon={<Code2 className="w-8 h-8 stroke-white" />}
              name="Nirmit Saini"
              role="Full Stack Developer"
            />
            <TeamCard 
              icon={<Terminal className="w-8 h-8 stroke-white" />}
              name="Aryan Yadav"
              role="Full Stack Developer"
            />
            <TeamCard 
              icon={<Zap className="w-8 h-8 stroke-white" />}
              name="Aayush Joshi"
              role="Machine Learning Engineer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamCard({ icon, name, role }: { 
  icon: React.ReactNode;
  name: string;
  role: string;
}) {
  return (
    <div className="group p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 hover:from-zinc-800 hover:to-zinc-900 transition-all duration-300 border border-zinc-800/50 hover:border-zinc-700/50 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-xl bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-zinc-400 text-sm font-light">{role}</p>
      </div>
    </div>
  );
}

export default App;