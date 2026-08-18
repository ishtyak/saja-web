# Saja Web

This is a Next.js project bootstrapped with `create-next-app`.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Deployment (Apache Server)

This project is configured as a **Static Export** (`output: "export"` in `next.config.ts`). It generates static HTML/CSS/JS files that can be hosted on standard Apache servers. It is also configured to export pages as folders (`trailingSlash: true`) to work cleanly with Apache.

### 1. Build the Project

Run the build command to generate the static files:

```bash
npm run build
```

This will create an `out` directory containing your fully static application.

### 2. Configure Apache Routing (`.htaccess`)

Because Next.js creates specific folder structures for routing, you must configure Apache to serve the correct files and handle clean URLs without 403 Forbidden errors.

Make sure an `.htaccess` file is placed in the root of your web server with the following rules:

```apache
DirectoryIndex index.html
Options -Indexes

<IfModule mod_rewrite.c>
    RewriteEngine On

    # Redirect HTTP to HTTPS
    RewriteCond %{HTTPS} off
    RewriteCond %{HTTP:X-Forwarded-Proto} !https
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Do not rewrite real files
    RewriteCond %{REQUEST_FILENAME} -f
    RewriteRule ^ - [L]

    # /page  or  /page/  →  /page/index.html  (post-build with trailingSlash:true)
    RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
    RewriteRule ^(.+?)/?$ /$1/index.html [L]

    # /page  or  /page/  →  /page.html  (flat export fallback)
    RewriteCond %{DOCUMENT_ROOT}/$1.html -f
    RewriteRule ^(.+?)/?$ /$1.html [L]

    # Root page
    RewriteRule ^$ /index.html [L]
</IfModule>
```

### 3. Deploy

1. Clear any old cached deployments on your server.
2. Upload the **contents** of the `out` directory to your web server root (e.g., `public_html`).
3. Upload the `.htaccess` file to the same root folder.
