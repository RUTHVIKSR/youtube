Checkpoint 0 :
1 -> first initial commit

Checkpoint 1 : (Environment configuration)
- runtime and package manager : bun
- created a project setup using bunx create-next-app@<version>
- npm install => bun add, npx => bunx
2-> youtube setup using bun

Checkpoint 2 : (nextjs setup using shadcn)
3 -> nextjs setup using shadcn

checkpoint 3 : (Experimenting with the page.tsx file)
- Displayed hello world by editing page.tsx
- Extension for tailwind
- added all the neccessary components from shadcn
4-> Shadcn components

checkpoint 4 :
5 -> experimented with button from components library

checkpoint 5 :
Goals : 
    - add a logo asset
    - Learn basic app route folders
    - sidebar section
        - sidebar section
        - sidebar items
    - navbar section
        - search videos
        - Sign in option

- Added Youtube logo into public folder
- imported an image component from the next/image
- displayed the image in the left corner of the page
6 -> adds image to the home page

- modified the layouts.tsx to include appropriate font
- added the name the home page using the font

7 -> changes the watchnow logo

- src/app/feed/page.tsx => creates a new page accessable on localhost:3000/feed
- src/app/feed/[videoId]/page.tsx => creates a new page on localhost:3000/feed/{any value}
- used params to display specific video ids
? - [LEARN] : dynamic APIs are now asyncronous
- Added an interface called PageProps to get around the warning
- [EXP] : to use dynamic APIs like [videoId] you have await them.
8 -> feed page and dynamic video page
