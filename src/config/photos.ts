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

export type Slot = 'hero' | 'familyCare' | 'training' | 'urgentCare' | 'transport' | 'approach';

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
      ru: 'Улыбающаяся няня с двумя собаками в уютной гостиной',
      tr: 'Sıcak bir oturma odasında iki köpekle gülümseyen bir bakıcı',
    },
  },
  familyCare: {
    file: 'garde-familiale',
    position: '50% 50%',
    alt: {
      fr: 'Une gardienne souriante et un chien dans un salon',
      en: 'A smiling carer and a dog in a living room',
      ru: 'Улыбающаяся няня и собака в гостиной',
      tr: 'Oturma odasında gülümseyen bir bakıcı ve bir köpek',
    },
  },
  training: {
    file: 'education',
    position: '50% 50%',
    alt: {
      fr: 'Séance d’éducation canine dans un jardin',
      en: 'A dog training session in a garden',
      ru: 'Занятие по дрессировке собаки в саду',
      tr: 'Bahçede bir köpek eğitimi seansı',
    },
  },
  urgentCare: {
    file: 'urgence',
    position: '50% 50%',
    alt: {
      fr: 'Une gardienne souriante veille sur un chien dans un salon',
      en: 'A smiling carer looks after a dog in a living room',
      ru: 'Улыбающаяся няня присматривает за собакой в гостиной',
      tr: 'Oturma odasında bir köpeğe göz kulak olan gülümseyen bir bakıcı',
    },
  },
  transport: {
    file: 'transport',
    position: '50% 50%',
    alt: {
      fr: 'Un chien installé dans une caisse de transport en voiture',
      en: 'A dog settled in a travel crate in a car',
      ru: 'Собака в транспортной переноске в машине',
      tr: 'Arabada taşıma kafesine yerleşmiş bir köpek',
    },
  },
  approach: {
    file: 'approche',
    position: '50% 45%',
    alt: {
      fr: 'La gardienne de PawZenTopia serre un chien contre elle en souriant',
      en: 'The PawZenTopia carer smiling and hugging a dog',
      ru: 'Няня PawZenTopia с улыбкой обнимает собаку',
      tr: 'PawZenTopia bakıcısı gülümseyerek bir köpeğe sarılıyor',
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
