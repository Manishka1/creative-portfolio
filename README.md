# ✨ Manishka Singh — Creative Portfolio

A modern, responsive portfolio website built with pure **HTML5, CSS3, and JavaScript** (no external frameworks or build tools required).

Designed for **Manishka Singh**: Content Creator, Pop Culture Writer, Social Media Creative, and Video Editor behind **@innocent_infp** (26.8K+ followers, 310K+ monthly views) and **@popncom**.

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Open
Simply double-click or right-click `index.html` and choose **Open with** -> **Google Chrome / Edge / Firefox**.

### Option 2: Local HTTP Server (Recommended)
In PowerShell or terminal:
```pwsh
cd "C:\Users\HP\.gemini\antigravity\scratch\manishka-portfolio"
python -m http.server 8000
```
Then open: [http://localhost:8000](http://localhost:8000)

---

## 📸 How to Add More Screenshots

Whenever you upload new screenshots of your work, viral posts, or brand campaigns:

### Step 1: Save the Image
Save your image into the `assets/` folder with an intuitive name (e.g. `assets/work-new-campaign.jpg`).

### Step 2: Open `script.js`
Locate the `projectsData` array at the top of [script.js](file:///C:/Users/HP/.gemini/antigravity/scratch/manishka-portfolio/script.js) and add a new item:

```javascript
{
  id: "item-new-1",
  category: "brand", // choose: "viral", "brand", "story", "writing", or "video"
  title: "Your Campaign Title",
  badge: "🤝 Brand Collaboration",
  image: "assets/work-new-campaign.jpg",
  thumb: "assets/work-new-campaign.jpg",
  stat: "150K+ Impressions • 12% CTR",
  overview: "Explain what this campaign or post was about...",
  strategy: "The hook, visual framing, and copywriting strategy...",
  results: [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3"
  ]
}
```

### Step 3: Refresh Your Browser!
The new work card will automatically be viewable, filterable by category, and full-screen previewable in the lightbox with its strategy breakdown!

---

## 🎨 Key Features & Sections Included

1. **Ambient Glassmorphism & Dual Themes**:
   - Modern Dark Mode (default) with deep midnight violet tones and radiant ambient glow.
   - Clean Light Mode with high-contrast editorial aesthetics.
   - Persistent theme setting in `localStorage`.

2. **Hero Section**:
   - High-impact headline: *"Turning Ideas Into Stories People Genuinely Connect With"*.
   - Floating interactive creator card featuring Manishka's portrait and verified creator badge.
   - Floating metric badges: *163K+ Likes on a Single Post*, *310K+ Monthly Reach*, and *Boo App Brand Partner*.

3. **Live Impact & Growth Counters**:
   - Animated count-up metrics powered by `IntersectionObserver`:
     - **26,800+** Community on `@innocent_infp`
     - **310,000+** Monthly Views
     - **163,000+** Organic Likes on 1 Post
     - **200+** Original Works Created
     - **4+** Years of Creator Longevity

4. **Interactive Work & Case Study Lightbox**:
   - Filter by: `All Work`, `Viral Posts`, `Brand Collabs`, `Stories & Community`, `Writing & Essays`, `Video Editing`.
   - Clicking any work card opens a full-screen modal showing the high-resolution screenshot, key metrics, creative strategy, and key results.
   - Keyboard navigation (`Left`/`Right` arrow keys to cycle, `Escape` to close).

5. **Writing & Essays Spotlight**:
   - Spotlighting her cultural essays and reviews at `manishkasingh.wordpress.com`.
   - Includes an in-browser excerpt reader modal so visitors can read sample articles directly without leaving the page.

6. **Video Editing Showcase (@popncom)**:
   - Spotlight on short-form editing, pacing, DaVinci Resolve, and CapCut.
   - Interactive timeline visualizer with audio waveform animation and editing technique breakdowns.

7. **Skills & Creative Toolkit**:
   - Categorized into Content/Writing, Social Media Strategy, and Video/Visual Design.
   - Interactive proficiency bars and daily software badges (`DaVinci Resolve`, `CapCut`, `Canva`, `Ibis Paint`, `ChatGPT`, etc.).

8. **Experience & Education Timeline**:
   - Education: **MCA** from IET Lucknow (2023–2025) and **B.Sc. Mathematics** from St. John's College Agra (2020–2023).
   - Experience: Founder of `@innocent_infp`, Culture Writer, and Video Editor at `@popncom`.
   - Built-in Resume Viewer modal and one-click download for `manishka-resume.jpg`.

9. **Contact & Collaboration Section**:
   - Direct links to Email, WhatsApp/Phone, Instagram (`@innocent_infp`, `@popncom`), and WordPress.
   - One-click copy email button with instant toast notification.
   - Interactive inquiry form with client-side validation and auto-opening `mailto:` fallback.
# creative-portfolio
