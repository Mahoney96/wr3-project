### MVP

Description: A 1-page, online art gallery, showcasing 9 pieces of art, that are up for sale by an artist. Displays pictures of the 9 pieces, provides a description for each, and lists the price of the artwork. Users can temporarily add items to a cart, and delete items in cart. Also can fill out basic info.
<br>

Features:
- Prompt(aka an alert appears when apps starts running), prompting/asking users to fill-in and save a small bio about themselves. Reason: making checking out and sending follow up emails easier.
    - Included text fields: Name, age, state, boolean of loves ceramics,
- User can edit text fields in bio.
- User can delete information in text fields in bio.  
- User can delete bio.
- User can add new shop items.
- User can view current shop items.
- User can delete shop items. 
- User can complete shop items.
- User can move shops items to checkout. 


### SERVER

Dependencies:

- express

Endpoints:
- app.get("api/shopitems")
- app.post("api/shopitems")
- app.delete("/api/shopitems/:id")
- app.put("/api/shopitems/complete/:id")
- app.put("api/shopitems/edit/:id")


Structure:

- server/
    - index.js
    - controller.js
    - shopitems.js

### Client

Dependencies:
- axios


Structure:

- src/
    - App.js
    - App.css
    - reset.css
    - components/
        - ShopLogo
        - PromoBanner
        -  