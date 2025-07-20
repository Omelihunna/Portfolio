
import { useRef, useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Cloud, Smartphone } from 'lucide-react';
import { Linkedin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function useSectionInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
}

const Index = () => {
  // const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Thiscreet",
      period: "June 2024 – Present",
      type: "Full-time",
      achievements: [
        "Developed cross-platform mobile apps resulting in 30% increase in user engagement",
        "Implemented secure authentication using OAuth2.0 and JWT",
        "Built scalable apps for both Android and iOS platforms"
      ]
    },
    {
      title: "Software Engineer",
      company: "Descriptomizer",
      period: "Mar 2025 - May 2025",
      type: "Contract",
      achievements: [
        "Reduced SQL report generation time by 43% through query optimization",
        "Automated site tracking for 3+ clients saving 6+ engineering hours/week",
        "Improved data integrity by resolving 90%+ of client data discrepancies"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Risidio",
      period: "Jan 2025 – May 2025",
      type: "Contract",
      achievements: [
        "Engineered custom ERC-721 NFT smart contracts on Hedera",
        "Integrated IPFS for decentralized metadata storage",
        "Developed robust backend using NestJS for blockchain integration"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "ValueGate Consulting",
      period: "May 2024 – Aug 2024",
      type: "Contract",
      achievements: [
        "Developed server-side applications using Node.js and Express.js",
        "Implemented security protocols including JWT authentication and SSL encryption",
        "Contributed to continuous improvement practices reducing bug reports"
      ]
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Remote Clients",
      period: "2021 – 2024",
      type: "Freelance",
      achievements: [
        "Built scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
        "Designed and implemented responsive UIs with React.js",
        "Created RESTful APIs and implemented authentication with Node.js and Express.js",
        "Deployed and maintained apps on AWS (EC2, S3, Lambda)",
        "Integrated DevOps practices including Docker, Jenkins, and Terraform",
        "Practiced Agile methodologies and communicated effectively with stakeholders"
      ]
    },
  ];

  const skills = [
    {
      category: "Backend & Version Control",
      icon: <Code className="w-6 h-6" />,
      items: ["Node.js", "Express.js", "Nest.js", "TypeScript", "Git", "GitHub"]
    },
    {
      category: "Frontend & Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["React.js", "React Native", "Next.js", "HTML", "CSS", "JavaScript (ES6+)"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: ["AWS (EC2, S3)", "Docker", "CI/CD Pipelines"]
    }
  ];

  const projects = [
    {
      title: "THISCREET Web Platform",
      link: "https://app.thiscreetapp.com",
      description: "[Live site] — Secure, privacy-first anonymous social app. Designed and built scalable backend architecture and authentication workflows."
    },
    {
      title: "THISCREET Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.omelihunna.Thiscreet&pcampaignid=web_share",
      description: "[iOS App] Real-time chat and anonymous sharing platform. Built with React Native, Node.js, and WebSockets."
    },
    {
      title: "Nketa Afrika Affiliate Platform",
      link: "https://affiliate.nketaafrika.com",
      description: "[Affiliate Portal] — Developed scalable affiliate marketing system with dynamic referral tracking, secure login, and real-time analytics."
    }
  ];

  const [heroRef, heroInView] = useSectionInView();
  const [aboutRef, aboutInView] = useSectionInView();
  const [experienceRef, experienceInView] = useSectionInView();
  const [skillsRef, skillsInView] = useSectionInView();
  const [projectsRef, projectsInView] = useSectionInView();
  const [contactRef, contactInView] = useSectionInView();

  return (
    <div className={`min-h-screen w-full transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-black dark:text-white">
            IHEANACHO OMELIHUNNA
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${
                    activeSection === item.toLowerCase() 
                      ? 'text-black dark:text-white' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen my-auto w-full flex items-center justify-center bg-transparent text-black dark:text-white relative px-4">
        <div ref={heroRef} className={`max-w-6xl mx-auto px-8 text-center glass glass-dark shadow-xl py-12 md:py-24 animate-fade-in ${heroInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <h1 className=" text-5xl md:text-6xl font-bold mb-8 animate-scale-in">
            Full-Stack
            <br />
            <span className="text-gray-400">Developer</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Crafting scalable web applications and mobile solutions with modern technologies
          </p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-center md:space-x-6">
            <a
              href="mailto:omelihunna@gmail.com"
              className="inline-flex w-full items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-full hover:scale-105 hover:bg-white hover:text-black  hover:shadow-2xl transition-all duration-300 relative group cursor-pointer glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-black"
              data-cursor-light
              style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)' }}
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>
            <a
              href="https://github.com/Omelihunna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-full hover:scale-105 hover:bg-white hover:text-black  hover:shadow-2xl transition-all duration-300 relative group cursor-pointer glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-black"
              data-cursor-light
              style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)' }}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 bottom-5 md:bottom-15 transform -translate-x-1/2 flex flex-col items-center select-none" aria-hidden="true">
          <div className="w-10 h-10 flex items-center justify-center animate-bounce">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8V24" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M8 16L16 24L24 16" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xs text-white/80 mt-2">Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" px-4 py-24 bg-transparent">
        <div ref={aboutRef} className={`max-w-6xl mx-auto px-8 glass glass-dark shadow-xl py-16 ${aboutInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="flex text-center justify-center gap-16 items-center">
            <div className='max-w-[600px]'>
              <p className="text-lg text-gray-200 dark:text-gray-300 mb-8">
                I'm a passionate full-stack developer with expertise in modern web and mobile technologies. 
                With a background in Electrical & Electronics Engineering and extensive experience in software development, 
                I specialize in building scalable applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-200 dark:text-gray-300 mb-8">
                My journey spans from traditional web development to cutting-edge blockchain applications, 
                always focusing on clean code, user experience, and innovative solutions.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <span className="px-5 py-2 bg-black/80 text-white rounded-full text-sm glass">Bachelor's in EE Engineering (2024)</span>
                <span className="px-5 py-2 bg-black/80 text-white rounded-full text-sm glass">Frontend Developer</span>
                <span className="px-5 py-2 bg-black/80 text-white rounded-full text-sm glass">Blockchain Developer</span>
                <span className="px-5 py-2 bg-black/80 text-white rounded-full text-sm glass">Backend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 md:px-8 bg-transparent">
        <div ref={experienceRef} className={`max-w-6xl mx-auto glass glass-dark shadow-xl py-16 px-8 ${experienceInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Experience
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 border-l-2 border-white/20 mb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white/80 rounded-full"></div>
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="px-4 py-1 bg-white/10 text-white rounded-full text-sm glass">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-lg text-gray-200 mb-3">
                    {exp.company}  {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 md:px-8 bg-transparent">
        <div ref={skillsRef} className={`max-w-6xl mx-auto glass glass-dark shadow-xl py-16 px-8 ${skillsInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 glass p-8 mb-6" data-cursor-light>
                <div className="w-16 h-16 bg-white/80 text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="block text-gray-200 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-8 bg-transparent">
        <div ref={projectsRef} className={`max-w-6xl mx-auto glass glass-dark shadow-xl py-16 px-8 ${projectsInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group hover:scale-105 hover:shadow-2xl transition-all duration-300 glass p-8 mb-6" data-cursor-light>
                {/* <div className="bg-white/10 p-8 rounded-lg h-full transition-colors"> */}
                  <Link to={project.link} className="w-12 h-12 bg-white/80 text-black rounded-lg flex items-center justify-center mb-8 shadow-lg hover:scale-110 transition-transform" data-cursor-light>
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-200">
                    {project.description}
                  </p>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-24 bg-transparent">
        <div ref={contactRef} className={`max-w-6xl mx-auto px-8 glass glass-dark shadow-xl text-center py-16 ${contactInView ? 'animate-section-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-10"></div>
          <p className="text-xl text-gray-200 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <a
              href="mailto:omelihunna@gmail.com"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-black text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 glass text-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              data-cursor-light
            >
              <Mail className="w-5 h-5" />
              <span>omelihunna@gmail.com</span>
            </a>
            <a
              href="https://github.com/Omelihunna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-black text-white rounded-full border border-white/60 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 glass text-lg focus:outline-none focus:ring-2 focus:ring-white"
              data-cursor-light
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omelihunna-iheanacho-53a8b8248/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-black text-white rounded-full border border-white/60 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 glass text-lg focus:outline-none focus:ring-2 focus:ring-white"
              data-cursor-light
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-transparent border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-gray-400">
             © 2025 Iheanacho Omelihunna. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;