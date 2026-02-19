
const https = require('https');

const url = 'https://butterflyandtea.com/wp-json/wp/v2/posts?_embed&per_page=10';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const posts = JSON.parse(data);
            const titles = posts.map(p => p.title.rendered);
            const counts = {};
            titles.forEach(t => {
                counts[t] = (counts[t] || 0) + 1;
            });

            console.log('Duplicate Check:');
            Object.keys(counts).forEach(t => {
                if (counts[t] > 1) {
                    console.log(`DUPLICATE: ${t}`);
                }
            });
            console.log('All Titles:');
            titles.forEach(t => console.log(`- ${t}`));

        } catch (e) {
            console.error(e.message);
        }
    });

}).on('error', (err) => {
    console.error('Error: ' + err.message);
});
