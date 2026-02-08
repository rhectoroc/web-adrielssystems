import React from 'react';

export const translations = {
    es: {
        navbar: {
            items: [
                { name: "Inicio", href: "#inicio" },
                { name: "Nosotros", href: "#nosotros" },
                { name: "Servicios", href: "#servicios" },
                { name: "Ofertas", href: "#planes" },
                { name: "Contacto", href: "#contacto" },
            ],
            cta: "Clientes",
        },
        hero: {
            title: <>Soluciones <span className="highlight">Tecnológicas</span> <br /> a tu Medida</>,
            badge: "Líderes en Innovación Digital",
            ctaPrimary: "Nuestras Ofertas",
            ctaSecondary: "Saber Más",
        },
        about: {
            badge: "Sobre Nosotros",
            title: <>Más de 20 años <br /> <span className="highlight">Liderando el Mercado</span></>,
            description: "Adriel's Systems nació con la visión de simplificar la tecnología para las empresas. Hoy somos un referente internacional en soluciones de infraestructura, desarrollo y automatización, ayudando a cientos de clientes a escalar sus negocios en la era digital.",
            years: "20+",
            yearsLabel: "Años de Experiencia",
            values: [
                {
                    title: "Tranquilidad y Seguridad",
                    description: "Protegemos tu infraestructura con los más altos estándares.",
                },
                {
                    title: "Innovación Constante",
                    description: "Implementamos las últimas tecnologías para mantenerte a la vanguardia.",
                },
                {
                    title: "Éxito del Cliente",
                    description: "Tu crecimiento es nuestro principal objetivo y motor.",
                }
            ]
        },
        services: {
            title: <>Nuestros <span className="highlight">Servicios</span></>,
            subtitle: "Soluciones integrales para llevar tu negocio al siguiente nivel.",
            items: {
                web: {
                    title: "Diseño y Desarrollo Web",
                    desc: "Creamos sitios web de alto impacto, optimizados para conversión y velocidad.",
                    features: ["Frontend Moderno", "PWA Ready", "SEO Optimizado", "Diseño UI/UX"]
                },
                hosting: {
                    title: "Hosting Premium",
                    desc: "Alojamiento ultra rápido con soporte 24/7 y seguridad integrada.",
                    features: ["Certificados SSL", "Backups diarios", "99.9% Uptime", "Panel de control"]
                },
                vps: {
                    title: "Servidores VPS",
                    desc: "Potencia elástica para tus aplicaciones más exigentes.",
                    features: ["Recursos dedicados", "Escalabilidad", "Root access", "Discos NVMe"]
                },
                automation: {
                    title: "Automatización e IA",
                    desc: "Soluciones inteligentes de automatización con chatbots, asistentes virtuales y flujos de trabajo personalizados. Infraestructura completa con N8N, Redis, PostgreSQL y APIs de Meta.",
                    features: ["Chatbots Web", "Agendadores de Citas", "Asistentes Empresariales", "Asistentes de Ventas"]
                }
            },
            cta: "Saber Más",
            ctaMessage: "Quiero saber más sobre"
        },
        pricing: {
            title: <>Ofertas <span className="highlight">Especiales</span></>,
            subtitle: "Soluciones diseñadas para impulsar tu negocio al siguiente nivel.",
            period: "inversión única",
            popularBadge: "Más Popular",
            cta: "Solicitar",
            ctaMessage: "Quiero contratar el",
            plans: [
                {
                    name: "Plan Emprendedor",
                    price: "350",
                    subtitle: "La puerta de entrada al mundo digital",
                    description: "Ideal para nuevos proyectos que buscan establecer su presencia online.",
                    features: [
                        "Página web One Page informativa",
                        "Registro de dominio incluido",
                        "Hosting básico + CPanel",
                        "Certificado SSL",
                        "1 correo corporativo"
                    ]
                },
                {
                    name: "Plan Profesional",
                    price: "650",
                    subtitle: "Estructura detallada y profesional",
                    description: "Para empresas que requieren mayor comunicación y presencia.",
                    features: [
                        "Sitio web multi-página (5 secciones)",
                        "Registro de dominio incluido",
                        "Hosting de alto rendimiento",
                        "Certificado SSL",
                        "Hasta 5 correos corporativos"
                    ]
                },
                {
                    name: "Plan Business Plus",
                    price: "1500",
                    subtitle: "Potencia máxima para tu negocio",
                    description: "Solución completa para E-commerce o gestión empresarial.",
                    features: [
                        "Web avanzada con E-commerce",
                        "Integración con otros sistemas",
                        "Registro de dominio + Hosting premium",
                        "Certificado SSL",
                        "Hasta 20 correos corporativos"
                    ]
                }
            ],
            support: {
                title: "Gestión y Soporte Técnico",
                text: "En Adriel's Systems nos encargamos de que tu plataforma siempre esté operativa. Ofrecemos la administración integral de tus servicios según tus requerimientos específicos.",
                label: "Tarifa mensual:",
                range: "Desde $30 hasta $200",
                note: "Escalable según complejidad"
            }
        },
        clients: {
            badge: "Nuestro Portafolio",
            title: <>Experiencia de <span className="highlight">Nuestros Clientes</span></>,
            subtitle: "Proyectos que transforman negocios y crean experiencias memorables",
            visit: "Visitar sitio",
            comingSoon: "Próximamente",
            items: [
                { description: "Remodelación y construcción de inmuebles.", category: "Construcción" },
                { description: "Venta y alquiler de propiedades en República Dominicana.", category: "Inmobiliaria" },
                { description: "Educación y coaching profesional.", category: "Educación" },
                { description: "Restaurant de sushi en Higuerote, Venezuela.", category: "Restaurante" },
                { description: "Fábrica de materiales para la construcción (CAL).", category: "Industria" },
                { description: "Venta de autos y servicios de envíos en EE.UU.", category: "Automotriz" }
            ]
        },
        contact: {
            title: <>Hablemos de tu <span className="highlight">Próximo Proyecto</span></>,
            subtitle: "Estamos listos para llevar tu infraestructura al siguiente nivel.",
            email: "cotizaciones@adrielssystems.com",
            phone: "+584222476127",
            location: "Ubicación",
            locationText: "Nueva Esparta, Isla de Margarita, Venezuela"
        },
        footer: {
            desc: "Más de dos décadas transformando el panorama tecnológico global con soluciones innovadoras y soporte de clase mundial.",
            links: "Enlaces",
            legal: "Legal",
            terms: "Términos",
            privacy: "Privacidad",
            cookies: "Cookies",
            security: "Seguridad",
            contact: "Contacto",
            rights: "Todos los derechos reservados."
        }
    },
    en: {
        navbar: {
            items: [
                { name: "Home", href: "#inicio" },
                { name: "About Us", href: "#nosotros" },
                { name: "Services", href: "#servicios" },
                { name: "Offers", href: "#planes" },
                { name: "Contact", href: "#contacto" },
            ],
            cta: "Clients",
        },
        hero: {
            title: <>Tailored <span className="highlight">Technological</span> <br /> Solutions</>,
            badge: "Leaders in Digital Innovation",
            ctaPrimary: "Our Offers",
            ctaSecondary: "Learn More",
        },
        about: {
            badge: "About Us",
            title: <>Over 20 Years <br /> <span className="highlight">Leading the Market</span></>,
            description: "Adriel's Systems was born with the vision of simplifying technology for businesses. Today, we are an international benchmark in infrastructure, development, and automation solutions, helping hundreds of clients scale their businesses in the digital era.",
            years: "20+",
            yearsLabel: "Years of Experience",
            values: [
                {
                    title: "Peace of Mind & Security",
                    description: "We protect your infrastructure with the highest standards.",
                },
                {
                    title: "Constant Innovation",
                    description: "We implement the latest technologies to keep you ahead.",
                },
                {
                    title: "Customer Success",
                    description: "Your growth is our main objective and driving force.",
                }
            ]
        },
        services: {
            title: <>Our <span className="highlight">Services</span></>,
            subtitle: "Comprehensive solutions to take your business to the next level.",
            items: {
                web: {
                    title: "Web Design & Development",
                    desc: "We create high-impact websites, optimized for conversion and speed.",
                    features: ["Modern Frontend", "PWA Ready", "SEO Optimized", "UI/UX Design"]
                },
                hosting: {
                    title: "Premium Hosting",
                    desc: "Ultra-fast hosting with 24/7 support and integrated security.",
                    features: ["SSL Certificates", "Daily Backups", "99.9% Uptime", "Control Panel"]
                },
                vps: {
                    title: "VPS Servers",
                    desc: "Elastic power for your most demanding applications.",
                    features: ["Dedicated Resources", "Scalability", "Root Access", "NVMe Drives"]
                },
                automation: {
                    title: "Automation & AI",
                    desc: "Intelligent automation solutions with chatbots, virtual assistants, and custom workflows. Complete infrastructure with N8N, Redis, PostgreSQL, and Meta APIs.",
                    features: ["Web Chatbots", "Appointment Schedulers", "Business Assistants", "Sales Assistants"]
                }
            },
            cta: "Learn More",
            ctaMessage: "I want to know more about"
        },
        pricing: {
            title: <>Special <span className="highlight">Offers</span></>,
            subtitle: "Solutions designed to boost your business to the next level.",
            period: "one-time investment",
            popularBadge: "Most Popular",
            cta: "Request",
            ctaMessage: "I want to hire the",
            plans: [
                {
                    name: "Entrepreneur Plan",
                    price: "350",
                    subtitle: "The gateway to the digital world",
                    description: "Ideal for new projects looking to establish their online presence.",
                    features: [
                        "One Page informational website",
                        "Domain registration included",
                        "Basic Hosting + CPanel",
                        "SSL Certificate",
                        "1 corporate email"
                    ]
                },
                {
                    name: "Professional Plan",
                    price: "650",
                    subtitle: "Detailed and professional structure",
                    description: "For companies requiring greater communication and presence.",
                    features: [
                        "Multi-page website (5 sections)",
                        "Domain registration included",
                        "High-performance Hosting",
                        "SSL Certificate",
                        "Up to 5 corporate emails"
                    ]
                },
                {
                    name: "Business Plus Plan",
                    price: "1500",
                    subtitle: "Maximum power for your business",
                    description: "Complete solution for E-commerce or business management.",
                    features: [
                        "Advanced Web with E-commerce",
                        "System integration (HealthCore)",
                        "Domain registration + Premium Hosting",
                        "SSL Certificate",
                        "Up to 20 corporate emails"
                    ]
                }
            ],
            support: {
                title: "Management & Technical Support",
                text: "At Adriel's Systems, we ensure your platform is always operational. We offer comprehensive administration of your services according to your specific requirements.",
                label: "Monthly fee:",
                range: "From $30 to $200",
                note: "Scalable according to complexity"
            }
        },
        clients: {
            badge: "Our Portfolio",
            title: <>Experience of <span className="highlight">Our Clients</span></>,
            subtitle: "Projects that transform businesses and create memorable experiences",
            visit: "Visit site",
            comingSoon: "Coming Soon",
            items: [
                { description: "Remodeling and construction of homes and spaces.", category: "Construction" },
                { description: "Property sales and rentals in Dominican Republic.", category: "Real Estate" },
                { description: "Education and professional coaching.", category: "Education" },
                { description: "Sushi restaurant in Higuerote, Venezuela.", category: "Restaurant" },
                { description: "Construction materials factory (Lime).", category: "Industry" },
                { description: "Car sales and shipping services in the USA.", category: "Automotive" }
            ]
        },
        contact: {
            title: <>Let's Talk About Your <span className="highlight">Next Project</span></>,
            subtitle: "We are ready to take your infrastructure to the next level.",
            email: "cotizaciones@adrielssystems.com",
            phone: "+58 422-2476127",
            location: "Location",
            locationText: "Nueva Esparta, Margarita Island, Venezuela"
        },
        footer: {
            desc: "Over two decades transforming the global technological landscape with innovative solutions and world-class support.",
            links: "Links",
            legal: "Legal",
            terms: "Terms",
            privacy: "Privacy",
            cookies: "Cookies",
            security: "Security",
            contact: "Contact",
            rights: "All rights reserved."
        }
    },
};
