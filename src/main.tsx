import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://staging-api.hrpanda.co/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          applicants: {
            merge: true
          }
        }
      }
    }
  }),
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>
)
