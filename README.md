# gdsc-ait-backend
This repo serve as a backend for the GDSC AIT website.

## Steps to set-up
1. Clone the Repository using ``` git clone https://github.com/DSC-AIT-Pune/gdsc-ait-backend.git ```.
2. In your local system, open terminal at that location and run ``` yarn install ```.
3. Add .env file inside the folder along with other files using below structure.
    ```
    PORT=5000
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<SecretString you want to have>
    JWT_EXPIRES_IN=7d
    JWT_COOKIE_EXPIRE=7d

    ```
4. Run ``` yarn start ```
5. You are ready to use this now. Just add API's alike the User folder inside API folder and connect route at server.js .
6. Hit Star 😍 if you find this amazing.

 ## Acknowledgement

* Made with &#9829; by Google Developers Students Club, AIT
