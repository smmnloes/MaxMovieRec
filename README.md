# [pyMDB](http://pymdb.mloesch.it)

Welcome to pyMDB, a movie search engine based on IMDB datasets combined with detailed data from __themoviedb.org__.  

### Prerequisites
* NodeJS & NPM -> https://nodejs.org/en/download/
* Python version 3.5 or above 
* Pipenv -> `sudo apt-get install python3-pip && sudp pip install pipenv`
* **Optional:** 
  * Docker -> https://docs.docker.com/engine/install
  * Docker-compose -> `sudo apt-get install docker-compose`

### Installation
1. Clone the repository
2. In the `py-backend` directory of the project, execute `pipenv install`
3. In `/angular-frontend/` execute `npm install`

### Before the first start
#### TMDB Api Key
Before you can use the application, you have to register on __themoviedb.org__ to get your own API-Key. 
Add this key under the config parameter TMDB_API_KEY in the `config.ini` configuration file.
If you do not do this, you can still use the application, however the detailed information will not be available.

#### Paths
In the file `py-backend/src/Config/config.ini` two paths are defined, one for storing temporary data ("tmp") and one where the database files for movies and users will be stored ("db_data").  
You can define your own pathes or just leave them the way they are predefined. However, you must make sure that these directories exist and have the correct permissions, so that the user that executes the pymdb-Application can write to these directories.

### Starting the application for development
#### Manually
You will have to start the python backend as well as the angular frontend.

Go to `/angular-frontend/` and execute `npm start`. This will start the Development server at `localhost:4200`.

In `/py-backend/src/` execute `pipenv shell`, in the resulting shell execute `python3 main.py`. This will start the backend as well as the command line interface.

#### Via Docker
To use the dockerized variant, you need to have the docker engine installed. There are two images defined, one for the backend, and one for the frontend. You can build and start those yourself individually (make sure to set network to "host"), or you can use 'docker-compose' in the root directory of the project:   
`$ docker-compose up`  
This will start the two containers and make them available in the host network, reachable under `http://localhost:4200`.  
In this setup, the following directories will be mounted into the container:
- `/var/lib/pymdb` (containing the database files, you need to create the database first by following the steps described in __First run__.
- `angular-frontend/src` (enables hot reloading for Angular development)  

**Note**: You still need to add the TMDB API Key to the application as described above!

### Using the app
#### First run
On the first run, you have to download the Imdb data and create your database.
In the backend-CLI, enter `update`. This will download the files from __https://datasets.imdbws.com__ one by one and read them into a SQLite database at the location defined in the config.ini file (`/var/lib/pymdb` by default). 
You can also run the backend with the command line argument `update` to trigger this process and exit afterwards.
For info on the tables in this database, please refer to `py-backend/src/Services/DatabaseModel.py`.
The resulting database contains only information about movies, excluding adult films. Also not every value which is available from the datasets is read into the database.

#### Search filters
On `localhost:4200` you will find the search interface. Some quick notes on the search filters:
* __Title__: Search by movie title. This also matches partial names, e.g. "Star Wa" matches "Star Wars" and is case insensitive. Supports titles in any language.
* __Genres__: Select up to 3 Genres
* __Min. Rating__: Only show results with rating higher than this value. This also implies that a certain threshold for number of votes will be applied. This value can be changed in `py-backend/src/Services/QueryService` under __MIN_NUM_VOTES__.
* __Min. Year/Max. Year__: Get only results from certain time period
* __Director__: Get only results with this director. *Important*: Only full matches will be accepted (vs. Title search). Case-insensitive.
* __Writer__: Get only results with this writer. *Important*: Only full matches, case insensitive.
* __Top billed actors__: Include only movies which star these top-billed actors. Up to 3 can be specified. *Important*: This does not check all of the credits, only the top-billed ones. Usually this will include up to 5 actors who are the most well-known ones in a movie. *Important*: Only full matches, case insensitive.
* __Results__: Results to display per page
* __Sort by__: Choose which category to sort by (Title, Year or Rating)

#### Detailed information view
By clicking on the title of a search result, you will get to the Detailed View. This contains information like a more complete cast list or the movie budget for example. Note that the information for this is obtained from the free *themoviedb.org*-API. For some movies only limited information might be available, or none at all.

#### Command line options
The command line interface of the backend application supports the following commands:
* __update__: Loads the new datasets from imdb and reads them into the sqlite-Database. This happens one dataset at a time.  It can take some time, depending on your download speed and CPU power. Requires ~1.5GB of free disk space, as the uncompressed datasets can be quite big. The resulting database will be <500mb in size. If the update process is interrupted, it will roll back to the database version before updating.
* __download__: asks for which dataset to download and downloads and unpacks it to the folder `DB_Data_Remote`. Allowed  dataset names: "basics", "names", "crew", "principals" or "ratings"
* __read__: allows to specify a specific dataset which is read into the existing database, names similar to download
* __backup__: copies the current database to the `last_version`-folder
* __restore__: restores database from `last_version`-folder
* __exit__: exit application



### Legal disclaimer
Imdb does only allow the database information to be used for personal and non-commercial use. Therefore you are not allowed to deploy this application publicly or use it in any way not permitted by Imdb.


That's it. Have fun! Contributions and feedback always welcome!
