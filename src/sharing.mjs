/**
 * /api/share
 * @module share
 * @param {!string} text - Text
 * @param {!string} author - Author
 * @param {?string} image - Image
 * @return {object} - result item
 */
export async function share(text, author, image = null) {
    const data = {
        text: text,
        author: author
    };

    if (image !== null) {
        data["image"] = image;
    }

    const response = await fetch("https://milchchan.com/api/share", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}