global.fetch = require("node-fetch");
fetch('http://localhost:3002/json', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
        {
            __comment: " Запрос.Лабораторная работа 8/10",
            x: 1,
            y: 2,
            s: "Сообщение",
            m: ["a", "b", "c"],
            o: {surname: "Гинько", name: "Вадим"}
        }
    )
})
