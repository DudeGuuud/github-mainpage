#!/bin/bash

# Build the project
npm run build

# Export the static files
npx next export || npm run export

# Create or switch to gh-pages branch
git checkout -b gh-pages

# Copy the exported files to the root
cp -r out/* .

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Add all files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch
git push -f origin gh-pages

# Switch back to the main branch
git checkout main

echo "Deployed to GitHub Pages!"
