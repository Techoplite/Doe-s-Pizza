const API_URL = process.env === 'development' ? process.env.
NEXT_PUBLIC_WORDPRESS_API_URL: 'https://dev-does-pizza.pantheonsite.io/graphql'
async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    if (process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers[
            'Authorization'
        ] = `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
    console.log('query', query)
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
    })
    const json = await res.json()
    if (json.errors) {
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function getPizzas() {
    const data = await fetchAPI(
        `query NewQuery {
          pizzas {
            nodes {
              data {
                ingredients
                price
              }
              title
              featuredImage {
                node {
                  sourceUrl
                  id
                }
              }
            }
          }
        }
  `, {
            variables: {},
        }
    );
    return data ? data.pizzas : data.edges;
}