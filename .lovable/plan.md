

# Portfolio Website for Muhammad Ali Anwar — Senior QA Engineer / Test Lead

## Design System
- **Colors**: White background (#FAFBFC), dark navy blue (#1B2A4A) for headings/accents, muted teal-green (#2D8A6E) for highlights, light gray (#F0F2F5) for alternating sections
- **Typography**: Clean sans-serif, large bold headings, generous whitespace, Scandinavian minimalism
- **Animations**: Subtle fade-in on scroll, smooth anchor scrolling, animated counters — no flashy effects

## Sections (Single Page, Top-to-Bottom)

### 1. Navigation Bar
- Fixed top nav with name logo and section links
- "Explore My Journey" CTA button in nav

### 2. Hero Section
- Left: Professional portrait placeholder (circular, dark border)
- Right: Name, title, tagline ("I design quality systems — not just test cases."), CTA button
- Clean two-column layout with generous padding

### 3. Interactive Journey Map
- Stylized SVG path from Pakistan → Norway with animated dashed line
- Milestone nodes along the path: University of Bahawalpur → University of Stavanger → Laerdal Medical → Equinor → Sekal → Lyse
- Each node is clickable, revealing a short achievement summary in a tooltip/popover

### 4. Career Evolution Timeline
- Horizontal or vertical timeline showing transformation stages:
  Developer → QA → Automation → CI/CD Integration → QA Strategy Design → Test Leadership
- Each stage with icon and brief descriptor

### 5. Case Studies Section
- Four professional cards (Equinor, Sekal, Lyse, Laerdal Medical)
- Each card expandable or with tabs showing: Context, Action, Impact, Leadership Contribution
- Dark navy card headers, clean internal layout

### 6. Impact & Results (Animated Counters)
- Grid of metric cards with count-up animations on scroll
- Metrics: Deployment stability, regression reduction, QA frameworks built, systems integrated, CI/CD governance

### 7. Quality Philosophy
- Icon grid with 5 pillars: Risk-based testing, Shift-left, Automation as safety net, CI/CD governance, Collaboration over silos

### 8. DevOps & AI in QA
- Two-column layout: DevOps tools (Docker, YAML, CI/CD gates) and AI capabilities (requirement analysis, test generation, log summarization)

### 9. Leadership & Consulting Readiness
- Clean list/cards: Stakeholder communication, deadline challenge, story refinement, Playwright training

### 10. Closing / Contact Section
- "Let's Build Reliable Systems" headline
- Professional contact CTA (email, LinkedIn placeholders)
- Subtle dark navy background with white text

## Implementation Approach
- Single `Index.tsx` page with component per section
- Intersection Observer for scroll-triggered fade-in animations
- SVG-based journey map with CSS animations
- Responsive design (desktop-first, mobile-friendly)

