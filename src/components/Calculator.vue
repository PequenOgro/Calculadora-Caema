// No arquivo src/components/Calculator.vue

<template>
    <div class="calculadora-container">
        <div class="calculadora">
            <h1 class="titulo">RB-420C</h1>
            <div class="display">
                <h3>{{ equation || '0' }}</h3>
                <h2>{{ result }}</h2>
            </div>
            <div class="teclado">
                <button class="botao operacao-c" @click="clear">C</button>
                <button class="botao" @click="deleteLast">DEL</button>
                <button class="botao" @click="addToEquation('/')">÷</button>
                <button class="botao" @click="addToEquation('*')">×</button>

                <button class="botao" @click="addToEquation('7')">7</button>
                <button class="botao" @click="addToEquation('8')">8</button>
                <button class="botao" @click="addToEquation('9')">9</button>
                <button class="botao" @click="addToEquation('-')">-</button>

                <button class="botao" @click="addToEquation('4')">4</button>
                <button class="botao" @click="addToEquation('5')">5</button>
                <button class="botao" @click="addToEquation('6')">6</button>
                <button class="botao" @click="addToEquation('+')">+</button>

                <button class="botao" @click="addToEquation('1')">1</button>
                <button class="botao" @click="addToEquation('2')">2</button>
                <button class="botao" @click="addToEquation('3')">3</button>
                <button class="botao igual" @click="calculate" style="grid-row: span 2;">=</button>

                <button class="botao" @click="addToEquation('0')" style="grid-column: span 2;">0</button>
                <button class="botao" @click="addToEquation('.')">.</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            equation: '',
            result: '',
        };
    },
    methods: {
        addToEquation(input) {
            if (this.equation.length < 16) {
                this.equation += input;
            }
        },
        clear() {
            this.equation = '';
            this.result = '';
        },
        deleteLast() {
            this.equation = this.equation.slice(0, -1);
        },
        calculate() {
            try {
                if (!this.equation) {
                    this.result = '';
                    return;
                }
                const expression = this.equation.replace(/×/g, '*').replace(/÷/g, '/');
                const evaluation = new Function('return ' + expression)();
                this.result = parseFloat(evaluation.toFixed(4));
            } catch (error) {
                this.result = 'Erro';
            }
        },
    },
};
</script>

<style scoped>
.calculadora-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/mesa.png'); /* Caminho com aspas */
    background-size: cover;
    background-position: center;
}

.calculadora {
    width: 340px;
    background-color: rgba(45, 45, 45, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.titulo {
    color: #4CAF50;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 0;
}

.display {
    background-color: #3a3a3a;
    color: white;
    text-align: right;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-family: 'Courier New', Courier, monospace;
    height: 80px;
    overflow: hidden;
    word-wrap: break-word;
}

.display h3 {
    margin: 0;
    font-size: 1.5em;
    opacity: 0.7;
    min-height: 28px;
}

.display h2 {
    margin: 0;
    font-size: 2em;
    min-height: 38px;
}

.teclado {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.botao {
    padding: 20px;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #505050;
    color: white;
    transition: background-color 0.2s;
}

.botao:hover {
    background-color: #6a6a6a;
}

.botao.operacao-c {
    background-color: #ff6347;
}

.botao.operacao-c:hover {
    background-color: #e55337;
}

.botao.igual {
    background-color: #4CAF50;
}

.botao.igual:hover {
    background-color: #45a049;
}
</style>