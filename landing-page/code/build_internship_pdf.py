import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
import markdown2

# CONFIG
DOCS_DIR = "docs"
OUTPUT_PDF = "Internship_Report_Hamza_20-09-2025.pdf"

# Create doc template
doc = SimpleDocTemplate(
    OUTPUT_PDF, pagesize=A4,
    rightMargin=36, leftMargin=36,
    topMargin=36, bottomMargin=36
)

# Styles (use unique names to avoid KeyError)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="MyTitle", fontSize=24, leading=28, alignment=1, textColor=colors.HexColor("#1f4b99"), spaceAfter=8))
styles.add(ParagraphStyle(name="MySubTitle", fontSize=13, leading=16, alignment=1, textColor=colors.HexColor("#345ec1"), spaceAfter=20))
styles.add(ParagraphStyle(name="MyHeading", fontSize=16, leading=20, textColor=colors.HexColor("#1f4b99"), spaceBefore=12, spaceAfter=6))
styles.add(ParagraphStyle(name="MySubHeading", fontSize=13, leading=16, textColor=colors.HexColor("#2f6fc8"), spaceBefore=8, spaceAfter=6))
styles.add(ParagraphStyle(name="MyBody", fontSize=11, leading=15, textColor=colors.black, spaceAfter=8))
styles.add(ParagraphStyle(name="MyCode", fontName="Courier", fontSize=9, leading=12, backColor=colors.HexColor("#f5f7fb"), spaceAfter=6, leftIndent=6, rightIndent=6))

# Helpers
def read_md_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def md_to_paragraphs(md_text):
    html = markdown2.markdown(md_text)
    html = html.replace("<h1>", "<h2>").replace("</h1>", "</h2>")
    html = html.replace("<ul>", "").replace("</ul>", "")
    html = html.replace("<ol>", "").replace("</ol>", "")
    html = html.replace("<li>", "• ").replace("</li>", "<br/>")
    html = html.replace("<p>", "").replace("</p>", "<br/>")
    import re
    text = re.sub(r"<[^>]+>", "", html)
    lines = [ln.strip() for ln in text.split("<br/>") if ln.strip()]
    return lines

# Build content
story = []

# COVER
story.append(Paragraph("ServiceHive UI/UX Intern Assignment", styles["MyTitle"]))
story.append(Paragraph("AI Service Landing Page & Chatbot Design", styles["MySubTitle"]))
story.append(Paragraph("Name: Hamza", styles["MyBody"]))
story.append(Paragraph("Date: 20-09-2025", styles["MyBody"]))
story.append(Spacer(1, 12))

# Docs order
order = [
    ("Assignment 1 – Landing Page", "assignment1_personas.md", "assignment1_flows.md", "assignment1_wireframes.md", "assignment1_concept_note.md"),
    ("Assignment 2 – Chatbot", "assignment2_personas.md", "assignment2_flows.md", "assignment2_wireframes.md", "assignment2_concept_note.md")
]

for section_title, *files in order:
    story.append(PageBreak())
    story.append(Paragraph(section_title, styles["MyHeading"]))
    story.append(Spacer(1,6))
    for fname in files:
        fpath = os.path.join(DOCS_DIR, fname)
        if not os.path.exists(fpath):
            story.append(Paragraph(f"[Missing file: {fname} — add it to docs/]", styles["MyBody"]))
            continue
        raw_md = read_md_file(fpath)
        lines = md_to_paragraphs(raw_md)
        for ln in lines:
            if ln.endswith(":") and len(ln) < 80:
                story.append(Paragraph(ln, styles["MySubHeading"]))
            else:
                story.append(Paragraph(ln, styles["MyBody"]))
        if "wireframes" in fname:
            story.append(Spacer(1,6))
            story.append(Paragraph("[INSERT SCREENSHOT: desktop wireframe]", styles["MyBody"]))
            story.append(Spacer(1,4))
            story.append(Paragraph("[INSERT SCREENSHOT: mobile wireframe]", styles["MyBody"]))
            story.append(Spacer(1,8))

# Combined insights & conclusion
story.append(PageBreak())
story.append(Paragraph("Combined Insights", styles["MyHeading"]))
story.append(Paragraph(
    "The landing page and chatbot together deliver a cohesive AI-first experience. The landing page drives discovery and conversion while the chatbot improves engagement, support, and demo scheduling. Accessibility, clear CTAs, and trust signals are prioritized throughout.",
    styles["MyBody"]
))

story.append(Paragraph("Conclusion & Next Steps", styles["MyHeading"]))
story.append(Paragraph(
    "Next steps: prepare high-res screenshots, add prototype links (Figma/figshare), run a quick usability test, and iterate the copy based on user feedback.",
    styles["MyBody"]
))

story.append(Paragraph("Thank You", styles["MyHeading"]))
story.append(Paragraph("Contact: Hamza", styles["MyBody"]))

# Build PDF
doc.build(story)
print("✅ PDF built:", OUTPUT_PDF)
