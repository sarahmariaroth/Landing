npx tailwindcss -i ./src/styles.css -o ./src/output.css
minify --js ./src/script.js > ./mini/script.js
minify --html ./src/index.html > ./mini/index.html
minify --css ./src/output.css > ./mini/output.css
#docker build . --tag ghcr.io/hypercookie/landing_page:2.0.0
#docker push ghcr.io/hypercookie/landing_page:2.0.0

