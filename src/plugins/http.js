const base = "";

export default (endpoint, method, body) => fetch({
    url: `${base}/${endpoint}`,
    body: JSON.stringify(body),
    method
});
