

export async function fetchEdificios  () {


    const res = await fetch('http://localhost:3000/api/edificios')

    console.log("res>>>",res)
    return res.json()
}

export default fetchEdificios


