async function getData() {
  const url = "https://example.org/products.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.error(error.message);
  }

  // tarea 1
  // tarea 2

  getData()

  // tarea 3
  // tarea 4
}
