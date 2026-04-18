import re

with open('src/mentor-hype.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Theme overrides
css = css.replace('background-color: #080808;', 'background-color: #ffffff;')
css = css.replace('color: #ffffff;', 'color: #111111;')

# Nav/Footer (lines 31-35)
css = css.replace('rgba(8, 8, 8, 0.9)', 'rgba(255, 255, 255, 0.9)')
css = css.replace('background-color: #050505 !important;', 'background-color: #f7f7f7 !important;')
css = css.replace('color: #ffffff !important;', 'color: #111111 !important;')
css = css.replace('background: #ffffff !important;', 'background: #111111 !important;')

# Replace explicit dark bounds
css = css.replace('background: #0e0e0e;', 'background: #fafafa;')
css = css.replace('background: #0f0f0f;', 'background: #fafafa;')

# Color resets
css = css.replace('color: #fff;', 'color: #111111;')
css = css.replace('color: #ffffff;', 'color: #111111;')
css = css.replace('color: #fff', 'color: #111111')

# Now apply RGBA replacements (rgba(255,255,255, x) -> rgba(0,0,0, x * factor))
def rgba_replacer(match):
    alpha = float(match.group(1))
    
    # Custom tweaks mapped to what looks good on white
    if alpha < 0.1:
        new_alpha = 0.08
    elif alpha < 0.2:
        new_alpha = 0.15
    elif alpha < 0.3:
        new_alpha = 0.3
    elif alpha < 0.4:
        new_alpha = 0.45
    elif alpha < 0.6:
        new_alpha = 0.65
    elif alpha < 0.8:
        new_alpha = 0.8
    else:
        new_alpha = 0.9
        
    return f"rgba(0, 0, 0, {new_alpha})"

css = re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)', rgba_replacer, css)

with open('src/mentor-hype.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Inverted successfully.")
