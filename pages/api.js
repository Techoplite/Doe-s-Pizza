const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    if (process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers[
            'Authorization'
        ] = `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
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
        `query allPizzas {
          pizzas {
            nodes {
              data {
                ingredients
                price
              }
              title
            }
          }
        }
  `, {
            variables: {},
        }
    );
    return data ? data.pizzas : data.edges;
}