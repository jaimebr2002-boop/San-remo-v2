import React, { useState, useEffect, useRef } from 'react';
import { Menu, Star, StarHalf, MapPin, Clock, Phone, X, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center border-b border-primary/20 bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772745119/162786015_215917866734046_6392319333630169053_n_nob51l.jpg" alt="San Remo Logo" className="w-12 h-12 rounded-full object-cover border border-primary/30" />
        <span className="font-script text-3xl text-primary drop-shadow-md hidden sm:block">San Remo</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-text-silver items-center">
        <a className="hover:text-primary transition-colors" href="#">Inicio</a>
        <a className="hover:text-primary transition-colors" href="#sobre-nosotros">Nosotros</a>
        <a className="hover:text-primary transition-colors" href="#carta">Carta</a>
        <a className="hover:text-primary transition-colors" href="#resenas">Reseñas</a>
        <a className="hover:text-primary transition-colors" href="#visitanos">Visítanos</a>
        <a className="hover:text-black transition-colors border border-primary px-4 py-2 hover:bg-primary text-primary" href="#reserva">Reservar</a>
      </div>
      <button className="text-primary md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-primary/20 flex flex-col items-center py-6 gap-6 md:hidden">
          <a className="hover:text-primary transition-colors uppercase tracking-widest text-sm" href="#" onClick={() => setIsOpen(false)}>Inicio</a>
          <a className="hover:text-primary transition-colors uppercase tracking-widest text-sm" href="#sobre-nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a className="hover:text-primary transition-colors uppercase tracking-widest text-sm" href="#carta" onClick={() => setIsOpen(false)}>Carta</a>
          <a className="hover:text-primary transition-colors uppercase tracking-widest text-sm" href="#resenas" onClick={() => setIsOpen(false)}>Reseñas</a>
          <a className="hover:text-primary transition-colors uppercase tracking-widest text-sm" href="#visitanos" onClick={() => setIsOpen(false)}>Visítanos</a>
          <a className="hover:text-black transition-colors border border-primary px-6 py-2 hover:bg-primary text-primary uppercase tracking-widest text-sm" href="#reserva" onClick={() => setIsOpen(false)}>Reservar</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const panels = [
    {
      img: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772747525/640420961_18571933954026310_1320281033417137375_n._kv7dz0.webp",
      alt: "Pasta fresca hecha a mano"
    },
    {
      img: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772747525/612171997_18555581689026310_8907299190280596988_n._atdoy2.webp",
      alt: "Pizza artesanal al horno de leña"
    },
    {
      img: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772747514/524917596_18522153787026310_254558215371811495_n._pncdsm.jpg",
      alt: "Selección de vinos italianos"
    },
    {
      img: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772747515/572361510_18542734357026310_4499356094716283981_n._ynhkik.jpg",
      alt: "Interior elegante del local"
    }
  ];

  return (
    <header className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Interactive Image Accordion Background */}
      <div className="absolute inset-0 flex w-full h-full">
        {panels.map((panel, index) => (
          <div 
            key={index} 
            className="relative h-full flex-1 transition-all duration-800 ease-[cubic-bezier(0.5,0,0.2,1)] hover:flex-[4] overflow-hidden group border-r border-white/10 last:border-r-0"
          >
            <img 
              src={panel.img} 
              alt={panel.alt} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-800"></div>
          </div>
        ))}
      </div>

      {/* Fixed Center Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-wider drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            SAN REMO
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] w-12 md:w-24 bg-primary/80"></span>
            <p className="font-display italic text-xl md:text-3xl text-white font-light tracking-wide drop-shadow-lg">
              Sabores intensos, presentaciones únicas y un servicio pensado para disfrutar
            </p>
            <span className="h-[1px] w-12 md:w-24 bg-primary/80"></span>
          </div>
          
          {/* Buttons need pointer-events-auto to be clickable */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto">
            <a 
              href="#reserva"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary border border-primary text-black hover:bg-transparent hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-semibold min-w-[200px]"
            >
              Reservar Mesa
            </a>
            <a 
              href="#carta"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold min-w-[200px]"
            >
              Explorar Menú
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="bg-surface-dark py-24 relative overflow-hidden" id="sobre-nosotros">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-primary/10 bg-surface-accent hidden lg:block"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary mb-2 block">Nuestra Historia</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Pasión en cada detalle</h2>
            
            <div className="mb-8 p-6 border border-primary/30 bg-background-dark relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-primary"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-primary"></div>
              <h3 className="font-display text-2xl text-primary mb-4 flex items-center gap-2">
                Reconocimiento a la Excelencia ✨🍽
              </h3>
              <p className="text-text-silver leading-relaxed font-light mb-4">
                Nos enorgullece anunciar que hemos sido incluidos en la prestigiosa Guía <span className="text-white font-semibold tracking-wider">MICHELIN</span> 🔴🍷 y galardonados con un <span className="text-[#FFB81C] font-semibold tracking-wider">SOLETE</span> de la Guía Repsol ☀️.
              </p>
              <p className="text-text-silver leading-relaxed font-light mb-4">
                Estos reconocimientos son el fruto de años de dedicación, pasión por la gastronomía y un compromiso inquebrantable con la calidad.
              </p>
              <p className="text-text-silver leading-relaxed font-light">
                Queremos expresar nuestro más sincero agradecimiento a nuestro equipo, a nuestras familias y, muy especialmente, a todos los clientes que han confiado en nosotros y nos han acompañado en este maravilloso viaje culinario.
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/10 pt-4">
                <div className="text-sm uppercase tracking-widest text-text-silver/70">Galardones</div>
                <div className="flex gap-6">
                  <div className="font-display text-lg text-white tracking-widest">MICHELIN</div>
                  <div className="font-display text-lg text-[#FFB81C] tracking-widest">SOLETE REPSOL</div>
                </div>
              </div>
            </div>

          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 border border-primary/30 transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 overflow-hidden">
              <img alt="Plato premium" className="w-full h-full object-cover transition-all duration-700" src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772746150/522635880_18508660534019901_2311861366566616760_n._i0bo7v.webp"/>
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            {/* Repsol Solete Overlay */}
            <div className="absolute bottom-4 left-4 z-20 transform -translate-x-4 translate-y-8">
              <div className="w-24 h-24 bg-[#FFB81C] rounded-full flex flex-col items-center justify-center text-black shadow-2xl border-4 border-white">
                <span className="font-display font-bold text-xl leading-none">Solete</span>
                <span className="text-[9px] font-bold uppercase tracking-widest mt-1">Guía Repsol</span>
              </div>
            </div>
            {/* Michelin Logo Overlay */}
            <div className="absolute bottom-4 right-4 z-20 transform translate-x-8 translate-y-8 shadow-2xl rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772745115/586987958_18548300671026310_3139596496747734042_n_f9nk1v.jpg" alt="Guía Michelin" className="w-24 h-24 object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const menuItems = [
    { name: "Arroz con bogavante y su fumet de carabinero natural", price: "35 €/Pax" },
    { name: "Mollejas de corazón de wagyu, sofritas con ajito y armañac", price: "20 €" },
    { name: "Judiones en caldo de caldereta de lechazo", price: "18 €" },
    { name: "Mousse de queso de villerías y membrillo, supremas de trucha ahumada y vinagreta de manzana y tomate", price: "16,50 €" },
    { name: "Pulpo a la plancha, puré de manzana, pimentón y vinagreta", price: "27 €" },
    { name: "Lomo de lubina a la sal de pesca sostenible con su salsa de las espinas", price: "28 €" },
    { name: "Tartar de calamar fresco, tofe de sus cabezas y aceite de hierbabuena", price: "17 €" },
    { name: "Lomo de Pargo fresco del cantábrico y crema de salsa bilbaína", price: "29 €" },
    { name: "Lomo de atún rojo fresco planchado, ajo blanco y sofrito de tomate de la abuela", price: "24 €" },
    { name: "Shasimi de atún rojo balfegó con salsa de soja y vermut", price: "18 €" },
    { name: "Bacalao de pesca fresca lomo alta cocina en dos texturas", price: "28 €" },
    { name: "Albóndigas de picaña madurada de cárnicas LYO y toffe de ibéricos", price: "24 €" },
    { name: "Paletilla de lechazo churro a baja temperatura (550 gr aprox)", price: "46 €" },
    { name: "Secreto ibérico de bellota, chimichurri de tomate y parmentier", price: "28 €" },
    { name: "Lomo de ciervo, jugo de cacao y vinagreta de naranja y azafrán", price: "28 €" },
    { name: "Costillar ibérico Joselito a baja temperatura", price: "25 €" }
  ];

  const entretenimientos = [
    { name: "Tataki de picaña de wagyu japonés osmotizado (100 gr)", price: "24 €" },
    { name: "Calamares frescos de potera del cantábrico a la andaluza", price: "25 €" },
    { name: "Croquetas de Jamón Joselito cuasi líquidas", price: "2,5 €/ud" },
    { name: "Gnocchi de la nonna en salsa de queso de villerías", price: "15 €" },
    { name: "Gamba roja de Denia a la sal y aceite de oliva y bergamota", price: "5 €/ud" },
    { name: "Tagliatelle fresco salsa carbonara acabado dentro del queso y yema de huevo", price: "17 €" },
    { name: "Carrillera de ternera de la montaña palentina guisada", price: "24 €" },
    { name: "Nuestras bravas del abuelo Isaac (3º puesto campeonato mundial de bravas)", price: "6,5 €" },
    { name: "Anchoas del cantábrico con sus pimientos confitados", price: "25 €" }
  ];

  const vinos = [
    { name: "Ribera crianza Bosque de Matasnos (0,75 cc)", price: "45 €" },
    { name: "Rioja rosado piel de melocotón Alegra de Beronia (0,75 cc)", price: "30 €" },
    { name: "Neros rose Ribera del Arlanza (vino de Palencia)", price: "19 €" },
    { name: "La Viñoa Treixadura (Ribeiro) pequeños productores", price: "24 €" },
    { name: "Cava Anna de Codorníu Ice Rose (0,75 cc)", price: "30 €" },
    { name: "Champagne Devaux Reims (0,75 cc)", price: "48 €" }
  ];

  return (
    <section className="bg-background-dark py-24 relative" id="carta">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-primary mb-2 block">CARTA DE MERCADO</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6 tracking-widest uppercase">Productos de Temporada</h2>
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-8">Marzo 2026</p>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {menuItems.map((item, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-4 hover:border-primary/50 transition-colors">
                <h4 className="font-display text-lg text-white group-hover:text-primary transition-colors pr-4 leading-snug mb-2 sm:mb-0 max-w-2xl">{item.name}</h4>
                <div className="flex-grow border-b border-dotted border-white/20 hidden sm:block mx-4 mb-2"></div>
                <span className="font-display text-primary text-xl whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 flex items-center justify-center gap-4">
              <span className="text-primary">🔥</span> ENTRETENIMIENTOS <span className="text-primary">🔥</span>
            </h3>
            <p className="text-text-silver tracking-widest text-sm uppercase">Nuestra Cocina Alborotada</p>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {entretenimientos.map((item, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-4 hover:border-primary/50 transition-colors">
                <h4 className="font-display text-lg text-white group-hover:text-primary transition-colors pr-4 leading-snug mb-2 sm:mb-0 max-w-2xl">{item.name}</h4>
                <div className="flex-grow border-b border-dotted border-white/20 hidden sm:block mx-4 mb-2"></div>
                <span className="font-display text-primary text-xl whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 bg-surface-dark p-8 border border-primary/20"
          >
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 flex items-center justify-center gap-4">
              <span className="text-primary">🍷</span> RECOMENDACIÓN DE VINOS <span className="text-primary">🍷</span>
            </h3>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-6 mb-10"></div>
            
            <div className="space-y-6 text-left">
              {vinos.map((item, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-4 hover:border-primary/50 transition-colors">
                  <h4 className="font-display text-lg text-white group-hover:text-primary transition-colors pr-4 leading-snug mb-2 sm:mb-0 max-w-2xl">{item.name}</h4>
                  <div className="flex-grow border-b border-dotted border-white/20 hidden sm:block mx-4 mb-2"></div>
                  <span className="font-display text-primary text-xl whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Carlos M.", text: "Una experiencia gastronómica de 10. La carne a la brasa es espectacular y el servicio inmejorable. Merecidísimo el reconocimiento Michelin.", rating: 5 },
  { name: "Laura G.", text: "El menú degustación fue un viaje de sabores. Cada plato estaba perfectamente ejecutado. El ambiente es elegante y acogedor.", rating: 5 },
  { name: "Javier R.", text: "Sin duda el mejor restaurante de Palencia. El trato del personal te hace sentir como en casa, y la calidad del producto es premium.", rating: 5 },
  { name: "Ana P.", text: "Fuimos a celebrar nuestro aniversario y fue perfecto. El pulpo a la brasa es de otro mundo. Repetiremos seguro.", rating: 5 },
  { name: "Miguel A.", text: "Excelente carta de vinos que marida a la perfección con sus platos. El solomillo se deshacía en la boca. Un lujo.", rating: 5 },
  { name: "Elena S.", text: "Cuidan cada detalle al máximo. Desde la presentación de los platos hasta la atención de los camareros. Una experiencia de estrella.", rating: 5 },
  { name: "David L.", text: "Las croquetas de txangurro son obligatorias. Todo lo que probamos estaba delicioso. Relación calidad-precio excelente para el nivel que ofrecen.", rating: 5 },
  { name: "Carmen T.", text: "Un rincón gastronómico que no te puedes perder. La fusión de sabores tradicionales con toques modernos es brillante.", rating: 5 },
  { name: "Roberto F.", text: "El chuletón madurado es una locura. Se nota la calidad de la materia prima en cada bocado. Servicio de 10.", rating: 5 },
  { name: "Silvia N.", text: "Me encantó la atmósfera del local. Muy íntimo y elegante. La comida superó nuestras expectativas con creces.", rating: 5 },
  { name: "Pablo V.", text: "Una joya en Palencia. El bacalao confitado estaba en su punto perfecto. Se nota la pasión que le ponen a la cocina.", rating: 5 },
  { name: "Marta C.", text: "Atención personalizada y platos que sorprenden. El postre de chocolate fue el broche de oro perfecto para una cena inolvidable.", rating: 5 },
  { name: "Diego H.", text: "Todo perfecto. La fianza para reservar da seguridad y el trato al llegar es exquisito. Comida de altísimo nivel.", rating: 5 },
  { name: "Lucía B.", text: "Sabores puros y texturas increíbles. El jamón ibérico de bellota es de una calidad superior. Muy recomendable.", rating: 5 },
  { name: "Andrés J.", text: "Una experiencia culinaria que justifica su fama. Cada plato cuenta una historia. Volveremos para probar el resto de la carta.", rating: 5 }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(REVIEWS.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentReviews = REVIEWS.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <section className="bg-surface-dark py-24 border-y border-white/5" id="resenas">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-primary mb-2 block">Testimonios</span>
          <h2 className="font-display text-4xl md:text-5xl text-white">Lo que dicen de nosotros</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {currentReviews.map((review, idx) => (
              <div key={idx} className="bg-background-dark p-10 border border-white/5 relative group hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
                <span className="absolute top-6 right-6 text-6xl text-surface-accent font-serif leading-none font-bold select-none z-0">"</span>
                <div className="flex gap-1 mb-6 text-primary relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-text-silver font-light italic mb-6 relative z-10 leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 relative z-10 mt-auto">
                  <div className="w-10 h-10 bg-surface-accent rounded-full flex items-center justify-center text-primary font-display font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-white font-display text-lg">{review.name}</h5>
                    <span className="text-xs text-text-silver/50 uppercase tracking-wider">Cliente</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-primary w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a 
            href="https://www.google.com/maps/place/Restaurante+San+Remo/@42.0132127,-4.5212037,19z/data=!4m17!1m8!3m7!1s0xd47b04b4b13b69d:0x818f9ab52e0364f8!2sRestaurante+San+Remo!8m2!3d42.0129375!4d-4.5213914!10e9!16s%2Fg%2F1tlqr92b!3m7!1s0xd47b04b4b13b69d:0x818f9ab52e0364f8!8m2!3d42.0129375!4d-4.5213914!9m1!1b1!16s%2Fg%2F1tlqr92b?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
          >
            Deja tu reseña aquí
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-background-dark py-0" id="visitanos">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] lg:h-auto bg-[#1a1a1a]"
        >
          <iframe 
            allowFullScreen 
            className="w-full h-full opacity-80" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.856988894982!2d-4.5213914!3d42.0129375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47b04b4b13b69d%3A0x818f9ab52e0364f8!2sRestaurante%20San%20Remo!5e0!3m2!1ses!2ses!4v1684852391000!5m2!1ses!2ses" 
            style={{ border: 0 }}>
          </iframe>
          <div className="absolute inset-0 pointer-events-none"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-24 flex flex-col justify-center bg-surface-dark border-l border-white/5"
        >
          <span className="font-script text-3xl text-primary mb-4 block">Ubicación</span>
          <h2 className="font-display text-4xl text-white mb-10">Encuéntranos</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <MapPin className="text-primary mt-1 w-6 h-6" />
              <div>
                <h4 className="text-white font-display text-xl mb-2">Dirección</h4>
                <p className="text-text-silver font-light">Av. Brasilia, 2<br/>34004 Palencia</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Clock className="text-primary mt-1 w-6 h-6" />
              <div>
                <h4 className="text-white font-display text-xl mb-2">Horario</h4>
                <div className="text-text-silver font-light grid grid-cols-2 gap-x-8 gap-y-2">
                  <span>Lunes:</span> <span className="text-right">Cerrado</span>
                  <span>Mar - Vie:</span> <span className="text-right">9:30 - 23:00</span>
                  <span>Sáb - Dom:</span> <span className="text-right">9:30 - 23:30</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Phone className="text-primary mt-1 w-6 h-6" />
              <div>
                <h4 className="text-white font-display text-xl mb-2">Contacto</h4>
                <p className="text-text-silver font-light hover:text-primary transition-colors cursor-pointer">979 71 21 63</p>
                <p className="text-text-silver font-light hover:text-primary transition-colors cursor-pointer">reservas@sanremo.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '14:00',
    guests: '2'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la reserva');
      }

      alert('¡Reserva confirmada! Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '14:00',
        guests: '2'
      });
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-surface-accent py-24 relative" id="reserva">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto border border-primary/30 bg-background-dark p-8 md:p-16 relative shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary"></div>
          <div className="text-center mb-10">
            <span className="font-script text-3xl text-primary mb-2 block">Haz tu Reserva</span>
            <h2 className="font-display text-4xl text-white mb-4">Asegura tu Mesa</h2>
            <p className="text-text-silver text-sm italic">Rellena el formulario para solicitar tu reserva.</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 text-white text-center rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Nombre</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="Tu nombre completo" type="text"/>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Teléfono</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="Teléfono" type="tel"/>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Email</label>
                <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="correo@ejemplo.com" type="email"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Fecha</label>
                <input required name="date" value={formData.date} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none [color-scheme:dark]" type="date"/>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Hora</label>
                <select name="time" value={formData.time} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors outline-none">
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-silver mb-2">Personas</label>
                <select name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-surface-dark border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-colors outline-none">
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                  <option value="6">6 Personas</option>
                  <option value="7+">7+ Personas</option>
                </select>
              </div>
            </div>
            <div className="pt-8 text-center">
              <button disabled={loading} className="bg-primary text-black px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 w-full md:w-auto cursor-pointer disabled:opacity-50" type="submit">
                {loading ? 'Procesando...' : 'Reservar Mesa'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-primary/20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-primary"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-script text-6xl text-primary mb-8 drop-shadow-sm">San Remo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <MapPin className="text-primary w-6 h-6 mb-3" />
            <h4 className="text-white font-display text-lg mb-2">Dirección</h4>
            <p className="text-text-silver font-light text-sm">Av. Brasilia, 2<br/>34004 Palencia</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Clock className="text-primary w-6 h-6 mb-3" />
            <h4 className="text-white font-display text-lg mb-2">Horario</h4>
            <div className="text-text-silver font-light text-sm w-full max-w-[200px]">
              <div className="flex justify-between"><span>Lunes:</span> <span>Cerrado</span></div>
              <div className="flex justify-between"><span>Mar - Vie:</span> <span>9:30 - 23:00</span></div>
              <div className="flex justify-between"><span>Sáb - Dom:</span> <span>9:30 - 23:30</span></div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Phone className="text-primary w-6 h-6 mb-3" />
            <h4 className="text-white font-display text-lg mb-2">Contacto</h4>
            <p className="text-text-silver font-light text-sm">979 71 21 63</p>
            <p className="text-text-silver font-light text-sm">reservas@sanremo.com</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a className="group flex items-center gap-2 text-text-silver hover:text-primary transition-colors font-display text-lg tracking-wide" href="https://www.instagram.com/sanremopalencia/" target="_blank" rel="noopener noreferrer">
            <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </span>
          </a>
          <a className="group flex items-center gap-2 text-text-silver hover:text-primary transition-colors font-display text-lg tracking-wide" href="https://www.facebook.com/p/Restaurante-San-Remo-100049475032868/?locale=es_ES" target="_blank" rel="noopener noreferrer">
            <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </span>
          </a>
        </div>
        <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-8"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-500 text-xs font-light uppercase tracking-[0.2em]">
          <p>© 2026 Restaurante San Remo. Todos los derechos reservados.</p>
          <span className="hidden md:block text-primary/30">•</span>
          <a className="hover:text-primary transition-colors" href="#">Aviso Legal</a>
          <span className="hidden md:block text-primary/30">•</span>
          <a className="hover:text-primary transition-colors" href="#">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-text-silver font-body antialiased">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Testimonials />
      <Location />
      <Reservation />
      <Footer />
    </div>
  );
}
