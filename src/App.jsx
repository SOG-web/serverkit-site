import React from 'react';
import { Database, Users, Shield, Zap, Globe, Code, Server, Parentheses } from 'lucide-react';

const features = [
  { icon: Database, name: 'Multiple Databases', description: 'Supports RethinkDB and SurrealDB' },
  { icon: Zap, name: 'Realtime Database', description: 'Built-in realtime database functionality' },
  { icon: Users, name: 'Authentication', description: 'Robust authentication system' },
  { icon: Shield, name: 'Multi-level Authorization', description: 'Role, table, database, and namespace level' },
  { icon: Globe, name: 'Multi-tenant Support', description: 'Designed for multi-tenant applications' },
  {icon: Parentheses, name: 'Extend with your backend', description: 'write your custom functionality since it is just a framework by default'},
  { icon: Code, name: 'Multiple SDKs', description: 'Support for web and mobile frameworks' },
];

const supportedFrameworks = [
  'Flutter', 'React Native', 'NativeScript', 'Next.js', 'Angular', 'Analog.js', 'SvelteKit', 'Nuxt', 'Kotlin'
];

const FeatureCard = ({ icon: Icon, name, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Server className="w-10 h-10 mr-4" />
              <h1 className="text-3xl font-bold">ServerKit</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#features" className="hover:text-blue-200">Features</a></li>
                <li><a href="#" className="hover:text-blue-200">Docs</a></li>
                <li><a href="#" className="hover:text-blue-200">Open Source</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Open Source Backend as a Service Framework (coming soon)</h2>
            <p className="text-xl mb-8">Build scalable, real-time applications with ease</p>
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section id="features">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Supported Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {supportedFrameworks.map((framework) => (
              <span key={framework} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">{framework}</span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Built with Go, Powered by Modern Databases</h2>
          <p className="text-center text-xl mb-8">
            ServerKit is crafted in Go, offering exceptional performance and reliability. 
            Choose between RethinkDB and SurrealDB for your database needs.
          </p>
          <div className="flex justify-center space-x-8">
            <img src="/assets/go-logo.png" alt="Go Logo" className="h-16" />
            <img src="/assets/rethinkdb-logo.png" alt="RethinkDB Logo" className="h-16" />
            <img src="/assets/surrealdb-logo.png" alt="SurrealDB Logo" className="h-16" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ServerKit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;