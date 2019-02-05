%:
	trap "yarn run $@" EXIT

build:
	npx webpack --mode production

lint:
	npx eslint src/**/*.{ts,tsx}

lint-fix:
	npx eslint src/**/*.{ts,tsx} --fix

webpack-dev-server:
	trap "npx nodemon --watch webpack.config.js --exec 'npx webpack-dev-server --hot --mode development --port 8080 --content-base public --watch-content-base --output-public-path dist --host 0.0.0.0'" EXIT