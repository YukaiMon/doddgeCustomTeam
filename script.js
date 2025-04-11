function handleClick() {
    const nameText = document.getElementById("nameList").value;

    const names = nameText
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const shuffled = names.sort(() => Math.random() - 0.5);

    let team1 = [];
    let team2 = [];
    let extra = [];

    const total = shuffled.length;
    let maxPerTeam = Math.min(3, Math.floor(total / 2));  // チーム1つあたりの最大人数（最大3）

    const assigned = maxPerTeam * 2;
    team1 = shuffled.slice(0, maxPerTeam);
    team2 = shuffled.slice(maxPerTeam, assigned);
    extra = shuffled.slice(assigned);

    // 出力
    document.getElementById("team1").value = team1.join("\n");
    document.getElementById("team2").value = team2.join("\n");
    document.getElementById("extra").value = extra.join("\n");

    console.log("Team 1:", team1);
    console.log("Team 2:", team2);
    console.log("余り:", extra);
}
