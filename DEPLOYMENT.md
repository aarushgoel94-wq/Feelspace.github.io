# Feelspace Website - Domain & Deployment Guide

This guide will help you get a domain and publish your Feelspace website online.

## Quick Summary

**Best Options for You:**
1. **FREE**: Use GitHub Pages or Netlify with a free subdomain (fastest, no cost)
2. **PAID**: Purchase a custom domain ($10-15/year) + use free hosting (most professional)

---

## Option 1: Free Hosting with Subdomain (Recommended to Start)

Deploy your site for **FREE** and get a live URL immediately:

### Using GitHub Pages

**Your site will be at:** `yourusername.github.io/feelspace`

**Steps:**
1. Create a GitHub account at [github.com](https://github.com) if you don't have one
2. Create a new repository named `feelspace` (make it public)
3. Upload your three files: `index.html`, `styles.css`, `script.js`
4. Go to Settings → Pages → Select `main` branch → Save
5. Your site will be live in minutes!

**Pros:** Simple, free forever, automatic HTTPS
**Cons:** Uses GitHub subdomain

### Using Netlify (Easiest)

**Your site will be at:** `yoursite.netlify.app`

**Steps:**
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your website folder
3. Site goes live instantly!

**Pros:** Super easy, free SSL, custom subdomain, excellent performance
**Cons:** Uses Netlify subdomain

### Using Vercel

**Your site will be at:** `yoursite.vercel.app`

**Steps:**
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository or drag files
3. Deploy in one click

**Pros:** Fast, free, great for developers
**Cons:** Uses Vercel subdomain

---

## Option 2: Custom Domain + Free Hosting (Most Professional)

Get a custom domain like `feelspaceapp.com` and host it for free.

### Step 1: Purchase a Domain ($10-15/year)

**Recommended Domain Registrars:**

| Registrar | Price | Why Choose |
|-----------|-------|------------|
| [Namecheap](https://www.namecheap.com) | ~$9-13/year | Cheap, easy to use, good support |
| [Google Domains](https://domains.google.com) | ~$12/year | Simple, integrates with Google services |
| [Porkbun](https://porkbun.com) | ~$8-11/year | Very cheap, no hidden fees |
| [Cloudflare](https://www.cloudflare.com/products/registrar/) | At cost pricing | Cheapest, but requires Cloudflare account |

**Domain Suggestions:**
- `feelspaceapp.com` ✨ (RECOMMENDED - matches your privacy policy URL)
- `getfeelspace.com`
- `feelspace.app`
- `myfeelspace.com`

> **Note:** Check availability at registrar websites

### Step 2: Deploy to Free Hosting

Choose one of these FREE hosting platforms:

#### A. Netlify (Recommended) ⭐

**Why:** Easiest custom domain setup, automatic SSL, great performance

**Steps:**
1. Deploy your site to Netlify (drag & drop your folder)
2. In Netlify: Domain Settings → Add custom domain → Enter your domain
3. In your domain registrar (Namecheap/etc):
   - Add **A Record**: `@` → `75.2.60.5`
   - Add **CNAME Record**: `www` → `yoursite.netlify.app`
4. Wait 5-30 minutes for DNS to propagate
5. Enable HTTPS in Netlify (automatic)

**Done!** Your site will be live at `feelspaceapp.com`

#### B. GitHub Pages

**Why:** Free, reliable, integrates with Git

**Steps:**
1. Deploy to GitHub Pages (see Option 1)
2. In GitHub repo: Settings → Pages → Custom domain → Enter your domain
3. In your domain registrar:
   - Add **A Records** (all 4):
     - `@` → `185.199.108.153`
     - `@` → `185.199.109.153`
     - `@` → `185.199.110.153`
     - `@` → `185.199.111.153`
   - Add **CNAME Record**: `www` → `yourusername.github.io`
4. Check "Enforce HTTPS" in GitHub Pages settings

**Done!** Your site will be live at `feelspaceapp.com`

#### C. Cloudflare Pages

**Why:** Unlimited bandwidth, excellent CDN

**Steps:**
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub or upload files directly
3. Add custom domain in Cloudflare Pages
4. Update DNS (automatic if you bought domain through Cloudflare)

---

## Step-by-Step: Deploy to Netlify with Custom Domain

This is the **recommended approach** for the most professional result:

### Part 1: Deploy to Netlify (5 minutes)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (free, no credit card needed)

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag your `Feelspace Website Support` folder
   - Your site deploys instantly!
   - You'll get a URL like `random-name.netlify.app`

3. **Customize Site Name** (optional)
   - Site settings → Change site name
   - Make it `feelspace` → Now at `feelspace.netlify.app`

### Part 2: Purchase Domain (10 minutes)

1. **Go to Namecheap** (recommended)
   - Visit [namecheap.com](https://namecheap.com)
   - Search for `feelspaceapp.com`
   - Add to cart and checkout (~$13/year)

2. **Complete Purchase**
   - Create account
   - Enter payment info
   - Complete purchase

### Part 3: Connect Domain to Netlify (10 minutes)

1. **Add Domain in Netlify**
   - In Netlify dashboard: Domain settings
   - Click "Add custom domain"
   - Enter `feelspaceapp.com`
   - Click "Verify" then "Add domain"

2. **Configure DNS at Namecheap**
   - Log into Namecheap
   - Find your domain → Manage
   - Go to "Advanced DNS"
   - Delete existing records
   - Add these records:

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | A Record | @ | `75.2.60.5` | Automatic |
   | CNAME Record | www | `feelspace.netlify.app` | Automatic |

3. **Wait for DNS Propagation**
   - Takes 5-60 minutes (usually ~10 min)
   - Check status at [dnschecker.org](https://dnschecker.org)

4. **Enable HTTPS**
   - In Netlify: HTTPS section
   - Click "Verify DNS configuration"
   - SSL certificate auto-generates (takes 1-2 min)
   - Check "Force HTTPS"

**🎉 Done!** Your site is now live at `https://feelspaceapp.com`

---

## Quick Reference: DNS Settings

### For Netlify

```
A Record:    @ → 75.2.60.5
CNAME:       www → yoursite.netlify.app
```

### For GitHub Pages

```
A Record:    @ → 185.199.108.153
A Record:    @ → 185.199.109.153
A Record:    @ → 185.199.110.153
A Record:    @ → 185.199.111.153
CNAME:       www → yourusername.github.io
```

### For Vercel

```
A Record:    @ → 76.76.21.21
CNAME:       www → cname.vercel-dns.com
```

---

## Budget Comparison

| Option | Domain Cost | Hosting Cost | Total 1st Year |
|--------|-------------|--------------|----------------|
| Free Subdomain (Netlify/GitHub) | $0 | $0 | **$0** |
| Custom Domain + Netlify | $10-15 | $0 | **$10-15** |
| Custom Domain + GitHub Pages | $10-15 | $0 | **$10-15** |

---

## Recommended Path for Feelspace

**For Professional Launch:**

1. ✅ **Purchase `feelspaceapp.com`** from Namecheap (~$13/year)
   - Matches your privacy policy URL
   - Professional appearance
   - Easy to remember

2. ✅ **Deploy on Netlify** (free)
   - Fastest deployment
   - Automatic SSL/HTTPS
   - Great performance
   - Easy updates (just drag new files)

3. ✅ **Connect custom domain** (see Part 3 above)

**Total Cost:** ~$13/year
**Time to Deploy:** ~30 minutes
**Result:** Professional website at `https://feelspaceapp.com`

---

## Updating Your Website Later

### On Netlify
- Drag and drop updated files to Netlify dashboard
- Or connect to GitHub for automatic deployments

### On GitHub Pages
- Push changes to your GitHub repository
- Site updates automatically

---

## Next Steps

**If you want to start FREE:**
1. Deploy to Netlify now with subdomain
2. Purchase domain later when ready
3. Add custom domain anytime (takes 10 min)

**If you want the professional domain:**
1. Purchase `feelspaceapp.com` at Namecheap
2. Deploy to Netlify
3. Connect domain (follow Part 3 above)

---

## Need Help?

**Documentation:**
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)
- Namecheap DNS Guide: [namecheap.com/support/knowledgebase](https://www.namecheap.com/support/knowledgebase/)

**Common Issues:**
- **DNS not working?** Wait up to 48 hours for full propagation
- **SSL certificate failed?** Verify DNS records are correct
- **Site not updating?** Clear browser cache (Cmd+Shift+R)

---

## Summary

✅ **Easiest:** Deploy to Netlify with free subdomain (5 min, $0)  
✅ **Most Professional:** Netlify + Namecheap domain (30 min, ~$13/year)  
✅ **Best for Developers:** GitHub Pages (15 min, free or ~$13/year with domain)

Choose the option that fits your budget and timeline. You can always start free and add a custom domain later!
