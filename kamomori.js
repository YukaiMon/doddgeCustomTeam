function handleClick() {
    const nameText = document.getElementById("nameList").value;

    const names = nameText
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const jobText = document.getElementById("jobList").value;

    const jobs = jobText
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

    for(i = 0;i < maxPerTeam;i++){
        j = i + maxPerTeam;
        team1[i] += "(" + jobs[i] + ")";
        team2[i] += "(" + jobs[j] + ")";
    }


    // 出力
    document.getElementById("team1").value = team1.join("\n");
    document.getElementById("team2").value = team2.join("\n");
    document.getElementById("extra").value = extra.join("\n");

    console.log("西:", team1);
    console.log("東:", team2);
    console.log("観戦:", extra);
    // チーム分け後、以下を末尾に追加するなど
    resultStr = /*"";
    resultStr += "西：";
    for(i = 0;i < 3;i++){
        resultStr += team1[i] + "(" + jobs[i] + ")、";
    }*/
    `西：${team1.join("、")}\n` +
    `東：${team2.join("、")}\n` +
    (extra.length > 0 ? `観戦：${extra.join("、")}` : "");
    document.getElementById("resultText").value = resultStr;
}

function copyResult() {
    const resultText = document.getElementById("resultText").value;

    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert("結果をコピーしました！");
        })
        .catch(err => {
            console.error("コピーに失敗しました:", err);
            alert("コピーに失敗しました。ブラウザの設定をご確認ください。");
        });
}
