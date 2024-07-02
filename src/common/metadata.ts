import type { Metadata } from "next";

export const metadataED: Metadata = {
    metadataBase: new URL('https://edbotcito-psi.vercel.app'),
    title: {
        template: '%s | EDBotcito',
        default: 'Bienvenido | EDBotcito'
    },
    description: 'Genera historias espectaculares para tus hijos de una manera muy sencilla',
    authors: {
        name: 'Juan Manuel Ledesma Rangel',
        url: 'https://github.com/JuanMaLR'
    },
    generator: 'Next.js',
    openGraph: {
        title: 'EDbotcito - Crea tu historia',
        description: 'Genera historias espectaculares para tus hijos de una manera muy sencilla',
        url: 'https://edbotcito-psi.vercel.app',
        siteName: 'EDbotcito',
        images: {
            url: 'https://edbotcito-psi.vercel.app/images/edbotcito.png'
        }
    }
};