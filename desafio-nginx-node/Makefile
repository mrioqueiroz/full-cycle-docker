test:
	docker-compose down
	sudo rm -rf mysql
	docker system prune --force
	docker-compose up --build --detach
	watch --no-title --interval 3 curl --silent localhost:8080
