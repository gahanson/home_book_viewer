## Home Book Viewer  

**note: this project is a work in-progress**  

- a frontend web app (SPA) to manage and view epub and pdf files on a LAN  

## Technologies  

- node / npm  
- Quasar Framework (vue.js based)  
- axios  

## Requirements  

- .env file in project root in following format  
VUE_APP_BOOK_API_IPADDRESS=  
VUE_APP_BOOK_API_KEY=  

- instance of home_books_server running on LAN server  
- instance of home_book_api running on LAN server  
- a postgresql server running on LAN  

## Dev  

**Install the dependencies**  
npm install  
npm install -g @quasar/cli  
quasar ext add @quasar/dotenv

**Run development server with auto reload on code changes**  
quasar dev  

## Deploy  

- deploy to a docker container using command "docker-compose -d --build"  

- this is a multi-stage build, first docker will build the quasar app in a node based container  
and then will copy the built/minimized code to an nginx container which will then run and serve the web app
