AI Prompts Used – Recipe Finder

Prompt 1 – Project Architecture

I am building a simple Recipe Finder web application using React and TypeScript.

The application should allow users to:

Search for recipes

View recipe cards

View detailed recipe information

Browse recipes by category

Add and remove favourite recipes

Store favourites using localStorage

Important constraints:

Keep the project simple and beginner-friendly.

Do NOT create too many files or folders.

Prefer a small and clear project structure.

Avoid unnecessary components, abstractions, libraries, or complex architecture.

Keep related code together when it makes the project easier to understand.

Use reusable components only where they are genuinely useful.

Do not over-engineer the application.

Make the code easy for a beginner to read, understand, debug, and modify.

Use React and TypeScript with a straightforward architecture.

First, suggest a simple project structure with the minimum number of files needed.

Explain why each file is needed.

Do not generate the complete application yet.

Prompt 2 – Basic UI

I have already created a React + TypeScript Vite project called Recipe Finder.

Use this simple structure:

src/
├── types.ts
├── api.ts
├── App.tsx
├── App.css
├── main.tsx
└── components/
├── RecipeCard.tsx
└── RecipeModal.tsx

For this step, build ONLY the basic UI.

Requirements:

Do not create any new files unless absolutely necessary.

Do not add unnecessary libraries or dependencies.

Keep the code beginner-friendly.

Do not implement the API yet.

Do not implement favourites yet.

Do not implement advanced state management yet.

Create a clean header with the title "Recipe Finder".

Add a search bar with a search button.

Add a category section with example categories.

Add a recipe grid using placeholder recipes.

Create a reusable RecipeCard component.

Create a basic RecipeModal component structure.

Add responsive styling for desktop and mobile.

Use placeholder recipe data for now.

Before generating code, briefly explain which existing files you will modify and why.

Only modify the files needed for this step.

Prompt 3 – API Integration

The basic Recipe Finder UI is now working.

Next, integrate TheMealDB API into the existing application.

Requirements:

Keep the current project structure.

Do not create unnecessary files or folders.

Do not add a state management library.

Keep the implementation beginner-friendly.

Keep API-related code inside the existing src/api.ts file.

Use TypeScript types from the existing src/types.ts file.

Do not rewrite the whole application.

Preserve the existing UI.

Implement these API functions:

Search recipes by name.

Get a recipe by its ID.

Get recipes by category.

Then connect the search bar to the API so that:

The user can enter a recipe name.

Clicking Search fetches matching recipes.

Search results replace the placeholder recipes.

A loading message appears while the request is running.

A friendly message appears when no recipes are found.

A useful error message appears if the API request fails.

Keep the API logic separate from the UI.

Before changing the code, explain which existing files you will modify and what each change does.

Only modify the files necessary for this step.

Prompt 4 – Recipe Details

The recipe search and TheMealDB API integration are working correctly.

Now add the recipe details feature.

Requirements:

Keep the existing project structure.

Do not create unnecessary files or folders.

Do not add new libraries.

Do not rewrite working search/API code.

Keep the implementation beginner-friendly.

When the user clicks a recipe card:

Open the existing RecipeModal component.

Fetch the complete recipe details using the recipe ID.

Display the recipe image and name.

Display category and cuisine.

Display all available ingredients with their measurements.

Display the cooking instructions.

Display the YouTube/tutorial link when available.

Include a clear close button.

Handle loading and errors inside the recipe details view.

Use the existing api.ts for the API request and the existing types.ts for TypeScript types.

Before changing the code, explain which files you will modify and what you are changing.

Only modify the files necessary for this feature.

Prompt 5 – Favourites

The following features are already working:

Basic Recipe Finder UI

TheMealDB API search

Recipe details modal

Now add a simple favourites feature.

Requirements:

Keep the existing project structure.

Do not create unnecessary files or folders.

Do not add new libraries.

Do not rewrite working search or recipe details functionality.

Keep the implementation beginner-friendly.

Use browser localStorage to store favourite recipes.

Functionality:

Add an "Add to Favourites" button to the recipe card or recipe details view.

When clicked, save the recipe to localStorage.

If the recipe is already a favourite, show "Remove from Favourites" instead.

Users should be able to remove a recipe from favourites.

Add a "Favourites" section or tab to the existing application.

Display saved favourite recipes using the existing RecipeCard component.

Favourites must remain available after refreshing the browser.

Prevent duplicate favourites.

Handle an empty favourites list with a friendly message.

Keep the state management simple using React state and localStorage.
Do not introduce Context API, Redux, Zustand, or another state management library.

Before modifying the code, explain which existing files will change and what each change does.

Only modify the files necessary for this feature.

Additional Prompts

Add any later prompts you actually use for:

Category filtering

Debugging

Responsive design fixes

Refactoring

Error handling

UI improvements

Keep the wording exactly as you used it where possible.
