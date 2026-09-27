"""Create non-destructive web derivatives of the original PawZenTopia logo.

The original file (assets/brand/pawzentopia-logo-original.jpeg) is never modified.
Only near-white background pixels become transparent; lines and typography are untouched.
Run: python3 scripts/make_logo.py
"""
from PIL import Image

SRC = "assets/brand/pawzentopia-logo-original.jpeg"
OUT = "src/assets/brand"

img = Image.open(SRC).convert("RGB")


def transparent(im):
    """Map near-white to transparent with a soft ramp so anti-aliased edges stay smooth."""
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            lum = min(r, g, b)
            if lum >= 235:
                px[x, y] = (r, g, b, 0)
            elif lum >= 200:
                px[x, y] = (r, g, b, int(255 * (235 - lum) / 35))
    return im


def trim(im, pad):
    bbox = im.getchannel("A").point(lambda a: 255 if a > 40 else 0).getbbox()
    im = im.crop(bbox)
    w, h = im.size
    canvas = Image.new("RGBA", (w + 2 * pad, h + 2 * pad), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad))
    return canvas


full = trim(transparent(img), 24)
full.save(f"{OUT}/logo-full.png", optimize=True)

# Mark only: the house + circle + PZT monogram (everything above the wordmark).
mark = trim(transparent(img.crop((0, 0, 2048, 1245))), 16)
mark.save(f"{OUT}/logo-mark.png", optimize=True)

# Favicons (square, mark centred on the cream page colour for legibility in tabs).
def square(im, size, bg):
    w, h = im.size
    s = max(w, h)
    canvas = Image.new("RGBA", (s, s), bg)
    canvas.alpha_composite(im, ((s - w) // 2, (s - h) // 2))
    return canvas.resize((size, size), Image.LANCZOS)

square(mark, 180, (252, 250, 244, 255)).convert("RGB").save("public/apple-touch-icon.png", optimize=True)
square(mark, 64, (0, 0, 0, 0)).save("public/favicon.png", optimize=True)
square(mark, 48, (0, 0, 0, 0)).save("public/favicon.ico", sizes=[(48, 48), (32, 32), (16, 16)])
print(full.size, mark.size)
