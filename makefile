DB_BACKUP_PATH = scripts/.data/my_database.dump.gz

backup-db: 
	sqlite3 pjs_webdev .dump | gzip -c > DB_BACKUP_PATH

restore-db:
	zcat my_database.dump.gz | sqlite3 my_database

run-server:
ifeq (, $(DB_BACKUP_PATH))
	restore-db && \
	npx nodemon
endif

run-frontend:
	cd frontend && \
	npx nodemon
