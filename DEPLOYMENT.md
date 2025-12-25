# Deployment Guide

## 1. Backend Deployment (Render)
We recommend **Render** because it has a free tier and is easy to set up for Python/Flask apps.

1.  **Push your code to GitHub**.
2.  **Sign up/Login to [Render](https://render.com)**.
3.  Click **New +** -> **Web Service**.
4.  Connect your GitHub repository.
5.  **Settings**:
    *   **Name**: `sakhi-ai-backend` (or similar)
    *   **Root Directory**: `backend`
    *   **Runtime**: `Python 3`
    *   **Build Command**: `pip install -r requirements.txt`
    *   **Start Command**: `gunicorn app:app`
6.  Click **Create Web Service**.
7.  Wait for it to deploy. You will get a URL like `https://sakhi-ai-backend.onrender.com`. **Copy this URL**.

## 2. Frontend Deployment (Vercel)
We recommend **Vercel** for Next.js apps.

1.  **Sign up/Login to [Vercel](https://vercel.com)**.
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Settings**:
    *   **Framework Preset**: `Next.js` (should be auto-detected)
    *   **Root Directory**: `frontend` (Click "Edit" next to Root Directory and select `frontend`)
    *   **Environment Variables**:
        *   Name: `NEXT_PUBLIC_API_URL`
        *   Value: `https://sakhi-ai-backend.onrender.com` (The URL you copied from Render, **without** the trailing slash `/`)
5.  Click **Deploy**.

## 3. Verification
1.  Open your Vercel URL (e.g., `https://sakhi-ai.vercel.app`).
2.  Go to the **Predict** page.
3.  Click "Fill Malignant Demo" and "Analyze".
4.  If it works, your full stack app is live!
