Content
========== 
Supported files (Markdown, JSON, YAML, XML, CSV) in this folder are available to the frontend via the `@nuxt/content`
module.

### Blogs

The `/content/blogs` folder contains 1 Markdown (.md) file for each blog containing the content.

The site uses dynamic pages to build a page per blog. With static-site generation an index.html page is generated per
blog. The vue dynamic paged containing the blog html, js, and css can be found in `/pages/blog/_slug.vue`

Images used in blogs should be uploaded to `/static/blog-images`

Blog's have following metadata, used to build the category & discovery pages

- title. required - blog title


- description. optional - short description/subheading of the blog


- img. optional - relative image url. format `/blog-images/filename.type`


- alt. optional - Alt text to show if image does not load


- author. required - First Last i.e. Mike Audi


- updatedAt. optional - format `YYYY-MM-DD`. uses created date if not listed


- category. optional - one of: `product, company, help, press, tech`. used to organize articles in categories


- featured. optional - if true the article is shown under the featured cards

example:

```
---
title: Meet TIKI
description: TIKI is for users and we want you to know everyone involved. Together we’re going to take back our data.
img: /blog-images/1*Rqpfp7JPokgvE5Sa48TFMQ.jpg
alt: tiki team members
author: Mike Audi
updatedAt: '2021-05-11'
featured: true
category: company
---
```

## How to Create (or edit) a TIKI Blog using GitHub

1. [Open `blog` branch, folder `/frontend/content/blogs`](https://github.com/tiki/website/tree/blog/frontend/content/blogs)


2. Select Add file > Create new file  
   *It's at the top right of the screen, next to Go to File.*


3. At the top of the screen where it says `Name your file... ` Give your file a URL safe name ending in `.md`.Your
   blog's url will be `/blog/filename` so avoid symbols and use '-' instead of spaces.  
   *example: `new-blog.md`*
   

4. Add to the top of your blog the required metadata between `---` & `---`  
   
*example:*
```
---
title: Meet TIKI
description: TIKI is for users and we want you to know everyone involved. Together we’re going to take back our data.
img: /blog-images/1*Rqpfp7JPokgvE5Sa48TFMQ.jpg
alt: tiki team members
author: Mike Audi
updatedAt: '2021-05-11'
featured: true
category: company
---
```

5. Add your blog content using Markdown styling. A good guide can be
   found [here](https://www.markdownguide.org/basic-syntax/)


6. At the bottom of the page. Select the option `Commit directly to the blog branch`. If you want, you can add a custom
   commit message. It's not required.


7. Click the button `Commit new file`


8. If your blog requires any new
   images, [open `blog` branch, folder `/frontend/static/blog-images`](https://github.com/tiki/website/tree/blog/frontend/static/blog-images)


9. Select Add file > Upload files  
   *It's at the top right of the screen, next to Go to File.*


10. Drag images or choose the image files to add


11. At the bottom of the page. Select the option `Commit directly to the blog branch`. If you want, you can add a custom
    commit message. It's not required.


12. Click the button `Commit changes`


13. DONE! Send Mike a message saying there's a new blog update! 
