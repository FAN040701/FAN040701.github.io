# Martin Saveski's Website

## Publish with Custom Domain (`wangqifan.com`)

This repository can be deployed with GitHub Pages using the workflow in `.github/workflows/deploy-pages.yml`.

### 1. Create your own GitHub repository
- Create a new repo under your account (for example: `wangqifan/website`).

### 2. Point local git remote to your repo
```bash
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
```

### 3. Push your code
```bash
git add .
git commit -m "Site launch setup"
git push -u origin master
```

If your default branch is `main`, push to `main` instead.

### 4. Enable GitHub Pages
In GitHub repo settings:
- Go to `Settings -> Pages`
- Set `Source` to `GitHub Actions`

### 5. Configure custom domain
- The root `CNAME` file already contains `wangqifan.com`.
- In `Settings -> Pages`, set `Custom domain` to `wangqifan.com`.
- Enable `Enforce HTTPS` after DNS is valid.

### 6. DNS records at your domain provider
Add records for GitHub Pages:
- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`
- `CNAME` -> `www` points to `<your-username>.github.io`

You can also redirect `www.wangqifan.com` to `wangqifan.com` at your registrar if preferred.

## Updates guide
Change one of the files in `_data`, unless you are changing the look of the website.

Test changes with:
```
jekyll serve
```

Push to the ML web directory:
```
rm -rf public_html
mkdir public_html
```
```
./__deploy.sh
```

More info on the [Media Lab wiki](http://wiki.media.mit.edu/view/Necsys/WebPagePersonal).

**Stanford links**
- Use fetch!
- [Basic WWW for Individual Users](https://uit.stanford.edu/service/web/centralhosting/howto_user)
- [AFS File Transfer](https://uit.stanford.edu/service/afs/file-transfer/macintosh)


## External Libraries
- Framework: [Jekyll](http://jekyllrb.com/)
- CSS
  - [Skeleton](getskeleton.com)
  - Tabs: [Skeleton Tabs](https://github.com/nathancahill/skeleton-tabs)
  - Experience: [Timeline](https://codepen.io/NilsWe/pen/FemfK)
  - Icons: [Font Awesome](http://fontawesome.io/)
- JS
  - [Jquery (3.1.1)](https://jquery.com/)
