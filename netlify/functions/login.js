exports.handler = async (event) => {
  const { password } = JSON.parse(event.body);

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
