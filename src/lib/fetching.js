export const getData = async() => {
    const res = fetch("https://assignment-8-virid.vercel.app/data.json")
    return (await res).json()
}