# Google Code-In Task Write-up

### Fully Responsive

Built with mobile-first and responsive design principles, this site will look beautiful no matter what screen size you view it on. Elements cohesively sit adjacent to each other, flowing and scaling smoothly as the viewport dimensions change.

As a result there is a higher potential visitor number as more devices are able to access the site. Furthermore, users will be more comfortable in using the site on whichever device they use. Plus there is no need for device specific sites thus making maintenance easier and perpetuates a consistent style.

### Information leads to action

Visitors make actions based on information they can gather on the site. If there is no information, or confusing information, visitors will take one action: leaving the site.

Upon visiting the landing page the visitor is presented with the organization name, logo and tagline to confirm that they have visited the correct site. They are then presented with two distinct actions: "Download" or "Explore". If they have already made the decision to download BRL-CAD they can immediately do so otherwise they have a choice to explore, which will smoothly scroll the page down to the content panels.

The content panels present further information that guides the visitor towards downloading BRL-CAD. There is a distinct typographic hierarchy within each content panel to guide the visitor's visual attention. The largest heading is short and attention grabbing that appeals to the visitor's immediate need for information. The subheading extends the purpose of the largest heading by providing slightly more in-depth material, solidifies understanding gathered from the first heading and impresses the visitor. Should a visitor continue reading the content in a panel they gather further information which leads to several possible actions:

- Satisfaction that they have gathered the necessary information about the topic within the panel. The visitor will continue and scroll to the next panel.

- Satisfaction that they have gathered all the necessary information about BRL-CAD. The visitor will continue scrolling until they are presented with the action of downloading BRL-CAD.

- Piquing interest on more information about the topic within the panel. The visitor will click the presented action within the panel.

Eventually the user is presented with a distinct call to download BRL-CAD at the end after they have gathered all the necessary information to make that decision.

## Code

It's not just the outside that is beautiful, the inside is as well

### Semantic

To the fullest extent possible the page is written semantically. There are almost no presentational or styling classes; and IDs and classes describe content and structure well.

### Sassy CSS

Sass (SCSS) has been chosen as the CSS preprocessor language. Allowing easy maintenance, global styling consistency and semantic code. Furthermore the use of Sass allows the site to be scalable. New pages can be created with minimal effort as global styling will take effect. All that is needed is the page content.

###### Example 1

Buttons are created utilizing a selection of mixins available in `_buttons.scss`. Should all buttons need to be restyled, only modifications are needed within the mixin. All buttons will take the new look after the code is recompiled.

###### Example 2

A consistent color scheme is present through the use of variables for colors in `_config.scss`. All elements that are light maroon will have exactly the same light maroon; all elements that are maroon will have exactly the same maroon; all elements that are dark maroon will have exactly the same dark maroon; all elements that are light gray will have exactly the same light gray; and all elements that are black will have exactly the same black.

### Modular

JavaScript and Sass code have been modularized into separate components. The result is that developers have an easier time changing specific components -- whether that be adding a new one, removing a component should it not be needed, or making modifications to an existing one.
