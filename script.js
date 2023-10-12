for (var index = 1; index < 13; index++) {
    multiShow.innerHTML += `<h2 style="font-size: 20px; font-weight: 400; color: white; line-height: 15px;">Multiplication Table for ${index} </h2>`;

    for (var multiplyOfNum = 1; multiplyOfNum <= 12; multiplyOfNum++) {
       multiShow.innerHTML += `<h4> ${index} x ${multiplyOfNum} = ${index * multiplyOfNum}<h4>`;
    }

}

