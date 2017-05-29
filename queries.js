//Написать запрос для поиска всех студентов, у которых score > 87% и < 93% по любому из типов выполненных заданий.
db.getCollection('students').find({'scores.score': {$gt: 87, $lt: 93}});

//Написать запрос-агрегацию для выборки всех студентов, у которых результат по экзамену (type: "exam") более 90% (использование unwind)
db.getCollection('students').aggregate(
    [
        {$unwind: "$scores"},
        {$match: {'scores.type': 'exam'}},
        {$match: {'scores.score': {$gt: 90}}}
    ]);

//Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.
db.students.update(
    {name: "Dusti Lemmond"},
    {
        'accepted': true
    }
);

