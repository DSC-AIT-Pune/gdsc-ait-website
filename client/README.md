## React app skeleton
A basic folder structure for any react application to start with.

### Folder Structure:

- src/
    - components: This folder contains all the reusable components.
    - pages: This folder contains the pages that will be rendered.
        - Uses the reusbale components
        - Maintains state
        - Uses services/api calls
    - services: This folder contains the service files, basically files separated by concern and each file having functions to perform various api calls/actions related to a particular concern.
    - constants: This folder contains the files with constants to be used at various places.
    - styles: This folder contains the styles for different components.
    - utils: This folder contains  functions that are re-usable.
    - images: This folder contains the images to be used across the application.
    - App.js: This is the file that gets rendered. Routes can be handled from here using react-router-dom.
    - index.js: This is where the App component gets mounted on the html root div.

