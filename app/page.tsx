"use client";

export const dynamic = "force-dynamic";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Hotel,
  MapPin,
  Phone,
  Clock,
  Coins,
  Utensils,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  Sun,
  Moon,
  ArrowRight,
  X,
  Briefcase,
  Globe,
  Zap,
  Award,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Gem,
} from "lucide-react";

// --- DATOS DE VIDEO ---
const videoData = [
  {
    id: "vid1",
    url: "https://www.dropbox.com/scl/fi/6atn25qrqy402w13aymvv/C-psula-01.mp4?rlkey=pclpkdf4fo0s6ez4gg9kqsaf5&st=w8vdyhcz&raw=1",
    title: "Visión Corporativa",
  },
  {
    id: "vid2",
    url: "https://www.dropbox.com/scl/fi/qro7v3eattjpjysvrmmkv/C-psula-02.mp4?rlkey=5skryum9mut94nka76jgsm1at&st=g0drah68&raw=1",
    title: "Desarrollo Inmobiliario",
  },
  {
    id: "vid3",
    url: "https://www.dropbox.com/scl/fi/vojt5iwni39wvsl3x4kes/C-psula-03.mp4?rlkey=32qzbrjfedper1ccwnjytzqh8&st=6sv9cq7j&raw=1",
    title: "Experiencia Hotelera",
  },
  {
    id: "vid4",
    url: "https://www.dropbox.com/scl/fi/it80w1evzx84s6bj3vykf/C-psula-04.mp4?rlkey=5p350s48z91zss5vdtqb24zly&st=9135d8fn&raw=1",
    title: "Crecimiento Humano",
  },
  {
    id: "vid5",
    url: "https://www.dropbox.com/scl/fi/njpwbe6qrddgbieacgg7a/C-psula-05.mp4?rlkey=4i3wsg1ijkdtpt8bak0i5zxzb&st=5fxyqxv4&raw=1",
    title: "Inversiones",
  },
  {
    id: "vid6",
    url: "https://www.dropbox.com/scl/fi/hu3b95v2gsw43hpxxb6dr/C-psula-06.mp4?rlkey=6wmbkd7dueuekjcaqvjrpd6jj&st=z9wqi4ju&raw=1",
    title: "Legado",
  },
];

// --- DATOS DE IMÁGENES (GALERÍA INFERIOR) ---
const heroImages = [
  "/01.jpeg",
  "/02.jpeg",
  "/03.jpeg",
  "/04.jpeg",
  "/05.jpeg",
  "/06.jpeg",
  "/07.jpeg",
  "/08.jpeg",
];

export default function CorporacionChoquehuancaFinal() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showCEO, setShowCEO] = useState(false);

  // Estados Video Principal
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  // Estado Modal Imagen
  const [selectedHeroImage, setSelectedHeroImage] = useState<string | null>(
    null,
  );

  // Lógica del carrusel
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoData.length);
  };
  const prevVideo = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videoData.length) % videoData.length,
    );
  };

  // --- DATOS DE SERVICIOS ---
  const servicios = [
    {
      id: "hotel",
      icon: <Hotel size={32} />,
      title: "Hospedaje Hotelero de Calidad",
      img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&w=800",
      short: "Confort y ubicación estratégica en la zona 16 de Julio.",
      long: "Ofrecemos servicios de hospedaje hotelero de alta calidad en la zona 16 de Julio, una ubicación estratégica y dinámica. Nuestros hoteles están pensados para Viajeros nacionales e internacionales y Personas que valoran comodidad, seguridad. 👉 Más que hospedaje, brindamos tranquilidad, descanso y una experiencia que invita a volver.",
    },
    {
      id: "const",
      icon: <Building2 size={32} />,
      title: "Constructora & Desarrollo",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800",
      short: "Casas y condominios de lujo, accesibles y bien pensados.",
      long: "Empresa especializada en el desarrollo de: Casas modernas, Condominios de lujo y Proyectos funcionales. Enfoque: Diseño inteligente, Materiales de calidad, Precios competitivos y accesibles. 👉 Construimos espacios donde las familias crecen y los sueños toman forma.",
    },
    {
      id: "gym",
      icon: <Dumbbell size={32} />,
      title: "Espacio Deportivo y Bienestar",
      img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&w=800",
      short: "Salud, disciplina y hábitos que transforman vidas.",
      long: "Fomentamos salud física, hábitos positivos e impulsamos la disciplina integral. Creemos que el éxito comienza con el cuerpo y la mente en equilibrio. 👉 Invertir en salud es invertir en productividad, energía y calidad de vida.",
    },
    {
      id: "inmo",
      icon: <Gem size={32} />,
      title: "Inmobiliaria Premium",
      img: "https://images.pexels.com/photos/1591544/pexels-photo-1591544.jpeg?auto=compress&w=800",
      short: "Propiedades de alto nivel para ejecutivos y empresarios.",
      long: "Gestión de propiedades de lujo para Ejecutivos, Empresarios, Políticos e Inversionistas. Ofrecemos Asesoría personalizada, Confidencialidad y Activos que generan prestigio. 👉 No vendemos solo propiedades, facilitamos decisiones inteligentes de inversión.",
    },
    {
      id: "coach",
      icon: <GraduationCap size={32} />,
      title: "Coaching y Desarrollo Humano",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800",
      short: "Personas fuertes crean empresas fuertes.",
      long: "Programas de coaching nacional e internacional usando PNL (Programación Neurolingüística) y Liderazgo Estratégico. Objetivo: Formar personas optimistas, elevar el nivel de conciencia y desarrollar mentalidad ganadora. 👉 Cuando la mente cambia, la vida cambia.",
    },
    {
      id: "oro",
      icon: <Coins size={32} />,
      title: "Inversión en Oro y Capital",
      img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=compress&w=800",
      short: "Protección patrimonial y activos refugio.",
      long: "Respaldo sólido para el capital. Compra y venta de oro físico y financiero. Objetivo: Proteger el capital, conservar su valor y brindar estabilidad frente a la volatilidad económica actual. Abierto al público general.",
    },
  ];

  const textColor = isDarkMode ? "text-white" : "text-zinc-900";
  const subTextColor = isDarkMode ? "text-white/60" : "text-zinc-600";
  const bgColor = isDarkMode ? "bg-[#050505]" : "bg-white";

  return (
    <div
      className={`${bgColor} ${textColor} transition-colors duration-500 min-h-screen font-sans`}
    >
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md border-b ${
          isDarkMode ? "border-white/5" : "border-black/10"
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src="logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain rounded-lg shadow-md border border-[#BF953F]/30"
          />
          <div className="flex flex-col">
            <span className="font-black uppercase tracking-tighter text-xl leading-none">
              Corporación
            </span>
            <span className="font-bold text-[#BF953F] text-[10px] uppercase tracking-[0.3em]">
              Choquehuanca
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-full border transition-all ${
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10 text-black"
          }`}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-[#BF953F]" />
          ) : (
            <Moon size={20} />
          )}
        </button>
      </nav>

      {/* --- HERO SECTION MODIFICADA --- */}
      <section className="pt-32 pb-12 px-6">
        {/* 1. VIDEO CENTRAL ARRIBA (AGRANDADO) */}
        {/* max-w aumentamos a 1600px o 'max-w-[90%]' para que sea grande */}
        <div className="max-w-[1600px] mx-auto mb-20">
          {" "}
          {/* AUMENTÉ EL MARGIN BOTTOM A 20 PARA SEPARAR */}
          <div
            className={`w-full aspect-video md:aspect-[21/9] relative overflow-hidden rounded-[3rem] border shadow-2xl group ${
              isDarkMode
                ? "bg-zinc-900 border-white/10"
                : "bg-zinc-100 border-black/5"
            }`}
          >
            {/* Etiqueta */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
              <PlayCircle className="text-[#BF953F]" size={18} />
              <span className="text-white text-sm font-bold uppercase tracking-wider">
                Presentación Oficial
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
                onClick={() => setSelectedVideo(videoData[currentVideoIndex])}
              >
                <video
                  src={videoData[currentVideoIndex].url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[1.5s] cursor-pointer"
                />
                {/* Overlay Título */}
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-[#BF953F] text-sm font-black uppercase tracking-widest mb-2">
                    Cápsula {currentVideoIndex + 1}/{videoData.length}
                  </p>
                  <h3 className="text-white text-4xl md:text-6xl font-black italic uppercase leading-none">
                    {videoData[currentVideoIndex].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botones de Navegación */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevVideo();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/30 hover:bg-[#BF953F] text-white transition-all backdrop-blur-sm border border-white/10"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextVideo();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/30 hover:bg-[#BF953F] text-white transition-all backdrop-blur-sm border border-white/10"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* 2. IMÁGENES DEBAJO (GALERÍA CLICKEABLE) */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 px-4 opacity-60">
            <ImageIcon className="text-[#BF953F]" size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">
              Galería Corporativa
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedHeroImage(img)}
                className={`aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer relative group border shadow-lg ${isDarkMode ? "border-white/10" : "border-black/5"}`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Gallery"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 bg-black/60 p-2 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="text-[#BF953F]" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CEO SECTION --- */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setShowCEO(true)}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-[#BF953F] cursor-pointer group shadow-2xl"
            >
              <img
                src="/presentacion.jpeg"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="CEO"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-4xl font-black uppercase leading-none italic">
                  Alvaro Choquehuanca
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#BF953F] font-black uppercase text-xs tracking-widest bg-black/50 p-2 rounded-lg backdrop-blur-md">
                  <Award size={16} /> Ver Recorrido Profesional
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-5xl font-black uppercase italic leading-none">
              Historia de la Corporación
            </h2>
            <div
              className={`space-y-6 text-xl font-light leading-relaxed ${subTextColor}`}
            >
              <p>
                Hace más de <b className="text-[#BF953F]">15 años</b>, lo que
                hoy es la Corporación Choquehuanca nació como un sueño decidido:
                crear un negocio con visión de expansión y legado.
              </p>
              <p>
                Todo comenzó con una{" "}
                <b className={textColor}>cancha deportiva</b>, un espacio de
                encuentro, disciplina y liderazgo. Hoy, consolidamos un Holding
                que centraliza la gestión y potencia cada empresa.
              </p>
              <div
                className={`p-6 border-l-4 border-[#BF953F] ${isDarkMode ? "bg-white/5" : "bg-zinc-50"}`}
              >
                <p className="italic font-medium">
                  "No construimos solo empresas. Construimos sistemas, líderes y
                  legado. Visión, expansión, disciplina y propósito con raíces
                  en Bolivia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- UNIDADES ESTRATÉGICAS --- */}
      <section
        className={`py-24 px-6 ${isDarkMode ? "bg-white/5" : "bg-zinc-100"}`}
      >
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-4xl font-black uppercase italic mb-12 text-center">
            Unidades Estratégicas y Servicios Adicionales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HistoryCard
              icon={<Zap className="text-[#BF953F]" />}
              title="Cámara Inmobiliaria LP"
              desc="Fuimos fundadores, contribuyendo al orden, formalización y crecimiento del sector inmobiliario regional."
            />
            <HistoryCard
              icon={<Utensils className="text-[#BF953F]" />}
              title="Ganadería Estratégica"
              desc="Comercio de carne de alta calidad y alianzas gastronómicas, cerrando el ciclo productivo con eficiencia."
            />
            <HistoryCard
              icon={<Briefcase className="text-[#BF953F]" />}
              title="Holding Empresarial"
              desc="Centralización de procesos para optimizar y potenciar cada una de las unidades de negocio."
            />
            <HistoryCard
              icon={<Coins className="text-[#BF953F]" />}
              title="Inversiones en Divisas"
              desc="Operaciones inteligentes para diversificar riesgos y fortalecer la estabilidad financiera de nuestros socios."
            />
            <HistoryCard
              icon={<ShieldCheck className="text-[#BF953F]" />}
              title="Protección Patrimonial"
              desc="Estrategias de valor refugio diseñadas para proteger activos contra la devaluación."
            />
            <HistoryCard
              icon={<Globe className="text-[#BF953F]" />}
              title="Expansión Humana"
              desc="Programas enfocados en mentalidad estratégica y liderazgo consciente basados en PNL."
            />
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase italic">
            Nuestros Servicios
          </h2>
          <p className="text-[#BF953F] font-bold tracking-[0.4em] uppercase text-xs mt-4">
            Calidad, Visión Empresarial y Desarrollo Humano
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(s)}
              className={`group rounded-[3rem] overflow-hidden border cursor-pointer transition-all shadow-xl ${
                isDarkMode
                  ? "bg-zinc-900 border-white/5"
                  : "bg-white border-black/5"
              }`}
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={s.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 p-3 bg-black/50 backdrop-blur-md rounded-2xl text-[#BF953F]">
                  {s.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-black uppercase mb-4 italic">
                  {s.title}
                </h3>
                <p className={`text-sm mb-6 ${subTextColor}`}>{s.short}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#BF953F]">
                  Ver más información <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-5xl font-black uppercase italic">Ubicación</h2>
            <div className="space-y-8">
              <ContactItem
                icon={<MapPin />}
                label="Sede Central"
                text="Calle Yanacocha Edif. Arco Iris, Piso 8, Ofi. 806"
                isDark={isDarkMode}
              />
              <ContactItem
                icon={<Phone />}
                label="Teléfonos"
                text="2486947 – Cel: 69819870"
                isDark={isDarkMode}
              />
              <ContactItem
                icon={<Clock />}
                label="Atención"
                text="7:30 AM a 6:00 PM"
                isDark={isDarkMode}
              />
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] rounded-[3rem] overflow-hidden border border-black/10 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.9110292780654!2d-68.13620958!3d-16.4962295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e12e79603%3A0xc0953d39579730f9!2sC.%20Yanacocha%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1715456234567!5m2!1ses!2sbo"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={`py-24 text-center border-t ${isDarkMode ? "border-white/5" : "border-black/5"}`}
      >
        <img
          src="logo.png"
          alt="Logo"
          className="w-20 h-20 mx-auto mb-8 rounded-xl"
        />
        <p className="text-[10px] uppercase tracking-[1.5em] opacity-40 italic mb-4">
          Corporación Choquehuanca
        </p>
        <p className="text-xs font-black uppercase text-[#BF953F] mb-2">
          Atte. Alvaro Choquehuanca Apaza
        </p>
        <p className={`text-[10px] ${subTextColor}`}>
          © 2026 - Piensa en Grande, Piensa en Expansión.
        </p>
      </footer>

      {/* --- MODALES --- */}
      <AnimatePresence>
        {/* 1. MODAL DE SERVICIOS */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className={`p-10 md:p-16 rounded-[3rem] max-w-3xl w-full relative overflow-hidden shadow-2xl ${
                isDarkMode
                  ? "bg-zinc-900 border border-[#BF953F]/30"
                  : "bg-white border-2 border-[#BF953F]"
              }`}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-[#BF953F]"
              >
                <X size={32} />
              </button>
              <div className="text-[#BF953F] mb-6">{selectedService.icon}</div>
              <h3
                className={`text-4xl font-black uppercase italic mb-6 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                {selectedService.title}
              </h3>
              <p
                className={`text-xl font-light italic leading-relaxed mb-10 ${isDarkMode ? "text-white/80" : "text-zinc-800"}`}
              >
                {selectedService.long}
              </p>
              <div
                className={`p-6 rounded-2xl ${isDarkMode ? "bg-white/5" : "bg-zinc-100"}`}
              >
                <p className="text-xs font-black uppercase text-[#BF953F]">
                  Compromiso Choquehuanca
                </p>
                <p
                  className={`text-sm mt-2 font-medium italic ${isDarkMode ? "text-white/50" : "text-zinc-600"}`}
                >
                  Servicio orientado a personas que buscan excelencia, seguridad
                  y crecimiento sostenido.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 2. MODAL DEL CEO (CONTENIDO RESTAURADO COMPLETO) */}
        {showCEO && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className={`p-10 md:p-16 rounded-[3rem] max-w-4xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh] ${
                isDarkMode
                  ? "bg-zinc-900 border border-[#BF953F]/30"
                  : "bg-white border-2 border-[#BF953F]"
              }`}
            >
              <button
                onClick={() => setShowCEO(false)}
                className="absolute top-8 right-8 text-[#BF953F]"
              >
                <X size={32} />
              </button>
              <h3
                className={`text-4xl font-black uppercase italic mb-8 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Alvaro Choquehuanca Apaza
              </h3>
              <div
                className={`space-y-6 text-lg font-light italic leading-relaxed ${isDarkMode ? "text-white/80" : "text-zinc-800"}`}
              >
                <p>
                  Nuestra trayectoria comenzó hace más de 15 años con una visión
                  de legado. Fui fundador de la{" "}
                  <b>Cámara Inmobiliaria de La Paz</b> e impulsé la
                  diversificación estratégica en hotelería y ganadería.
                </p>
                <p>
                  Hace 3 años nace formalmente la{" "}
                  <b>Corporación Choquehuanca</b> como holding empresarial,
                  centralizando la gestión y optimizando procesos para potenciar
                  cada empresa bajo un solo organismo estratégico.
                </p>
                <p>
                  Creemos que los negocios crecen al nivel de la mente de
                  quienes los lideran. Por eso combinamos mentalidad
                  estratégica, PNL y carácter para construir sistemas y líderes.
                </p>
                <div className="pt-8 flex flex-col items-end">
                  <p className="text-xs font-black uppercase text-[#BF953F]">
                    Firma Oficial:
                  </p>
                  <p
                    className={`text-2xl font-black italic ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    A. Choquehuanca A.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 3. MODAL DE VIDEO */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/95"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-5xl relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#BF953F]/30 ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-[#BF953F] z-20 bg-black/50 rounded-full p-1"
              >
                <X size={28} />
              </button>
              <div className="aspect-video w-full bg-black">
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 4. MODAL DE IMAGEN DE GALERÍA */}
        {selectedHeroImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
            onClick={() => setSelectedHeroImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-4xl w-full rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row ${
                isDarkMode
                  ? "bg-zinc-900 border border-[#BF953F]/30"
                  : "bg-white"
              }`}
            >
              <button
                onClick={() => setSelectedHeroImage(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-[#BF953F] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedHeroImage}
                  className="w-full h-full object-cover"
                  alt="Detalle"
                />
              </div>

              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="logo.png"
                    className="w-10 h-10 rounded-lg"
                    alt="Logo"
                  />
                  <span className="text-[#BF953F] text-xs font-black uppercase tracking-widest">
                    Corporación Choquehuanca
                  </span>
                </div>

                <h3
                  className={`text-3xl font-black uppercase italic mb-4 leading-none ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Infraestructura & Desarrollo
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 ${isDarkMode ? "text-white/70" : "text-zinc-600"}`}
                >
                  Esta imagen representa parte de nuestros activos y proyectos
                  en desarrollo. En Corporación Choquehuanca, cada espacio está
                  diseñado pensando en la expansión, la calidad y el bienestar
                  de nuestros socios y clientes.
                </p>

                <div
                  className={`p-4 rounded-2xl ${isDarkMode ? "bg-white/5" : "bg-zinc-100"}`}
                >
                  <p className="text-[#BF953F] font-bold text-xs uppercase mb-1">
                    Visión
                  </p>
                  <p
                    className={`text-xs italic ${isDarkMode ? "text-white/50" : "text-zinc-500"}`}
                  >
                    "Piensa en grande, piensa en expansión."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// COMPONENTES AUXILIARES
function HistoryCard({ icon, title, desc }: any) {
  return (
    <div className="bg-black/5 p-6 rounded-[2rem] border border-[#BF953F]/20 hover:border-[#BF953F] transition-all">
      <div className="mb-4">{icon}</div>
      <h4 className="font-black uppercase text-sm mb-2">{title}</h4>
      <p className="text-xs opacity-70 italic leading-relaxed">{desc}</p>
    </div>
  );
}

function ContactItem({ icon, label, text, isDark }: any) {
  return (
    <div
      className={`flex gap-6 items-center p-6 rounded-2xl border ${isDark ? "bg-white/5 border-white/5" : "bg-zinc-50 border-black/5"}`}
    >
      <div className="p-4 bg-[#BF953F]/10 text-[#BF953F] rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase opacity-40 mb-1">
          {label}
        </p>
        <p
          className={`text-lg font-bold italic leading-tight ${!isDark && "text-black"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
