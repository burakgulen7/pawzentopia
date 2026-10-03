/**
 * PHOTO SLOTS — see FOTO_DEGISTIRME.md (Turkish guide).
 *
 * Every photo on the site lives in the folder `src/photos/`.
 * To replace a photo: upload a new file with the same name (e.g. `hero.jpg`) to that folder
 * and delete the old one. JPG, JPEG, PNG and WEBP work, at any size: the site resizes and
 * optimises them automatically when it is rebuilt.
 *
 * `position` = focal point ("horizontal% vertical%"): which part of the photo stays visible
 * when it has to be cropped. 50% 50% = centre, 0% = left/top, 100% = right/bottom.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

export type Slot =
  | 'hero'
  | 'familyCare'
  | 'training'
  | 'urgentCare'
  | 'visits'
  | 'approach'
  | 'social1'
  | 'social2'
  | 'social3'
  | 'social4';

type PhotoConfig = {
  /** File name in src/photos/ WITHOUT extension. */
  file: string;
  alt: Record<Lang, string>;
  position: string;
  /** Optional different focal point on phones. */
  positionMobile?: string;
};

export const photos: Record<Slot, PhotoConfig> = {
  hero: {
    file: 'hero',
    position: '50% 30%',
    positionMobile: '72% 100%',
    alt: {
      fr: 'Une gardienne souriante avec deux chiens dans un salon accueillant',
      en: 'A smiling carer with two dogs in a welcoming living room',
      tr: 'Sıcak bir oturma odasında iki köpekle gülümseyen bir bakıcı',
    },
  },
  familyCare: {
    file: 'garde-familiale',
    position: '50% 65%',
    alt: {
      fr: 'Une femme souriante serre un chien contre elle à la maison',
      en: 'A smiling woman hugging a dog at home',
      tr: 'Evde bir köpeğe sarılan gülümseyen bir kadın',
    },
  },
  training: {
    file: 'education',
    position: '50% 50%',
    alt: {
      fr: 'Séance d’éducation canine dans un jardin',
      en: 'A dog training session in a garden',
      tr: 'Bahçede bir köpek eğitimi seansı',
    },
  },
  urgentCare: {
    file: 'urgence',
    position: '50% 25%',
    alt: {
      fr: 'Une femme embrasse un chien sur la tête',
      en: 'A woman kissing a dog on the head',
      tr: 'Bir köpeği başından öpen bir kadın',
    },
  },
  visits: {
    file: 'visites',
    position: '50% 25%',
    alt: {
      fr: 'Une femme porte un petit chien blanc sur un chemin ensoleillé',
      en: 'A woman carrying a small white dog on a sunny path',
      tr: 'Güneşli bir yolda küçük beyaz bir köpeği kucağında taşıyan bir kadın',
    },
  },
  approach: {
    file: 'approche',
    position: '50% 45%',
    alt: {
      fr: 'Une femme accroupie avec un chien sur un chemin en forêt',
      en: 'A woman crouching with a dog on a forest path',
      tr: 'Orman yolunda bir köpekle çömelmiş bir kadın',
    },
  },
  social1: {
    file: 'social-1',
    position: '50% 30%',
    alt: {
      fr: 'Une femme tient un chien dans ses bras',
      en: 'A woman holding a dog in her arms',
      tr: 'Kucağında bir köpek tutan bir kadın',
    },
  },
  social2: {
    file: 'social-2',
    position: '50% 40%',
    alt: {
      fr: 'Une femme serre contre elle un petit chien blanc en pull rayé',
      en: 'A woman hugging a small white dog in a striped jumper',
      tr: 'Çizgili kazak giymiş küçük beyaz bir köpeğe sarılan bir kadın',
    },
  },
  social3: {
    file: 'social-3',
    position: '50% 25%',
    alt: {
      fr: 'Une femme porte un petit chien blanc sur un chemin ensoleillé',
      en: 'A woman carrying a small white dog on a sunny path',
      tr: 'Güneşli bir yolda küçük beyaz bir köpeği kucağında taşıyan bir kadın',
    },
  },
  social4: {
    file: 'social-4',
    position: '50% 35%',
    alt: {
      fr: 'Selfie d’une femme souriante avec un chien dans la nature',
      en: 'A selfie of a smiling woman with a dog outdoors',
      tr: 'Doğada bir köpekle gülümseyen bir kadının özçekimi',
    },
  },
};

// All images in src/photos/, any supported extension.
const files = import.meta.glob<{ default: ImageMetadata }>('../photos/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}', {
  eager: true,
});
// If two files share a name (e.g. hero.png and hero.jpg), the newer-looking format wins.
const priority = ['jpg', 'jpeg', 'webp', 'png'];

export function getPhoto(slot: Slot) {
  const cfg = photos[slot];
  const matches = Object.keys(files)
    .filter((p) => p.replace(/^.*\//, '').replace(/\.[^.]+$/, '') === cfg.file)
    .sort(
      (a, b) =>
        priority.indexOf(a.split('.').pop()!.toLowerCase()) - priority.indexOf(b.split('.').pop()!.toLowerCase()),
    );
  if (!matches.length) {
    throw new Error(`Fotoğraf bulunamadı / photo missing: src/photos/${cfg.file}.(jpg|png|webp)`);
  }
  return { ...cfg, src: files[matches[0]].default };
}
