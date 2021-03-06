from datetime import timedelta

APP_PORT = 5002

DATASET_BASICS = 'basics'
DATASET_NAMES = 'names'
DATASET_CREW = 'crew'
DATASET_PRINCIPALS = 'principals'
DATASET_RATINGS = 'ratings'
DATASET_AKAS = 'akas'

MIN_NUM_VOTES = 1000
LIMIT_FTS_SEARCH_RESULTS = 5000

INDEX_PREFIX = '_idx_'
TABLE_BASICS = DATASET_BASICS
TABLE_RATINGS = DATASET_RATINGS
TABLE_PRINCIPALS = DATASET_PRINCIPALS
TABLE_NAMES = DATASET_NAMES
TABLE_WRITERS = 'writers'
TABLE_DIRECTORS = 'directors'
TABLE_FTS = 'fts_table'

FTS_TITLE_COLUMN = 'title'
FTS_TID_COLUMN = 'tid'

CONFIG_FILE_NAME = "config.ini"
CONFIG_SECTION_PATHS = 'PATHS'
CONFIG_SECTION_FILE_NAMES = 'FILE_NAMES'
CONFIG_SECTION_SECRETS = 'SECRETS'
CONFIG_SECTION_URLS = 'URLS'
CONFIG_FIELD_TMP_DIR = 'TEMP'
CONFIG_FIELD_DB_DATA = 'DB_DATA'
CONFIG_FIELD_MOVIE_DB = 'MOVIE_DB'
CONFIG_FIELD_USER_DB = 'USER_DB'
CONFIG_FIELD_TMDB_API_KEY = 'TMDB_API_KEY'
CONFIG_FIELD_APP_KEY = 'APP_KEY'
CONFIG_FIELD_IMDB_URL = 'IMDB_DATA'

DB_LAST_VERSION_SUFFIX = '_last_version'

BIND_USERS = 'users'
BIND_MOVIES = 'movies'

JWT_VALIDITY_PERIOD = timedelta(days=1)
