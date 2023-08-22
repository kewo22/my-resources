import { Resource } from "@/app/_interfaces/resource";

export async function getResources() {
    const res = await fetch(`${process.env.API_URL}/resource`, {
        cache: "no-store",
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export async function saveResource(resource: Resource) {
    const res = await fetch(`${process.env.API_URL}/resource`, {
        method: "post",
        mode: "no-cors",
        body: JSON.stringify(resource),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to save data");
    }
    return res.json();
}
