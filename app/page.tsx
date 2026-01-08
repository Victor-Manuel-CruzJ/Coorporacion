"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  MapPin,
  Phone,
  Clock,
  Sun,
  Moon,
  Utensils,
  Dumbbell,
  ShieldCheck,
  Coins,
  GraduationCap,
  ArrowRight,
  Gem,
  Landmark,
  Target,
  Eye,
} from "lucide-react";

const oroGradiente =
  "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent";
const oroBorde = "border-[#BF953F]/40";

export default function Home() {
  const [esModoOscuro, setEsModoOscuro] = useState(true);

  return (
    <div
      className={`${
        esModoOscuro ? "bg-[#050505] text-zinc-100" : "bg-white text-zinc-900"
      } transition-colors duration-500 font-sans`}
    >
      {/* Botón de Cambio de Tema */}
      <button
        onClick={() => setEsModoOscuro(!esModoOscuro)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full border-2 border-[#BF953F] bg-black/40 backdrop-blur-md hover:bg-[#BF953F]/20 transition-all"
      >
        {esModoOscuro ? (
          <Sun className="text-[#FCF6BA] w-6 h-6" />
        ) : (
          <Moon className="text-[#B38728] w-6 h-6" />
        )}
      </button>

      {/* ================= HERO (LOGO MÁS GRANDE) ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo agrandado a w-56 (224px) */}
            <img
              src="/logo.png"
              alt="Logo Corporación Choquehuanca"
              className="w-56 h-56 mx-auto mb-12 drop-shadow-[0_0_30px_rgba(191,149,63,0.4)]"
            />
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight">
              Corporación <br />
              <span className={oroGradiente}>Choquehuanca</span>
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase text-[#BF953F]">
              Piensa en grande, piensa en expansión
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISIÓN Y VISIÓN ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className={`p-12 rounded-[2.5rem] border ${oroBorde} ${
              esModoOscuro
                ? "bg-zinc-900/40 shadow-2xl shadow-black"
                : "bg-zinc-50 shadow-xl shadow-zinc-200"
            }`}
          >
            <Target className="text-[#BF953F] mb-6" size={48} />
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
              Misión
            </h2>
            <p className="text-2xl font-light leading-relaxed opacity-90">
              Ofrecer oportunidades de desarrollo para crear vidas de calidad.
            </p>
          </div>
          <div
            className={`p-12 rounded-[2.5rem] border ${oroBorde} ${
              esModoOscuro
                ? "bg-zinc-900/40 shadow-2xl shadow-black"
                : "bg-zinc-50 shadow-xl shadow-zinc-200"
            }`}
          >
            <Eye className="text-[#BF953F] mb-6" size={48} />
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
              Visión
            </h2>
            <p className="text-2xl font-light leading-relaxed opacity-90">
              Ser la principal empresa nacional de negocios e inversiones.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HISTORIA RESUMIDA ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-y border-[#BF953F]/10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[#BF953F] font-bold tracking-[0.3em] uppercase mb-4">
              Nuestro Legado
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Más de 15 años de expansión continua
            </h3>
            <div className="space-y-6 text-xl opacity-80 font-light leading-relaxed">
              <p>
                Iniciamos con una cancha deportiva, sembrando valores de
                disciplina. Hoy, lideramos la{" "}
                <strong>Cámara Inmobiliaria de La Paz</strong> y operamos un
                holding diversificado.
              </p>
              <p>
                Hace 3 años consolidamos todas nuestras unidades de negocio bajo
                una sola visión estratégica, optimizando procesos para un
                impacto internacional.
              </p>
            </div>
          </div>
          <div
            className={`p-12 rounded-[3rem] border-l-8 border-[#BF953F] ${
              esModoOscuro ? "bg-zinc-900/20" : "bg-zinc-100"
            }`}
          >
            <p className="text-3xl italic font-light leading-relaxed">
              "No construimos solo empresas; construimos sistemas, líderes y un
              legado para las futuras generaciones."
            </p>
            <p className="mt-8 text-[#BF953F] font-bold uppercase tracking-widest">
              — Alvaro Choquehuanca Apaza
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS (CON IMÁGENES FUNCIONALES) ================= */}
      <section
        className={`py-32 ${esModoOscuro ? "bg-[#080808]" : "bg-zinc-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">
              Servicios Premium
            </h2>
            <p className="text-[#BF953F] tracking-[0.2em] uppercase text-sm font-bold">
              Soluciones Estratégicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TarjetaServicio
              titulo="Inversión en Oro"
              desc="Protección de capital con activos refugio físicos. Compra y venta garantizada."
              icon={<Coins size={32} />}
              img="oro.jpg"
            />
            <TarjetaServicio
              titulo="Bienes Raíces"
              desc="Gestión de propiedades de lujo para inversionistas de alto perfil."
              icon={<Landmark size={32} />}
              img="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <TarjetaServicio
              titulo="Hospedaje Hotelero"
              desc="Confort y excelencia en el corazón de la ciudad para viajeros corporativos."
              icon={<Hotel size={32} />}
              img="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <TarjetaServicio
              titulo="Ganadería de Élite"
              desc="Comercialización de carne de alta calidad y control productivo total."
              icon={<Utensils size={32} />}
              img="ganado.jpg"
            />
            <TarjetaServicio
              titulo="Constructora"
              desc="Diseño y construcción de condominios modernos con acabados de lujo."
              icon={<Building2 size={32} />}
              img="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <TarjetaServicio
              titulo="Coaching con PNL"
              desc="Formación de liderazgo y mentalidad estratégica para el éxito."
              icon={<GraduationCap size={32} />}
              img="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACTO Y MAPA (ENLACE REAL) ================= */}
      <footer
        className={`pt-32 pb-12 ${esModoOscuro ? "bg-black" : "bg-zinc-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h4 className="text-4xl font-black mb-12 uppercase">Contáctenos</h4>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <MapPin className="text-[#BF953F] mt-1" size={32} />
                <div>
                  <p className="font-bold text-[#BF953F] uppercase text-xs tracking-widest mb-1">
                    Oficina Central
                  </p>
                  <p className="text-2xl font-light">
                    Calle Yanacocha, Edif. Arco Iris, Piso 8, Ofic. 806
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Phone className="text-[#BF953F] mt-1" size={32} />
                <div>
                  <p className="font-bold text-[#BF953F] uppercase text-xs tracking-widest mb-1">
                    Líneas Directas
                  </p>
                  <p className="text-2xl font-light">2486947 – 69819870</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Clock className="text-[#BF953F] mt-1" size={32} />
                <div>
                  <p className="font-bold text-[#BF953F] uppercase text-xs tracking-widest mb-1">
                    Horarios
                  </p>
                  <p className="text-2xl font-light">
                    Lunes a Viernes: 07:30 a 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`h-[500px] rounded-[2rem] overflow-hidden border-2 ${oroBorde} shadow-2xl`}
          >
            {/* MAPA REAL: Calle Yanacocha, La Paz, Bolivia */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.43265103444!2d-68.136272!3d-16.498116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0a68571933%3A0x86831349b143c7b!2sCalle%20Yanacocha%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1715870000000!5m2!1ses!2sbo"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center pt-12 border-t border-zinc-900 text-xs uppercase tracking-[0.5em] opacity-40">
          Corporación Choquehuanca © 2026 — Piensa en Expansión
        </div>
      </footer>
    </div>
  );
}

function TarjetaServicio({
  img,
  titulo,
  desc,
  icon,
}: {
  img: string;
  titulo: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-500 hover:border-[#BF953F]">
      <img
        src={img}
        alt={titulo}
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative h-full p-10 flex flex-col justify-end">
        <div className="text-[#FCF6BA] mb-6 transform transition-transform group-hover:-translate-y-2">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-3 uppercase tracking-tight">
          {titulo}
        </h3>
        <p className="text-lg text-zinc-300 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
