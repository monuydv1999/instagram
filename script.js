var firstHeart = document.querySelector('#firstHeart');
var firstlikes = document.querySelector('#firstlikes');
var firstSicon = document.querySelector('#firstSicon');

firstHeart.addEventListener('click', function(){
    var currentLikes = firstlikes.innerText;
        currentLikes = Number(currentLikes);
        currentLikes++;
        firstlikes.innerText = currentLikes;
    firstSicon.innerHTML = '<span id="firstHeart" class="fas fa-heart"></span>';
});

























