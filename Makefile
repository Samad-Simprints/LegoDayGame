.PHONY: build run

build:
	-echo "### Installing dependencies"
	cd phaser3-example ; npm install
	-echo "### Building App"
	cd phaser3-example ; npm run build
	-echo "### Building Container"
	cd phaser3-example ;docker build . -t legodaygame

run:
	docker run -p 3000:3000 legodaygame
	-echo "### Wait until you receive the message \"App is listening on port 3000\" "
	-echo "### Then visit http://localhost:3000"
