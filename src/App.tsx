import { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  ChevronRight,
  Star,
  Heart,
  Leaf,
  Award,
  ArrowRight,
} from 'lucide-react';

/* ─── Data ─── */
const flavors = [
  {
    name: 'Pistacchio Siciliano',
    desc: 'Pistache de Bronte, tostado a la perfección',
    tag: 'Clásico',
    color: 'bg-olive/15',
  },
  {
    name: 'Stracciatella',
    desc: 'Crema de vainilla con virutas de chocolate belga',
    tag: 'Favorito',
    color: 'bg-cream',
  },
  {
    name: 'Amarena',
    desc: 'Cereza amarena sobre base de yogur griego',
    tag: 'Estacional',
    color: 'bg-terracotta/10',
  },
  {
    name: 'Caffè Espresso',
    desc: 'Café arábica de Chiapas, intenso y cremoso',
    tag: 'Nuevo',
    color: 'bg-espresso/10',
  },
  {
    name: 'Limone di Sorrento',
    desc: 'Limón de Sorrento con albahaca fresca',
    tag: 'Refrescante',
    color: 'bg-gold/15',
  },
  {
    name: 'Cioccolato Fondente',
    desc: 'Chocolate oscuro 70% cacao de Tabasco',
    tag: 'Clásico',
    color: 'bg-espresso/15',
  },
];

const locations = [
  {
    name: 'Roma Norte',
    address: 'Álvaro Obregón 130, Roma Norte, CDMX',
    hours: 'Lun – Dom: 12:00 – 22:00',
    phone: '+52 55 1234 5678',
  },
  {
    name: 'Polanco',
    address: 'Masaryk 360, Polanco, CDMX',
    hours: 'Lun – Dom: 11:00 – 23:00',
    phone: '+52 55 8765 4321',
  },
  {
    name: 'Coyoacán',
    address: 'Av. Miguel Ángel de Quevedo 250, Coyoacán',
    hours: 'Mar – Dom: 13:00 – 21:00',
    phone: '+52 55 2468 1357',
  },
];

const testimonials = [
  {
    text: 'El mejor gelato que he probado fuera de Italia. La textura es perfecta, cremosa pero ligera.',
    author: 'Mariana G.',
    role: 'Foodie CDMX',
  },
  {
    text: 'Cada sabor cuenta una historia. El pistacchio es una obra de arte. Vuelvo cada semana.',
    author: 'Carlos R.',
    role: 'Chef ejecutivo',
  },
  {
    text: 'Ambiente encantador, servicio impecable y un gelato que te transporta a las calles de Roma.',
    author: 'Sofía L.',
    role: 'Estudiante de gastronomía',
  },
];

/* ─── Components ─── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-2xl font-semibold tracking-wide text-espresso hover:text-terracotta transition-colors"
        >
          Via Veneto
        </button>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Nuestros Sabores', id: 'sabores' },
            { label: 'Nosotros', id: 'nosotros' },
            { label: 'Ubicaciones', id: 'ubicaciones' },
            { label: 'Contacto', id: 'contacto' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-espresso/80 hover:text-terracotta transition-colors tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="https://www.instagram.com/via.veneto.mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-espresso/80 hover:text-terracotta transition-colors"
        >
          <Instagram size={18} />
          <span className="hidden sm:inline">@via.veneto.mx</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Artisanal gelato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Artisanal Gelato — México
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-medium leading-[1.1] mb-6 animate-fade-up">
          Via Veneto
        </h1>
        <p className="text-cream/80 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Gelato artesanal hecho a mano con ingredientes naturales y recetas
          que honran la tradición italiana.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#sabores"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('sabores')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-terracotta/20"
          >
            Descubre nuestros sabores
            <ArrowRight size={16} />
          </a>
          <a
            href="#ubicaciones"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('ubicaciones')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
          >
            <MapPin size={16} />
            Encuéntranos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sabores" ref={sectionRef} className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-terracotta text-sm tracking-[0.25em] uppercase mb-3 font-medium">
            Nuestra Carta
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-medium mb-4">
            Sabores de Temporada
          </h2>
          <p className="text-espresso/60 max-w-lg mx-auto leading-relaxed">
            Rotamos nuestros sabores según la temporada y la disponibilidad de
            ingredientes frescos de productores locales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((flavor, i) => (
            <div
              key={flavor.name}
              onClick={() => setActive(i)}
              className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 border ${
                active === i
                  ? 'border-terracotta/40 shadow-lg shadow-terracotta/5 bg-white'
                  : 'border-transparent hover:border-sand bg-white/50 hover:bg-white hover:shadow-md'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full ${
                    flavor.tag === 'Favorito'
                      ? 'bg-terracotta/10 text-terracotta'
                      : flavor.tag === 'Nuevo'
                      ? 'bg-olive/10 text-olive'
                      : 'bg-sand/60 text-espresso/60'
                  }`}
                >
                  {flavor.tag}
                </span>
                <Heart
                  size={18}
                  className={`transition-colors ${
                    active === i
                      ? 'text-terracotta fill-terracotta'
                      : 'text-espresso/20 group-hover:text-terracotta/40'
                  }`}
                />
              </div>
              <h3 className="font-serif text-xl text-espresso font-medium mb-2 group-hover:text-terracotta transition-colors">
                {flavor.name}
              </h3>
              <p className="text-espresso/50 text-sm leading-relaxed">
                {flavor.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Leaf,
      title: 'Ingredientes Naturales',
      desc: 'Sin colorantes ni sabores artificiales. Solo fruta fresca, leche de granja y cacao de comercio justo.',
    },
    {
      icon: Award,
      title: 'Tradición Italiana',
      desc: 'Nuestras recetas provienen de maestros gelateros de Sicilia, perfeccionadas durante generaciones.',
    },
    {
      icon: Heart,
      title: 'Hecho con Amor',
      desc: 'Cada batch de gelato se hace a mano en pequeñas cantidades para garantizar la máxima frescura.',
    },
  ];

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 md:py-32 px-6 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-terracotta text-sm tracking-[0.25em] uppercase mb-3 font-medium">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso font-medium mb-6 leading-tight">
              De Roma a México, <br />
              <span className="italic text-terracotta">con amor</span>
            </h2>
            <p className="text-espresso/60 leading-relaxed mb-6">
              Via Veneto nació de una obsesión: recrear la experiencia de caminar
              por las calles empedradas de Roma y detenerse en una gelatería
              familiar. En 2019, trajimos esa pasión a la Ciudad de México,
              combinando técnicas tradicionales italianas con los mejores
              ingredientes mexicanos.
            </p>
            <p className="text-espresso/60 leading-relaxed mb-8">
              Cada sabor cuenta una historia: el pistacchio de Bronte, el café
              arábica de Chiapas, el chocolate de Tabasco. Creemos que el gelato
              no es solo un postre, es un viaje sensorial.
            </p>
            <a
              href="#ubicaciones"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('ubicaciones')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-terracotta font-medium hover:text-terracotta-dark transition-colors group"
            >
              Visítanos
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisanal gelato preparation"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className="bg-cream rounded-xl p-5 text-center hover:shadow-md transition-shadow duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <val.icon
                    size={24}
                    className="mx-auto mb-3 text-terracotta"
                  />
                  <h4 className="font-medium text-espresso text-sm mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs text-espresso/50 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-terracotta text-sm tracking-[0.25em] uppercase mb-3 font-medium">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-medium">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-parchment rounded-2xl p-8 relative transition-all duration-700 hover:shadow-lg ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="text-terracotta/20 text-6xl font-serif absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              <p className="text-espresso/70 leading-relaxed mb-6 relative z-10 pt-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-serif font-medium">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-medium text-espresso text-sm">{t.author}</p>
                  <p className="text-xs text-espresso/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ubicaciones" ref={sectionRef} className="py-24 md:py-32 px-6 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-terracotta text-sm tracking-[0.25em] uppercase mb-3 font-medium">
            Visítanos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-medium mb-4">
            Nuestras Tiendas
          </h2>
          <p className="text-espresso/60 max-w-lg mx-auto leading-relaxed">
            Tres ubicaciones en la Ciudad de México, cada una con su propio
            carácter pero la misma pasión por el gelato artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="h-48 bg-espresso/5 relative overflow-hidden">
                <img
                  src={[
                    'https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=600',
                    'https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=600',
                    'https://images.pexels.com/photos/225364/pexels-photo-225364.jpeg?auto=compress&cs=tinysrgb&w=600',
                  ][i]}
                  alt={`Tienda ${loc.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-espresso">{loc.name}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-terracotta mt-0.5 shrink-0" />
                  <p className="text-sm text-espresso/70 leading-relaxed">{loc.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-terracotta mt-0.5 shrink-0" />
                  <p className="text-sm text-espresso/70">{loc.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-terracotta mt-0.5 shrink-0" />
                  <p className="text-sm text-espresso/70">{loc.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" ref={sectionRef} className="py-24 md:py-32 px-6 bg-espresso">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-light text-sm tracking-[0.25em] uppercase mb-3 font-medium">
            Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-6">
            ¿Quieres algo especial?
          </h2>
          <p className="text-cream/60 max-w-lg mx-auto leading-relaxed mb-10">
            Ofrecemos catering para eventos, gelato personalizado para bodas y
            colaboraciones con marcas. Escríbenos y hagamos algo delicioso
            juntos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:hello@viaveneto.mx"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
            >
              hello@viaveneto.mx
            </a>
            <a
              href="https://www.instagram.com/via.veneto.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/20 hover:border-cream/40 text-cream px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Instagram size={18} />
              Síguenos en Instagram
            </a>
          </div>

          <div className="border-t border-cream/10 pt-10">
            <p className="font-serif text-2xl text-cream/90 mb-2">Via Veneto</p>
            <p className="text-cream/40 text-sm">
              Artisanal Gelato — Hecho a mano en México
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso border-t border-cream/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs">
          © {new Date().getFullYear()} Via Veneto. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/via.veneto.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-cream/60 transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <Flavors />
      <About />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}
