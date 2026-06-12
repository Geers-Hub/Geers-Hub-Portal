exports.handler = async (event) => {

  // Nur POST erlauben
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  let password;

  try {
    const body = JSON.parse(event.body || "{}");
    password = body.password;
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" })
    };
  }

  if (password === process.env.ACCESS_PASSWORD) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false })
  };
};
