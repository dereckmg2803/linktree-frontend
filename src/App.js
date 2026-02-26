import { motion } from "framer-motion";
import "@/App.css";
import { FaTelegram, FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaFutbol } from "react-icons/fa";
import { TrendingUp, ArrowRight, Trophy } from "lucide-react";

// Configuration - Easy to update later
const PROFILE_CONFIG = {
  name: "TuNombre",
  bio: "Analista de Pronósticos Deportivos",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  telegramLink: "https://t.me/+FAuIUT2cM5U2YWMx",
  socialLinks: {
    instagram: "#",
    tiktok: "#",
    youtube: "#",
    twitter: "#"
  }
};

const LINKS = [
  {
    id: "telegram",
    title: "Únete a Telegram",
    subtitle: "Pronósticos Gratis",
    icon: FaTelegram,
    url: PROFILE_CONFIG.telegramLink,
    isPrimary: true
  },
  {
    id: "stats",
    title: "Mis Estadísticas",
    subtitle: "Track Record Verificado",
    icon: TrendingUp,
    url: "#",
    isPrimary: false
  },
  {
    id: "tips",
    title: "Tips Premium",
    subtitle: "Acceso VIP",
    icon: Trophy,
    url: "#",
    isPrimary: false
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Profile Header Component
const ProfileHeader = () => (
  <motion.div 
    className="flex flex-col items-center text-center space-y-4"
    variants={itemVariants}
  >
    {/* Profile Image with Status Ring */}
    <div className="relative">
      <div className="w-32 h-32 rounded-full p-1 profile-ring animate-ring">
        <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1">
          <img
            src={PROFILE_CONFIG.profileImage}
            alt={PROFILE_CONFIG.name}
            className="w-full h-full rounded-full object-cover"
            data-testid="profile-image"
          />
        </div>
      </div>
      {/* Online Status Indicator */}
      <div 
        className="absolute bottom-2 right-2 w-6 h-6 bg-[#39FF14] rounded-full border-4 border-[#0a0a0a] pulse-glow"
        data-testid="status-indicator"
      />
    </div>
    
    {/* Name */}
    <h1 
      className="font-heading text-3xl font-black text-white uppercase tracking-tight"
      data-testid="profile-name"
    >
      {PROFILE_CONFIG.name}
    </h1>
    
    {/* Bio */}
    <p 
      className="text-[#A1A1AA] text-base max-w-[80%]"
      data-testid="profile-bio"
    >
      {PROFILE_CONFIG.bio}
    </p>
  </motion.div>
);

// Social Bar Component
const SocialBar = () => (
  <motion.div 
    className="flex items-center justify-center gap-4"
    variants={itemVariants}
  >
    <a 
      href={PROFILE_CONFIG.socialLinks.instagram} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-icon text-[#A1A1AA] text-2xl w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
      data-testid="social-instagram"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
    <a 
      href={PROFILE_CONFIG.socialLinks.tiktok} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-icon text-[#A1A1AA] text-2xl w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
      data-testid="social-tiktok"
      aria-label="TikTok"
    >
      <FaTiktok />
    </a>
    <a 
      href={PROFILE_CONFIG.socialLinks.youtube} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-icon text-[#A1A1AA] text-2xl w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
      data-testid="social-youtube"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
    <a 
      href={PROFILE_CONFIG.socialLinks.twitter} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-icon text-[#A1A1AA] text-2xl w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
      data-testid="social-twitter"
      aria-label="Twitter/X"
    >
      <FaTwitter />
    </a>
  </motion.div>
);

// Telegram Button (Primary CTA)
const TelegramButton = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="telegram-btn relative w-full group overflow-hidden bg-[#39FF14] hover:bg-[#32D711] text-black py-4 rounded-xl telegram-glow transition-all duration-300 transform hover:-translate-y-1 block"
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    data-testid="telegram-button"
  >
    <div className="shimmer" />
    <div className="relative flex items-center justify-center gap-3 font-heading font-black text-lg uppercase tracking-wider z-10">
      <link.icon className="w-6 h-6" />
      <span>{link.title}</span>
    </div>
    {link.subtitle && (
      <p className="text-center text-black/70 text-sm mt-1 relative z-10">
        {link.subtitle}
      </p>
    )}
  </motion.a>
);

// Standard Link Button
const LinkButton = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="link-card w-full bg-[#18181b] text-white py-4 rounded-xl flex items-center px-6 group block"
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    data-testid={`link-button-${link.id}`}
  >
    <div className="w-10 h-10 rounded-lg bg-[#27272a] flex items-center justify-center mr-4 group-hover:bg-[#39FF14]/20 transition-colors">
      <link.icon className="w-5 h-5 text-[#39FF14]" />
    </div>
    <div className="flex-1">
      <span className="font-heading font-bold tracking-wide block">{link.title}</span>
      {link.subtitle && (
        <span className="text-[#A1A1AA] text-sm">{link.subtitle}</span>
      )}
    </div>
    <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
  </motion.a>
);

// Link Stack Component
const LinkStack = () => (
  <motion.div 
    className="flex flex-col w-full space-y-4"
    variants={containerVariants}
  >
    {LINKS.map((link) => (
      link.isPrimary ? (
        <TelegramButton key={link.id} link={link} />
      ) : (
        <LinkButton key={link.id} link={link} />
      )
    ))}
  </motion.div>
);

// Main App Component
function App() {
  return (
    <div className="linktree-container grass-pattern" data-testid="linktree-page">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Main Content */}
      <motion.main 
        className="relative z-10 max-w-md mx-auto px-6 py-12 min-h-screen flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <ProfileHeader />
        
        {/* Social Icons */}
        <div className="mt-6">
          <SocialBar />
        </div>
        
        {/* Links Section */}
        <div className="mt-10 flex-1">
          <LinkStack />
        </div>
        
        {/* Footer */}
        <motion.footer 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <p className="footer-text flex items-center justify-center gap-2">
            <FaFutbol className="text-[#39FF14] w-3 h-3" />
            <span>Pronósticos Deportivos</span>
            <FaFutbol className="text-[#39FF14] w-3 h-3" />
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}

export default App;
