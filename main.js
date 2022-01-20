{
  /* 
<div id='more-videos'>
  <p id='next'>Up next</p>
  <div class='video-card'>
    <img class='thumbnail' src="video1.png" alt="">
    <div class='videos-info'>
      <p class='videos-title'>Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        Title Title Title Title Title Title Title</p>
      <p class='videos-author'>드림코딩 by 엘리</p>
      <p class='videos-views'>82K views</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
  </div>
</div> 
*/
}

function createVideoCard(imgSrc, title, author, viewsCnt) {
  const videoCard = document.createElement('div');
  videoCard.classList.add('video-card');

  const img = new Image();
  img.src = imgSrc;
  img.classList.add('thumbnail');

  const videosInfo = document.createElement('div');
  videosInfo.classList.add('videos-info');

  const videosTitle = document.createElement('p');
  videosTitle.classList.add('videos-title');
  videosTitle.innerHTML = title;

  const videosAuthor = document.createElement('p');
  videosAuthor.classList.add('videos-author');
  videosAuthor.innerHTML = author;

  const videosViews = document.createElement('p');
  videosViews.classList.add('videos-views');
  videosViews.innerHTML = viewsCnt;

  videosInfo.appendChild(videosTitle);
  videosInfo.appendChild(videosAuthor);
  videosInfo.appendChild(videosViews);

  const threeDots = document.createElement('i');
  threeDots.classList.add('fas');
  threeDots.classList.add('fa-ellipsis-v');

  videoCard.appendChild(img);
  videoCard.appendChild(videosInfo);
  videoCard.appendChild(threeDots);

  return videoCard;
}

const videos = document.getElementById('more-videos');

const card1 = createVideoCard(
  'video1.png',
  'title1 title2 title3 title2 fajjajoifja  aifja;iowjef aoiwjfoiawjef aijfo;aiw ejfoaijwfija ;f afijaw;iefj',
  'Taewon',
  '3.2K'
);
videos.appendChild(card1);

const card2 = createVideoCard(
  'video2.jpeg',
  'title title title title title title title title title title',
  'Taewon',
  '3.2K'
);
videos.appendChild(card2);

const card3 = createVideoCard('video3.jpeg', 'title', 'Taewon', '3.2K');
videos.appendChild(card3);
