# Evan Gilman Portfolio

A clean, dark-themed portfolio site for video production work.

## Structure

```
evan-portfolio/
├── index.html        # Homepage - reel + featured work
├── content.html      # All content with filters
├── about.html        # Bio + BTS carousel + casting credits
├── contact.html      # Contact info
├── style.css         # All styles
├── script.js         # Nav, filters, carousel
├── images/           # Your images go here
│   ├── evan-headshot.jpg
│   ├── bts-01.jpg through bts-06.jpg
│   ├── team-liquid-logo.png
│   ├── alienware-logo.png
│   └── shows/        # Casting show images
└── README.md
```

## Setup Steps

### 1. Create the images folder
Create an `images` folder and add:
- `evan-headshot.jpg` - Evan's photo for About page
- `bts-01.jpg` through `bts-06.jpg` (or more) - Behind the scenes photos
- Brand logos: `team-liquid-logo.png`, `alienware-logo.png`, etc.
- Show images in `images/shows/` folder

### 2. Replace placeholder content

**index.html:**
- Replace `VIDEO_ID` in the reel iframe with actual YouTube video ID
- Replace the TikTok/Instagram/Twitter embed code with real embeds
- Update email address

**content.html:**
- Replace all placeholder embeds with actual embed codes
- Update titles, view counts, and descriptions

**about.html:**
- Update bio text
- Add real BTS image filenames
- Update show images for casting credits

**contact.html:**
- Update email address
- Update LinkedIn and Twitter URLs

### 3. How to get embed codes

**TikTok:**
1. Go to the TikTok video
2. Click Share → Embed
3. Copy the blockquote code

**Instagram:**
1. Go to the reel/post
2. Click ... → Embed
3. Copy the blockquote code

**Twitter/X:**
1. Click Share → Embed Tweet
2. Copy the blockquote code

**YouTube:**
1. Click Share → Embed
2. Copy just the `src` URL and put it in the iframe

### 4. Deploy to Netlify

1. Create a GitHub repository
2. Push all files to the repo
3. Go to netlify.com → Add new site → Import from Git
4. Select your repo
5. Deploy (no build settings needed, it's static HTML)
6. Update your domain DNS to point to Netlify

### 5. Transfer domain (optional)

If moving domain away from Squarespace:
1. Transfer to Cloudflare Registrar (~$10/year)
2. Update nameservers
3. Add custom domain in Netlify settings

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --color-accent: #3b82f6;  /* Change this to his preferred color */
}
```

### Fonts
Currently using:
- **Syne** (display/headers) - bold, modern
- **Instrument Sans** (body) - clean, readable

Change in the Google Fonts link in each HTML file.

### Adding more content items
Copy an existing `<article class="content-item">` block and update:
- `data-category` attribute for filtering
- The embed code
- Title, meta info, and tag

## Notes

- Social embeds (TikTok, Instagram, Twitter) will show engagement metrics automatically
- The filter buttons work via JavaScript - no page reload
- BTS carousel uses Swiper.js (loaded from CDN)
- Fully responsive - test on mobile!

## Total cost
- Hosting: $0 (Netlify)
- Domain: ~$10/year (Cloudflare)
