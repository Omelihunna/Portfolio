
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, ExternalLink, Code, Database, Cloud, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
        "Engineered custom ERC-721 NFT smart contracts on Hedera Testnet",
        "Integrated IPFS for decentralized metadata storage",
        "Developed robust backend using NestJS for blockchain integration"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "THISCREET",
      period: "June 2024 – Present",
      type: "Full-time",
      achievements: [
        "Developed cross-platform mobile apps resulting in 30% increase in user engagement",
        "Implemented secure authentication using OAuth2.0 and JWT",
        "Built scalable apps for both Android and iOS platforms"
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

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-scale-in">
              Full-Stack
              <br />
              <span className="text-gray-400">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Crafting scalable web applications and mobile solutions with modern technologies
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:omelihunna@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
              <a
                href="https://github.com/Omelihunna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in modern web and mobile technologies. 
                With a background in Electrical & Electronics Engineering and extensive experience in software development, 
                I specialize in building scalable applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My journey spans from traditional web development to cutting-edge blockchain applications, 
                always focusing on clean code, user experience, and innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm">
                  Bachelor's in EE Engineering (2024)
                </span>
                <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm">
                  Frontend Developer
                </span>
                <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm">
                  Blockchain Developer
                </span>
                <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm">
                  Backend Developer
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img className='w-96 h-96 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full mx-auto opacity-100' src="profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black dark:bg-white rounded-full"></div>
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="block text-gray-600 dark:text-gray-400 text-sm">
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
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg h-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Link to={project.link} className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center mb-6">
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:omelihunna@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              <span>omelihunna@gmail.com</span>
            </a>
            <a
              href="https://github.com/Omelihunna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-lg"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Iheanacho Omelihunna. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;