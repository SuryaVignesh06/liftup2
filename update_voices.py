import json
import re

students = [
    ("Dhakshinya perumalla", "CSE", "The workshop was very nice. I learned about how AI actually works and how we can use it to increase our productivity.The Workshop is very interactive and I learned so much. Thank you for the wonderful opportunity."),
    ("GONGADA JASWANTH", "CSE", "The class is so nice that we can understand so easily. More interactive and learning class"),
    ("Diwakar", "CSE", "The sessions were very jovial and interactive, making the overall experience engaging and enjoyable. It also provided good exposure to a corporate-style learning environment. Overall, it was a valuable and insightful experience."),
    ("L. Amara Lokesh", "CSE", "The GenAI training program was very insightful and informative. I learned many valuable concepts and practical ideas about Generative AI. The sessions were clear and easy to understand. Overall, it was a great learning experience. 🚀"),
    ("K.Sujitha", "AI&ML", "The classes were so interactive and helped us overcome our Shyness and fear of speaking.It helped us in gaining confidence. The sessions were good and gained knowledge on Gen AI topics.Doing practicals on what we learnt really helped us in understanding them better. Rishi sir teaching was good. He explained the topics again if anyone could not understand.He is friendly and supportive."),
    ("Hehram", "CSE", "Overall great experience learnt new things"),
    ("Abdul Thafel", "CS&BS", "It was a pleasing session I learnt a lot that I am not even aware of and sir helped alot to know about it and also used manytools that made our work easier ...also got exposure to many more platforms where we can know and learn things...overall it was a great experience"),
    ("K Naga Sai Pavani", "IT", "Never before ever after session.Mentor Rishi sir is too good.I have attended many workshops like this but this workshop is on my top priority as there are more practicals than theoretical classes"),
    ("Kanala Geetha Pranathi", "IT", "More practicals less theoretical classes. This kind of practice is very helpful for students to build projects. Thank you for this kind of workshop"),
    ("Gude Gopi Krishna", "IT", "More practicals less theoretical classes. This kind of practice is very helpful for students to build projects. Thank you for this kind of workshop."),
    ("Merla Hemanth satyanarayana", "AI&DS", "The classes helped me understand how AI can assist in coding, problem solving. Overall, the program enhanced my knowledge about modern AI technologies and was a valuable learning experience."),
    ("PALLA MURALI KRISHNA", "AI&ML", "Sir, the Generative AI sessions were very informative and engaging. The way you explained the concepts made it easy for us to understand even complex topics. The projects you assigned were especially helpful because they gave us hands-on experience and showed us how Generative AI can be applied in real-world applications. Through these projects, we were able to improve our practical skills and understand how AI tools can be integrated into development. Overall, this learning experience was very valuable and inspiring for us. It helped us gain confidence in using AI technologies and also motivated us to explore more in the field of artificial intelligence. Thank you for guiding us and providing such a great opportunity to learn and work on practical GenAI projects.")
]

html_cards = []
gradients = [
    "linear-gradient(135deg, #EA4335, #F09BBE)",
    "linear-gradient(135deg, #EA4335, #FBBC04)",
    "linear-gradient(135deg, #4285F4, #4B31E3)",
    "linear-gradient(135deg, #34A853, #FBBC04)"
]

for i, (name, branch, text) in enumerate(students):
    avatar = "".join([part[0].upper() for part in name.split() if part.isalpha()][:2])
    if not avatar:
        avatar = name[0].upper()
    grad = gradients[i % len(gradients)]
    card = f"""        <div class="voice-card">
          <div class="voice-card-inner">
            <div class="voice-card-fill" style="background: {grad};"></div>
            <div class="voice-card-body">
              <div class="voice-quote-mark">"</div>
              <p class="voice-text">"{text}"</p>
              <div class="voice-attr">
                <div class="voice-avatar">{avatar}</div>
                <div>
                  <div class="voice-name">{name}</div>
                  <div class="voice-role">{branch}</div>
                </div>
              </div>
            </div>
          </div>
        </div>"""
    html_cards.append(card)

# Need 2 sets to make the infinite scroll smooth
track_inner = "\n".join(html_cards) + "\n" + "\n".join(html_cards)

marquee_html = f"""      <div class="marquee-wrapper">
        <div class="marquee-track">
{track_inner}
        </div>
      </div>"""

# Replace in file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We look for <div class="voices-grid"> ... </div>
import re
new_content = re.sub(r'<div class="voices-grid">.*?</div>\n    </div>\n  </section>', marquee_html + '\n    </div>\n  </section>', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
