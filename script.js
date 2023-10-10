function toggleContent(target, blockName) {
  
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Отображаем блок, соответствующий выбору
    var targetContent = document.getElementById(target + 'Content');
    if (targetContent) {
        targetContent.style.display = 'block';
        updateURL(target, blockName);
    }
    scrollToTop(); 
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
}

function updateURL(target) {
    var blockName = '';  // Имя блока для отображения в URL
    if (target === 'shop') {
        blockName = ' Shop';
    } else if (target === 'music') {
        blockName = ' Music';
    } else if (target === 'subscribe') {
        blockName = ' Subscribe';
    }
    else if (target === 'main') {
        blockName = ' Main';
    }

    if (blockName) {
        var url = target;
        history.pushState(null, null, url);
        document.title = 'Daft Punk  ' + blockName;
    }
}




// function loadContent(section) {
//     $.ajax({
//         url: section + '.html', // Путь к файлу с контентом (например, 'shop.html', 'music.html')
//         type: 'GET',
//         dataType: 'html',
//         success: function(data) {
//             $('#content').html(data); // Загрузка контента в элемент с id "content"
//         },
//         error: function(xhr, status, error) {
//             console.log('Error: ' + error);
//         }
//     });
// }
