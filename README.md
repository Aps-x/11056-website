# 11056-website
[Website Link](https://aps-x.github.io/11056-website/index.html)

## **Introduction:**

My website for 11056 acts as a digital showcase of Gordon Andrews’ work, highlighting his contributions to graphic design, furniture, and currency design. The target audience is anyone who is interested in learning more about Gordon Andrews and Australian design history. I will also assume they have some background or interest in graphic design and will appreciate the style of the website.

## **Design Style:**

Gordon Andrew's visual style varied across the multiple disciplines he worked in, but generally falls under the umbrella of mid-century modern. My website pays homage to Andrew's style; in particular, the layout and visual hierarchy of the homepage are inspired by the signage presentation board Andrews’ designed for the RBA (below).
![Image](https://github.com/user-attachments/assets/5a752c1f-6da0-41d7-9154-cb5ea9b5f5bd)

Additionally, the navigation on each page was inspired by the dyeline for RBA note printing works (below). I personally find the concept of representing the website navigation like actual wayfinding signage very interesting. Whilst the homepage of my website has bold colors and playful shapes, which follows the mid-century modern aesthetic closely, I instead went with a more muted color palette and simpler forms for the four other pages on the site which is closer to a vintage minimalist style. I wanted to go for a vintage minimalist style because it has a very nostalgic feeling.
![Image](https://github.com/user-attachments/assets/de8fc597-2a62-4ea7-895d-81ffbc1a360a)

## **Typography:**

I don’t have a great eye for identifying fonts, but I believe the font used in Andrews’ RBA signage designs was Helvetica. Helvetica isn’t available on Google Fonts so I chose Roboto because it is similar in appearance. Roboto was used for the body text because it is clear and legible. Roboto was also used for most of the headings to match Andrews’ design. I made use of an additional font called Special Elite as an accent font to add more visual interest to the design. I felt a typewriter font (Special Elite) suited the vintage aesthetic.

## **Colors:**

The color palette was again mostly informed by the work of Gordon Andrews’. The red, green, and orange colors were taken directly from Andrews’ work. The rest of the colors are more muted and were chosen to fit the vintage minimalist style.

## **Images & Assets:** 

My website has a strong focus on visual content. The graphic design page features many of Andrews’ works from the Powerhouse Museum’s collection and the banknotes page features all of the banknotes he designed. The furniture page showcases the three chairs Andrews’ designed that are a part of the Powerhouse Museum’s collection as 3D models that I created myself. I also used a noise texture applied over the top of the website to make it look like it was printed on paper. The background image for the home screen is an edited version of the signage presentation board Andrews’ designed for the RBA (pictured above) with the green cards removed. Again, most of my design decisions can be boiled down to either paying homage to Andrews’ work or trying to make the design look vintage and as if it was physically printed.

## **Technical:**

Now that I am reflecting on my design choices, I realise that I have a lot of skeuomorphic elements in my design. I wanted these elements to have a physical presence and allow the user to interact with these objects and items in a way that mimics their real-world counterparts.

The bank notes have a simple CSS animation that allows the user to flip them and see both designs on the bank note.

The graphic design page allows the user to hover over each of the artworks to enlarge and tilt each of them. This was inspired by the trading cards on Steam and I used code from Nelson Rodrigues. However, his solution didn’t take into account the fact that, when a card is no longer hovered, its z-index snaps straight back to 0 and causes elements drawn later to be drawn on top of it. Luckily, I was aware that Kevin Powell had fixed this issue for a similar design in one of his videos, so I implemented his z-index transition animation solution.

I am also studying 3D modeling this semester, so I thought it would be cool to see if I could 3D model the chairs designed by Gordon Andrews and feature them on the website. I used the \<model-viewer\> web component library (Google, 2018\) to easily embed the models I created in the web page and allow users to interact with them.

I used SCSS and the BEM naming convention to keep my styles organized and because I simply enjoy the developer experience of this approach. I should also note that I have changed the order of some elements so that a screen reader will read the h1 first even if it is visually ‘second’.

## **References:**

Google. (2018). *\<model-viewer\>*. modelviewer.dev. [https://modelviewer.dev/](https://modelviewer.dev/)

Powell, K. (2024). *Can I clone this fun effect from CSS Day using modern CSS?.* YouTube  
[https://www.youtube.com/watch?v=fs\_5R8V4JCI](https://www.youtube.com/watch?v=fs_5R8V4JCI)

Rodrigues, N. (no date). *Steam Trading Card Hover Effect*. Codepen  
[https://codepen.io/nelsonr/pen/WNQaZPb](https://codepen.io/nelsonr/pen/WNQaZPb)  
