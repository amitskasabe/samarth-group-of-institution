const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        console.log(posts);
        console.log(typeof posts);
        // document.write(`<tr>
        //     <td></td>
        //     </tr>`)
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPost();
