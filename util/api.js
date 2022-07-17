async function fetchAPI(query, { variables, preview } = {}) {
    const res = await fetch(process.env.API_URL + (preview ? 'preview' : ''), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.DATOCMS_API_READONLY_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;

};


// pages: 

// Homepage
export async function getHome() {
    const data = await fetchAPI(
        `query MyQuery {
            home {
              heroSubtitle
              title
              heroImage {
                alt
                responsiveImage {
                  src
                  height
                  width
                }
              }
            }
          }
         `
    )
// console.log(data)

    return data?.home
}