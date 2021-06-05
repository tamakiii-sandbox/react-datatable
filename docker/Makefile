LOGIN_SHELL = bash

%:
	docker-compose run --rm node $(LOGIN_SHELL) -c 'trap "make -C /app $@" EXIT'

sh:
	docker-compose run --rm node $(LOGIN_SHELL)
