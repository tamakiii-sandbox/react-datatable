%:
	trap 'yarn run $@' EXIT

webpack-dev-server:
	npx webpack-dev-server --hot --mode development --port 8080 --content-base public --output-public-path dist --host 0.0.0.0