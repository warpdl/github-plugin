function extract(url) {
    let url_parts = url.split('/');
    let owner = url_parts[url_parts.length - 2];
    let repo = url_parts[url_parts.length - 1];
    let r = request({
        url: `https://api.github.com/repos/${owner}/${repo}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0',
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    let data = JSON.parse(r.body);
    let branch = data['default_branch'];
    return `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${branch}`;
}