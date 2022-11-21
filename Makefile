setup install Game publish

install:
	npm ci

Game:
	node bin/Game.js

publish:
	npm publish --dry-run