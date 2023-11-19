import { unstable_noStore as noStore } from "next/cache";

export async function fetchAllJob() {
    noStore();
    try {
        const response = await fetch(`${process.env.BASE_URL}/job-vacancy`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch all job');
    }
}
// export async function authLogin () {
//     try {

//     }
// }