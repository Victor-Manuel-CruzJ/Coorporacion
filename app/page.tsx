"use client";

export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
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
  Sun,
  Moon,
  ArrowRight,
  X,
  Briefcase,
  Globe,
  Target,
  Gem,
  Zap,
  Award,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const videoData = [
  {
    id: "vid1",
    url: "https://www.dropbox.com/scl/fi/6atn25qrqy402w13aymvv/C-psula-01.mp4?rlkey=pclpkdf4fo0s6ez4gg9kqsaf5&st=w8vdyhcz&raw=1",
  },
  {
    id: "vid2",
    url: "https://www.dropbox.com/scl/fi/qro7v3eattjpjysvrmmkv/C-psula-02.mp4?rlkey=5skryum9mut94nka76jgsm1at&st=g0drah68&raw=1",
  },
  {
    id: "vid3",
    url: "https://www.dropbox.com/scl/fi/vojt5iwni39wvsl3x4kes/C-psula-03.mp4?rlkey=32qzbrjfedper1ccwnjytzqh8&st=6sv9cq7j&raw=1",
  },
  {
    id: "vid4",
    url: "https://www.dropbox.com/scl/fi/it80w1evzx84s6bj3vykf/C-psula-04.mp4?rlkey=5p350s48z91zss5vdtqb24zly&st=9135d8fn&raw=1",
  },
  {
    id: "vid5",
    url: "https://www.dropbox.com/scl/fi/njpwbe6qrddgbieacgg7a/C-psula-05.mp4?rlkey=4i3wsg1ijkdtpt8bak0i5zxzb&st=5fxyqxv4&raw=1",
  },
  {
    id: "vid6",
    url: "https://www.dropbox.com/scl/fi/hu3b95v2gsw43hpxxb6dr/C-psula-06.mp4?rlkey=6wmbkd7dueuekjcaqvjrpd6jj&st=z9wqi4ju&raw=1",
  },
];

const servicios = [
  {
    id: "hotel",
    icon: <Hotel size={32} />,
    title: "Hospedaje Hotelero",
    img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&w=800",
    short: "Confort en la zona 16 de Julio.",
    long: "Hospedaje de alta calidad para viajeros que valoran comodidad y seguridad.",
  },
  {
    id: "const",
    icon: <Building2 size={32} />,
    title: "Constructora",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800",
    short: "Casas y condominios de lujo.",
    long: "Desarrollo de proyectos modernos con materiales de primera y diseño inteligente.",
  },
  {
    id: "gym",
    icon: <Dumbbell size={32} />,
    title: "Bienestar y Deporte",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&w=800",
    short: "Salud y disciplina integral.",
    long: "Fomentamos hábitos positivos para el cuerpo y la mente en equilibrio.",
  },
  {
    id: "inmo",
    icon: <Gem size={32} />,
    title: "Inmobiliaria Premium",
    img: "https://images.pexels.com/photos/1591544/pexels-photo-1591544.jpeg?auto=compress&w=800",
    short: "Propiedades de alto nivel.",
    long: "Gestión de activos de lujo con total confidencialidad para inversores.",
  },
  {
    id: "coach",
    icon: <GraduationCap size={32} />,
    title: "Coaching PNL",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800",
    short: "Mentalidad de éxito.",
    long: "Programas de liderazgo estratégico para elevar el nivel de conciencia.",
  },
  {
    id: "oro",
    icon: <Coins size={32} />,
    title: "Inversión en Oro",
    img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=compress&w=800",
    short: "Protección patrimonial.",
    long: "Respaldo sólido para tu capital mediante activos refugio.",
  },
];

export default function CorporacionChoquehuancaFinal() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showCEO, setShowCEO] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const nextVideo = () =>
    setCurrentVideoIndex((prev) => (prev + 1) % videoData.length);
  const prevVideo = () =>
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videoData.length) % videoData.length
    );

  const textColor = isDarkMode ? "text-white" : "text-zinc-900";
  const subTextColor = isDarkMode ? "text-white/60" : "text-zinc-600";
  const bgColor = isDarkMode ? "bg-[#050505]" : "bg-white";

  return (
    <div
      className={`${bgColor} ${textColor} transition-colors duration-500 min-h-screen font-sans`}
    >
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md border-b transition-colors ${
          isDarkMode
            ? "border-white/5 bg-black/20"
            : "border-black/10 bg-white/20"
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src="logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain rounded-lg border border-[#BF953F]/30"
          />
          <div className="flex flex-col">
            <span
              className={`font-black uppercase tracking-tighter text-lg leading-none ${
                isDarkMode ? "text-[#BF953F]" : "text-zinc-900"
              }`}
            >
              Corporación
            </span>
            <span
              className={`font-bold text-[9px] uppercase tracking-[0.3em] ${
                isDarkMode ? "text-white/70" : "text-[#BF953F]"
              }`}
            >
              Choquehuanca
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-full border transition-all ${
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/20 text-black shadow-sm"
          }`}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-[#BF953F]" />
          ) : (
            <Moon size={20} className="text-zinc-700" />
          )}
        </button>
      </nav>

      {/* --- HERO SECTION: VIDEOS COMO PRESENTACIÓN --- */}
      <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Overlay dinámico para visibilidad de controles */}
            <div
              className={`absolute inset-0 z-10 bg-gradient-to-b ${
                isDarkMode
                  ? "from-black/70 via-transparent to-[#050505]"
                  : "from-black/40 via-transparent to-white"
              }`}
            />
            <video
              src={videoData[currentVideoIndex].url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="logo.png"
            className="w-28 h-28 md:w-36 md:h-36 mb-8 rounded-3xl shadow-2xl border-2 border-[#BF953F]"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[#BF953F] font-black uppercase tracking-[0.3em] text-xl md:text-4xl italic drop-shadow-2xl mb-10">
              "Piensa en grande piensa en expansión"
            </p>
            <button
              onClick={() => setSelectedVideo(videoData[currentVideoIndex])}
              className="group flex items-center gap-3 bg-[#BF953F] text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              <PlayCircle fill="currentColor" /> Ver Video Completo
            </button>
          </motion.div>

          {/* CONTROLES DE NAVEGACIÓN (Ajustados para Modo Día) */}
          <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={prevVideo}
                className={`p-4 rounded-full border transition-all backdrop-blur-md ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-black/20 text-zinc-900 bg-white/40 hover:bg-white/80"
                }`}
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextVideo}
                className={`p-4 rounded-full border transition-all backdrop-blur-md ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-black/20 text-zinc-900 bg-white/40 hover:bg-white/80"
                }`}
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div
                className={`text-xs font-black uppercase tracking-widest ${
                  isDarkMode ? "text-white/50" : "text-zinc-600"
                }`}
              >
                Proyecto{" "}
                <span className="text-[#BF953F]">0{currentVideoIndex + 1}</span>
              </div>
              <div
                className={`w-32 h-[3px] rounded-full overflow-hidden ${
                  isDarkMode ? "bg-white/10" : "bg-black/10"
                }`}
              >
                <motion.div
                  className="h-full bg-[#BF953F]"
                  animate={{
                    width: `${
                      ((currentVideoIndex + 1) / videoData.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISION Y VISION --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto -mt-16 relative z-30">
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={`p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all ${
              isDarkMode
                ? "bg-white/5 border-white/10 shadow-2xl"
                : "bg-white border-black/5 shadow-xl"
            }`}
          >
            <h3 className="font-black text-[#BF953F] uppercase mb-3 flex items-center gap-3 italic">
              <Target size={20} /> Nuestra Misión
            </h3>
            <p className={`text-lg leading-relaxed ${subTextColor}`}>
              "Ofrecer oportunidades de desarrollo para crear vidas de calidad a
              través de la excelencia empresarial."
            </p>
          </div>
          <div
            className={`p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all ${
              isDarkMode
                ? "bg-white/5 border-white/10 shadow-2xl"
                : "bg-white border-black/5 shadow-xl"
            }`}
          >
            <h3 className="font-black text-[#BF953F] uppercase mb-3 flex items-center gap-3 italic">
              <Globe size={20} /> Nuestra Visión
            </h3>
            <p className={`text-lg leading-relaxed ${subTextColor}`}>
              "Ser la principal empresa nacional de negocios e inversiones con
              proyección internacional."
            </p>
          </div>
        </div>
      </section>

      {/* --- CEO E HISTORIA --- */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div
              onClick={() => setShowCEO(true)}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-[#BF953F] cursor-pointer group shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&w=800"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="CEO"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-3xl font-black uppercase italic leading-none">
                  Alvaro Choquehuanca
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#BF953F] font-black uppercase text-[10px] tracking-widest bg-black/60 p-2 rounded-lg backdrop-blur-md">
                  <Award size={14} /> Recorrido Profesional
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2
              className={`text-5xl font-black uppercase italic leading-none ${
                !isDarkMode && "text-zinc-900"
              }`}
            >
              Nuestra Historia
            </h2>
            <div
              className={`space-y-6 text-xl font-light leading-relaxed ${subTextColor}`}
            >
              <p>
                Hace más de <b className="text-[#BF953F]">15 años</b>, lo que
                hoy es la Corporación Choquehuanca nació como un sueño de
                expansión y legado.
              </p>
              <p>
                Hoy, consolidamos un Holding que centraliza la gestión y
                potencia cada unidad de negocio con eficiencia.
              </p>
              <div
                className={`p-6 border-l-4 border-[#BF953F] ${
                  isDarkMode ? "bg-white/5" : "bg-zinc-50"
                }`}
              >
                <p
                  className={`italic font-medium ${
                    !isDarkMode && "text-zinc-800"
                  }`}
                >
                  "No construimos solo empresas. Construimos sistemas, líderes y
                  legado."
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
          <div className="grid md:grid-cols-3 gap-6">
            <HistoryCard
              icon={<Zap className="text-[#BF953F]" />}
              title="Cámara Inmobiliaria"
              desc="Fundadores enfocados en la formalización del sector regional."
              isDark={isDarkMode}
            />
            <HistoryCard
              icon={<Utensils className="text-[#BF953F]" />}
              title="Ganadería"
              desc="Producción de alta calidad y gestión estratégica de recursos."
              isDark={isDarkMode}
            />
            <HistoryCard
              icon={<Briefcase className="text-[#BF953F]" />}
              title="Holding Empresarial"
              desc="Optimización de procesos corporativos a gran escala."
              isDark={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2
          className={`text-5xl font-black uppercase italic mb-16 text-center ${
            !isDarkMode && "text-zinc-900"
          }`}
        >
          Servicios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s)}
              className={`group rounded-[3rem] overflow-hidden border cursor-pointer transition-all shadow-xl ${
                isDarkMode
                  ? "bg-zinc-900 border-white/5 hover:border-[#BF953F]/40"
                  : "bg-white border-black/5 hover:border-[#BF953F]/40"
              }`}
            >
              <div className="h-60 relative overflow-hidden">
                <img
                  src={s.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  alt={s.title}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-6 left-6 p-3 bg-black/50 backdrop-blur-md rounded-2xl text-[#BF953F]">
                  {s.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black uppercase italic mb-3">
                  {s.title}
                </h3>
                <p className={`text-sm mb-6 ${subTextColor}`}>{s.short}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#BF953F]">
                  Ver detalles <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- UBICACIÓN --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <h2
              className={`text-5xl font-black uppercase italic ${
                !isDarkMode && "text-zinc-900"
              }`}
            >
              Ubicación
            </h2>
            <div className="space-y-6">
              <ContactItem
                icon={<MapPin />}
                label="Sede Central"
                text="Calle Yanacocha Edif. Arco Iris, Ofi. 806"
                isDark={isDarkMode}
              />
              <ContactItem
                icon={<Phone />}
                label="Teléfono"
                text="2486947 – 69819870"
                isDark={isDarkMode}
              />
            </div>
          </div>
          <div
            className={`lg:col-span-7 h-[450px] rounded-[3rem] overflow-hidden border ${
              isDarkMode ? "border-white/10" : "border-black/10 shadow-2xl"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.9110292780654!2d-68.13620958!3d-16.4962295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e12e79603%3A0xc0953d39579730f9!2sC.%20Yanacocha%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1715456234567!5m2!1ses!2sbo"
              className={`w-full h-full ${
                isDarkMode ? "grayscale invert opacity-80" : ""
              }`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={`py-16 text-center border-t transition-colors ${
          isDarkMode ? "border-white/5" : "border-black/5 bg-zinc-50"
        }`}
      >
        <img
          src="logo.png"
          className="w-16 h-16 mx-auto mb-6 rounded-xl"
          alt="Logo"
        />
        <p className="text-[10px] uppercase tracking-[1em] opacity-40 italic mb-4">
          Corporación Choquehuanca
        </p>
        <p className="text-xs font-black uppercase text-[#BF953F]">
          Alvaro Choquehuanca Apaza
        </p>
        <p className={`text-[10px] mt-4 ${subTextColor}`}>
          © 2026 - Piensa en Grande, Piensa en Expansión.
        </p>
      </footer>

      {/* --- MODALES --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}

        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className={`p-10 rounded-[3rem] max-w-2xl w-full relative ${
                isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-[#BF953F]"
              >
                <X size={32} />
              </button>
              <div className="text-[#BF953F] mb-6">{selectedService.icon}</div>
              <h3 className="text-3xl font-black uppercase italic mb-6">
                {selectedService.title}
              </h3>
              <p className="text-xl font-light leading-relaxed italic opacity-90">
                {selectedService.long}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HistoryCard({ icon, title, desc, isDark }: any) {
  return (
    <div
      className={`p-8 rounded-[2.5rem] border transition-all ${
        isDark
          ? "bg-white/5 border-white/5 hover:border-[#BF953F]"
          : "bg-white border-black/10 hover:border-[#BF953F] shadow-lg"
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h4
        className={`font-black uppercase text-sm mb-2 ${
          !isDark && "text-zinc-900"
        }`}
      >
        {title}
      </h4>
      <p
        className={`text-xs italic leading-relaxed ${
          isDark ? "opacity-60" : "text-zinc-500"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

function ContactItem({ icon, label, text, isDark }: any) {
  return (
    <div
      className={`flex gap-6 items-center p-6 rounded-3xl border ${
        isDark
          ? "bg-white/5 border-white/5"
          : "bg-white border-black/10 shadow-sm"
      }`}
    >
      <div className="p-4 bg-[#BF953F]/10 text-[#BF953F] rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase opacity-40 mb-1">
          {label}
        </p>
        <p className={`text-lg font-bold italic ${!isDark && "text-zinc-900"}`}>
          {text}
        </p>
      </div>
    </div>
  );
}
