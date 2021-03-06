import os

RESOURCES_ROOT = os.path.dirname(os.path.abspath(__file__))
TEST_DBS_PATH = os.path.join(RESOURCES_ROOT, 'test_dbs')
TEST_TEMP_DB_PATH = os.path.join(TEST_DBS_PATH, 'temp.db')
TEST_QUERY_DB_PATH = os.path.join(TEST_DBS_PATH, 'query.db')
TEST_USER_DB_PATH = os.path.join(TEST_DBS_PATH, 'users.db')
TEST_DATASETS_PATH = os.path.join(RESOURCES_ROOT, 'datasets')
