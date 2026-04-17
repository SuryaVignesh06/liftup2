import os
import glob

# The exact snippet we want to replace
old_html = """      <div class="header-right-group">
        <button class="btn-ticker-cta" onclick="location.href='apply.html'">Apply Now</button>
        <div class="live-status-badge" onclick="location.href='./#cohorts'">"""
        
# The index.html has standard './#cohorts'. Let's do a regex or just simple replacement.
import re

for filename in glob.glob("*.html"):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We want to match:
    # <div class="header-right-group">
    #   <button class="btn-ticker-cta" onclick="location.href='apply.html'">Apply Now</button>
    #   <div class="live-status-badge" onclick="location.href='...'">
    #     <span class="pulse-dot"></span>
    #     <span class="badge-text-prefix">COHORT 1 IS </span>LIVE
    #   </div>
    # </div>
    
    pattern = re.compile(
        r'<div class="header-right-group">\s*<button class="btn-ticker-cta" onclick="location\.href=\'apply\.html\'">Apply Now</button>\s*<div class="live-status-badge" onclick="location\.href=\'(.*?)\'">\s*<span class="pulse-dot"></span>\s*<span class="badge-text-prefix">COHORT 1 IS </span>LIVE\s*</div>\s*</div>',
        re.DOTALL
    )
    
    def replacer(match):
        href = match.group(1)
        return (f\'\'\'<div class="header-right-group">
        <div class="live-status-badge" onclick="location.href=\'{href}\'">
          <span class="pulse-dot"></span>
          <span class="badge-text-prefix">COHORT 1 IS </span>LIVE
        </div>
        <button class="btn-ticker-cta" onclick="location.href=\'apply.html\'">Apply Now</button>
      </div>\'\'\')
      
    content, count = pattern.subn(replacer, content)
    if count > 0:
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {filename}")
