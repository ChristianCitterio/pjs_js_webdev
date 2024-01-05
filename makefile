DB_BACKUP_PATH = scripts/.data/my_database.dump.gz

backup-db: 
	sqlite3 pjs_webdev.db .dump | gzip -c > DB_BACKUP_PATH

restore-db:
	zcat my_database.dump.gz | sqlite3 pjs_webdev.db

run-server:
ifeq (, $(DB_BACKUP_PATH))
	restore-db && \
	npx nodemon
else
	sqlite3 pjs_webdev.db < ./scripts/db_init.sql && \
	npx nodemon
endif

run-frontend:
	cd frontend && \
	npx nodemon

