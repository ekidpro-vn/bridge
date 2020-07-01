install:
	npm install && npm link ../react-native/node_modules/react && npm link ../react-native/node_modules/react-router && npm link ../react-native/node_modules/react-router-dom

dev:
	npm run watch
