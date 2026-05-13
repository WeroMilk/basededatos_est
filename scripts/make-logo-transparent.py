"""Quita el fondo negro del logo: píxeles oscuros en R, G y B -> alpha 0."""
from PIL import Image
import numpy as np
import sys

# Umbral alto para anti-alias del fondo negro; si se comen detalles oscuros del arte, bajar un poco.
DEFAULT_THRESH = 52


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else "public/logo-sonora.png"
    thresh = int(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_THRESH
    img = Image.open(path).convert("RGBA")
    a = np.array(img)
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    is_bg = (r <= thresh) & (g <= thresh) & (b <= thresh)
    a[:, :, 3] = np.where(is_bg, 0, a[:, :, 3])
    Image.fromarray(a, "RGBA").save(path, optimize=True)
    print("OK:", path, "thresh=", thresh)


if __name__ == "__main__":
    main()
