import re

with open('src/mentor-hype.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix the body background color that got accidentally replaced
css = css.replace('body.hype-theme {\n  background-color: #111111;', 'body.hype-theme {\n  background-color: #ffffff;')

# Fix the top-cta-bar color
css = css.replace('.top-cta-bar { background: rgba(0, 0, 0, 0.9)', '.top-cta-bar { background: rgba(255, 255, 255, 0.9)')

with open('src/mentor-hype.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed CSS file.")
