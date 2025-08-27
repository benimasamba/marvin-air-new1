
# Marvin Air HVAC Services - Landing Page

This is a modern, responsive landing page for Marvin Air, an HVAC service company, built with React and Tailwind CSS.

## Features

- **Fully Responsive:** Optimized for all screen sizes, from mobile phones to desktops.
- **Modern Design:** Clean and professional UI/UX.
- **Interactive Sections:** Showcases services, past work, and customer testimonials.
- **Clear Call-to-Actions:** "Call Now" buttons for immediate contact.
- **Dynamic Content:** Easily updateable sections for services, projects, and testimonials.

## Tech Stack

- **React 18** (with TypeScript)
- **Tailwind CSS** (for styling)
- **Vite** (as a recommended build tool)

---

## Deployment with Vercel and GitHub

Deploying this application is a straightforward process.

### Prerequisites

1.  A GitHub account.
2.  A Vercel account (you can sign up for free with your GitHub account).
3.  `git` installed on your local machine.
4.  `node` and `npm` (or `yarn`) installed on your local machine.

### Step-by-Step Instructions

#### 1. Set up the Project Locally

If you don't have a local React project set up, you can create one using Vite (a fast and modern build tool):

```bash
# Create a new React + TypeScript project with Vite
npm create vite@latest marvin-air-app -- --template react-ts

# Navigate into the project directory
cd marvin-air-app

# Install dependencies
npm install
```

Now, replace the contents of the `src` directory with the `.tsx` and component files from this package. Also, replace `index.html` in the project root.

#### 2. Push to a GitHub Repository

1.  **Initialize a Git repository:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a new repository on GitHub:**
    - Go to [https://github.com/new](https://github.com/new) and create a new repository (e.g., `marvin-air-website`).
    - Do **not** initialize it with a README, .gitignore, or license.

3.  **Link your local repository to GitHub and push:**
    - Copy the commands from your new GitHub repository page. It will look something like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/marvin-air-website.git
    git branch -M main
    git push -u origin main
    ```

#### 3. Deploy on Vercel

1.  **Log in to Vercel:**
    - Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.

2.  **Import Your Project:**
    - On your Vercel dashboard, click "**Add New...**" -> "**Project**".
    - Vercel will show your GitHub repositories. Find your `marvin-air-website` repository and click "**Import**".

3.  **Configure the Project:**
    - Vercel is excellent at auto-detecting settings for React projects created with Vite or Create React App.
    - **Framework Preset:** Should be automatically set to `Vite`. If not, select it.
    - **Build and Output Settings:** The default settings should be correct:
        - **Build Command:** `npm run build` or `vite build`
        - **Output Directory:** `dist`
    - **Environment Variables:** This project does not require any.

4.  **Deploy:**
    - Click the "**Deploy**" button.
    - Vercel will start building and deploying your site. You can watch the progress in the build logs.

5.  **Done!**
    - Once the deployment is complete, Vercel will provide you with a URL (e.g., `marvin-air-website.vercel.app`) where your live website can be viewed.

### Automatic Deployments (CI/CD)

Vercel automatically sets up a CI/CD pipeline. Every time you push a new commit to your `main` branch on GitHub, Vercel will automatically rebuild and redeploy your website with the latest changes. This makes updates incredibly easy!
