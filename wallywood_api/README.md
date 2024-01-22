# Wallywood API
API'et er bygget i NodeJS, Express og Sequelize med MySQL database som datakilde.

## Oversigt over filstruktur
- Config: mappe til database config fil
- Controllers: mappe til controller filer. I undermappen System ligger controllers til brugersystemet.
- Data: mappe til csv filer med struktureret data. Disse bruges til indlæsning af data.
- Middleware: mappe med hjælpefunktioner og login funktionalitet
- Models: mappe til model filer. I undermappen System ligger modeller til brugersystemet.
- Routes: mappe med tre routes filer:
	- install: routes til opsætning af databaser
	- main: routes til shoppens elementer
	- system: routes til brugersystemet

System mapperne indeholder faste elementer som brugere, brugergrupper og organisationer. 

## Guide til installation

1. Opret en ny database til projektet fra din sql editor. Du kan kalde den *wallywood*. 
___ 
2. Fork projektet til et repository på din egen github konto. Så får du rettigheder til at pushe eventuelle rettelser m.m.
___
3. Lav derefter en clone af dit projekt fra din VS Code og åbn det.
___
4. Åbn folderen i en terminal og kør en `npm i` for at installere de nøvdvendige dependency pakker
___
5. Opret en .env fil i roden af dit projekt i VS Code
 og kopier nedenstående ind i filen. Husk at skrive dine database oplysninger ind under *DBNAME*, *DBUSER* og *DBPASSWD*:
```
# Port Number
PORT = 3000

# Database Credentials
DBHOST = localhost
DBNAME = [database_name]
DBUSER = [database_user]
DBPASSWD = [database_password]

# Token keys ############

# Token Access Key
TOKEN_ACCESS_KEY = myprivatekey # SECRET STRING 
TOKEN_ACCESS_EXPIRATION_SECS = 3600 # NUMBER OF EXPIRATION SECONDS: 1 HOUR

# Token Refresh Key
TOKEN_REFRESH_KEY = myprivaterefreshkey # SECRET STRING 
TOKEN_REFRESH_EXPIRATION_SECS = 86400 # NUMBER OF EXPIRATION SECONDS: 1 DAY
```
___
7. Gem og start din server med *nodemon* fra terminalen
___
8. Åbn opgavens Postman dokumentation på følgende link https://documenter.getpostman.com/view/6540576/2s935iu6X9
___
9. Klik på knappen *Run in postman* i øverste højre hjørne for at åbne projektet i din Postman App.
___
10. For at installere tabeller og data skal du gå til System -> Install -> Install Models i Postman menuen og klik på *Send*.
___
11.  Tjek at tabeller og data er installeret i din SQL editor.
___

## System mapper
API'et har et brugersystem som ligger i undermapperne  *System* og kan håndtere brugere, brugergrupper og organisationer. Disse modeller kan bruges i forbindelse med brugerlogik som eksempelvis login og tildeling rettigheder osv. 

- **Organisations (*orgs*):** bruges til at oprette virksomheder, foreninger eller lignende. En bruger kan kun være medlem af en organisation.

- **Brugergrupper (*groups*):** bruges til at oprette forskellige grupper med. Disse kan bruges til til at at lave forskellige grupperinger af brugere. Eksempelvis kan man have en gruppe for admin brugere, webshopkunder eller modtagere af et nyhedsbrev. En bruger kan være medlem af mange grupper.

## Start API'et
Kør `nodemon` i terminalen for at starte projektet. Databasen skal selvfølgelig være sat op før at API'et vil virke.