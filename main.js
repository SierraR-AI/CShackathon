fetch("/Users/fridchardchery/CShackathon/manifest.json")
    .then(res => res.json())
    .then(manifestData.name => {
        console.log(manifestData);
    });