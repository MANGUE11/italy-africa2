# TODO - Fix Vercel build: Permission denied (vite)

## Étape 1

- Analyser l’erreur : `sh: ... vite: Permission denied` pendant `npm run build`.

## Étape 2

- Mettre à jour la config Vercel / `package.json` pour exécuter Vite via `node` plutôt que via le binaire `./node_modules/.bin/vite`.

## Étape 3

- (Optionnel) Ajouter un `prebuild` qui ajuste les permissions sur Linux/Mac (chmod) si nécessaire.

## Étape 4

- Refaire un build sur Vercel, vérifier la génération de `dist/`.
