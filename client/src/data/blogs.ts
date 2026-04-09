export interface Blog {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    description: "Learn how to set up a modern React project with TypeScript and best practices for type safety.",
    fullContent: `React has become the go-to library for building interactive user interfaces, and when combined with TypeScript, it provides a powerful development experience with type safety and better IDE support.

## Why TypeScript with React?

TypeScript brings several benefits to React development:
- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: IntelliSense and autocompletion work better
- **Self-Documenting Code**: Types serve as inline documentation
- **Refactoring Confidence**: Changes are validated across the codebase

## Setting Up the Project

You can start with Vite for a fast development experience:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## Best Practices

1. **Type Your Props**: Always define prop types using interfaces
2. **Use Union Types**: For better type discrimination
3. **Leverage Generics**: For reusable component logic
4. **Enable Strict Mode**: Set \`strict: true\` in tsconfig.json

## Common Patterns

When working with React and TypeScript, you'll encounter several patterns:

- **Props with Children**: Use React.ReactNode or PropsWithChildren
- **Event Handlers**: Properly type event parameters
- **Hooks**: Type useEffect dependencies and useState values
- **Context API**: Properly type context values

By following these practices, you'll write more maintainable and robust React applications.`,
    author: "Rezaul Hasan",
    date: "2025-04-01",
    readTime: "8 min read",
    category: "Frontend",
    imageUrl: "/images/projects/new_portfolio/default.jpg",
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    id: "2",
    title: "Understanding JavaScript Closures",
    description: "A deep dive into JavaScript closures, how they work, and practical examples of using them.",
    fullContent: `Closures are one of the most important and sometimes misunderstood concepts in JavaScript. Let's break them down and understand how they work.

## What is a Closure?

A closure is a function that has access to its outer function's scope even after the outer function has returned. In other words, a closure gives you access to an outer function's scope from an inner function.

## How Closures Work

JavaScript closures are related to the execution context. When a function is defined, it maintains a reference to its lexical environment. This means that even after the outer function finishes executing, the inner function can still access variables from that environment.

## Practical Examples

### Example 1: Simple Counter
\`\`\`javascript
function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
\`\`\`

### Example 2: Data Privacy
\`\`\`javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
\`\`\`

## Common Patterns

1. **Module Pattern**: Using closures to create private variables
2. **Callbacks**: Closures in event handlers and async operations
3. **Partial Application**: Creating specialized functions
4. **Memoization**: Caching function results

Mastering closures will significantly improve your JavaScript skills and code quality.`,
    author: "Rezaul Hasan",
    date: "2025-03-25",
    readTime: "10 min read",
    category: "JavaScript",
    imageUrl: "/images/projects/new_portfolio/default.jpg",
    tags: ["JavaScript", "Closures", "Programming Fundamentals"],
  },
  {
    id: "3",
    title: "Building Scalable Node.js Applications",
    description: "Best practices and patterns for building scalable backend applications with Node.js and Express.",
    fullContent: `Node.js has become a popular choice for building scalable backend applications. Let's explore best practices for building production-ready applications.

## Architecture Considerations

### Monolithic vs Microservices
- **Monolithic**: Simpler to start, easier to deploy, but harder to scale
- **Microservices**: More complex, but better scalability and independent deployment

## Design Patterns

### 1. MVC Pattern
Model-View-Controller pattern helps organize your code:
- **Model**: Data layer and business logic
- **View**: Presentation layer
- **Controller**: Request handling and orchestration

### 2. Repository Pattern
Abstracts data access logic from business logic:
\`\`\`javascript
class UserRepository {
  async findById(id) { /* ... */ }
  async create(data) { /* ... */ }
  async update(id, data) { /* ... */ }
  async delete(id) { /* ... */ }
}
\`\`\`

### 3. Service Layer
Encapsulates business logic:
\`\`\`javascript
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  
  async getUserProfile(id) {
    // Business logic here
    return this.userRepository.findById(id);
  }
}
\`\`\`

## Performance Optimization

1. **Caching**: Use Redis for frequently accessed data
2. **Database Indexing**: Optimize query performance
3. **Connection Pooling**: Reuse database connections
4. **Load Balancing**: Distribute traffic across multiple instances
5. **Monitoring**: Track performance metrics

## Security Best Practices

- Use HTTPS for all communications
- Implement authentication and authorization
- Validate and sanitize all inputs
- Use environment variables for sensitive data
- Keep dependencies updated

By following these practices, you'll build Node.js applications that scale with your business.`,
    author: "Rezaul Hasan",
    date: "2025-03-15",
    readTime: "12 min read",
    category: "Backend",
    imageUrl: "/images/projects/new_portfolio/default.jpg",
    tags: ["Node.js", "Express", "Backend Architecture"],
  },
  {
    id: "4",
    title: "The Future of Web Development",
    description: "Exploring emerging trends and technologies that will shape the future of web development.",
    fullContent: `The web development landscape is constantly evolving. Let's look at some of the key trends and technologies that will shape the future.

## Emerging Technologies

### 1. WebAssembly (WASM)
WebAssembly is opening new possibilities for web applications:
- Run compiled languages (C++, Rust) in the browser
- Improved performance for compute-intensive tasks
- Can be integrated with JavaScript

### 2. AI and Machine Learning
- ML models running in the browser with TensorFlow.js
- AI-powered code completion and generation
- Natural language interfaces for web applications

### 3. Edge Computing
- Computation happens closer to users
- Faster response times
- Better user experience for global applications

## Modern Frameworks

### Server Components
- React Server Components making a comeback
- Better separation of concerns
- Improved performance with server-side rendering

### Meta Frameworks
- Next.js, Remix, and SvelteKit providing better developer experience
- Built-in optimization and conventions
- Focus on user experience

## Performance and UX

### Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

Optimizing these metrics will be crucial for SEO and user satisfaction.

### Progressive Enhancement
- Build sites that work without JavaScript
- Enhance with JavaScript for better experience
- Better accessibility by default

## Developer Experience

The future of web development will focus on:
- Faster build tools (Vite, Turbopack)
- Better error messages and debugging
- More intuitive APIs
- Automation of repetitive tasks

The web development industry is moving towards better tools, faster experiences, and more powerful capabilities. Stay updated and keep learning!`,
    author: "Rezaul Hasan",
    date: "2025-03-08",
    readTime: "11 min read",
    category: "Trends",
    imageUrl: "/images/projects/new_portfolio/default.jpg",
    tags: ["Web Development", "Trends", "Future Tech"],
  },
];
