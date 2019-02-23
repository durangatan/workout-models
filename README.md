# Workout Models

Isomorphic TypeScript models for the workout project.

Need to be compiled after changes are made so that the front end can consume the generated es5 code. Create React App doesn't allow us to import code outside of src, nor does it support transpiling node_modules, so this is our workaround.