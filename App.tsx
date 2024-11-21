import React, { useState } from 'react';
import { Leaf, Clock, MapPin, Phone, Instagram, Facebook, Twitter, Menu as MenuIcon, X } from 'lucide-react';
import { MenuItem } from './components/MenuItem';

const Navigation = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => (
  <nav className="fixed w-full bg-emerald-950/95 text-white z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-lime-400" />
          <span className="ml-2 text-xl font-semibold">THE HIDEAWAY</span>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            <a href="#home" className="hover:text-lime-400 px-3 py-2 transition-colors">Home</a>
            <a href="#menu" className="hover:text-lime-400 px-3 py-2 transition-colors">Menu</a>
            <a href="#about" className="hover:text-lime-400 px-3 py-2 transition-colors">About</a>
            <button className="bg-lime-400 text-emerald-950 px-4 py-2 rounded-md hover:bg-lime-500 transition-colors font-semibold">
              Reserve Table
            </button>
          </div>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
    
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block hover:text-lime-400 px-3 py-2 transition-colors">Home</a>
          <a href="#menu" className="block hover:text-lime-400 px-3 py-2 transition-colors">Menu</a>
          <a href="#about" className="block hover:text-lime-400 px-3 py-2 transition-colors">About</a>
          <button className="w-full text-left bg-lime-400 text-emerald-950 px-3 py-2 rounded-md hover:bg-lime-500 transition-colors font-semibold">
            Reserve Table
          </button>
        </div>
      </div>
    )}
  </nav>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
            className="w-full h-full object-cover"
            alt="Wild restaurant interior with plants"
          />
          <div className="absolute inset-0 bg-emerald-950 opacity-50"></div>
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">THE HIDEAWAY</h1>
          <p className="text-xl md:text-2xl mb-8">Where nature meets Indian culinary artistry</p>
          <button className="bg-lime-400 text-emerald-950 px-8 py-3 rounded-md text-lg hover:bg-lime-500 transition-colors font-semibold">
            Reserve Your Table
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">Prasanth's hand picked Menu</h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Forest Inspired Mains</h3>
              <MenuItem
                name="Biriyani"
                description=" A fluffy seeraga samba with tamilnadu south indian style"
                price="₹220"
              />
              <MenuItem
                name="chettinadu chicken kolambu"
                description="Traditional erode wild inspired curry with forest spices"
                price="₹165"
              />
              <MenuItem
                name="pollachi naandu kolambu"
                description="A firey and aromatic"
                price="₹120"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800">Desserts</h3>
              <MenuItem
                name="malai kesari"
                description="Wild berry-infused rice pudding with pistachios"
                price="₹145"
              />
              <MenuItem
                name="Gulkand Jamun"
                description="Wild rose preserve-filled dumplings in cardamom syrup"
                price="₹150"
              />
              <MenuItem
                name="gulkand Ice Cream"
                description="Indigenous flower-infused ice cream with honey brittle"
                price="₹99"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                className="rounded-lg shadow-xl"
                alt="Wild ingredients being prepared"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-900">Our Wild Story</h2>
              <p className="text-emerald-700 mb-6">
                GO WILD brings the untamed beauty of Indian forests to your plate. Our expert foragers and 
                innovative chefs work together to create dishes that celebrate wild ingredients and 
                sustainable practices, offering you a truly unique Indian dining adventure.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-lime-500 mr-2" />
                  <span className="text-emerald-700">Wed-Sun: 5pm-11pm</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-lime-500 mr-2" />
                  <span className="text-emerald-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-lime-500 mr-2" />
                  <span className="text-emerald-700">123 D.B. Road, R.S. Puram, Coimbatore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-lime-400" />
                <span className="ml-2 text-xl font-semibold">GO WILD</span>
              </div>
              <p className="text-emerald-300">
                Experience the untamed flavors of Indian forests.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-emerald-300">
                <p>123 D.B. Road</p>
                <p>R.S. Puram, Coimbatore</p>
                <p>Tamil Nadu 641002</p>
                <p>+91 98765 43210</p>
                <p>san@hideaway.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Our Trail</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-300 hover:text-lime-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-emerald-300 hover:text-lime-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-emerald-300 hover:text-lime-400">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-900 mt-8 pt-8 text-center text-emerald-300">
            <p>&copy; 2024 GO WILD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;