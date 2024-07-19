function createYouTubeCard(title, channelName, views, monthsOld, duration, thumbnailUrl, videoLink) {
    const card = document.createElement('a');
    card.href = videoLink;
    card.className = 'youtube-card';
    card.target = '_blank';
    card.innerHTML = `
        <div class="thumbnail">
            <img src="${thumbnailUrl}" alt="Thumbnail">
            <div class="duration">${duration}</div>
        </div>
        <div class="details">
            <h3 class="title">${title}</h3>
            <p class="channel">${channelName}</p>
            <p class="views">${views} views</p>
            <p class="months-old">${monthsOld} months ago</p>
        </div>
    `;
    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('youtube-card-container');

    // Example usage
    const card = createYouTubeCard(
        "Example Video Title",
        "Example Channel",
        "1M",
        "10",
        "10:00",
        "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );

    container.appendChild(card);
});
