import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Server, Zap, Cloud, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
        />
        
        {/* Accent glow orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Decorative lines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Badge with sparkle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 text-primary text-sm font-medium backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/20 relative overflow-hidden group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="relative z-10">Il futuro del cloud personale</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Main heading with enhanced gradient */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block mb-2">Il tuo cloud,</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                  a casa tua.
                </span>
                {/* Glow effect under text */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Boxio porta la potenza del cloud direttamente a casa tua. 
              <span className="text-foreground font-medium"> Sicurezza totale, controllo completo</span> e 
              semplicità Apple-style per i tuoi dati.
            </motion.p>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="gap-2 group shadow-2xl hover:shadow-primary/25 shadow-primary/20 transition-all relative overflow-hidden text-base px-8 py-6"
                asChild
              >
                <Link to="/pairing">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Configura il tuo Boxio</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm text-base px-8 py-6 transition-all"
              >
                Scopri di più
              </Button>
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            >
              <StatItem value="256-bit" label="Crittografia" />
              <StatItem value="99.9%" label="Uptime" />
              <StatItem value="0ms" label="Latenza" />
            </motion.div>

            {/* Features with enhanced cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
            >
              <FeatureItem 
                icon={Shield} 
                title="Sicuro" 
                description="Crittografia end-to-end per i tuoi dati"
                gradient="from-blue-500/10 to-cyan-500/10"
              />
              <FeatureItem 
                icon={Server} 
                title="Veloce" 
                description="Prestazioni fulminee, sempre"
                gradient="from-purple-500/10 to-pink-500/10"
              />
              <FeatureItem 
                icon={Cloud} 
                title="Semplice" 
                description="Setup in 5 minuti, senza configurazioni"
                gradient="from-emerald-500/10 to-teal-500/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};


interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center gap-2"
  >
    <motion.div
      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

interface FeatureItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const FeatureItem = ({ icon: Icon, title, description, gradient }: FeatureItemProps) => {
  const controls = useAnimation();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => controls.start({ rotate: [0, -5, 5, 0] })}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 transition-all group-hover:border-primary/50 group-hover:bg-card/80 group-hover:shadow-2xl">
        <motion.div 
          animate={controls}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/25 transition-all"
        >
          <Icon className="w-8 h-8 text-primary relative z-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
        <div className="text-center space-y-2">
          <h3 className="font-bold text-xl text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/50 group-hover:animate-pulse" />
      </div>
    </motion.div>
  );
};

export default HeroSection;
