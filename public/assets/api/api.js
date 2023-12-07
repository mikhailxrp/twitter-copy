export default async function request(url, method, data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers['Content-type'] = 'application/json;charset=utf-8';
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }

}
