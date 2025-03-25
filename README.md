PASSAGGI 
npm create vite@latest . --template react-ts
npm install
npx storybook@latest init --builder vite

Cancello le varie pagine che c'erano già, aggiungo una cartella Components e una cartella Style all'interno di Stories.

Prima di creare la storia Spacing.stories.tsx, scrivere le variabili dello spacing in formato css
Vado a creare una stories Spacing.stories.tsx
Creo nello Style, precedentemente creato sempre in stories, sia il reset.css che il variables, dove andremo a mettere in root: gli spacing, typography e colors.

Modificare nel main il percorso da src a stories

Creare la pagina Typography.stories.tsx e la pagina Typography.CSS

