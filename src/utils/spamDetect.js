export default async function (message) {
  try {
    const res = await fetch("https://vector.profanity.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error("Error occured", err);
  }
}
