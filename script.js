function handleClick() {
    const nameText = document.getElementById("nameList").value;

    const names = nameText
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    // ランダムに並び替えて半分ずつに分割
    const shuffled = names.sort(() => Math.random() - 0.5);
    const midpoint = Math.ceil(shuffled.length / 2);

    const team1 = shuffled.slice(0, midpoint);
    const team2 = shuffled.slice(midpoint);

    // 結果を表示（readonly テキストエリアに出力）
    document.getElementById("team1").value = team1.join("\n");
    document.getElementById("team2").value = team2.join("\n");

    console.log("Team 1:", team1);
    console.log("Team 2:", team2);
}
