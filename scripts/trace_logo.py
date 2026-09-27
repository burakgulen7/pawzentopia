"""Automatic tracing (potrace algorithm) of the original raster logo into SVG.

No shape is redrawn by hand: the SVG is produced by tracing the dark pixels of
assets/brand/pawzentopia-logo-original.jpeg (untouched). Output:
  src/assets/brand/logo-traced.svg          full logo (mark + wordmark), filled
  src/assets/brand/logo-intro.json          per-shape outlines for the intro animation
Run: pip install potracer pillow numpy && python3 scripts/trace_logo.py
"""
import json
import numpy as np
import potrace
from PIL import Image

SRC = 'assets/brand/pawzentopia-logo-original.jpeg'
SCALE = 1024 / 2048  # trace at 1024 px; coordinates are expressed in original 2048 px space

img = Image.open(SRC).convert('L')
small = img.resize((1024, 1024), Image.LANCZOS)
# potracer traces the boundaries of the False region, so pass the background as True.
bitmap = np.array(small) >= 128

plist = potrace.Bitmap(bitmap).trace(turdsize=6, alphamax=1.0, opticurve=True, opttolerance=0.2)

def fmt(p):
    return f'{p.x / SCALE:.0f} {p.y / SCALE:.0f}'

def curve_d(curve):
    d = [f'M{fmt(curve.start_point)}']
    for seg in curve.segments:
        if seg.is_corner:
            d.append(f'L{fmt(seg.c)}L{fmt(seg.end_point)}')
        else:
            d.append(f'C{fmt(seg.c1)} {fmt(seg.c2)} {fmt(seg.end_point)}')
    d.append('Z')
    return ''.join(d)

def bbox(curve):
    pts = [curve.start_point] + [s.end_point for s in curve.segments]
    xs = [p.x / SCALE for p in pts]; ys = [p.y / SCALE for p in pts]
    return min(xs), min(ys), max(xs), max(ys)

shapes = []
for c in plist:
    x0, y0, x1, y1 = bbox(c)
    region = 'text' if y0 > 1245 else ('lotus' if y1 < 330 and x0 > 1040 else 'mark')
    shapes.append({'d': curve_d(c), 'region': region, 'bbox': [x0, y0, x1, y1]})

def compound(regions):
    return ''.join(s['d'] for s in shapes if s['region'] in regions)

# Tight viewBoxes
def vb(regions, pad=20):
    bs = [s['bbox'] for s in shapes if s['region'] in regions]
    x0 = min(b[0] for b in bs) - pad; y0 = min(b[1] for b in bs) - pad
    x1 = max(b[2] for b in bs) + pad; y1 = max(b[3] for b in bs) + pad
    return [round(x0), round(y0), round(x1 - x0), round(y1 - y0)]

full_vb = vb(['mark', 'lotus', 'text'])
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{" ".join(map(str, full_vb))}">'
       f'<path fill="#01504f" fill-rule="evenodd" d="{compound(["mark", "lotus", "text"])}"/></svg>\n')
open('src/assets/brand/logo-traced.svg', 'w').write(svg)

# Stroke order for the "line reveal": outer/larger shapes first, lotus last.
mark_shapes = [s for s in shapes if s['region'] == 'mark']
mark_shapes.sort(key=lambda s: (s['bbox'][1]))
lotus_shapes = [s for s in shapes if s['region'] == 'lotus']
intro = {
    'viewBox': full_vb,
    'markViewBox': vb(['mark', 'lotus']),
    'textViewBox': vb(['text']),
    'strokes': [s['d'] for s in mark_shapes + lotus_shapes],
    'markFill': compound(['mark', 'lotus']),
    'textFill': compound(['text']),
}
json.dump(intro, open('src/assets/brand/logo-intro.json', 'w'))
print(len(shapes), 'shapes;', {r: sum(1 for s in shapes if s['region'] == r) for r in ('mark', 'lotus', 'text')}, full_vb, intro['markViewBox'])
