# Estructura del Proyecto y Tecnologías

Este archivo sirve como memoria persistente para entender la arquitectura, tecnologías y patrones de diseño utilizados en el proyecto `Adriel's Systems`.

## Tecnologías Principales

-   **Framework**: Next.js 16.1.1 (App Router)
-   **Lenguaje**: TypeScript
-   **Estilos**: CSS Modules (`*.module.css`) + Global CSS (`globals.css`)
-   **Animaciones**: `framer-motion`
-   **Iconos**: `lucide-react`
-   **Renderizado**: React 19
-   **Despliegue**: Configurado para `output: "standalone"` (Docker/Contenedores)

## Estructura del Directorio `src`

```text
src/
├── app/                 # App Router (Páginas y Layouts)
│   ├── api/             # API Routes
│   ├── layout.tsx       # Root Layout (incluye LanguageProvider y Chatbot)
│   ├── globals.css      # Variables CSS y estilos globales
│   ├── page.tsx         # Página de inicio
│   ├── legal/           # Páginas legales (Términos, Privacidad, etc.)
│   └── signin/          # Página de inicio de sesión
├── components/          # Componentes de React
│   ├── sections/        # Secciones completas de página (Hero, About, etc.)
│   └── ui/              # Componentes UI reutilizables (Chatbot)
├── context/             # React Context
│   └── LanguageContext.tsx # Manejo de estado para i18n (es/en)
└── data/                # Datos estáticos
    └── translations.tsx # Textos y traducciones
```

## Estrategia de Estilos

-   **CSS Puro & Módulos**: No se utiliza Tailwind CSS. Se prefieren los CSS Modules para componentes específicos para evitar colisiones de nombres.
-   **Variables Globales**: Definidas en `src/app/globals.css` usando formato HSL para facilitar la manipulación de colores.
    -   Ejemplo: `--primary: 200 100% 50%;`
-   **Diseño**:
    -   **Glassmorphism**: Clase utilitaria `.glass` en `globals.css`.
    -   **Tipografía**: Google Fonts (Bruno Ace SC para títulos, Roboto para cuerpo).
    -   **Responsivo**: Media queries estándar en CSS.

## Gestión de Estado y Datos

-   **Internacionalización (i18n)**:
    -   Implementación manual usando `LanguageContext`.
    -   Persistencia en `localStorage`.
    -   Textos almacenados en objetos estáticos en `src/data/translations.tsx`.
-   **Datos de Secciones**:
    -   La información mostrada en las secciones (Servicios, Precios, etc.) parece estar codificada directamente en los componentes o alimentada por el archivo de traducciones.

## Componentes Clave

-   **RootLayout**: Envuelve la aplicación con el contexto de idioma y renderiza el Chatbot globalmente.
-   **Secciones**: La página principal (`page.tsx`) probablemente compone estas secciones importadas de `src/components/sections`.
