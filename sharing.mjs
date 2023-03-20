/**
 * /api/share
 * @module share
 * @param {!string} text - Text
 * @param {!string} author - Author
 * @param {?string} image - Image
 * @return {object} - Result item
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

/**
 * /api/recent
 * @module recent
 * @param {!number} offset - Offset
 * @param {?number} limit - Limit
 * @return {!Array<object>} - Result items
 */
export async function recent(offset = 0, limit = null) {
    let url = `https://milchchan.com/api/recent?offset=${offset}`;

    if (limit !== null) {
        url += `&limit=${limit}`;
    }

    const response = await fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}