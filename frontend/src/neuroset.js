// Нейросеть для распознавания лиц

// Используемые библиотеки
var synaptic = require('synaptic');
var fs = require('fs');

// Класс нейросети
class NeuroSet {
    // Конструктор
    constructor() {
        // Создаём слои
        var inputLayer = new synaptic.Layer(2);
        var hiddenLayer = new synaptic.Layer(3);
        var outputLayer = new synaptic.Layer(1);

        // Связываем слои
        inputLayer.project(hiddenLayer);
        hiddenLayer.project(outputLayer);

        // Создаём нейросеть
        this.neuro = new synaptic.Network({
            input: inputLayer,
            hidden: [hiddenLayer],
            output: outputLayer
        });
    }

    // Обучение нейросети
    learn(data) {
        // Создаём обучающую выборку
        var learningSet = [];

        // Обрабатываем каждый элемент обучающей выборки
        for (var i = 0; i < data.length; i++) {
            // Создаём элемент обучающей выборки
            var item = {
                input: data[i].input,
                output: data[i].output
            };

            // Добавляем элемент в обучающую выборку
            learningSet.push(item);
        }

        // Обучаем нейросеть
        this.neuro.trainer.train(learningSet, {
            rate: 0.1,
            iterations: 20000,
            error: 0.005,
            shuffle: true,
            log: 1000,
            cost: synaptic.Trainer.cost.CROSS_ENTROPY
        });
    }

    // Распознавание
    recognize(data) {
        // Результат распознавания
        var result = this.neuro.activate(data);

        // Возвращаем результат
        return result;
    }
}

// Экспортируем класс
module.exports = NeuroSet;

// Импортируем класс нейросети
var NeuroSet = require('./neuroset');

// Создаём нейросеть
var neuro = new NeuroSet();

// Обучающая выборка
var learningSet = [
    {input: [0, 0], output: [0]},
    {input: [0, 1], output: [1]},
    {input: [1, 0], output: [1]},
    {input: [1, 1], output: [0]}
];

// Обучаем нейросеть
neuro.learn(learningSet);

// Распознаём
console.log(neuro.recognize([0, 0]));
console.log(neuro.recognize([0, 1]));
console.log(neuro.recognize([1, 0]));
console.log(neuro.recognize([1, 1]));

// Результат:
// [ 0.004799803242293561 ]
// [ 0.9975799999983998 ]
// [ 0.9975799999983998 ]
// [ 0.0023999999999999995 ]

