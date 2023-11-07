module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest', // Transpile TypeScript files
    },
    transformIgnorePatterns: [
        "/node_modules/(?!d3-interpolate).+\\.js$" // Do not transform node_modules except d3-interpolate
    ],
    moduleNameMapper: {
        // If you're using CSS Modules or other assets, map them here
    },
};
