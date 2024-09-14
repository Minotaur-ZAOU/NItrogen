document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value;
    if (query) {
        // 新しいページに検索結果を表示
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert("検索ワードを入力してください！"); // 検索エラー処理
    }
});
