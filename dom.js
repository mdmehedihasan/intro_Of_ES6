document.getElementById('addBorder').addEventListener('click', function () {
    const borderAdd = document.getElementsByClassName('friend');;
    for (const friend of borderAdd) {
        friend.style.border = '2px solid red';
    }
})
function addBackground() {
    const backgroundAdd = document.getElementsByClassName('friend');;
    for (const friend of backgroundAdd) {
        friend.style.backgroundColor = 'yellow';
    }
}

document.getElementById('addFriend').addEventListener('click', function () {
    const friensList = document.getElementById('friend_container')
    const friendss = document.createElement('div');
    friendss.classList.add('friend');
    friensList.appendChild(friendss)
    friendss.innerHTML = `
    <h3 class="friend-name">Friend-New</h3>
            <p>Corporis dolor molestias voluptas optio harum tenetur officiis.</p>

    `;
})
document.getElementById('colorFriendName').addEventListener('click', function () {
    const colorFriend = document.getElementsByClassName('friend-name');
    for (const friend of colorFriend) {
        friend.style.color = 'red';
    }
})
