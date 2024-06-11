export async function fetchData() { 
    const response = await fetch('https://api.publicapis.org/entries'); 
    const data = await response.json(); 
    return data.entries; 
}