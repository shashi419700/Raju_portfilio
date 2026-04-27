import { motion } from "framer-motion";
import raju from "../assets/Raju.jpeg"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-slate-950">
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_transparent_65%)]"></div>

      {/* Floating Blur Orbs */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 text-lg mb-4 font-semibold tracking-widest uppercase"
          >
            Welcome To My World
          </motion.p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                       Raju Kumar Pandey

            </span>
          </h2>

          <p className="text-2xl text-slate-300 mb-4 font-medium">
            Diploma 1st Year | RKDF University Ranchi
          </p>

          <p className="max-w-2xl text-slate-400 text-lg mb-8 leading-relaxed">
            Passionate about web development, futuristic UI design, and creating premium digital experiences with advanced animations and modern 3D aesthetics.
          </p>



          
          //Hari om


          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold shadow-2xl shadow-cyan-500/30"
            >
              Explore Portfolio
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cyan-400/40 rounded-2xl text-cyan-300 backdrop-blur-md"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            
            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-md"
            />

            {/* Main Photo */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={raju} // Apna photo yaha public folder me profile.png naam se daalna
              alt="Raju Kumar pandey"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-slate-900 shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 px-6 py-3 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-cyan-400/30"
            >
              <p className="text-cyan-300 font-semibold">Future Developer 🚀</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}