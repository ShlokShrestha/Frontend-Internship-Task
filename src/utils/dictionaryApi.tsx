export const getDefinition = async (word: string) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      );
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dictionary data:", error);
    throw error;
  }
};
