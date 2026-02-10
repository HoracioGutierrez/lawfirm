# Estevez Estudio Jurídico

Sitio web del estudio jurídico Estevez, desarrollado con Next.js. Incluye páginas informativas sobre el estudio, sus abogados, servicios legales ofrecidos, preguntas frecuentes y un formulario de contacto funcional.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Formularios**: React Hook Form + Yup
- **Emails**: Resend
- **Deploy**: Vercel

## Requisitos previos

- Node.js 18+
- npm o pnpm

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd lawfirm

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con los valores reales
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de [Resend](https://resend.com/) para envío de emails |
| `CONTACT_EMAILS` | Emails que reciben las consultas del formulario (separados por coma) |

## Scripts

```bash
npm run dev      # Servidor de desarrollo (http://localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## Estructura del proyecto

```
app/
├── about/            # Página "Quiénes somos"
│   └── [nombre]/     # Perfil individual de abogado
├── api/send/         # API route para envío de emails
├── contact/          # Formulario de contacto
├── faq/              # Preguntas frecuentes
├── policies/         # Política de privacidad
├── services/         # Servicios legales
│   └── [type]/       # Detalle de cada servicio
└── terms/            # Términos y condiciones
actions/              # Server actions (envío de email)
components/           # Componentes reutilizables
public/               # Imágenes y assets estáticos
```

## Deploy

El proyecto está configurado para deploy en [Vercel](https://vercel.com/). Las variables de entorno deben configurarse en el panel de Vercel.
