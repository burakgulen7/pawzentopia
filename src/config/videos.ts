/**
 * Short muted loop videos (files in public/videos/). The page's photo stays underneath as the
 * fallback: it is shown on phones, with "reduce motion", and until the video has loaded.
 * Source: assets/videos/pension-original-marianna.MOV (original kept as an archive).
 * Each video exists twice with the same name: .webm (VP9) and .mp4 (H.264); the browser picks one.
 * To change a video: replace both files in public/videos/ (muted, ~5–10 s, ≤ 3 MB each).
 */
import type { ServiceKey } from '../i18n';

export const serviceVideos: Partial<Record<ServiceKey, { name: string; position: string }>> = {
  pension: { name: 'pension-maison', position: '50% 50%' },
};
